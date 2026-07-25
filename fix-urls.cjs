const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if(file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(srcDir);
const replacements = {
  '1599643477874-5c866f5c66fc': '1611591437281-460bfbe1220a',
  '1599643478514-4a413d9418be': '1535632066927-ab7c9ab60908',
  '1605100804763-247f67b254a6': '1596944924616-7b38e7cfac36',
  '1605100483864-1597f8087bd7': '1522312346375-d1a52e2b99b3',
  '1588444650733-d0767b753cb8': '1591561954557-26941169b49e'
};

let filesChanged = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [broken, fixed] of Object.entries(replacements)) {
    content = content.split(broken).join(fixed);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
    filesChanged++;
  }
});

console.log('Total files changed: ' + filesChanged);
