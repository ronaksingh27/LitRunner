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

## Deployment

No deployment was performed during this iteration. The current résumé URL was supplied and confirmed working by the owner. Independently check its anonymous access and the remaining content decisions before publishing; Google Drive was blocked in the verification browser. Set canonical URLs and an absolute sharing-image URL when the deployment domain is confirmed; no domain is invented in metadata.
