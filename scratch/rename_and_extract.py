import os
import pypdf

public_dir = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\public"
scratch_dir = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch"

# Rename files in public
files_in_public = os.listdir(public_dir)

mizu_file = next((f for f in files_in_public if "MIZU - MENU ASPORTO" in f and f.endswith(".pdf")), None)
susiyan_listino = next((f for f in files_in_public if "SUSIYAN - LISTINO" in f and f.endswith(".pdf")), None)
susiyan_asporto = next((f for f in files_in_public if "SUSIYAN Belluno" in f and f.endswith(".pdf")), None)

if mizu_file and mizu_file != "menu-asporto-mizu.pdf":
    os.rename(os.path.join(public_dir, mizu_file), os.path.join(public_dir, "menu-asporto-mizu.pdf"))
    mizu_file = "menu-asporto-mizu.pdf"

if susiyan_listino and susiyan_listino != "menu-listino-susiyan.pdf":
    os.rename(os.path.join(public_dir, susiyan_listino), os.path.join(public_dir, "menu-listino-susiyan.pdf"))
    susiyan_listino = "menu-listino-susiyan.pdf"

if susiyan_asporto and susiyan_asporto != "menu-asporto-susiyan.pdf":
    os.rename(os.path.join(public_dir, susiyan_asporto), os.path.join(public_dir, "menu-asporto-susiyan.pdf"))
    susiyan_asporto = "menu-asporto-susiyan.pdf"

def extract_pdf(filename, out_txt):
    if filename:
        src = os.path.join(public_dir, filename)
        outpath = os.path.join(scratch_dir, out_txt)
        reader = pypdf.PdfReader(src)
        with open(outpath, "w", encoding="utf-8") as f:
            for i, page in enumerate(reader.pages):
                f.write(f"--- PAGE {i+1} ---\n")
                text = page.extract_text()
                if text:
                    f.write(text)
                f.write("\n\n")

extract_pdf(susiyan_listino, "susiyan_listino.txt")
extract_pdf(susiyan_asporto, "susiyan_asporto.txt")
print("Done extracting!")
