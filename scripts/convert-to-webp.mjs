/**
 * Script to convert JPG/PNG images to WebP format with compression
 * Uses sharp library for high-quality conversion
 */
import { createRequire } from 'module';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Source folder containing the images
const SOURCE_FOLDER = "C:\\Users\\omar\\Downloads\\Telegram Desktop\\New folder (2)";
// Destination folder in the public directory
const DEST_FOLDER_NAME = "minya-elevator";
const DEST_FOLDER = path.join(__dirname, '..', 'public', 'images', 'projects', DEST_FOLDER_NAME);

async function convertImages() {
  // Dynamically import sharp
  let sharp;
  try {
    const require = createRequire(import.meta.url);
    sharp = require('sharp');
  } catch (e) {
    console.error("❌ sharp is not installed. Installing now...");
    process.exit(1);
  }

  // Create destination folder
  if (!existsSync(DEST_FOLDER)) {
    await mkdir(DEST_FOLDER, { recursive: true });
    console.log(`✅ Created folder: ${DEST_FOLDER}`);
  }

  // Read source files
  const files = await readdir(SOURCE_FOLDER);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  
  console.log(`\n📂 Found ${imageFiles.length} images to process...\n`);

  let converted = 0;
  let errors = 0;
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;

  for (const file of imageFiles) {
    const sourcePath = path.join(SOURCE_FOLDER, file);
    const baseName = path.basename(file, path.extname(file));
    
    // Rename to simpler numbered format
    const match = file.match(/photo_(\d+)_/);
    const num = match ? match[1] : baseName;
    const destFileName = `photo_${num}.webp`;
    const destPath = path.join(DEST_FOLDER, destFileName);

    try {
      const { statSync } = await import('fs');
      const beforeSize = statSync(sourcePath).size;
      totalSizeBefore += beforeSize;

      await sharp(sourcePath)
        .webp({ 
          quality: 82,        // Good quality/size balance
          effort: 6,          // Higher effort = better compression (0-6)
          smartSubsample: true,
          nearLossless: false,
        })
        .resize(1920, 1920, { 
          fit: 'inside',      // Don't upscale, only downscale large images
          withoutEnlargement: true 
        })
        .toFile(destPath);

      const afterSize = statSync(destPath).size;
      totalSizeAfter += afterSize;

      const savings = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
      const beforeKB = (beforeSize / 1024).toFixed(0);
      const afterKB = (afterSize / 1024).toFixed(0);
      
      console.log(`✅ ${file} → ${destFileName} | ${beforeKB}KB → ${afterKB}KB (${savings}% smaller)`);
      converted++;
    } catch (err) {
      console.error(`❌ Failed: ${file} - ${err.message}`);
      errors++;
    }
  }

  // Also handle the cover image (صورة الغلاف.webp)
  const coverFile = files.find(f => f.includes('صورة الغلاف'));
  if (coverFile) {
    const sourcePath = path.join(SOURCE_FOLDER, coverFile);
    const destPath = path.join(DEST_FOLDER, 'cover.webp');
    try {
      const { statSync } = await import('fs');
      const beforeSize = statSync(sourcePath).size;
      
      const { default: sh } = await import('sharp').catch(() => ({ default: sharp }));
      
      await sharp(sourcePath)
        .webp({ quality: 85, effort: 6 })
        .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
        .toFile(destPath);
      
      const afterSize = statSync(destPath).size;
      totalSizeBefore += beforeSize;
      totalSizeAfter += afterSize;
      console.log(`✅ ${coverFile} → cover.webp`);
      converted++;
    } catch (err) {
      console.error(`❌ Cover failed: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n🎉 Done! Converted: ${converted}, Errors: ${errors}`);
  console.log(`📊 Total size: ${(totalSizeBefore/1024/1024).toFixed(1)}MB → ${(totalSizeAfter/1024/1024).toFixed(1)}MB`);
  console.log(`💾 Saved: ${((totalSizeBefore-totalSizeAfter)/1024/1024).toFixed(1)}MB (${(((totalSizeBefore-totalSizeAfter)/totalSizeBefore)*100).toFixed(1)}%)`);
  console.log(`\n📁 Files saved to: ${DEST_FOLDER}`);
  
  // Print the gallery array for easy copy-paste
  console.log(`\n📋 Gallery array for projectsPage.tsx:`);
  const { readdir: rd } = await import('fs/promises');
  const convertedFiles = (await rd(DEST_FOLDER))
    .filter(f => f.startsWith('photo_'))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)?.[0] || '0');
      const nb = parseInt(b.match(/\d+/)?.[0] || '0');
      return na - nb;
    });
  
  console.log(`\nconst minyaGallery = [`);
  for (const f of convertedFiles) {
    console.log(`  "/images/projects/${DEST_FOLDER_NAME}/${f}",`);
  }
  console.log(`];`);
}

convertImages().catch(console.error);
