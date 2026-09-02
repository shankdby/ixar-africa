/* Step one of the CMS login.
 *
 * Decap opens this endpoint in a popup. We send the user to GitHub to approve
 * access, with a random `state` stored in a short-lived, HttpOnly cookie so the
 * callback can prove the response belongs to this request rather than to an
 * attacker's. Nothing here touches the client secret.
 *
 * Environment (set in Vercel → Settings → Environment Variables):
 *   GITHUB_CLIENT_ID      the OAuth app's client ID
 *   GITHUB_CLIENT_SECRET  the OAuth app's client secret  (used by callback.js)
 */

import crypto from 'node:crypto';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('GITHUB_CLIENT_ID is not set on this deployment.');
    return;
  }

  const origin = 'https://ixar.africa';
  const state = crypto.randomBytes(16).toString('hex');

  res.setHeader(
    'Set-Cookie',
    `ixar_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  );

  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', `${origin}/api/callback`);
  // `repo` is the narrowest scope that still allows committing to a private
  // repository. On a public repo `public_repo` is enough; tighten if it is.
  url.searchParams.set('scope', 'repo,user');
  url.searchParams.set('state', state);

  res.redirect(302, url.toString());
}
