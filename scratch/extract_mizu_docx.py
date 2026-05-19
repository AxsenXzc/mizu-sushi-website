import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\MIZU - MENU ASPORTO 2023 vis.docx"
output_path = r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\mizu_extracted.txt"

if not os.path.exists(docx_path):
    print(f"File not found: {docx_path}")
    exit(1)

try:
    with zipfile.ZipFile(docx_path) as docx:
        xml_content = docx.read('word/document.xml')
        
        # Parse XML
        root = ET.fromstring(xml_content)
        
        # Word XML namespaces
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
        }
        
        # Extract text from paragraphs
        text_lines = []
        for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            texts = [node.text for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
            if texts:
                text_lines.append("".join(texts))
            else:
                text_lines.append("")
                
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("\n".join(text_lines))
            
        print("Successfully extracted Mizu docx text!")
except Exception as e:
    print(f"Error: {e}")
