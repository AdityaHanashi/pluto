const fs = require('fs');
const path = require('path');

const hexMap = {
  '#7c3aed': '#CCBEB1',
  '#8b5cf6': '#E8DFD8',
  '#06b6d4': '#CCBEB1',
  '#22d3ee': '#E8DFD8',
  '#f59e0b': '#A89B8F',
  '#fbbf24': '#CCBEB1',
  '#10b981': '#CCBEB1',
  '#4ade80': '#CCBEB1'
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      Object.keys(hexMap).forEach(oldHex => {
        if (content.includes(oldHex)) {
          content = content.split(oldHex).join(hexMap[oldHex]);
          changed = true;
        }
        const upperHex = oldHex.toUpperCase();
        if (content.includes(upperHex)) {
          content = content.split(upperHex).join(hexMap[oldHex]);
          changed = true;
        }
      });
      if (changed) fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}
processDirectory(path.join(__dirname, 'src'));
console.log('Hex patch complete.');
