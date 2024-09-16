import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
const outputFile = path.join(process.cwd(), 'lib/galleryImages.json');

const imageFilenames = fs.readdirSync(imagesDirectory);
const galleryImages = imageFilenames.map(filename => `/images/gallery/${filename}`);

fs.writeFileSync(outputFile, JSON.stringify(galleryImages, null, 2));

console.log('Gallery images list generated successfully!');