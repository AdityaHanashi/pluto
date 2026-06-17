const fs = require('fs');
const path = require('path');

const primary = '[#CCBEB1]';
const primaryMuted = '[#A89B8F]';
const surface = '[#111111]';
const surfaceLight = '[#1A1A1A]';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Surfaces
      content = content.replace(/bg-black(\/[0-9]+)?/g, `bg-${surface}$1`);
      content = content.replace(/bg-\[\#07070e\]/g, `bg-${surface}`);
      content = content.replace(/bg-\[\#0b0b12\]/g, `bg-${surfaceLight}`);
      content = content.replace(/bg-\[\#111119\]/g, `bg-${surfaceLight}`);
      content = content.replace(/bg-\[\#151522\]/g, `bg-${surfaceLight}`);
      
      // Neon colors -> Primary (#CCBEB1)
      const colors = ['purple', 'blue', 'cyan', 'amber', 'emerald', 'fuchsia', 'green'];
      colors.forEach(color => {
        const regex = new RegExp(`${color}-\\d{3}`, 'g');
        content = content.replace(regex, primary);
      });

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Color system applied globally to JSX files.');
