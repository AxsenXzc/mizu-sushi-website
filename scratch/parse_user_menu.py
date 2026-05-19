import json
import re

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt", "r", encoding="utf-8") as f:
    lines = [l.strip() for l in f if l.strip()]

items = []
current_item = {}
i = 0
while i < len(lines):
    if lines[i] in ["Hossomaki - 8pz", "Hossomaki Fritti - 8pz", "Hossomaki Soy - 8pz"]:
        i += 1
        continue
    
    # Heuristic: the name is always all caps and usually the first line of a block
    name = lines[i]
    if name.isupper():
        if current_item:
            items.append(current_item)
            current_item = {}
        
        current_item["name"] = name
        i += 1
        
        # Next line is description (unless it's a price or number)
        if i < len(lines) and not re.match(r'^[\d,]+$', lines[i]) and not "...." in lines[i]:
            current_item["description"] = lines[i]
            i += 1
            # Check if description continues
            if i < len(lines) and not re.match(r'^[\d,]+$', lines[i]) and not "...." in lines[i]:
                current_item["description"] += " " + lines[i]
                i += 1
        
        # Now we expect Price and ID in either order
        while i < len(lines) and (re.match(r'^[\d,]+$', lines[i]) or "...." in lines[i]):
            if "...." in lines[i]:
                current_item["number"] = lines[i].replace("....", "").strip()
            elif re.match(r'^[\d,]+$', lines[i]):
                current_item["price"] = "€ " + lines[i]
            i += 1
    else:
        i += 1

if current_item:
    items.append(current_item)

# Let's categorize them
categories = {
    "Antipasti": [],
    "Zuppe & Insalate": [],
    "Tartare & Carpaccio": [],
    "Sashimi & Chirashi": [],
    "Nighiri": [],
    "Uramaki": [],
    "Uramaki Speciali": [],
    "Hosomaki": [],
    "Futomaki & Temaki": [],
    "Gunkan": [],
    "Primi Piatti (Spaghetti & Riso)": [],
    "Secondi (Pollo, Maiale, Vitello, Gamberi)": [],
    "Tempura & Griglia": [],
    "Dessert & Bevande": [],
    "Altro": []
}

for item in items:
    name_lower = item["name"].lower()
    if "ura " in name_lower or "uramaki" in name_lower:
        if "special" in name_lower or "tiger" in name_lower or "black" in name_lower or "pistacchio" in name_lower or "super" in name_lower:
             categories["Uramaki Speciali"].append(item)
        else:
             categories["Uramaki"].append(item)
    elif "hosso" in name_lower or "hosomaki" in name_lower:
        categories["Hosomaki"].append(item)
    elif "nighiri" in name_lower:
        categories["Nighiri"].append(item)
    elif "sashimi" in name_lower or "chirashi" in name_lower:
        categories["Sashimi & Chirashi"].append(item)
    elif "tartare" in name_lower or "carpaccio" in name_lower:
        categories["Tartare & Carpaccio"].append(item)
    elif "zuppa" in name_lower or "insalata" in name_lower:
        categories["Zuppe & Insalate"].append(item)
    elif "temaki" in name_lower or "futo" in name_lower:
        categories["Futomaki & Temaki"].append(item)
    elif "gunkan" in name_lower:
        categories["Gunkan"].append(item)
    elif "spaghetti" in name_lower or "riso" in name_lower or "udon" in name_lower:
        categories["Primi Piatti (Spaghetti & Riso)"].append(item)
    elif "tempura" in name_lower or "griglia" in name_lower:
        categories["Tempura & Griglia"].append(item)
    elif "pollo" in name_lower or "maiale" in name_lower or "vitello" in name_lower or "gamberi" in name_lower:
        categories["Secondi (Pollo, Maiale, Vitello, Gamberi)"].append(item)
    elif "involtino" in name_lower or "pane" in name_lower or "ravioli" in name_lower or "edamame" in name_lower or "wakame" in name_lower or "patatine" in name_lower:
        categories["Antipasti"].append(item)
    else:
        categories["Altro"].append(item)

# Remove empty categories
final_cats = [{"name": k, "items": []} for k, v in categories.items() if v]

for cat in final_cats:
    for item in categories[cat["name"]]:
        num = item.get("number", "")
        n = f"{num}) " if num else ""
        desc = item.get("description", "")
        # title case description
        if desc:
            desc = desc[0].upper() + desc[1:].lower()
        
        cat["items"].append({
            "name": n + item["name"],
            "price": item.get("price", ""),
            "description": desc
        })

with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\susiyan_asporto_parsed.json", "w", encoding="utf-8") as f:
    json.dump(final_cats, f, indent=2, ensure_ascii=False)

print(f"Parsed {len(items)} items into {len(final_cats)} categories.")
