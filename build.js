// build.js — stitches partials into index.html
// Run with: node build.js

const fs   = require('fs');
const path = require('path');

const PARTIALS_DIR = path.join(__dirname, 'partials');
const OUTPUT_FILE  = path.join(__dirname, 'index.html');

// Order matters — sections are assembled top to bottom
const order = [
  'head.html',
  'nav.html',
  'hero.html',
  'services.html',
  'about.html',
  'team.html',
  'certifications.html',
  'faq.html',
  'contact.html',
  'footer.html',
];

const html = order
  .map(file => fs.readFileSync(path.join(PARTIALS_DIR, file), 'utf8'))
  .join('\n');

fs.writeFileSync(OUTPUT_FILE, html, 'utf8');

console.log(`✓ index.html built from ${order.length} partials`);
order.forEach(f => console.log(`  └─ partials/${f}`));
