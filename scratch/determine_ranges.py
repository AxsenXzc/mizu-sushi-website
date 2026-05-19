import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v8.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

numbered = data["numbered"]
print("Items sorted by number:")
for item in numbered:
    print(f"{item['number']}: {item['name']} ({item['category']})")
