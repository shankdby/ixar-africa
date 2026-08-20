/**
 * Build-time static prerender.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route in src/seo.js it renders the real React tree to HTML,
 * injects that markup plus route-specific <head> tags into the Vite template,
 * and writes dist/<route>/index.html.
 *
 * The result is a plain static site: crawlers, link unfurlers and no-JS
 * clients get complete HTML, while the browser hydrates the same markup into
 * the normal single-page app.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(SSR_ENTRY).href);
const { PRERENDER_ROUTES, ROUTE_SEO, resolveSeo, SITE_URL, SITE_NAME, OG_IMAGE } = await import(
  pathToFileURL(path.join(ROOT, 'src', 'seo.js')).href
);
const { jsonLdFor } = await import(
  pathToFileURL(path.join(ROOT, 'src', 'structuredData.js')).href
);

const SEO_START = '<!--seo:start-->';
const SEO_END = '<!--seo:end-->';
const ROOT_DIV = '<div id="root"></div>';

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');

assertTemplate(template);

const buildDate = new Date().toISOString().slice(0, 10);
const written = [];

for (const route of PRERENDER_ROUTES) {
  const appHtml = render(route);
  const seo = resolveSeo(route);
  const html = template
    .replace(sliceBetween(template, SEO_START, SEO_END), headTags(seo, route))
    .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`);

  const outFile =
    route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html, 'utf8');
  written.push({ route, bytes: Buffer.byteLength(html), file: path.relative(ROOT, outFile) });
}

// A prerendered 404 for hosts that serve one. Marked noindex by resolveSeo.
{
  const notFound = template
    .replace(sliceBetween(template, SEO_START, SEO_END), headTags(resolveSeo('/__404__'), '/__404__'))
    .replace(ROOT_DIV, `<div id="root">${render('/__404__')}</div>`);
  await fs.writeFile(path.join(DIST, '404.html'), notFound, 'utf8');
}

await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap(), 'utf8');

const smallest = written.reduce((a, b) => (a.bytes < b.bytes ? a : b));
console.log(`\nPrerendered ${written.length} routes + 404.html + sitemap.xml`);
for (const w of written) {
  console.log(`  ${w.route.padEnd(28)} ${String(w.bytes).padStart(8)} B  ->  ${w.file}`);
}
console.log(`\nSmallest page: ${smallest.route} (${smallest.bytes} B)`);

/* ------------------------------------------------------------------ */

function assertTemplate(html) {
  const problems = [];
  if (!html.includes(SEO_START) || !html.includes(SEO_END)) {
    problems.push(`index.html is missing the ${SEO_START} / ${SEO_END} markers`);
  }
  if (!html.includes(ROOT_DIV)) {
    problems.push(`index.html is missing the exact string ${ROOT_DIV}`);
  }
  if (problems.length) {
    console.error('\nPrerender aborted:\n  - ' + problems.join('\n  - ') + '\n');
    process.exit(1);
  }
}

function sliceBetween(html, start, end) {
  const from = html.indexOf(start);
  const to = html.indexOf(end) + end.length;
  return html.slice(from, to);
}

function headTags(seo, route) {
  const tags = [
    SEO_START,
    tag('title', seo.title),
    meta('name', 'title', seo.title),
    meta('name', 'description', seo.description),
    // A noindex page (the 404) gets no canonical: there is no real URL for it
    // to claim, and pointing one at a placeholder path is worse than silence.
    seo.noindex ? null : `    <link rel="canonical" href="${esc(seo.canonical)}" />`,
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    seo.noindex ? null : meta('property', 'og:url', seo.canonical),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:image', `${SITE_URL}${OG_IMAGE}`),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', `${SITE_URL}${OG_IMAGE}`)
  ];

  if (seo.noindex) tags.push(meta('name', 'robots', 'noindex, follow'));

  // Structured data goes inside the seo markers so RouteHead can swap it out
  // wholesale on client-side navigation without leaving a stale graph behind.
  const jsonLd = jsonLdFor(route, seo);
  if (jsonLd) tags.push(jsonLd);

  tags.push(`    ${SEO_END}`);
  return tags.filter(Boolean).join('\n');
}

function tag(name, value) {
  return `    <${name}>${esc(value)}</${name}>`;
}

function meta(keyAttr, keyValue, content) {
  return `    <meta ${keyAttr}="${keyValue}" content="${esc(content)}" />`;
}

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sitemap() {
  const urls = PRERENDER_ROUTES.map((route) => {
    const entry = ROUTE_SEO[route];
    return [
      '  <url>',
      `    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>`,
      `    <lastmod>${buildDate}</lastmod>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      '  </url>'
    ].join('\n');
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
