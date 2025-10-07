# Md Farid — Developer Portfolio

This repository contains the personal developer portfolio website for Md Farid. It's built with Next.js (App Router), TypeScript, and Tailwind CSS.

Live preview: https://www.thefarid.xyz

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Local development

Clone the repository:

```bash
git clone https://github.com/mdfarid01/Portfolio.git
cd Portfolio
```

Install dependencies (using pnpm recommended):

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Contact / Email (Resend)

This site uses Resend to send contact form messages from the hosted Next.js server. To enable email sending locally or in production, set the following environment variables before starting the dev server or deploying:

- `RESEND_API_KEY` — your Resend API key (starts with `re_...`).
- `RESEND_FORM_EMAIL` — the From email address used for outgoing mail (example: `no-reply@yourdomain.com`).
- `RESEND_TO` (optional) — comma-separated recipient email(s). Defaults to `mdfarid.0118@gmail.com` when not provided.

Example (macOS / zsh):

```bash
export RESEND_API_KEY="re_your_key_here"
export RESEND_FORM_EMAIL="no-reply@thefarid.xyz"
export RESEND_TO="you@yourmail.com"
pnpm dev
```

When the contact form is submitted in the app, the server action at `src/lib/email.ts` will call Resend and forward the message using the configured recipients. Check the server logs for success/failure messages.

## Project structure

- `src/app` — Next.js app routes and layouts
- `src/components` — React components
- `src/data` — Site data (projects, skills, certificates)
- `public` — Static assets (images, icons)
- `docs` — auxiliary documentation

## Notes

- To change the displayed site name, edit `src/config/site.ts` and `src/config/site.config.ts`.
- If you deploy to a custom domain, update the siteUrl in `src/config/site.config.ts`.

## License

This project is provided as-is.
