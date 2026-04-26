const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, '../public/images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        let baseName = path.basename(file, path.extname(file));
        
        // Sanitize: replace spaces with dashes, remove parentheses, to lower case
        let newBaseName = baseName.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase();
        newBaseName = newBaseName.replace(/-+/g, '-'); // Remove duplicate dashes
        
        // If it ends with a dash, remove it
        if (newBaseName.endsWith('-')) {
            newBaseName = newBaseName.slice(0, -1);
        }

        const newPath = path.join(dir, `${newBaseName}.webp`);

        console.log(`Converting ${file} -> ${newBaseName}.webp`);
        
        try {
            await sharp(fullPath)
              .webp({ quality: 75 })
              .toFile(newPath);
            
            fs.unlinkSync(fullPath);
            console.log(`Deleted original: ${file}`);
        } catch (err) {
            console.error(`Failed to process ${fullPath}:`, err);
        }
      }
    }
  }
}

console.log('Starting image conversion...');
processDirectory(directoryPath).then(() => {
    console.log('Image optimization complete.');
}).catch(console.error);
