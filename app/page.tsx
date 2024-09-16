import { readdir } from 'fs/promises';
import path from 'path';
import HomePage from './components/HomePage';

export default async function Page() {
  const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
  const imageFilenames = await readdir(imagesDirectory);
  const galleryImages = imageFilenames.map(filename => `/images/gallery/${filename}`);

  return <HomePage galleryImages={galleryImages} />;
}