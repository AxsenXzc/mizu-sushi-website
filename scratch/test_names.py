import os

base_dir = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi"
all_files = os.listdir(base_dir)

print("mizu:", next((f for f in all_files if "MIZU - MENU ASPORTO" in f and f.endswith(".pdf")), None))
print("susiyan_asporto:", next((f for f in all_files if "SUSIYAN Belluno - MENU ASPORTO" in f and f.endswith(".pdf")), None))
print("susiyan_listino:", next((f for f in all_files if "SUSIYAN - LISTINO" in f and f.endswith(".pdf")), None))
