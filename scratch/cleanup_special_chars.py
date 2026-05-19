import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v8.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data["numbered"] + data["unnumbered"]:
    for field in ["name", "description"]:
        val = item[field]
        if "" in val:
            print(f"Found in {item['number']} ({field}): {val}")
