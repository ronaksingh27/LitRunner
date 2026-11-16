# AshSovereign — Ronak Singh

A personal portfolio with a clear software engineering introduction, one documented frontend case study, photography, résumé access, and direct contact links.

## Run locally

Use Node 24.22.3 LTS (the version verified for this iteration; `.nvmrc` is included). Run `nvm install` first if needed.

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or external services are required to render the site.

## Check the production version

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The homepage and `/work/ashsovereign` are statically rendered. `/work/litrunner` redirects to the renamed case study. The GitHub repository is still named LitRunner. `/HomePage`, an old accidental route, redirects to the introduction. Use `npm run build` before `npm start`, and stop the development server before building because both use `.next`.

## Where to edit

See [the code map](docs/CODE-MAP.md) for component boundaries, the task-to-file guide, and instructions for adding or changing content.

- `src/content/portfolio.ts`: brand, résumé, social links, and contact destinations.
- `src/components/home/`: one component per homepage section.
- `src/content/case-studies.tsx`: typed case-study content.
- `src/components/case-study/`: reusable case-study rendering.
- `src/components/SiteShell.tsx`: shared header, content, and footer composition.
- `src/app/globals.css`: responsive styles and the existing visual palette.
- `docs/PORTFOLIO-HANDOFF.md`: progress, verified checks, limitations, and next action.

## Content and ownership

This iteration uses the owner's brief and existing public portfolio. The portrait was supplied by the owner; the textured background is an existing asset. The Ooty photograph is linked on 500px, with no third-party image dependency in the page. The short Epictetus quotation links to its text in *Discourses*, I.15 (Higginson translation).

The case study explicitly records Codex assistance. It describes this site's implementation, without inventing business outcomes, employer details, or personal experiences. Private performance documents and résumé drafts are not included in this repository.

## Dependency notes

The original lockfile referenced an unreachable internal registry. Public package URLs now use registry.npmjs.org. Next.js and its ESLint config are pinned to 15.5.29. Compatible overrides patch Next's nested PostCSS 8 and brace-expansion 1; keep them until upstream dependencies resolve to patched versions. See the handoff for the measured audit results and remaining development-tool advisories.

## Visitor analytics

The root layout loads Google Analytics 4 (`G-4DL4FN1PW9`) through `@next/third-parties/google` after hydration, on all routes in production only. `npm run dev` does not load the tag; a local `npm start` production preview does. The measurement ID is public configuration, and no analytics secret or VM environment variable is required.

In the GA4 web stream, enable Enhanced measurement → Page views → Page changes based on browser history events to measure Next.js client-side navigation. Enhanced measurement also supports outbound-link clicks; the Google Drive résumé link is an outbound click, not an automatic PDF download event. No custom events are added here.

After deploying the new build, open the public site and navigate to the case study, then check GA4's Realtime report. Browser tracking protection, ad blockers, and consent settings can prevent collection. Loading the tag locally is not proof that the Analytics property received events.

## Deployment

The portfolio is hosted at https://theashsovereign.duckdns.org/. See the [project, deployment, and learning record](docs/ASHSOVEREIGN-DEPLOYMENT-GUIDE.txt) for the implementation history, architecture, verification evidence, Ubuntu/systemd/Nginx runbook, DNS and TLS explanations, troubleshooting, and a checklist for adapting the setup to another app. Its original filename is retained for existing links.

On 16 November 2026, owner-supplied terminal output confirmed the HTTP-to-HTTPS redirect, HTTPS homepage access after a VM reboot, and a successful certificate-renewal dry run with a scheduled renewal timer. The guide distinguishes these checks from remaining public-page and configuration checks.

The current résumé URL was supplied and confirmed working by the owner. Independently check its anonymous access; Google Drive was blocked in the earlier verification browser. Canonical and absolute sharing-image metadata remain follow-up work.
