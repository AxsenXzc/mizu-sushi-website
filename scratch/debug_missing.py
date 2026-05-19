import json
import re

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v2.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

# Find all items and check if any number is in them
all_items = data["numbered"] + data["unnumbered"]

missing_nums = [6, 25, 26, 27, 28, 33, 34, 35, 36, 43, 44, 67, 109, 165, 166]

print("Checking missing numbers in the parsed output:")
for num in missing_nums:
    found = [item for item in all_items if item.get("number") == num]
    if found:
        print(f"Num {num} found: {found}")
    else:
        print(f"Num {num} NOT found at all in parsed items.")

print("\nLet's search the raw text file for occurrences of these numbers:")
with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt", 'r', encoding='utf-8') as f:
    raw_lines = [line.strip() for line in f if line.strip()]

for num in missing_nums:
    pattern = re.compile(rf'\b{num}\b')
    matches = [(idx, line) for idx, line in enumerate(raw_lines) if pattern.search(line)]
    print(f"Occurrences of \\b{num}\\b in raw lines: {matches}")
