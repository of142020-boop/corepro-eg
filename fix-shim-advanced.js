const fs = require('fs');
const path = require('path');

let sizeOf;
try {
  sizeOf = require('image-size');
} catch (e) {
  console.log('image-size not available.');
}

function updateFiles(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFiles(fullPath);
    } else if (fullPath.match(/\.(tsx|astro)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // 1. Update the Shim to handle object sources and provide default intrinsic sizes for layout:
      const oldShim = /const Image = \(\{ src, alt, fill, className, width, height, priority, \.\.\.rest \}: any\) => \{.*?\};/s;
      const newShim = `const Image = ({ src, alt, fill, className, width, height, priority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} />;
};`;

      // Simpler shim variant
      const oldShimSimple = /const Image = \(\{ src, alt, className, width, height, \.\.\.rest \}: any\) => <img src=\{src\} alt=\{alt\} width=\{width\} height=\{height\} className=\{className\} \{\.\.\.rest\} \/>;/;
      const newShimSimple = `const Image = ({ src, alt, className, width, height, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined);
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={className} {...rest} />;
};`;

      if (content.match(oldShim)) {
        content = content.replace(oldShim, newShim);
        changed = true;
      } else if (content.match(oldShimSimple)) {
        content = content.replace(oldShimSimple, newShimSimple);
        changed = true;
      }

      // 2. Convert standard constant image paths to objects, e.g., const IMG_HERO = "/images/...";
      content = content.replace(/const ([A-Z0-9_]+)\s*=\s*(['"])(\/images\/.*?\.webp)\2\s*;/g, (match, name, quote, imgPath) => {
        let w = 800, h = 800; // default squares
        if (sizeOf) {
          try {
            const dims = sizeOf(path.join('public', imgPath));
            w = dims.width;
            h = dims.height;
          } catch(e) {}
        }
        changed = true;
        return `const ${name} = { src: "${imgPath}", width: ${w}, height: ${h} };`;
      });
      
      // And for the Header logo
      content = content.replace(/src="\/logo-header-116x154.webp"/g, 'src="/logo-header-116x154.webp" width={116} height={154}');

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated images in ${file}`);
      }
    }
  });
}

updateFiles('src/components');
