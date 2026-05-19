import re
import json

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# Regexes
num_pattern = re.compile(r'(\d+)\s*\.\.\.\.')
price_pattern = re.compile(r'(\d+,\d{2})')

categories = [
    "Uramaki Fritto - 8pz", "Uramaki Speciale - 8pz", "Uramaki Venere - 8pz", "Uramaki Pink - 8pz",
    "Pollo e Verdure", "Manzo", "Gamberi", "Piastra", "Tempura - fritto",
    "Dolci non compresi nell’offerta di 22,00 €", "Spaghetti Giapponesi", "Spaghetti Cinesi",
    "Ramen", "Riso", "Pollo", "Uramaki- 8pz", "Antipasti", "Insalata", "Zuppe", "Tartare",
    "Nighiri - 2 pz", "Temaki Soia - 1 pz", "Temaki", "Chirashi", "Futomaki - 5 pz",
    "Gunkan - 2 pz", "Gunkan Speciale - 2 pz", "Tataki e Duton", "Sushi Misto", "Sashimi 6 pz",
    "Carpaccio", "Hossomaki - 8pz", "Hossomaki Fritti - 8pz", "Hossomaki Soy - 8pz"
]
categories_lower = {c.lower() for c in categories}

def is_category(line):
    return line.lower() in categories_lower or line.lower() == "uramaki"

def clean_name_for_upper_check(line):
    # Remove things like "2pz", "3 pz", "3pz", "2 pz", "6 pz", "1 pz", "5 pz", "*"
    line = re.sub(r'\d+\s*pz', '', line, flags=re.IGNORECASE)
    line = re.sub(r'\*', '', line)
    return line.strip()

def is_item_name(line):
    if is_category(line):
        return False
    if num_pattern.search(line):
        # Could be "8 .... SHAOMAI 3 pz" - this has a name part
        cleaned = num_pattern.sub('', line).strip()
        if not cleaned:
            return False
        line = cleaned
    if price_pattern.search(line):
        # Could be "GELATO FRITTO 4,50"
        cleaned = price_pattern.sub('', line).strip()
        if not cleaned:
            return False
        line = cleaned
        
    cleaned = clean_name_for_upper_check(line)
    letters = re.sub(r'[^a-zA-Z]', '', cleaned)
    if not letters:
        return False
    return letters.isupper()

items = []
current_item = None

for idx, line in enumerate(lines):
    if is_category(line):
        # Skip category lines or we can just ignore them
        continue
        
    # Check if this line is starting a new item
    is_new = is_item_name(line)
    
    # Wait, some lines contain both name and price, e.g. "GELATO FRITTO 4,50"
    # or name and number, e.g. "8 .... SHAOMAI 3 pz"
    # If the line starts a new item, let's finalize the current one
    if is_new:
        if current_item:
            items.append(current_item)
        current_item = {
            "name_lines": [],
            "desc_lines": [],
            "prices": [],
            "numbers": [],
            "raw_lines": []
        }
        
    if current_item is None:
        # Before the first item
        continue
        
    current_item["raw_lines"].append(line)
    
    # Extract number
    num_match = num_pattern.search(line)
    if num_match:
        current_item["numbers"].append(int(num_match.group(1)))
        line = num_pattern.sub('', line).strip()
        
    # Extract price
    price_match = price_pattern.search(line)
    if price_match:
        current_item["prices"].append(price_match.group(1))
        line = price_pattern.sub('', line).strip()
        
    # Check if the remaining line is a name or description
    cleaned = clean_name_for_upper_check(line)
    letters = re.sub(r'[^a-zA-Z]', '', cleaned)
    
    if letters:
        if letters.isupper():
            # If we already have descriptions or prices/numbers, it's a description
            if current_item["desc_lines"] or current_item["prices"] or current_item["numbers"]:
                current_item["desc_lines"].append(line)
            else:
                current_item["name_lines"].append(line)
        else:
            current_item["desc_lines"].append(line)

if current_item:
    items.append(current_item)

# Finalize items
final_items = []
for item in items:
    name = " ".join(item["name_lines"]).strip()
    description = " ".join(item["desc_lines"]).strip()
    price = item["prices"][0] if item["prices"] else None
    number = item["numbers"][0] if item["numbers"] else None
    
    # Sometimes if there's no name, we use the first desc line or skip
    if not name and item["desc_lines"]:
        name = item["desc_lines"][0]
        description = " ".join(item["desc_lines"][1:])
        
    if name or number:
        final_items.append({
            "number": number,
            "name": name,
            "description": description,
            "price": price,
            "raw": item["raw_lines"]
        })

print(f"Parsed {len(final_items)} items.")

# Sort numbered items
numbered = [x for x in final_items if x["number"] is not None]
unnumbered = [x for x in final_items if x["number"] is None]

numbered.sort(key=lambda x: x["number"])

print("\nFirst 20 sorted:")
for item in numbered[:20]:
    print(f"#{item['number']}: {item['name']} | Price: {item['price']} | Desc: {item['description']}")

print("\nUnnumbered (should be desserts):")
for item in unnumbered:
    print(f"{item['name']} | Price: {item['price']} | Desc: {item['description']}")
    
with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v2.json", 'w', encoding='utf-8') as f:
    json.dump({"numbered": numbered, "unnumbered": unnumbered}, f, indent=2)
