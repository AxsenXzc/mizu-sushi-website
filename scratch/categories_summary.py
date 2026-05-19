import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v8.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

categories = set()
for item in data["numbered"] + data["unnumbered"]:
    categories.add(item["category"])

print("Unique categories in parsed menu:")
for c in sorted(list(categories)):
    items_in_c = [x for x in data["numbered"] + data["unnumbered"] if x["category"] == c]
    print(f"- {c}: {len(items_in_c)} items")
