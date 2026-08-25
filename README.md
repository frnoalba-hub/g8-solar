# G8 Solar website

Production marketing site for [g8solarenergy.com](https://g8solarenergy.com/).

## Source of truth

GitHub is the code, review, and release authority for this site:

- Repository: `https://github.com/frnoalba-hub/g8-solar`
- Production branch: `main`
- Make and review changes locally, then commit and push them to GitHub.
- Do not edit production code in a downstream visual builder. A hosting platform may consume the repository, but it is not the source of truth.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
copy .env.example .env.local
npm run dev
```

Before release:

```bash
npm run lint
npm run typecheck
npm run build
```

Never commit `.env.local` or live credentials.

## Environment variables

- `VITE_WEB3FORMS_ACCESS_KEY`: primary lead-email delivery
- `VITE_GOOGLE_ADS_ID`: Google Ads account ID
- `VITE_GOOGLE_ADS_CONVERSION_LABEL`: conversion action label
- `VITE_BASE44_APP_ID`, `VITE_BASE44_APP_BASE_URL`, `VITE_BASE44_FUNCTIONS_VERSION`: optional legacy lead-record fallback only

The public site no longer requires Base44 authentication or its Vite editor plugin to render. The SDK remains as a guarded lead-storage fallback until a GitHub-controlled CRM replacement is configured and verified.

## Release

1. Validate lint, typecheck, and production build.
2. Commit the complete reviewed change set.
3. Push `main` to GitHub.
4. Let the connected production host build from `main`.
5. Verify the canonical domain, lead form, mobile navigation, metadata, `robots.txt`, sitemap, and `llms.txt`.

Live deployment secrets belong in the hosting provider's environment settings, never in Git.

## SEO and AI discoverability

The site uses visible service content, canonical metadata, Organization/Service and FAQ structured data, `robots.txt`, `sitemap.xml`, and `llms.txt`. Structured data and machine-readable summaries must match visible, current claims. Incentives and utility policies should be checked against official sources before publication.
