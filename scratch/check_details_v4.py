import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v4.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

numbered = data["numbered"]
unnumbered = data["unnumbered"]

print(f"Numbered count: {len(numbered)}")
print(f"Unnumbered count: {len(unnumbered)}")

# Find item with number 1
item_1 = [x for x in numbered if x["number"] == 1]
print("Item 1:", item_1)

# Find Ravioli di Cristallo
rav = [x for x in numbered if "CRISTALLO" in x["name"]]
print("Ravioli di Cristallo in numbered:", rav)

# Find Stick Gamberi
stick = [x for x in numbered if "STICK GAMBERI" in x["name"]]
print("Stick Gamberi in numbered:", stick)

# Let's see some unnumbered items
print("\nSome unnumbered items:")
for x in unnumbered[:15]:
    print(f"Name: {x['name']} | Price: {x['price']} | Desc: {x['description']}")
