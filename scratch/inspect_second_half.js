const fs = require('fs');

const text = fs.readFileSync('c:/Users/anelk/Desktop/Sito Web Mizu Sushi/scratch/user_menu.txt', 'utf-8');
const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// Let's print all lines to see the structure of the second half of the file
const startIdx = lines.findIndex(l => l.includes('TEMAKI SOIA GAMBERO'));
console.log("TEMAKI SOIA GAMBERO found at line:", startIdx);

if (startIdx !== -1) {
  for (let s = startIdx; s < Math.min(lines.length, startIdx + 150); s++) {
    console.log(`${s}: ${lines[s]}`);
  }
}
