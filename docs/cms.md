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

### Troubleshooting

- *"Sign-in could not be verified"* — the state cookie expired. Close the popup
  and try again; it lasts ten minutes.
- *The popup closes and nothing happens* — `base_url` in `config.yml` does not
  match the domain you are on, so the token is posted to a different origin.
- *"GITHUB_CLIENT_ID is not set"* — the environment variables are missing, or
  the deployment predates them. Redeploy.

## For the developer

- Content is **imported at build time**, not fetched at runtime
  (`src/content/*.json` is imported by `EastAfricaPage.jsx` and
  `experienceRecord.js`). That is deliberate: the prerendered HTML carries the
  real content, so search engines see it without running JavaScript. The cost
  is that a content change needs a rebuild, which the commit triggers anyway.
- `publish_mode: editorial_workflow` in the config is what turns saves into
  pull requests. Change it to `simple` to publish immediately.
- The OAuth handshake is two Vercel functions in `api/`. The client secret is
  only ever read server-side, and the token is posted to the site's own origin
  rather than to `*`, so another window cannot read it. Nothing is stored: there
  is no session and no database.
- The Decap version in `public/admin/index.html` is pinned to a major version
  so an upstream release cannot change the editor without a deliberate bump.
