import json

def clean_text(text):
    if text is None:
        return ""
    # Replace the replacement characters with proper letters based on context
    text = text.replace("pur", "purè")
    text = text.replace("BAMB", "BAMBÙ")
    text = text.replace("BAMB\ufffd", "BAMBÙ")
    text = text.replace("pur\ufffd", "purè")
    text = text.replace("\ufffd", "")
    text = text.replace("", "")
    return text.strip()

def get_category_name(num, item):
    if num is None:
        name_lower = item["name"].lower()
        if any(d in name_lower for d in ["gelato", "tartufo", "mochi", "coppa", "profiterol", "cheese cake", "tiramisu", "tortino", "macedonia", "ananas", "nutella", "panna cotta"]):
            return "Dessert"
        return None
        
    if 1 <= num <= 14: return "Antipasti"
    elif 15 <= num <= 20: return "Insalate"
    elif 21 <= num <= 24: return "Zuppe"
    elif 29 <= num <= 32: return "Tartare & Poke"
    elif 37 <= num <= 42: return "Tataki & Duton"
    elif 45 <= num <= 47: return "Sashimi e Chirashi"
    elif 48 <= num <= 52: return "Carpaccio"
    elif 53 <= num <= 54: return "Sushi Misto & Party"
    elif 55 <= num <= 69: return "Nighiri"
    elif 70 <= num <= 83: return "Gunkan"
    elif 84 <= num <= 91: return "Temaki Soia"
    elif 92 <= num <= 98: return "Temaki"
    elif 99 <= num <= 101: return "Sashimi e Chirashi"
    elif 102 <= num <= 106: return "Futomaki"
    elif 107 <= num <= 109: return "Futomaki Soia"
    elif 110 <= num <= 114: return "Hosomaki"
    elif 115 <= num <= 117: return "Hosomaki Soia"
    elif 118 <= num <= 121: return "Hosomaki Fritti"
    elif 127 <= num <= 137: return "Uramaki"
    elif 138 <= num <= 145: return "Uramaki Speciali"
    elif 146 <= num <= 154: return "Uramaki Venere & Pink"
    elif 155 <= num <= 170: return "Primi (Spaghetti, Udon, Ramen)"
    elif 171 <= num <= 177: return "Riso"
    elif 178 <= num <= 184: return "Secondi - Pollo"
    elif 185 <= num <= 187: return "Contorni"
    elif 188 <= num <= 192: return "Secondi - Manzo"
    elif 193 <= num <= 198: return "Secondi - Gamberi"
    elif 199 <= num <= 204: return "Secondi - Piastra"
    elif 205 <= num <= 209: return "Tempura & Fritti"
    return "Altro"

# Define category order
category_order = [
    "Antipasti", "Insalate", "Zuppe", "Tartare & Poke", "Tataki & Duton",
    "Sashimi e Chirashi", "Carpaccio", "Sushi Misto & Party", "Nighiri", "Gunkan",
    "Temaki", "Temaki Soia", "Futomaki", "Futomaki Soia", "Hosomaki", "Hosomaki Soia",
    "Hosomaki Fritti", "Uramaki", "Uramaki Speciali", "Uramaki Venere & Pink",
    "Primi (Spaghetti, Udon, Ramen)", "Riso", "Secondi - Pollo", "Secondi - Manzo",
    "Secondi - Gamberi", "Secondi - Piastra", "Tempura & Fritti", "Contorni", "Dessert", "Altro"
]

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\parsed_menu_v8.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

items_by_cat = {c: [] for c in category_order}

all_items = data["numbered"] + data["unnumbered"]

# Add drinks manually since they were in data.ts but not in the parsed menu pdf
drinks = [
    {"name": "Acqua 75 cl", "price": "2,50", "description": "Naturale o Frizzante"},
    {"name": "Acqua 50 cl", "price": "1,80", "description": "Naturale o Frizzante"},
    {"name": "Tè Cinese Jasmine", "price": "2,50", "description": ""},
    {"name": "Coca Cola 33 cl", "price": "2,50", "description": "In lattina"},
    {"name": "Fanta 33 cl", "price": "2,50", "description": "In lattina"},
    {"name": "Sprite 33 cl", "price": "2,50", "description": "In lattina"},
    {"name": "Tè limone-pesca 33 cl", "price": "2,50", "description": ""},
    {"name": "Caffè", "price": "1,20", "description": ""},
    {"name": "Caffè corretto", "price": "1,50", "description": ""},
    {"name": "Pinot Grigio", "price": "12,50", "description": "Vino Bianco"},
    {"name": "Gewurztraminer", "price": "15,00", "description": "Vino Bianco"},
    {"name": "Chardonnay", "price": "12,50", "description": "Vino Bianco"},
    {"name": "Vino Bianco della casa", "price": "10,00", "description": "1 litro (€10) / 0.5l (€5.50) / 0.25l (€3.30)"},
    {"name": "Chianti doc Classico", "price": "12,50", "description": "Vino Rosso"},
    {"name": "Cabernet", "price": "12,50", "description": "Vino Rosso"},
    {"name": "Vino Rosso della casa", "price": "10,00", "description": "1 litro (€10) / 0.5l (€5.50) / 0.25l (€3.30)"},
    {"name": "Prosecco in bottiglia", "price": "15,00", "description": "1 litro (€12.50) / 0.5l (€10) / 0.25l (€5)"},
    {"name": "Birra Cinese TsingTao 64 cl", "price": "4,50", "description": ""},
    {"name": "Birra Asahi 50 cl", "price": "5,00", "description": ""},
    {"name": "Birra Becks 33 cl", "price": "3,00", "description": ""},
    {"name": "Birra Forst 20 cl", "price": "3,00", "description": ""}
]

items_by_cat["Bibite & Vini"] = []
category_order.append("Bibite & Vini")
for d in drinks:
    items_by_cat["Bibite & Vini"].append({
        "ts_name": d["name"],
        "ts_price": f"€ {d['price']}",
        "ts_desc": d["description"],
        "num": 999 # just a sorting value
    })

for item in all_items:
    num = item.get("number")
    cat = get_category_name(num, item)
    if cat is None: continue
    
    clean_name = clean_text(item["name"])
    clean_desc = clean_text(item["description"])
    
    # Format name
    if num is not None:
        ts_name = f"{num}. {clean_name}"
    else:
        ts_name = clean_name
        
    ts_price = f"€ {item['price']}" if item["price"] else ""
    
    if cat not in items_by_cat:
        items_by_cat[cat] = []
        category_order.append(cat)
        
    items_by_cat[cat].append({
        "ts_name": ts_name.replace('"', '\\"'),
        "ts_price": ts_price,
        "ts_desc": clean_desc.replace('"', '\\"'),
        "num": num if num is not None else 999
    })

out_ts = "export const menuCategories = [\n"
for cat in category_order:
    items_list = items_by_cat.get(cat, [])
    if not items_list: continue
    
    # Sort items by number
    items_list.sort(key=lambda x: x["num"])
    
    out_ts += f'  {{\n    name: "{cat}",\n    items: [\n'
    for it in items_list:
        out_ts += f'      {{ name: "{it["ts_name"]}", price: "{it["ts_price"]}", description: "{it["ts_desc"]}" }},\n'
    out_ts += '    ]\n  },\n'
out_ts += "];\n"

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\mizu_menuCategories.ts", "w", encoding="utf-8") as f:
    f.write(out_ts)

print("Generated mizu_menuCategories.ts!")
