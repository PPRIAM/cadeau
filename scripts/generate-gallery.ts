import { readdirSync } from 'fs';
import { join } from 'path';

const dir = join(__dirname, '..', 'public', 'images');
const files = readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

const data = files.map(f => ({
  src: `/images/${f}`,
  alt: f.replace(/\.(jpe?g|png|webp)$/i, '').replace(/[-_]/g, ' ')
}));

console.log(
  'export const images = ' + JSON.stringify(data, null, 2) + ';'
);
