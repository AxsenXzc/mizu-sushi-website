import pypdf

def inspect_pdf(filepath):
    print(f"=== Inspecting {filepath} ===")
    reader = pypdf.PdfReader(filepath)
    num_pages = len(reader.pages)
    print(f"Number of pages: {num_pages}")
    for idx in range(min(5, num_pages)):
        text = reader.pages[idx].extract_text()
        print(f"--- Page {idx+1} ---")
        print(text[:500])
        print("...")

inspect_pdf(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\SUSIYAN - LISTINO visione DEFINITIVA文档提取20260519142803.pdf")
inspect_pdf(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\SUSIYAN Belluno - MENU ASPORTO VISIONE-1.pdf")
