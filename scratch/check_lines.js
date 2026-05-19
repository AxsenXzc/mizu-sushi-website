const fs = require('fs');

const text = fs.readFileSync('c:/Users/anelk/Desktop/Sito Web Mizu Sushi/scratch/user_menu.txt', 'utf-8');

const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// We need to group lines into items.
// Let's print out lines to see their patterns or process them sequentially.

const items = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];

  // Check if it's a category separator
  // (we know the categories are listed at the end or in blocks, but let's check if the line matches known categories)
  
  // Let's identify the item pattern:
  // Usually starts with a name (all uppercase letters or starts with URA, UDON, YAKI, SPAGHETTI, RAMEN, GOHAN, RISO, POLLO, GERMOGLI, VERDURE, FUNGHI, MANZO, GAMBERI, GAMBERONI, YAKI, TERIYAKI, CALAMARI, SPIEDINI, TEMPURA, IKA, GELATO, TARTUFO, MOCHI, COPPA, PROFITEROL, CHEESE, TIRAMISU, TORTINO, TEMAKI, NIGIRI, GUNKAN, FUTO, HOSSO, etc.)
  // And it has a price (like "8,00" or "10,00" or "2,50") and a number with dots (like "130 ....")
  
  i++;
}

console.log("Total lines:", lines.length);
