/* Shared bits of the CMS sign-in.
 * ==================================================================
 * Both halves of the handshake need to agree on the site's origin and
 * on how a failure is shown, so they live here rather than being
 * written out twice and drifting apart.
 */

/* The site's own origin.
 *
 * SITE_ORIGIN in Vercel overrides it, so moving the domain is an
 * environment variable rather than a code change. Otherwise it is
 * derived from the request, which keeps preview deployments honest,
 * with the production domain as the last resort.
 *
 * This is what redirect_uri is built from, so it has to match the
 * Authorization callback URL registered on the GitHub OAuth app
 * exactly - scheme, host and path. GitHub compares them as strings. */
export function siteOrigin(req) {
  if (process.env.SITE_ORIGIN) return process.env.SITE_ORIGIN.replace(/\/+$/, '');
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (host) {
    const proto = req.headers['x-forwarded-proto'] || 'https';
    return `${proto}://${host}`;
  }
  return 'https://ixar.africa';
}

/* Hosts allowed to receive the access token.
 *
 * Decap's handshake is: the popup announces itself, the opener answers, and
 * the popup replies to whoever answered. Without a check the token would go
 * to any window that answered, so the reply is limited to this site and its
 * own Vercel preview deployments.
 *
 * The check has to run in the browser, inside the popup. This list is the one
 * source for it and is injected into that script, so the two cannot drift. */
export const TRUSTED_HOSTS = ['ixar.africa', 'www.ixar.africa'];

/* Serialised as a JS function body for the popup. Kept here beside the list
   it enforces rather than written out again in callback.js. */
export function trustedOriginScript() {
  return `function trusted(o){
    if (o === SITE) return true;
    try {
      var h = new URL(o).hostname;
      return ${JSON.stringify(TRUSTED_HOSTS)}.indexOf(h) !== -1 || /\\.vercel\\.app$/.test(h);
    } catch (e) { return false; }
  }`;
}

/* A readable failure page.
 *
 * The previous version closed the popup after 1.2 seconds whatever had
 * happened, so every failure looked identical from the outside: a
 * window that blinked and vanished. Errors now stay on screen with the
 * cause and what to check, because the whole difficulty of debugging
 * this handshake is that it happens in a window that disappears. */
export function errorPage(title, detail, checklist = []) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<!doctype html><meta charset="utf-8"><title>Sign-in failed</title>
<body style="margin:0;font:15px/1.6 system-ui,-apple-system,Segoe UI,Arial,sans-serif;color:#15191F;background:#F7F8F9">
  <div style="max-width:560px;margin:40px auto;padding:28px;background:#fff;border-left:4px solid #DE0603;box-shadow:0 2px 14px rgba(0,0,0,.07)">
    <h1 style="margin:0 0 10px;font-size:19px">${esc(title)}</h1>
    <p style="margin:0 0 ${checklist.length ? '18px' : '0'};color:#4A5058">${esc(detail)}</p>
    ${checklist.length ? `<p style="margin:0 0 6px;font-weight:700;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:#6B6B6B">What to check</p>
    <ul style="margin:0;padding-left:20px;color:#4A5058;font-size:14px">
      ${checklist.map((c) => `<li style="margin-bottom:6px">${c}</li>`).join('')}
    </ul>` : ''}
    <p style="margin:20px 0 0;font-size:13px;color:#8E96A0">Close this window and try again once it is fixed.</p>
  </div>
</body>`;
}
