/**
 * Writes src/imageManifest.json: every file in public/images mapped to its
 * intrinsic pixel size. AppImage reads this so each <img> ships with width and
 * height attributes, letting the browser reserve the right box before the
 * bytes arrive. Regenerated on every build, so adding an image is enough.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sizeOf from 'image-size';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = path.join(ROOT, 'public', 'images');

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(webp|jpe?g|png|avif|gif)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const manifest = {};
for (const file of await walk(IMAGES)) {
  const key = '/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
  try {
    const { width, height } = sizeOf(await fs.readFile(file));
    manifest[key] = [width, height];
  } catch {
    // Unreadable or unsupported: skip it. AppImage falls back to no attributes.
  }
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await fs.writeFile(
  path.join(ROOT, 'src', 'imageManifest.json'),
  JSON.stringify(sorted, null, 2) + '\n',
  'utf8'
);
console.log(`image manifest: ${Object.keys(sorted).length} images`);
