const fs = require('fs');

const text = fs.readFileSync('c:/Users/anelk/Desktop/Sito Web Mizu Sushi/scratch/user_menu.txt', 'utf-8');
const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const itemsByNum = {};

// We want to find all items.
// Let's look for number markers like "130 ....", "129....", "8 ....", "91 ...."
// Pattern: a line that starts with or is exactly a number, optionally followed by dots or spaces.
// Or a line that ends with "...." or contains "...."
const numPattern = /(\d+)\s*\.\.\.\./;

// Let's find all lines with numbers
const numLines = [];
for (let idx = 0; idx < lines.length; idx++) {
  const line = lines[idx];
  const match = line.match(numPattern);
  if (match) {
    numLines.push({
      num: parseInt(match[1], 10),
      lineIdx: idx,
      content: line
    });
  }
}

console.log(`Found ${numLines.length} numbered lines.`);

// Let's print out the first 10 numbered lines and their surroundings
for (let k = 0; k < Math.min(10, numLines.length); k++) {
  const nl = numLines[k];
  console.log(`\n--- Num: ${nl.num} at line ${nl.lineIdx} ---`);
  const start = Math.max(0, nl.lineIdx - 3);
  const end = Math.min(lines.length - 1, nl.lineIdx + 3);
  for (let s = start; s <= end; s++) {
    const marker = s === nl.lineIdx ? '>>>' : '   ';
    console.log(`${marker} ${s}: ${lines[s]}`);
  }
}
