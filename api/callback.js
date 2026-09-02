/* Step two of the CMS login.
 *
 * GitHub sends the user back here with a code. We exchange it for an access
 * token server-side (the client secret never reaches the browser) and hand the
 * token to the Decap window that opened this popup, using the handshake it
 * expects: the popup posts "authorization:github:success:{json}" to its opener.
 *
 * The token is passed to the opener and never stored by us: there is no session
 * and no database. Decap keeps it in the browser for the length of the edit.
 */

function respond(res, status, body) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(status).send(body);
}

/* The message is posted to the site's own origin rather than "*", so a token
   cannot be read by another window that happens to be listening. */
function popupScript(payload, origin) {
  return `<!doctype html><meta charset="utf-8"><title>Signing in…</title>
<body><p style="font:14px system-ui;padding:24px">Completing sign-in…</p>
<script>
(function () {
  var message = 'authorization:github:${payload.type}:' + JSON.stringify(${JSON.stringify(payload.content)});
  function send(e) {
    if (!window.opener) return;
    window.opener.postMessage(message, ${JSON.stringify(origin)});
  }
  window.addEventListener('message', send, false);
  if (window.opener) window.opener.postMessage('authorizing:github', ${JSON.stringify(origin)});
  setTimeout(function () { window.close(); }, 1200);
})();
</script></body>`;
}

export default async function handler(req, res) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const origin = `${proto}://${host}`;

  const url = new URL(req.url, origin);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const cookies = Object.fromEntries(
    (req.headers.cookie || '').split(';').map((c) => {
      const i = c.indexOf('=');
      return [c.slice(0, i).trim(), decodeURIComponent(c.slice(i + 1))];
    }).filter((p) => p[0]),
  );

  // Clear the state cookie whatever happens next.
  res.setHeader('Set-Cookie', 'ixar_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');

  if (!code || !state || state !== cookies.ixar_oauth_state) {
    respond(res, 400, popupScript(
      { type: 'error', content: { message: 'Sign-in could not be verified. Please try again.' } },
      origin,
    ));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${origin}/api/callback`,
      }),
    });
    const data = await tokenRes.json();

    if (!data.access_token) {
      respond(res, 401, popupScript(
        { type: 'error', content: { message: data.error_description || 'GitHub refused the sign-in.' } },
        origin,
      ));
      return;
    }

    respond(res, 200, popupScript(
      { type: 'success', content: { token: data.access_token, provider: 'github' } },
      origin,
    ));
  } catch (err) {
    respond(res, 500, popupScript(
      { type: 'error', content: { message: 'Could not reach GitHub. Please try again.' } },
      origin,
    ));
  }
}
