import re

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt", "r", encoding="utf-8") as f:
    lines = [l.strip() for l in f if l.strip()]

for i in range(min(50, len(lines))):
    print(f"{i}: {lines[i]}")

print("...")
for i in range(len(lines)-20, len(lines)):
    print(f"{i}: {lines[i]}")
