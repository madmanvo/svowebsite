import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
const outputFile = path.join(process.cwd(), 'lib/galleryImages.json');

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDirectory)) {
  fs.mkdirSync(imagesDirectory, { recursive: true });
  console.log('Created gallery directory');
}

let galleryImages: string[] = [];

try {
  const imageFilenames = fs.readdirSync(imagesDirectory);
  galleryImages = imageFilenames
    .filter(filename => /\.(jpg|jpeg|png|gif)$/i.test(filename))
    .map(filename => `/images/gallery/${filename}`);
  console.log(`Found ${galleryImages.length} images in the gallery`);
} catch (error) {
  console.error('Error reading gallery directory:', error);
}

// Ensure the lib directory exists
const libDirectory = path.dirname(outputFile);
if (!fs.existsSync(libDirectory)) {
  fs.mkdirSync(libDirectory, { recursive: true });
  console.log('Created lib directory');
}

fs.writeFileSync(outputFile, JSON.stringify(galleryImages, null, 2));

console.log('Gallery images list generated successfully!');