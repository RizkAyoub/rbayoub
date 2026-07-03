/**
 * generate-og-image.mjs
 * Converts public/brand/rizk-ayoub-card.svg → public/brand/rizk-ayoub-card.png
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svgPath = join(root, 'public/brand/rizk-ayoub-card.svg');
const pngPath = join(root, 'public/brand/rizk-ayoub-card.png');

const svgBuffer = readFileSync(svgPath);

const info = await sharp(svgBuffer)
  .resize(1200, 630)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(pngPath);

console.log(`PNG generated: ${pngPath}`);
console.log(`Size: ${info.width}×${info.height}, ${Math.round(info.size / 1024)}KB`);
