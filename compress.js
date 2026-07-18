const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const outPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        console.log(`Converting ${file} -> ${path.basename(outPath)}`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outPath);
          fs.unlinkSync(fullPath);
          console.log(`Deleted ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
}

processDirectory(targetDir).then(() => console.log('Done'));
