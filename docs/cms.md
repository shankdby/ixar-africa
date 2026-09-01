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

Access is invite-only through Netlify Identity. An address can only sign in if
it has been invited, nobody needs a GitHub account, and removing someone is one
click. Editors' changes open as a pull request rather than going straight live,
so a second person can look first.

## One-time setup

This has to be done once, in the Netlify dashboard, by whoever owns the site.

1. **Site configuration → Identity → Enable Identity.**
2. Under **Registration**, set it to **Invite only**. This is what keeps the
   editor closed; leaving it open would let anyone register.
3. Under **Services → Git Gateway**, click **Enable Git Gateway**. This is what
   lets the editor commit to the repository without handing anyone a GitHub
   login.
4. Under **Identity → Invite users**, invite each person by email address. They
   get a link, set a password, and land in the editor.

Then open `https://<your-site>/admin` and sign in.

### If the site moves off Netlify

Identity and Git Gateway are Netlify features. On Vercel or anywhere else,
change the `backend` block in `public/admin/config.yml` to the GitHub backend
commented directly above it. Access is then controlled by GitHub repository
collaborators instead of by invitation, and each editor needs a GitHub account.

## For the developer

- Content is **imported at build time**, not fetched at runtime
  (`src/content/*.json` is imported by `EastAfricaPage.jsx` and
  `experienceRecord.js`). That is deliberate: the prerendered HTML carries the
  real content, so search engines see it without running JavaScript. The cost
  is that a content change needs a rebuild, which the commit triggers anyway.
- `publish_mode: editorial_workflow` in the config is what turns saves into
  pull requests. Change it to `simple` to publish immediately.
- The Decap version in `public/admin/index.html` is pinned to a major version
  so an upstream release cannot change the editor without a deliberate bump.
