import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import fs from 'fs';

export async function GET() {
  try {
    if (!fs.existsSync('./extracted_docx')) {
      fs.mkdirSync('./extracted_docx');
    }
    
    // Find the file and rename it
    const files = fs.readdirSync('.');
    const docxFile = files.find(f => f.startsWith('SUSIYAN - LISTINO') && f.endsWith('.docx'));
    if (docxFile && docxFile !== 'menu.docx') {
      fs.renameSync(docxFile, 'menu.docx');
    }
    
    // Extract docx using tar
    execSync('tar -xf "menu.docx" -C ./extracted_docx');
    
    // Read the XML
    const xml = fs.readFileSync('./extracted_docx/word/document.xml', 'utf-8');
    
    // Extract text from XML (just stripping tags for now)
    const text = xml.replace(/<w:p [^>]*>/g, '\n').replace(/<w:p>/g, '\n').replace(/<[^>]+>/g, '');
    
    return NextResponse.json({ success: true, text: text.substring(0, 100000) });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message, stack: err.stack });
  }
}
