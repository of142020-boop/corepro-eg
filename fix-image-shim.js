const fs = require('fs');
const path = require('path');

const dirs = ['src/components', 'src/components/pages'];

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (!file.endsWith('.tsx')) return;
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf8');

      // Update Image shim to include width and height
      const oldShim = /const Image = \((\{ src, alt, fill, className, priority, quality, sizes, \.\.\.rest \}: any)\) => \{.*?\};/s;
      const newShim = `const Image = ({ src, alt, fill, className, width, height, priority, ...rest }: any) => {
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={src} alt={alt} width={width} height={height} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} />;
};`;

      const oldShimSimple = /const Image = \((\{ src, alt, className, \.\.\.rest \}: any)\) => <img src=\{src\} alt=\{alt\} className=\{className\} \/>;/;
      const newShimSimple = `const Image = ({ src, alt, className, width, height, ...rest }: any) => <img src={src} alt={alt} width={width} height={height} className={className} {...rest} />;`;

      if (oldShim.test(content)) {
        content = content.replace(oldShim, newShim);
      } else if (oldShimSimple.test(content)) {
        content = content.replace(oldShimSimple, newShimSimple);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated Image shim in ${file}`);
    });
  }
});
