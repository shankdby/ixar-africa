/**
 * Turns the built standalone.html into ONE portable file.
 *
 * Vite emits standalone.html plus separate /assets/*.js, /assets/*.css and
 * /images/* files. A page opened from the filesystem cannot fetch those with
 * absolute paths, so this script folds all of them into the HTML:
 *
 *   · <link rel=stylesheet>  ->  <style>…</style>
 *   · <script src=…>         ->  <script>…</script>
 *   · "/images/foo.webp"     ->  "data:image/webp;base64,…"
 *
 * Run via `npm run build:standalone`.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist-standalone');
const outFile = join(dist, 'ixar-east-africa-standalone.html');

const MIME = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

/** Map every image under dist/images to its data URI, keyed by web path. */
function buildImageMap() {
  const map = new Map();
  for (const file of walk(join(dist, 'images'))) {
    const ext = extname(file).toLowerCase();
    const mime = MIME[ext];
    if (!mime) continue;
    const webPath = '/' + relative(dist, file).split(/[\\/]/).join('/');
    const data = readFileSync(file).toString('base64');
    map.set(webPath, `data:${mime};base64,${data}`);
  }
  return map;
}

const srcHtml = join(dist, 'standalone.html');
if (!existsSync(srcHtml)) {
  console.error('dist-standalone/standalone.html not found — run the vite build step first.');
  process.exit(1);
}

let html = readFileSync(srcHtml, 'utf8');
const images = buildImageMap();

// Longest path first, so /images/a/b.webp is never partly matched by /images/a.
const orderedPaths = [...images.keys()].sort((a, b) => b.length - a.length);

function inlineImagePaths(text) {
  let out = text;
  for (const webPath of orderedPaths) {
    out = out.split(webPath).join(images.get(webPath));
  }
  return out;
}

let inlinedCss = 0;
let inlinedJs = 0;

// stylesheets -> <style>
html = html.replace(
  /<link[^>]+rel=["']stylesheet["'][^>]*href=["'](\/[^"']+\.css)["'][^>]*>/g,
  (whole, href) => {
    const file = join(dist, href);
    if (!existsSync(file)) return whole;
    inlinedCss += 1;
    return `<style>\n${inlineImagePaths(readFileSync(file, 'utf8'))}\n</style>`;
  }
);

// module scripts -> inline <script type="module">
html = html.replace(
  /<script([^>]*)\ssrc=["'](\/[^"']+\.js)["']([^>]*)><\/script>/g,
  (whole, before, src, after) => {
    const file = join(dist, src);
    if (!existsSync(file)) return whole;
    inlinedJs += 1;
    const attrs = `${before} ${after}`.replace(/\scrossorigin/g, '').trim();
    const js = inlineImagePaths(readFileSync(file, 'utf8'));
    // </script> inside a string literal would close this tag early.
    return `<script ${attrs}>\n${js.split('</script').join('<\\/script')}\n</script>`;
  }
);

// modulepreload hints point at files that no longer load separately
html = html.replace(/<link[^>]+rel=["']modulepreload["'][^>]*>\s*/g, '');

// anything left in the markup itself
html = inlineImagePaths(html);

/*
 * The page composes image URLs at runtime (`${IMG}${file}`), so after bundling
 * the prefix and the filename live in separate string literals and the textual
 * replacement above cannot match them. Rather than contort the page source for
 * the sake of the review build, install a resolver ahead of React: it maps any
 * /images/... URL to its data URI as the src is assigned, so the runtime-built
 * paths resolve too.
 */
const resolverMap = {};
for (const [webPath, dataUri] of images) resolverMap[webPath] = dataUri;
const resolver = `<script>
(function () {
  var MAP = ${JSON.stringify(resolverMap)};
  function fix(v) { return (typeof v === 'string' && MAP[v]) ? MAP[v] : v; }
  var proto = HTMLImageElement.prototype;
  var d = Object.getOwnPropertyDescriptor(proto, 'src');
  if (d && d.set) {
    Object.defineProperty(proto, 'src', {
      configurable: true,
      enumerable: d.enumerable,
      get: d.get,
      set: function (v) { d.set.call(this, fix(v)); }
    });
  }
  var setAttr = proto.setAttribute;
  proto.setAttribute = function (name, value) {
    return setAttr.call(this, name, name === 'src' ? fix(value) : value);
  };
})();
</script>`;
html = html.replace('</head>', `${resolver}\n</head>`);

writeFileSync(outFile, html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`standalone: ${relative(root, outFile)}  (${kb} KB)`);
console.log(`  inlined ${inlinedCss} stylesheet(s), ${inlinedJs} script(s), ${images.size} image(s)`);

// Nothing may still point at a sibling file: this must work from file://
const leftover = new Set();
for (const m of html.matchAll(/(?:src|href)=["'](\/(?!\/)[^"']*)["']/g)) leftover.add(m[1]);
// bare ES module specifiers left behind by code-splitting
for (const m of html.matchAll(/\bfrom\s*["'](\.{0,2}\/[^"']+)["']/g)) leftover.add(m[1]);
for (const m of html.matchAll(/\bimport\s*\(\s*["'](\.{0,2}\/[^"']+)["']\s*\)/g)) leftover.add(m[1]);
if (leftover.size) {
  console.warn('  WARNING: still references external files:', [...leftover].join(', '));
  console.warn('  The page will not render from file:// until these are inlined.');
  process.exitCode = 1;
} else {
  console.log('  self-contained: no external file references remain');
}
