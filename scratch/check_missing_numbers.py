import json

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v2.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

numbered = data["numbered"]
unnumbered = data["unnumbered"]

print(f"Total numbered items: {len(numbered)}")
print(f"Total unnumbered items: {len(unnumbered)}")

# Let's see the numbers present
numbers = set(item["number"] for item in numbered)
all_possible = set(range(1, 210))
missing = all_possible - numbers
extra = numbers - all_possible

print("Missing numbers (1-209):", sorted(list(missing)))
print("Extra numbers:", sorted(list(extra)))

# Let's inspect items with multiple names or items that look merged
print("\nItems that might be merged (names containing multiple lines or words):")
for item in numbered:
    if len(item["name"].split()) > 6:
        print(f"#{item['number']}: {item['name']} | Price: {item['price']}")
