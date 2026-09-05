# Editing the site content

Projects, services and industries are edited at **/admin** on the live site.
There is no separate system to log into and no database: saving writes JSON
back to this repository as a commit, the site rebuilds, and the change is live
in a couple of minutes. The content's history is the git history, so any edit
can be read, reviewed or reverted like code.

## What can be edited

| Collection | Controls | File |
|---|---|---|
| **Projects** | The experience-record table on the homepage | `src/content/projects.json` |
| **Services** | The sixteen methods in the Services We Offer switcher | `src/content/services.json` |
| **Industries** | The sectors in the Industries We Serve showcase | `src/content/industries.json` |

Photographs uploaded through the editor land in `public/images/east-africa`
and can be selected on any service or industry.

Two rules are baked into the editor rather than left to memory:

- **Work order value is not published.** The source experience record carries a
  value column; it is a bid figure and there is no field for it here.
- **Standards lines need Level III sign-off.** The field says so, because a
  wrong code on a public page is a technical claim, not a typo.

## Access

Signing in to the editor means signing in to GitHub. Only accounts with **write
access to this repository** can save, so adding or removing an editor is done in
GitHub → Settings → Collaborators. Editors' changes open as a pull request
rather than going straight live, so a second person can look first.

## One-time setup

The site runs on Vercel, so the sign-in is a GitHub OAuth app plus two
serverless functions that already exist in this repo (`api/auth.js` and
`api/callback.js`). Nothing else needs hosting.

**1. Create the OAuth app.** GitHub → your profile → Settings → Developer
settings → OAuth Apps → **New OAuth App**.

| Field | Value |
|---|---|
| Application name | IXAR Africa CMS |
| Homepage URL | `https://ixar.africa` |
| Authorization callback URL | `https://ixar.africa/api/callback` |

Register it, then **Generate a new client secret** and copy both the client ID
and the secret. The secret is shown once.

**2. Give them to Vercel.** Vercel → the project → Settings → Environment
Variables. Add both, for Production *and* Preview:

| Name | Value |
|---|---|
| `GITHUB_CLIENT_ID` | the client ID |
| `GITHUB_CLIENT_SECRET` | the client secret |

Redeploy so the functions pick them up.

**3. Add the editors.** GitHub → this repository → Settings → Collaborators →
add each person with **Write** access.

**4. Sign in.** Go to `https://ixar.africa/admin` and click *Login with GitHub*.

If the domain is not `ixar.africa`, change `base_url` in
`public/admin/config.yml` to match, and use the same host in the OAuth app's
callback URL.

### If sign-in fails

**The popup now tells you what went wrong.** It used to close after 1.2
seconds whatever happened, so every failure looked the same: a window that
blinked and vanished. Each cause below is what the popup itself will say.

| The popup says | Cause | Fix |
|---|---|---|
| *The sign-in is not configured on this deployment* | `GITHUB_CLIENT_ID` or `GITHUB_CLIENT_SECRET` is missing — it names which | Add it in Vercel → Settings → Environment Variables, tick **Production**, then **redeploy** |
| *GitHub refused the sign-in* — redirect_uri | The OAuth app's **Authorization callback URL** does not match | Set it to exactly `https://ixar.africa/api/callback`. Compared as a string, so a trailing slash or `http` is a mismatch |
| *GitHub did not accept the client secret* | The secret is wrong, or belongs to a different OAuth app than the ID | Generate a fresh secret on the app, paste it into `GITHUB_CLIENT_SECRET`, redeploy |
| *The sign-in could not be verified* | The one-time cookie did not come back — usually the GitHub page sat open more than ten minutes | Start again. If it repeats, check the browser is not blocking cookies for the site |
| *GitHub approved the sign-in, but the editor did not respond* | The editor page and the popup are on different addresses | Make `base_url` in `public/admin/config.yml` the domain you are actually on, and redeploy |
| *This page was not opened by the editor* | `/api/callback` was opened directly | Start from `https://ixar.africa/admin/` |

Two things are worth checking before anything else, because between them they
cause most first-time failures:

1. **The callback URL on the OAuth app is exactly `https://ixar.africa/api/callback`.**
   Not `/admin`, not the homepage, no trailing slash.
2. **You redeployed after adding the environment variables.** Vercel reads them
   at deploy time, so a variable added to an existing deployment does nothing
   until the next one.

If the domain ever moves, set `SITE_ORIGIN` in Vercel to the new origin
(e.g. `https://ixar.co.ke`) and update `base_url` in `config.yml` and the
OAuth app's callback URL to match. Everything else is derived from the request,
so preview deployments work without extra configuration.

## For the developer

- Content is **imported at build time**, not fetched at runtime
  (`src/content/*.json` is imported by `EastAfricaPage.jsx` and
  `experienceRecord.js`). That is deliberate: the prerendered HTML carries the
  real content, so search engines see it without running JavaScript. The cost
  is that a content change needs a rebuild, which the commit triggers anyway.
- `publish_mode: editorial_workflow` in the config is what turns saves into
  pull requests. Change it to `simple` to publish immediately.
- The OAuth handshake is three files in `api/`: `auth.js` starts it,
  `callback.js` finishes it, and `_oauth.js` holds what both need. The client
  secret is only ever read server-side. The popup announces itself with `*`,
  which carries nothing secret, but the **token** is posted only to an origin
  on the allow-list in `_oauth.js` — this site, `www`, and its own Vercel
  previews — so another window cannot claim it. Nothing is stored: there is no
  session and no database.
- The requested scope is `public_repo,read:user`. It was `repo,user`, which
  asked each editor to grant read and write access to every private repository
  they can see. **If this repository is ever made private, `public_repo` stops
  working** and `api/auth.js` has to go back to `repo`.
- The Decap version in `public/admin/index.html` is pinned to a major version
  so an upstream release cannot change the editor without a deliberate bump.
