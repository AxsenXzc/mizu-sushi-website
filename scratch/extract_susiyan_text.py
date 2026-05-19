import pypdf
import os

def inspect_pdf(filepath, outpath):
    # print(f"Extracting {filepath} to {outpath}")
    reader = pypdf.PdfReader(filepath)
    with open(outpath, "w", encoding="utf-8") as f:
        for i, page in enumerate(reader.pages):
            f.write(f"--- PAGE {i+1} ---\n")
            text = page.extract_text()
            if text:
                f.write(text)
            f.write("\n\n")

inspect_pdf(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\SUSIYAN - LISTINO visione DEFINITIVA文档提取20260519142803.pdf", r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\susiyan_listino.txt")
inspect_pdf(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\SUSIYAN Belluno - MENU ASPORTO VISIONE-1.pdf", r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\susiyan_asporto.txt")
print("Extraction complete.")
