import re
import json

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

num_pattern = re.compile(r'^(\d+)\s*\.\.\.\.$')
price_pattern = re.compile(r'^(\d+,\d{2})$')

categories = {
    "uramaki fritto - 8pz", "uramaki speciale - 8pz", "uramaki venere - 8pz", "uramaki pink - 8pz",
    "pollo e verdure", "manzo", "gamberi", "piastra", "tempura - fritto",
    "dolci non compresi nell’offerta di 22,00 €", "spaghetti giapponesi", "spaghetti cinesi",
    "ramen", "riso", "pollo", "uramaki- 8pz", "antipasti", "insalata", "zuppe", "tartare",
    "nighiri - 2 pz", "temaki soia - 1 pz", "temaki", "chirashi", "futomaki - 5 pz",
    "gunkan - 2 pz", "gunkan speciale - 2 pz", "tataki e duton", "sushi misto", "sashimi 6 pz",
    "carpaccio", "hossomaki - 8pz", "hossomaki fritti - 8pz", "hossomaki soy - 8pz",
    "uramaki", "dolci"
}

def clean_name_for_upper_check(line):
    line = re.sub(r'\d+\s*pz', '', line, flags=re.IGNORECASE)
    line = re.sub(r'\*', '', line)
    return line.strip()

# Build raw elements
elements = []
for idx, line in enumerate(lines):
    if line.lower() in categories:
        elements.append({"type": "CATEGORY", "val": line, "line": idx})
        continue
        
    num_match = num_pattern.match(line)
    if num_match:
        elements.append({"type": "NUMBER", "val": int(num_match.group(1)), "line": idx})
        continue
        
    price_match = price_pattern.match(line)
    if price_match:
        elements.append({"type": "PRICE", "val": price_match.group(1), "line": idx})
        continue
        
    cleaned = clean_name_for_upper_check(line)
    letters = re.sub(r'[^a-zA-Z]', '', cleaned)
    if letters and letters.isupper():
        elements.append({"type": "NAME", "val": line, "line": idx})
    else:
        elements.append({"type": "DESC", "val": line, "line": idx})

items = []
current_item = None

def finalize_current():
    global current_item
    if current_item:
        # Finalize names and descriptions
        name = " ".join(current_item["name_parts"]).strip()
        desc = " ".join(current_item["desc_parts"]).strip()
        items.append({
            "number": current_item["number"],
            "name": name,
            "description": desc,
            "price": current_item["price"],
            "category": current_item["category"],
            "start_line": current_item["start_line"],
            "end_line": current_item["end_line"]
        })
        current_item = None

current_category = "General"

for idx, el in enumerate(elements):
    if el["type"] == "CATEGORY":
        finalize_current()
        current_category = el["val"]
        continue
        
    # Heuristic for section:
    # L449 starts the second section (Antipasti is L449)
    in_second_section = el["line"] >= 449
    
    if el["type"] == "NUMBER":
        num_val = el["val"]
        
        # Determine if this number belongs to the current item or the next item
        # In second section, if the next element is a NAME (or a few elements away, and we don't have a NAME in current item yet)
        belongs_to_next = False
        if in_second_section:
            # Let's look ahead to find the next NAME
            next_name_idx = -1
            for j in range(idx + 1, min(len(elements), idx + 4)):
                if elements[j]["type"] == "NAME":
                    next_name_idx = j
                    break
            
            # If we find a NAME very soon, and current_item has no name yet (or does it?),
            # wait, if current_item is None, or if we want to start a new item with this number
            if next_name_idx != -1:
                # If current_item doesn't exist, or already has a number, or if the number is immediately followed by a Name
                if current_item is None or current_item["number"] is not None or (next_name_idx == idx + 1):
                    belongs_to_next = True
                    
        if belongs_to_next:
            finalize_current()
            current_item = {
                "name_parts": [],
                "desc_parts": [],
                "price": None,
                "number": num_val,
                "category": current_category,
                "start_line": el["line"],
                "end_line": el["line"]
            }
        else:
            # Belongs to current item
            if current_item:
                current_item["number"] = num_val
                current_item["end_line"] = el["line"]
            else:
                current_item = {
                    "name_parts": [],
                    "desc_parts": [],
                    "price": None,
                    "number": num_val,
                    "category": current_category,
                    "start_line": el["line"],
                    "end_line": el["line"]
                }
                
    elif el["type"] == "NAME":
        # If we see a NAME, and current_item is not None, when do we start a new item?
        # In first section: we start a new item if current_item already has a price or number.
        # In second section: we start a new item if current_item already has a price or number, OR if the NAME is not immediately after a NUMBER that we just parsed.
        start_new = False
        if current_item:
            # If current_item already has a name, and we see another NAME,
            # does it append or start new?
            # If current_item has a price or number, we definitely start new.
            if current_item["price"] is not None or (current_item["number"] is not None and not in_second_section):
                start_new = True
            elif current_item["name_parts"]:
                # If it already has a name, but no price/number yet, we only start new if it's in the second section and they are not adjacent names.
                if in_second_section:
                    start_new = True
                    
        if start_new:
            finalize_current()
            
        if current_item is None:
            current_item = {
                "name_parts": [el["val"]],
                "desc_parts": [],
                "price": None,
                "number": None,
                "category": current_category,
                "start_line": el["line"],
                "end_line": el["line"]
            }
        else:
            current_item["name_parts"].append(el["val"])
            current_item["end_line"] = el["line"]
            
    elif el["type"] == "PRICE":
        if current_item:
            current_item["price"] = el["val"]
            current_item["end_line"] = el["line"]
        else:
            # Price without item?
            current_item = {
                "name_parts": [],
                "desc_parts": [],
                "price": el["val"],
                "number": None,
                "category": current_category,
                "start_line": el["line"],
                "end_line": el["line"]
            }
            
    elif el["type"] == "DESC":
        if current_item:
            current_item["desc_parts"].append(el["val"])
            current_item["end_line"] = el["line"]
        else:
            current_item = {
                "name_parts": [],
                "desc_parts": [el["val"]],
                "price": None,
                "number": None,
                "category": current_category,
                "start_line": el["line"],
                "end_line": el["line"]
            }

finalize_current()

print(f"Grouped into {len(items)} items.")

# Filter and sort
numbered = [x for x in items if x["number"] is not None]
unnumbered = [x for x in items if x["number"] is None]

numbered.sort(key=lambda x: x["number"])

print("\nMissing numbers in new grouping:")
nums = set(x["number"] for x in numbered)
missing = set(range(1, 210)) - nums
print("Gaps:", sorted(list(missing)))

print("\nNumbered items preview:")
for item in numbered[:30]:
    print(f"#{item['number']} ({item['category']}): {item['name']} | Price: {item['price']} | Desc: {item['description']}")

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\grouped_menu.json", 'w', encoding='utf-8') as f:
    json.dump({"numbered": numbered, "unnumbered": unnumbered}, f, indent=2)
