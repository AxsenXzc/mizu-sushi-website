import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v5.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

# Let's inspect the elements of the gaps: 61, 108, 161, 163
# We can search through the unnumbered items or all items
for item in data["numbered"] + data["unnumbered"]:
    # Let's print items containing keywords of what these numbers should be
    # Let's check if the name contains sake nigiri, etc.
    if item["number"] in [60, 61, 62, 63, 67, 68, 107, 108, 109, 160, 161, 162, 163, 164]:
        print(f"Num {item['number']}: {item['name']} | Price: {item['price']} | Line: {item['line_idx']}")
