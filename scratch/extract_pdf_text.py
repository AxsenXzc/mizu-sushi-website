import os

pdf_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\MIZU - MENU ASPORTO 2023 vis.pdf"
output_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\pdf_text.txt"

if not os.path.exists(pdf_path):
    print("PDF not found!")
    exit(1)

# Try imports
try:
    import pypdf
    print("pypdf is installed!")
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted using pypdf!")
    exit(0)
except ImportError:
    pass

try:
    import pdfplumber
    print("pdfplumber is installed!")
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted using pdfplumber!")
    exit(0)
except ImportError:
    pass

try:
    import fitz # PyMuPDF
    print("PyMuPDF is installed!")
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text() + "\n"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted using PyMuPDF!")
    exit(0)
except ImportError:
    pass

print("No PDF extraction libraries found in Python.")
