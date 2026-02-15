import fs from 'fs';
import path from 'path';

const src = path.join('contracts', 'interfaces', 'metadata.json');
const dest = path.join('src', 'metadata.json');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('✅ Copied metadata.json');
  } else {
    console.log('⚠️ metadata.json not found, skipping');
  }
} catch (err) {
  console.error('❌ Copy failed:', err.message);
}
