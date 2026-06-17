const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Warm up charcoal backgrounds to espresso
      content = content.split('#111111').join('#161311');
      content = content.split('#1A1A1A').join('#1f1a18');
      content = content.split('#A89B8F').join('#A8917D'); // Taupe bronze
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}
processDirectory(path.join(__dirname, 'src'));
console.log('Background warmth applied.');
