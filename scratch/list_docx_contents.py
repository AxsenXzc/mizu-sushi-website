import zipfile

docx_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\MIZU - MENU ASPORTO 2023 vis.docx"

try:
    with zipfile.ZipFile(docx_path) as docx:
        for f in docx.namelist()[:30]:
            print(f)
except Exception as e:
    print(f"Error: {e}")
