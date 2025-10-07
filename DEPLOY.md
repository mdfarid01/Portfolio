Deploying this project to Vercel
===============================

Quick steps (recommended):

1. Push your repository to GitHub (already done).
2. Go to https://vercel.com and sign in with GitHub.
3. Click "New Project" → Import Git Repository → choose `mdfarid01/Portfolio`.
4. Set the following Environment Variables in the Vercel project settings (add them for Preview and Production):
   - RESEND_API_KEY (secret) — your Resend API key
   - RESEND_TO — the recipient email address (comma-separated allowed)
   - Optional: RESEND_FORM_EMAIL — your verified sending email if you verify your domain in Resend
5. (Optional) In Vercel project Settings → General → Build & Development Settings, set:
   - Install Command: pnpm install --frozen-lockfile
   - Build Command: pnpm build

Using the Vercel CLI

You can also deploy from the command line using the Vercel CLI. Install and login:

```bash
npm i -g vercel
vercel login
```

Then deploy:

```bash
cd /path/to/Portfolio-main
vercel --prod
```

Automated deploys via GitHub Actions
-----------------------------------

This repo includes a GitHub Actions workflow which can trigger a Vercel deployment when you push to `main`. To use it, add the following repository secret in GitHub: `VERCEL_TOKEN` (create it in your Vercel account under Settings → Tokens).

Files in this repo:
- `vercel.json` — minimal Vercel config (Next.js preset)
- `DEPLOY.md` — this file
- `.env.local` — local-only environment variables (do NOT commit to public repositories)

Notes
- If you want emails to come from `@thefarid.xyz`, verify the domain in Resend and set `RESEND_FORM_EMAIL` to your verified address in Vercel envs.
- Vercel will build with the environment variables you add in the project settings — there is no need to commit `.env.local`.
