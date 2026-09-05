/* Step two of the CMS sign-in.
 *
 * GitHub sends the user back here with a code. We exchange it for an access
 * token server-side (the client secret never reaches the browser) and hand the
 * token to the Decap window that opened this popup, using the handshake it
 * expects: the popup announces itself to its opener, the opener answers, and
 * the popup replies with "authorization:github:success:{json}".
 *
 * The token is never stored: there is no session and no database. Decap keeps
 * it in the browser for the length of the edit.
 */

import { siteOrigin, trustedOriginScript, errorPage } from './_oauth.js';

function html(res, status, body) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(status).send(body);
}

/* The success page.
 *
 * Two things here were previously fragile. The announcement was posted to a
 * hardcoded origin, so it silently missed whenever the admin page was served
 * from anywhere else - a preview deployment, or the domain after a change.
 * It now goes out as '*', which is safe because it carries nothing secret,
 * and the token still goes only to the origin that answered, checked against
 * the site's own. And the window used to close on a 1.2 second timer whether
 * or not the token had been delivered; it now closes when the opener has it,
 * and if the handshake never completes it says so rather than vanishing. */
function successPage(token, origin) {
  const payload = JSON.stringify({ token, provider: 'github' });
  return `<!doctype html><meta charset="utf-8"><title>Signing in…</title>
<body style="margin:0;font:15px/1.6 system-ui,-apple-system,Segoe UI,Arial,sans-serif;color:#15191F;background:#F7F8F9">
<div id="s" style="max-width:520px;margin:40px auto;padding:26px;background:#fff;box-shadow:0 2px 14px rgba(0,0,0,.07)">Completing sign-in…</div>
<script>
(function () {
  var SITE = ${JSON.stringify(origin)};
  var MESSAGE = 'authorization:github:success:' + ${JSON.stringify(payload)};
  var sent = false;

  ${trustedOriginScript()}

  function reply(e) {
    if (sent || !window.opener) return;
    if (!trusted(e.origin)) return;
    sent = true;
    window.opener.postMessage(MESSAGE, e.origin);
    window.removeEventListener('message', reply, false);
    document.getElementById('s').textContent = 'Signed in. You can close this window.';
    setTimeout(function () { window.close(); }, 600);
  }

  window.addEventListener('message', reply, false);

  if (!window.opener) {
    document.getElementById('s').innerHTML =
      '<b>This page was not opened by the editor.</b><br>Start the sign-in from ' +
      '<a href="' + SITE + '/admin/">' + SITE + '/admin/</a> rather than opening this URL directly.';
    return;
  }

  /* '*' is deliberate: this message carries no secret, and at this point we
     do not yet know which origin the editor was loaded from. */
  window.opener.postMessage('authorizing:github', '*');

  /* If the opener never answers, say so instead of closing on a timer. */
  setTimeout(function () {
    if (sent) return;
    document.getElementById('s').innerHTML =
      '<b>GitHub approved the sign-in, but the editor did not respond.</b><br><br>' +
      'This usually means the editor page and this window are on different ' +
      'addresses. Check that <code>base_url</code> in ' +
      '<code>public/admin/config.yml</code> is the domain you are actually on ' +
      '(<code>' + SITE + '</code>), then redeploy.';
  }, 8000);
})();
</script></body>`;
}

export default async function handler(req, res) {
  const origin = siteOrigin(req);
  const url = new URL(req.url, origin);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  /* GitHub reports its own refusals here rather than sending a code - a
     redirect_uri that does not match the OAuth app, most often. Passing its
     wording through is the difference between a fixable message and a blank
     window. */
  const ghError = url.searchParams.get('error');
  if (ghError) {
    const desc = url.searchParams.get('error_description') || ghError;
    html(res, 400, errorPage(
      'GitHub refused the sign-in',
      desc,
      ghError === 'redirect_uri_mismatch' ? [
        `The OAuth app's <b>Authorization callback URL</b> must be exactly <code>${origin}/api/callback</code>`,
        'GitHub &rarr; Settings &rarr; Developer settings &rarr; OAuth Apps &rarr; the app &rarr; edit that field',
        'It is compared as a string, so a trailing slash or <code>http</code> instead of <code>https</code> is a mismatch',
      ] : [],
    ));
    return;
  }

  const cookies = Object.fromEntries(
    (req.headers.cookie || '').split(';').map((c) => {
      const i = c.indexOf('=');
      return [c.slice(0, i).trim(), decodeURIComponent(c.slice(i + 1))];
    }).filter((p) => p[0]),
  );

  // Clear the state cookie whatever happens next.
  res.setHeader('Set-Cookie', 'ixar_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');

  if (!code) {
    html(res, 400, errorPage(
      'GitHub did not send an authorisation code',
      'The sign-in was cancelled, or this URL was opened directly.',
      [`Start from <a href="${origin}/admin/">${origin}/admin/</a>`],
    ));
    return;
  }

  if (!state || state !== cookies.ixar_oauth_state) {
    html(res, 400, errorPage(
      'The sign-in could not be verified',
      cookies.ixar_oauth_state
        ? 'The reply did not match the request it should have belonged to.'
        : 'The one-time cookie set at the start of sign-in did not come back.',
      [
        'It lasts ten minutes - if the GitHub page sat open longer than that, just start again',
        'The browser must accept cookies for this site; a strict tracking-protection setting can block it',
        'The sign-in has to start and finish on the same domain',
      ],
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
      /* `incorrect_client_credentials` is GitHub's wording for a client secret
         that is wrong, missing or belongs to a different app. It is the single
         most common cause of a sign-in that gets all the way to the end and
         then fails, so it is named rather than passed through verbatim. */
      const bad = data.error === 'incorrect_client_credentials';
      html(res, 401, errorPage(
        bad ? 'GitHub did not accept the client secret' : 'GitHub refused to issue a token',
        bad
          ? 'The client secret on this deployment does not match the OAuth app the client ID belongs to.'
          : (data.error_description || data.error || 'No token was returned.'),
        bad ? [
          'Generate a fresh secret on the OAuth app and paste it into <code>GITHUB_CLIENT_SECRET</code> in Vercel',
          'Check the ID and secret are from the <b>same</b> OAuth app',
          '<b>Redeploy</b> afterwards - environment variables are read at deploy time',
        ] : [],
      ));
      return;
    }

    html(res, 200, successPage(data.access_token, origin));
  } catch (err) {
    console.error('OAuth token exchange failed:', err);
    html(res, 502, errorPage(
      'Could not reach GitHub',
      'The token exchange did not complete. This is usually temporary.',
      ['Try again in a moment', 'Check status.github.com if it keeps happening'],
    ));
  }
}
