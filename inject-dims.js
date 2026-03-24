const fs = require('fs');
const path = require('path');

// A simple script to get image dimensions without external packages for common formats like WebP or JPEG
// Actually, it's easier to just use `image-size` if it's installed. Let's try requiring it.
let sizeOf;
try {
  sizeOf = require('image-size');
  console.log('image-size package is available.');
} catch (e) {
  console.log('image-size not available. Let me just set a standard aspect ratio for the know images.');
}

const knownImages = {
  "/logo-header-116x154.webp": [116, 154],
  "/images/home/hero.webp": [800, 800],
  "/images/home/core.webp": [800, 800],
  "/images/home/saw.webp": [800, 800],
  "/images/home/hoods.webp": [800, 800],
  "/favicon.ico": [32, 32]
};

// If image-size is available, let's process `public/` dynamically.
if (sizeOf) {
  function scanDir(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath);
      } else if (fullPath.match(/\.(png|jpg|jpeg|webp|gif)$/i)) {
        try {
          const dimensions = sizeOf(fullPath);
          const relativePath = '/' + path.relative('public', fullPath).replace(/\\/g, '/');
          knownImages[relativePath] = [dimensions.width, dimensions.height];
        } catch (err) {}
      }
    });
  }
  if (fs.existsSync('public')) scanDir('public');
}

console.log("Known images:", Object.keys(knownImages).length);

function updateFiles(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFiles(fullPath);
    } else if (fullPath.match(/\.(tsx|astro)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Match <Image ... src="..."
      content = content.replace(/<(Image|img)([^>]+)src=(['"])(.*?)\3([^>]*)>/g, (match, tag, before, quote, src, after) => {
        // Only if it doesn't already have width= or width={...}
        if (match.includes('width=') || match.includes('height=')) return match;
        
        let w = null, h = null;
        if (knownImages[src]) {
          w = knownImages[src][0];
          h = knownImages[src][1];
        } else {
            // Assume 800x800 for unknown local images, except sanity urls which come from props
            if (src.startsWith('/')) {
                w = 800;
                h = 800; // safe fallback
            }
        }

        if (w && h) {
          changed = true;
          return `<${tag}${before}src=${quote}${src}${quote} width={${w}} height={${h}}${after}>`;
        }
        return match;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated sizes in ${fullPath}`);
      }
    }
  });
}

updateFiles('src/components');
updateFiles('src/layouts');
updateFiles('src/pages');
