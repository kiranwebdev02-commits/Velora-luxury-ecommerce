const https = require('https');
const urls = [
  'https://images.unsplash.com/photo-1599643478524-fb516cbd2366',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
  'https://images.unsplash.com/photo-1590874103328-9189679199d7',
  'https://images.unsplash.com/photo-1549298916-b53057bc45fd',
  'https://images.unsplash.com/photo-1611652022419-e948758e8dd8',
  'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
  'https://images.unsplash.com/photo-1515562141207-7a8d73b064c5',
  'https://images.unsplash.com/photo-1584916201218-f4242ceb4809',
  'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed',
  'https://images.unsplash.com/photo-1605100804763-247f67b2548e',
  'https://images.unsplash.com/photo-1602752250014-41d2f9547b74',
  'https://images.unsplash.com/photo-1542496658738-89bd24eeaf99',
  'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
  'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e',
  'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
  'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
  'https://images.unsplash.com/photo-1460353581641-378ea9c8abf8',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
  'https://images.unsplash.com/photo-1614252339474-12ebf1725e2e',
  'https://images.unsplash.com/photo-1551028719-0125aa3bf18c',
  'https://images.unsplash.com/photo-1606244864456-8bee14421b8b'
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
