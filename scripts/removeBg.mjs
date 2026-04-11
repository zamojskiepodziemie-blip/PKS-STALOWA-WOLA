import sharp from 'sharp';
import path from 'node:path';

const input = path.resolve('public/mapa.jpg');
const output = path.resolve('public/mapa.png');

const THRESHOLD = 235;

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    data[i + 3] = 0;
  } else {
    const minWhite = Math.min(r, g, b);
    if (minWhite > 200) {
      const t = (minWhite - 200) / 35;
      data[i + 3] = Math.round(255 * (1 - t));
    }
  }
}

await sharp(data, { raw: { width, height, channels } })
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
  .png()
  .toFile(output);

console.log('done →', output);
