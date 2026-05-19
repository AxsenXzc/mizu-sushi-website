import os
import shutil
import pypdf

base_dir = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi"
public_dir = os.path.join(base_dir, "public")
os.makedirs(public_dir, exist_ok=True)

all_files = os.listdir(base_dir)

mizu_asporto_file = next((f for f in all_files if "MIZU - MENU ASPORTO" in f and f.endswith(".pdf")), None)
susiyan_asporto_file = next((f for f in all_files if "SUSIYAN Belluno - MENU ASPORTO" in f and f.endswith(".pdf")), None)
susiyan_listino_file = next((f for f in all_files if "SUSIYAN - LISTINO" in f and f.endswith(".pdf")), None)

def copy_file(filename, dest_name):
    if filename:
        src = os.path.join(base_dir, filename)
        dst = os.path.join(public_dir, dest_name)
        shutil.copy(src, dst)
        # print(f"Copied {filename} to {dest_name}")

copy_file(mizu_asporto_file, "menu-asporto-mizu.pdf")
copy_file(susiyan_asporto_file, "menu-asporto-susiyan.pdf")
copy_file(susiyan_listino_file, "menu-listino-susiyan.pdf")

def extract_pdf(filename, out_txt):
    if filename:
        src = os.path.join(base_dir, filename)
        outpath = os.path.join(base_dir, "scratch", out_txt)
        reader = pypdf.PdfReader(src)
        with open(outpath, "w", encoding="utf-8") as f:
            for i, page in enumerate(reader.pages):
                f.write(f"--- PAGE {i+1} ---\n")
                text = page.extract_text()
                if text:
                    f.write(text)
                f.write("\n\n")
        # print(f"Extracted {filename} to {outpath}")

extract_pdf(susiyan_asporto_file, "susiyan_asporto.txt")
extract_pdf(susiyan_listino_file, "susiyan_listino.txt")
print("Done handling PDFs!")
