const fs = require('fs');
const https = require('https');
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
const urlRegex = /https:\/\/images\.unsplash\.com\/photo-[^"'\?\s]+/g;
const urls = new Set();
const urlToFile = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    urls.add(match[0]);
    if(!urlToFile[match[0]]) urlToFile[match[0]] = [];
    urlToFile[match[0]].push(file);
  }
});

console.log(`Found ${urls.size} unique URLs to check.`);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      // Unsplash might return 302 to a source-404 if deleted
      if (res.statusCode >= 400 || (res.statusCode === 302 && res.headers.location && res.headers.location.includes('source-404'))) {
        resolve({ url, status: res.statusCode, valid: false });
      } else {
        resolve({ url, status: res.statusCode, valid: true });
      }
    }).on('error', (e) => {
      resolve({ url, error: e.message, valid: false });
    });
  });
}

async function main() {
  const brokenUrls = [];
  for (const url of urls) {
    const result = await checkUrl(url);
    if (!result.valid) {
      console.log(`BROKEN: ${url} (Used in: ${urlToFile[url].map(f => path.basename(f)).join(', ')})`);
      brokenUrls.push(url);
    } else {
      console.log(`OK: ${url}`);
    }
  }
  console.log(`\nFound ${brokenUrls.length} broken URLs out of ${urls.size} total.`);
  fs.writeFileSync('broken-urls.json', JSON.stringify(brokenUrls, null, 2));
}

main();
