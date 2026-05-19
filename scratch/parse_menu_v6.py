import re
import json

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

num_pattern = re.compile(r'(\d+)\s*\.\.\.\.')
price_pattern = re.compile(r'(\d+,\d{2})')

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

def classify_text(text):
    cleaned = clean_name_for_upper_check(text)
    letters = re.sub(r'[^a-zA-Z]', '', cleaned)
    if letters and letters.isupper():
        return "NAME"
    return "DESC"

elements = []

for idx, line in enumerate(lines):
    if line.lower() in categories:
        elements.append({"type": "CATEGORY", "val": line, "line": idx})
        continue
        
    num_match = num_pattern.search(line)
    num_val = None
    if num_match:
        num_val = int(num_match.group(1))
        line = num_pattern.sub('', line).strip()
        
    price_match = price_pattern.search(line)
    price_val = None
    if price_match:
        price_val = price_match.group(1)
        line = price_pattern.sub('', line).strip()
        
    leftover_type = None
    if line:
        leftover_type = classify_text(line)
        
    orig_line = lines[idx]
    parts = []
    
    if num_val is not None:
        num_start = orig_line.find(str(num_val) + " ...")
        if num_start == -1:
            num_start = orig_line.find("....")
        parts.append({"type": "NUMBER", "val": num_val, "start": num_start})
        
    if price_val is not None:
        price_start = orig_line.find(price_val)
        parts.append({"type": "PRICE", "val": price_val, "start": price_start})
        
    if line:
        text_start = orig_line.find(line)
        parts.append({"type": leftover_type, "val": line, "start": text_start})
        
    parts.sort(key=lambda x: x["start"])
    for p in parts:
        elements.append({"type": p["type"], "val": p["val"], "line": idx})

items = []
current_item = None
current_category = "General"

def finalize_current():
    global current_item
    if current_item:
        name = " ".join(current_item["name_parts"]).strip()
        desc = " ".join(current_item["desc_parts"]).strip()
        if name or current_item["price"] or current_item["number"]:
            items.append({
                "number": current_item["number"],
                "name": name,
                "description": desc,
                "price": current_item["price"],
                "category": current_item["category"],
                "line_idx": current_item["line_idx"]
            })
        current_item = None

for idx, el in enumerate(elements):
    if el["type"] == "CATEGORY":
        finalize_current()
        current_category = el["val"]
        continue
        
    if el["type"] == "NAME":
        start_new = False
        if current_item:
            if current_item["desc_parts"] or current_item["price"] is not None or current_item["number"] is not None:
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
                "line_idx": el["line"]
            }
        else:
            current_item["name_parts"].append(el["val"])
            
    elif el["type"] == "DESC":
        if current_item is None:
            current_item = {
                "name_parts": [],
                "desc_parts": [el["val"]],
                "price": None,
                "number": None,
                "category": current_category,
                "line_idx": el["line"]
            }
        else:
            current_item["desc_parts"].append(el["val"])
            
    elif el["type"] == "PRICE":
        if current_item is None:
            current_item = {
                "name_parts": [],
                "desc_parts": [],
                "price": el["val"],
                "number": None,
                "category": current_category,
                "line_idx": el["line"]
            }
        else:
            current_item["price"] = el["val"]
            
    elif el["type"] == "NUMBER":
        # If current_item already has a number, we finalize it and start a new item with this number!
        if current_item and current_item["number"] is not None:
            finalize_current()
            
        if current_item is None:
            current_item = {
                "name_parts": [],
                "desc_parts": [],
                "price": None,
                "number": el["val"],
                "category": current_category,
                "line_idx": el["line"]
            }
        else:
            current_item["number"] = el["val"]

finalize_current()

print(f"Grouped into {len(items)} items.")

# Sort and check gaps
numbered = [x for x in items if x["number"] is not None]
unnumbered = [x for x in items if x["number"] is None]

# De-duplicate numbered items
numbered_dict = {}
for x in numbered:
    num = x["number"]
    if num not in numbered_dict:
        numbered_dict[num] = x
    else:
        existing = numbered_dict[num]
        if not existing["name"] and x["name"]:
            numbered_dict[num] = x
        elif existing["name"] and x["name"] and not existing["price"] and x["price"]:
            numbered_dict[num] = x

numbered = list(numbered_dict.values())
numbered.sort(key=lambda x: x["number"])

print("\nMissing numbers in v6:")
nums = set(x["number"] for x in numbered)
missing = set(range(1, 210)) - nums
print("Gaps:", sorted(list(missing)))

print("\nFirst 40 sorted items:")
for item in numbered[:40]:
    print(f"#{item['number']} ({item['category']}): {item['name']} | Price: {item['price']} | Desc: {item['description']}")

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v6.json", 'w', encoding='utf-8') as f:
    json.dump({"numbered": numbered, "unnumbered": unnumbered}, f, indent=2)
