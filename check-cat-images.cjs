const https = require('https');
const urls = [
  'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
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
  for (const url of urls) {
    const result = await checkUrl(url);
    if (!result.valid) {
      console.log('BROKEN: ' + url);
    } else {
      console.log('OK: ' + url);
    }
  }
}
main();
