# Deploying to ixar.africa

The site is a **prerendered** single-page app. `npm run build` produces `dist/`,
which is plain HTML, JS, CSS and images — any static host will serve it. There is
no server-side code and no database.

"Prerendered" means every route is rendered to complete HTML at build time, so
`dist/services/index.html` contains the real services copy rather than an empty
`<div id="root">`. The browser hydrates that markup into the normal SPA. See
[section 3](#3-how-the-rendering-works) before changing the build or adding a page.

---

## 1. Preview locally

```bash
npm install          # once
npm run dev          # http://localhost:3000
```

`npm run preview` serves the production build instead, which is what you want
before deploying.

**Do not open `dist/index.html` by double-clicking it.** The file references
`/assets/...` with absolute paths and needs a server at the domain root; opened
from `file://` it renders a blank page. For a copy you can double-click or email
to IXAR, use the standalone build below.

---

## 2. The standalone review copy

```bash
npm run build:standalone
```

Produces `dist-standalone/ixar-east-africa-standalone.html` — roughly 1 MB, with
the CSS, the JavaScript and every photograph inlined as data URIs. It opens with
no server, from a Downloads folder, an email attachment or a USB stick.

Two things to know about it:

- It renders **only** the East Africa page, using a hash router. The other
  routes are not reachable from it.
- Web fonts still load from Google Fonts, so without a connection the page falls
  back to the system sans-serif. Everything else works offline.

---

## 3. How the rendering works

Until August 2026 this site shipped as a plain client-rendered SPA behind a
catch-all rewrite. Every URL — including ones that did not exist — returned the
same `index.html`: correct `<head>`, empty `<body>`. Google's crawler will run
JavaScript eventually, but link unfurlers, most AI crawlers and Bing largely will
not, and a rewrite that answers unknown URLs with HTTP 200 produces soft 404s.

`npm run build` now runs three steps:

| Step | Script | What it does |
|---|---|---|
| 1 | `build:client` | Normal `vite build` → `dist/` with the hashed JS/CSS bundles. |
| 2 | `build:ssr` | `vite build --ssr src/entry-server.jsx` → `dist-ssr/entry-server.js`, a Node-loadable copy of the app. |
| 3 | `prerender` | `scripts/prerender.mjs` renders every route with `react-dom/server`, injects the markup and route-specific `<head>` tags into the `dist/index.html` template, and writes `dist/<route>/index.html`. It also writes `dist/404.html` and `dist/sitemap.xml`. |

`dist-ssr/` is a build artefact and is gitignored; nothing deploys from it.

### Adding a page

1. Add the `<Route>` to `src/AppShell.jsx`.
2. Add an entry to `ROUTE_SEO` in `src/seo.js`.

That second step is what puts the page in the prerender list, gives it its own
title, description and canonical, and adds it to `sitemap.xml`. A route that is
missing from `src/seo.js` is **not** prerendered and will return the 404 page.

### Rules the code depends on

- **`index.html` must keep the `<!--seo:start-->` / `<!--seo:end-->` markers and
  the exact string `<div id="root"></div>`.** The prerender step exits non-zero
  if either is missing, which fails the deploy rather than shipping empty pages.
- **Never use a bare `<style>{\`...\`}</style>`.** Use `<Style>` from
  `src/components/Style.jsx`. React escapes text children, so a raw style tag has
  its CSS mangled during server rendering (`a > b` → `a &gt; b`) and breaks
  hydration. This bit us once already.
- **No `window` or `document` outside `useEffect` or an event handler.** There is
  no DOM during the prerender; touching one at render time fails the build.

### Verifying

```bash
npm run build
npm run preview
curl -s http://localhost:4173/services | grep -c "Services We Offer"   # expect 1, not 0
```

Or disable JavaScript in the browser and load a few pages — you should still see
full content.

---

## 4. Choosing a host

Any of these work. All three are free at this traffic level.

| Host | Config file already in the repo | Notes |
|---|---|---|
| **Cloudflare Pages** | `public/_redirects` | Recommended if the domain's DNS will live at Cloudflare — one dashboard for both. |
| **Netlify** | `netlify.toml` + `public/_redirects` | Simplest first deploy; drag-and-drop `dist/` works without git. |
| **Vercel** | `vercel.json` | Fine, but `.africa` custom domains need the DNS steps below either way. |

All three are configured to:

- serve the prerendered file for each path. The old `/* → /index.html 200` SPA
  fallback has been **removed** on purpose: every real route now has its own
  `index.html` on disk, and the fallback was answering non-existent URLs with
  HTTP 200 and an empty shell. Unmatched paths fall through to `dist/404.html`
  with a real 404 status, which all three hosts do automatically;
- 301 `/africa` to `/`, since the domain already says Africa and two URLs
  serving identical content splits your search ranking.

If you add a route to `src/AppShell.jsx` and forget `src/seo.js`, that route will
now 404 in production instead of silently rendering. That is deliberate — a loud
failure beats a soft 404 — but it is the one behaviour change to remember.

### Build settings

```
Build command:      npm run build
Output directory:   dist
Node version:       20
```

---

## 5. Pointing ixar.africa at it

Do this **after** the first deploy succeeds on the host's temporary URL
(`something.pages.dev` or `something.netlify.app`) — verify the site works there
first, so if DNS misbehaves you know the build is not the cause.

At your domain registrar, add the domain in the host's dashboard first; it will
show you the exact target to use. The records take this shape:

| Type | Name | Value |
|---|---|---|
| `CNAME` | `www` | the host's target, e.g. `ixar-africa.pages.dev` |
| `A` or `ALIAS`/`ANAME` | `@` (apex) | whatever the host specifies |

The apex record is the fiddly one. A plain `CNAME` is not valid at the apex of a
domain, so:

- **Cloudflare** — use their nameservers and their CNAME flattening handles it.
- **Netlify** — either use Netlify DNS, or add the four `A` records they list.
- Some registrars offer `ALIAS` or `ANAME`, which does the same job.

Decide whether `ixar.africa` or `www.ixar.africa` is canonical and redirect the
other to it. The host does this in one setting; pick one and be consistent,
because the canonical tags are generated from `SITE_URL` in `src/seo.js`, which
is currently the apex (`https://ixar.africa`). If you switch to `www`, change it
there — it feeds every canonical tag and every entry in `sitemap.xml`.

HTTPS certificates are issued automatically by all three hosts once DNS
resolves — usually within minutes, occasionally up to an hour.

---

## 6. Before it goes public

The page is still a review mock-up. Everything wrapped in an amber chip is
unconfirmed, and the striped grey blocks are image placeholders. Two things in
particular should not go live as they stand:

- the dark **"Mock-up for review"** banner at the top of the page — remove
  `showReviewBar` from `src/pages/EastAfricaPage.jsx` when IXAR signs off;
- `<meta name="robots" content="noindex, nofollow">` is set on the standalone
  copy only, not on the site build. If the site goes up before sign-off, add the
  tag in `headTags()` in `scripts/prerender.mjs` (not in `index.html` — the
  prerender step rewrites that block per route) so a half-finished page is not
  indexed.

This now matters more than it did. Before prerendering, a crawler that did not
run JavaScript saw nothing but metadata; unreviewed copy was effectively
invisible. Every word on the page is now in the initial HTML response, so
whatever ships is what gets indexed.

Section 6 of the content plan lists what still needs confirming from IXAR.

---

## 7. What was removed, and why

The pan-African build this site grew out of carried a lot of invented detail.
Restyling it would have made the invented parts look more credible, not less,
so the following came out:

| Removed | Reason |
|---|---|
| Regional offices in South Africa, Nigeria, Ghana and Mozambique | Street addresses, phone numbers and country email addresses for offices that do not exist. Section 3 of the content plan excludes Mozambique by name on exactly this reasoning. |
| Four case studies | Named clients, defect counts and completion figures for work with no evidence behind it. Replaced with the Tilenga and Praj scopes, which the photographs support. |
| BARC Certificate Verifier | A simulated lookup that returned an authoritative "VERIFIED" panel for three invented certificates, issued by a quality board that does not exist. Replaced with a verification request that a person answers. |
| Cost calculator output | Multiplied invented day-rates into a currency figure. NDT is priced on access, shutdown window and source logistics, so the first real proposal would have contradicted it. Now a scope builder that produces no price. |
| Enterprise Email Hosting section | Unrelated to NDT, and carried its own invented infrastructure claims. It was already dead code — nothing imported it. |
| Pan-African homepage | Used the parent company's 55 years and 12,000 projects as regional figures, which the content plan rules out in section 2. The East Africa page is the homepage now. |
| "Response within 2 business hours", "mobilise within 24 hours" | Service levels nobody has committed to. |

Four other components were deleted as dead code: `HeroSection`, `ServicesSection`,
`SectorShowcase` and `QualitySafetySection` were never imported anywhere.
