with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt", 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# Let's print lines 500 to 700 to understand the second half of the file
for idx in range(500, min(len(lines), 700)):
    print(f"{idx}: {lines[idx]}")
