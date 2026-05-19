import json
with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v6.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data["numbered"]:
    if "NIGIRI" in item["name"] or item["number"] in [61, 67]:
        print(f"Numbered: #{item['number']} {item['name']} | Price: {item['price']} | Line: {item['line_idx']}")

for item in data["unnumbered"]:
    if "NIGIRI" in item["name"]:
        print(f"Unnumbered: {item['name']} | Price: {item['price']} | Line: {item['line_idx']}")
