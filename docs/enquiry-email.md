# Enquiry email — how submissions reach bd@ixar.africa

## What was wrong

Every enquiry form on the site validated its fields and then showed
"Thank you, your enquiry has been sent." **Nothing was sent.** The
Africa page form and the site-wide modal both flipped a flag and
rendered the confirmation panel; no request left the browser. The
/contact page opened the visitor's mail client, which worked but lost
anyone browsing without a mail client configured.

Enquiries submitted through the site before this change were not
delivered anywhere and cannot be recovered.

## How it works now

All three forms post the same JSON to `POST /api/enquiry`
(`api/enquiry.js`), a Vercel serverless function that emails
**bd@ixar.africa** through Resend.

- The confirmation panel appears **only** after the endpoint confirms
  the email was accepted.
- If it cannot deliver — no API key, provider down, visitor offline —
  the visitor's mail client opens with every field already written
  out, and a notice explains what happened. An enquiry is never
  silently lost.
- `Reply-To` is the enquirer's address, so replying from the BD inbox
  replies to them.
- A hidden honeypot field drops naive form bots.
- Field lengths are capped and newlines are stripped from anything
  reaching a mail header.

## Setup — one-time, about ten minutes

### 1. Create a Resend account

<https://resend.com> — the free tier covers 3,000 emails a month,
which is far beyond enquiry volume.

### 2. Verify the ixar.africa domain

Resend → **Domains** → **Add Domain** → `ixar.africa`. It shows three
DNS records (MX, TXT/SPF, and a DKIM CNAME). Add them wherever
ixar.africa's DNS is managed — if the nameservers point at Vercel,
that is Vercel → Project → **Domains** → `ixar.africa` → **DNS
Records**. Verification usually completes within minutes.

Sending is refused until the domain verifies. This step is not
optional.

### 3. Create an API key

Resend → **API Keys** → **Create API Key**, sending permission only.
Copy the `re_...` value — it is shown once.

### 4. Add the environment variables in Vercel

Vercel → Project → **Settings** → **Environment Variables**. Tick
both **Production** and **Preview** for each.

| Name | Value | Required |
|---|---|---|
| `RESEND_API_KEY` | the `re_...` key from step 3 | yes |
| `ENQUIRY_TO` | `bd@ixar.africa` | no — this is the default |
| `ENQUIRY_FROM` | `IXAR Africa Website <website@ixar.africa>` | no — this is the default |

`ENQUIRY_FROM` must be on the domain verified in step 2. The mailbox
does not have to exist; it is a From address, and replies go to the
enquirer via Reply-To.

### 5. Redeploy

Environment variables are read at deploy time. Vercel → **Deployments**
→ latest → **Redeploy**.

### 6. Test it

Submit the form on <https://ixar.africa/#ea-enquiry> with a real
address and confirm the email lands in bd@ixar.africa. Reply to it and
confirm the reply goes to the address you entered, not to the website.

## To route enquiries somewhere else

Change `ENQUIRY_TO` and redeploy. For several recipients, Resend
accepts a comma-separated list — `api/enquiry.js` currently passes the
value as a single address, so splitting on commas is a one-line change
in that file if it is ever needed.

## Troubleshooting

**The mail-client fallback opens every time.** The endpoint is
returning an error. Vercel → **Deployments** → latest → **Functions**
→ `api/enquiry` shows the log line. A 503 means `RESEND_API_KEY` is
not set for that environment; a 502 means Resend rejected the send,
and the logged detail says why — almost always an unverified domain in
`ENQUIRY_FROM`.

**Nothing arrives but the site says sent.** Check the spam folder,
then Resend → **Emails**, which lists every send with its delivery
status.

**Testing before the domain verifies.** Set `ENQUIRY_FROM` to
`onboarding@resend.dev`. Resend will only deliver to the email address
the Resend account was registered with, so set `ENQUIRY_TO` to that
address for the test, then set both back.
