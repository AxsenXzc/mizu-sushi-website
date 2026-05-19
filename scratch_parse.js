const fs = require('fs');
const http = require('http');

try {
  if (fs.existsSync('./extracted_docx/word/document.xml')) {
    const xml = fs.readFileSync('./extracted_docx/word/document.xml', 'utf-8');
    const text = xml
      .replace(/<w:p [^>]*>/g, '\n')
      .replace(/<w:p>/g, '\n')
      .replace(/<w:tab\/>/g, ' ')
      .replace(/<[^>]+>/g, '');
    fs.writeFileSync('./extracted_text.txt', text);
    console.log('Successfully extracted document.xml text!');
  } else {
    console.log('document.xml does not exist under extracted_docx/word/');
  }
} catch (err) {
  console.error('Error:', err);
}

// Keep the process alive with a simple server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Parser finished and keeping process alive\n');
});

server.listen(9000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:9000/');
});
