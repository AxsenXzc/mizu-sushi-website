import re
import json

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# Let's identify the type of each line
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

# Let's print out all elements to inspect
for el in elements[:150]:
    print(f"L{el['line']:3d}: [{el['type']}] {el['val']}")
