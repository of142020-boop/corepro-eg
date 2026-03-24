const fs = require('fs');
const path = require('path');

function updateFiles(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFiles(fullPath);
    } else if (fullPath.match(/\.(tsx|astro)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Update Shim to include fetchpriority
      const oldShim = /const Image = \(\{ src, alt, fill, className, width, height, priority, \.\.\.rest \}: any\) => \{.*?return <img src=\{actualSrc\} alt=\{alt\} width=\{actualW\} height=\{actualH\} className=\{.*?\} \{\.\.\.rest\} loading=\{priority \? "eager" : "lazy"\} \/>;.*?};/s;
      
      const newShim = `const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchpriority={fetchpriority} />;
};`;

      // Simpler version of the regex to be more robust
      const shimPattern = /const Image = \(\{ src, alt, fill, className, width, height, priority, \.\.\.rest \}: any\) => \{[\s\S]*?return <img[\s\S]*?loading=\{priority \? "eager" : "lazy"\} \/>;[\s\S]*?\};/;
      
      if (content.match(shimPattern)) {
        content = content.replace(shimPattern, newShim);
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated shim in ${file}`);
      }
    }
  });
}

updateFiles('src/components');
