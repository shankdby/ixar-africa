/* Step one of the CMS sign-in.
 *
 * Decap opens this endpoint in a popup. We send the user to GitHub to approve
 * access, with a random `state` stored in a short-lived, HttpOnly cookie so the
 * callback can prove the response belongs to this request rather than to an
 * attacker's. Nothing here touches the client secret.
 *
 * Environment (Vercel -> Settings -> Environment Variables):
 *   GITHUB_CLIENT_ID      the OAuth app's client ID
 *   GITHUB_CLIENT_SECRET  the OAuth app's client secret  (used by callback.js)
 *   SITE_ORIGIN           optional; overrides the derived origin if the domain
 *                         ever moves
 */

import crypto from 'node:crypto';
import { siteOrigin, errorPage } from './_oauth.js';

export default function handler(req, res) {
  const origin = siteOrigin(req);
  const clientId = process.env.GITHUB_CLIENT_ID;
  const secret = process.env.GITHUB_CLIENT_SECRET;

  /* Both are checked here, at the start, even though only the ID is used in
     this step. Checking the secret only in the callback means the user gets
     all the way through GitHub's consent screen before anything complains,
     and the complaint then arrives as GitHub's own generic refusal. */
  const missing = [
    !clientId && 'GITHUB_CLIENT_ID',
    !secret && 'GITHUB_CLIENT_SECRET',
  ].filter(Boolean);

  if (missing.length) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(500).send(errorPage(
      'The sign-in is not configured on this deployment',
      `${missing.join(' and ')} ${missing.length > 1 ? 'are' : 'is'} not set.`,
      [
        'Vercel &rarr; the project &rarr; Settings &rarr; Environment Variables',
        'Both values must be ticked for <b>Production</b>, and for <b>Preview</b> if you test on preview URLs',
        'Environment variables are read at deploy time, so <b>redeploy</b> after adding them',
      ],
    ));
    return;
  }

  const state = crypto.randomBytes(16).toString('hex');

  res.setHeader(
    'Set-Cookie',
    `ixar_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  );

  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', `${origin}/api/callback`);
  /* shankdby/ixar-africa is public, so `public_repo` is enough to commit, open
     the editorial-workflow branches and merge them. The previous `repo` scope
     asked each editor to hand this OAuth app read and write access to every
     private repository they can see, which is far more than editing this site
     needs and is the kind of consent screen that makes people hesitate.

     `read:user` replaces `user` for the same reason: Decap only reads the
     signed-in account to show a name and avatar, while `user` also carries the
     right to change someone's profile and email addresses.

     If this repository is ever made private, `public_repo` stops working and
     this has to go back to `repo`. */
  url.searchParams.set('scope', 'public_repo,read:user');
  url.searchParams.set('state', state);

  res.redirect(302, url.toString());
}
