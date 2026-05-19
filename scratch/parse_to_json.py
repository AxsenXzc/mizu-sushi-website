import re
import json

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# Regexes
num_pattern = re.compile(r'(\d+)\s*\.\.\.\.')
price_pattern = re.compile(r'(\d+,\d{2})')

# Let's clean lines and identify categories
categories = [
    "Uramaki Fritto - 8pz", "Uramaki Speciale - 8pz", "Uramaki Venere - 8pz", "Uramaki Pink - 8pz",
    "Pollo e Verdure", "Manzo", "Gamberi", "Piastra", "Tempura - fritto",
    "Dolci non compresi nell’offerta di 22,00 €", "Spaghetti Giapponesi", "Spaghetti Cinesi",
    "Ramen", "Riso", "Pollo", "Uramaki- 8pz", "Antipasti", "Insalata", "Zuppe", "Tartare",
    "Nighiri - 2 pz", "Temaki Soia - 1 pz", "Temaki", "Chirashi", "Futomaki - 5 pz",
    "Gunkan - 2 pz", "Gunkan Speciale - 2 pz", "Tataki e Duton", "Sushi Misto", "Sashimi 6 pz",
    "Carpaccio", "Hossomaki - 8pz", "Hossomaki Fritti - 8pz", "Hossomaki Soy - 8pz",
    "Uramaki- 8pz", "Uramaki"
]
categories_lower = {c.lower() for c in categories}

def is_category(line):
    return line.lower() in categories_lower or line.lower() == "uramaki"

def is_price(line):
    return price_pattern.match(line) is not None

def is_number_line(line):
    # Only if it has the .... and starts/ends with it, but doesn't have letters (except maybe a few)
    # Actually if it matches the pattern and has very little else.
    if num_pattern.search(line):
        cleaned = num_pattern.sub('', line).strip()
        if not cleaned or price_pattern.match(cleaned):
            return True
    return False

def get_number(line):
    m = num_pattern.search(line)
    return int(m.group(1)) if m else None

# Let's break the lines into blocks
blocks = []
current_block = []

for line in lines:
    if is_category(line):
        if current_block:
            blocks.append(current_block)
            current_block = []
        # Category lines can be ignored or stored, but we group items by number anyway.
        continue
        
    # We start a new block if the line is uppercase and we don't have a current block,
    # or if we already have a price/number in the current block and see a new name.
    letters = re.sub(r'[^a-zA-Z]', '', line)
    is_upper = letters.isupper() if letters else False
    
    # If the line is an uppercase name and the current block already has some contents (like a price or number)
    has_price_or_num = any(is_price(l) or is_number_line(l) for l in current_block)
    
    if is_upper and has_price_or_num:
        blocks.append(current_block)
        current_block = [line]
    else:
        current_block.append(line)

if current_block:
    blocks.append(current_block)

parsed_items = []

for idx, block in enumerate(blocks):
    # Process the block
    name_parts = []
    desc_parts = []
    price = None
    number = None
    
    for line in block:
        # Check for number
        num_match = num_pattern.search(line)
        if num_match:
            number = int(num_match.group(1))
            # Clean number from the line
            line_cleaned = num_pattern.sub('', line).strip()
            if not line_cleaned:
                continue
            line = line_cleaned
            
        # Check for price
        price_match = price_pattern.search(line)
        if price_match:
            price = price_match.group(1)
            line_cleaned = price_pattern.sub('', line).strip()
            if not line_cleaned:
                continue
            line = line_cleaned
            
        # If it's mostly uppercase, it's name
        letters = re.sub(r'[^a-zA-Z]', '', line)
        is_upper = letters.isupper() if letters else False
        if is_upper or line.lower().endswith('pz'):
            name_parts.append(line)
        else:
            desc_parts.append(line)
            
    name = " ".join(name_parts).strip()
    description = " ".join(desc_parts).strip()
    
    # If we have name or number, save it
    if name or number:
        parsed_items.append({
            "number": number,
            "name": name,
            "description": description,
            "price": price,
            "raw_block": block
        })

print(f"Parsed {len(parsed_items)} items.")

# Sort items by number
numbered_items = [item for item in parsed_items if item["number"] is not None]
unnumbered_items = [item for item in parsed_items if item["number"] is None]

numbered_items.sort(key=lambda x: x["number"])

print("\nFirst 15 sorted items:")
for item in numbered_items[:15]:
    print(f"{item['number']}. {item['name']} - {item['price']} - {item['description']}")

print("\nUnnumbered items (likely desserts):")
for item in unnumbered_items:
    print(f"{item['name']} - {item['price']} - {item['description']}")

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu.json", 'w', encoding='utf-8') as f:
    json.dump({"numbered": numbered_items, "unnumbered": unnumbered_items}, f, indent=2)
