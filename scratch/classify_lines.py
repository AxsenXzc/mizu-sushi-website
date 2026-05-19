import re

text_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt"

with open(text_path, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# We want to identify items.
# Let's see: some lines contain item numbers.
# We can find all item number patterns. E.g. "130 ....", "129....", "8 ....", "91 ...."
num_pattern = re.compile(r'(\d+)\s*\.\.\.\.')
price_pattern = re.compile(r'^\d+,\d{2}$')

# Category list to skip or use as markers
categories = [
    "Uramaki Fritto - 8pz", "Uramaki Speciale - 8pz", "Uramaki Venere - 8pz", "Uramaki Pink - 8pz",
    "Pollo e Verdure", "Manzo", "Gamberi", "Piastra", "Tempura - fritto",
    "Dolci non compresi nell’offerta di 22,00 €", "Spaghetti Giapponesi", "Spaghetti Cinesi",
    "Ramen", "Riso", "Pollo", "Uramaki- 8pz", "Antipasti", "Insalata", "Zuppe", "Tartare",
    "Nighiri - 2 pz", "Temaki Soia - 1 pz", "Temaki", "Chirashi", "Futomaki - 5 pz",
    "Gunkan - 2 pz", "Gunkan Speciale - 2 pz", "Tataki e Duton", "Sushi Misto", "Sashimi 6 pz",
    "Carpaccio", "Hossomaki - 8pz", "Hossomaki Fritti - 8pz", "Hossomaki Soy - 8pz"
]
categories_lower = [c.lower() for c in categories]

# Let's tokenize and print
for idx, line in enumerate(lines[:100]):
    is_num = num_pattern.search(line)
    is_price = price_pattern.match(line)
    is_cat = line.lower() in categories_lower
    
    # Check if mostly uppercase
    letters = re.sub(r'[^a-zA-Z]', '', line)
    is_upper = letters.isupper() if letters else False
    
    classification = "UNKNOWN"
    if is_num:
        classification = f"NUMBER ({is_num.group(1)})"
    elif is_price:
        classification = "PRICE"
    elif is_cat:
        classification = "CATEGORY"
    elif is_upper:
        classification = "NAME"
    else:
        classification = "DESCRIPTION"
        
    print(f"{idx:3d}: [{classification}] {line}")
