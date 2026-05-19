import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v8.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Unnumbered count: {len(data['unnumbered'])}")
for x in data['unnumbered']:
    print(f"Name: {x['name']} | Price: {x['price']} | Desc: {x['description']} | Line: {x['line_idx']} | Cat: {x['category']}")
