import os

base_dir = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi"
all_files = os.listdir(base_dir)

for f in all_files:
    if "pdf" in f.lower():
        print(repr(f))
