import re

data_ts_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\src\lib\data.ts"
new_cats_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\mizu_menuCategories.ts"

with open(data_ts_path, "r", encoding="utf-8") as f:
    data_content = f.read()

with open(new_cats_path, "r", encoding="utf-8") as f:
    new_cats_content = f.read()

# Replace the block `export const menuCategories = [ ... ];`
# We can use regex to match from `export const menuCategories = [` to `];`
pattern = re.compile(r"export const menuCategories = \[.*?\];\n", re.DOTALL)

if pattern.search(data_content):
    new_data = pattern.sub(new_cats_content, data_content)
    with open(data_ts_path, "w", encoding="utf-8") as f:
        f.write(new_data)
    print("Merged successfully!")
else:
    print("Could not find menuCategories block to replace!")
