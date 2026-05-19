import json
import os

susiyan_ts_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\src\lib\menuSusiyan.ts"
asporto_json_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\susiyan_asporto_parsed.json"

with open(susiyan_ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace export const menuCategoriesSusiyan = [
content = content.replace("export const menuCategoriesSusiyan =", "export const menuSusiyanListino =")

with open(asporto_json_path, "r", encoding="utf-8") as f:
    asporto_data = json.load(f)

# format asporto_data into TS format
ts_code = "\n\nexport const menuSusiyanAsporto = [\n"
for cat in asporto_data:
    ts_code += '  {\n'
    ts_code += f'    name: "{cat["name"]}",\n'
    ts_code += '    items: [\n'
    for i, item in enumerate(cat["items"]):
        desc = item["description"].replace('"', '\\"') if item["description"] else ""
        name = item["name"].replace('"', '\\"')
        price = item["price"].replace('"', '\\"')
        comma = "," if i < len(cat["items"]) - 1 else ""
        ts_code += f'      {{ name: "{name}", price: "{price}", description: "{desc}" }}{comma}\n'
    ts_code += '    ]\n'
    ts_code += '  },\n'
# remove last comma
ts_code = ts_code.rstrip(',\n') + '\n];\n'

with open(susiyan_ts_path, "w", encoding="utf-8") as f:
    f.write(content)
    f.write(ts_code)

print("Updated menuSusiyan.ts successfully")
