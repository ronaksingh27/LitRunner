# AshSovereign portfolio — start here

Last updated: 15 November 2026 (Asia/Kolkata). Current brand: AshSovereign, formerly LitRunner. This checkpoint records local implementation and verification; it is not permission to publish or alter external services.

## Read first

Read this handoff, `portfolio-vision-and-hiring-assessment.md`, and `docs/CODE-MAP.md` in the checkout. The vision file retains the original assessment as historical context, with a current-brand note. Current user instructions supersede both planning documents.

- Planning directory: `/Users/litrunner/Desktop/Oracle-Q`.
- Checkout: `/Users/litrunner/Desktop/Oracle-Q/LitRunner`.
- Repository: https://github.com/ronaksingh27/LitRunner — its GitHub name has not changed.
- Branch: `improve-portfolio`.
- Reviewed base: `8d5f0918e1463e5ace572ac12078279a4e73e887`; the original handoff matched this commit exactly.
- Initial checkout was clean. Implementation, documentation, and evidence are prepared on `improve-portfolio` for the owner-authorized GitHub commit/push. The commit containing this checkpoint is the implementation snapshot; resolve its SHA with `git log -1`. No live-site deployment was performed.
- Local production preview: http://127.0.0.1:3000/
- Case study: http://127.0.0.1:3000/work/ashsovereign

The preview was left running at session end. If it is unavailable, use the README setup commands; do not assume a prior server process survives between sessions.

## Intent and scope

Support Ronak Singh's current early-career software engineering search while preserving his broader identity, curiosity, photography, joy, and room for voluntary reflection. The brief supplies approximately two years of engineering experience. Do not invent employment details, accomplishments, metrics, hobbies, or setbacks.

First-release scope remains one clear homepage, one substantive case study, a small Life section, résumé access, and contact links. Reuse the existing Next.js application. Defer a CMS, backend, chatbot, live feeds, elaborate animation, large blog, and hypothetical career pages.

The original rendering was inspected before styling changes. The background texture and yellow/blue accents were retained. The owner subsequently supplied a new beach portrait, replacing the original photo. Readability, hierarchy, and ordinary document scrolling replaced the constrained scrolling card.

## Owner decisions confirmed this session

- Use this portfolio itself for the first case study. It now documents the brief, ownership, navigation decision, routing issue, checks, and limitations, with explicit Codex assistance.
- Rename the visible brand from LitRunner to AshSovereign. Header, monogram, introduction, footer, metadata, and case study use the new brand. Do not rename the remote repository without a separate request.
- Instagram: https://www.instagram.com/ronak270802/ — publicly opened and identified as Ronak Singh. The earlier `ronak_singh_2708` profile reported unavailable and has been replaced.
- Latest résumé: https://drive.google.com/file/d/1bRzhuKpuoDCWDBCmT0J01IWeWIstZQ5s/view?usp=drivesdk — supplied and confirmed current/working by the owner. It replaces the earlier Drive URL everywhere in the app. Independent access was blocked with `ERR_BLOCKED_BY_ADMINISTRATOR` in the verification browser; this is not evidence that the file is inaccessible to other visitors.
- Feature the existing Ooty photography link with an attributed motivational/growth quote. The public 500px page identified the image as Ooty, by Ronak Singh, with forest subject matter. A short Epictetus quotation was verified against Discourses I.15 and linked to its text; it is not presented as Ronak's own reflection.
- Make future edits straightforward through modular code. The monolithic homepage was split into four section components; the common shell and case-study renderer are reusable. Identity/destinations and typed case-study content are separate from page composition. No arbitrary percentage score is claimed.

## Implemented

- Clear name, engineering focus, approximate experience, job-search intent, résumé, and work actions.
- Working Work/Life/Contact anchors, accessible social links, direct email contact, and a case-study route.
- Removed empty Portfolio/Profile interactions, Files/Presentation placeholders, and the Medium management URL.
- Homepage sections for Work, Life, and Contact; existing portrait and photography material preserved.
- One detailed case study, including a pre-change screenshot and original source snapshot link. The source link leads to the existing repository; the default branch may lag the working branch until merged.
- Semantic links, skip-to-content, visible focus rings, heading structure, descriptive image alternatives, normal document scrolling, and responsive layouts.
- Metadata, project-specific README, repository AGENTS.md, code map, and verification records.
- `/HomePage` redirects to `/#home`; `/work/litrunner` redirects to `/work/ashsovereign`.
- Lockfile public-registry normalization; compatible Next.js security maintenance; reproducible runtime/setup notes.

## Code map and changed files

- `src/content/portfolio.ts`: one source for brand, monogram, identity metadata, portrait source/dimensions/alt text, résumé, social/contact destinations, and case-study path.
- `src/components/HomePage.tsx`: homepage composition only.
- `src/components/home/Hero.tsx`, `WorkSection.tsx`, `LifeSection.tsx`, `ContactSection.tsx`: one visible section each.
- `src/components/SiteShell.tsx`, `Header.tsx`, `Footer.tsx`, `SocialLinks.tsx`, `SectionHeading.tsx`, `link.tsx`: shared UI. SiteShell replaces the old app/Card wrapper.
- `src/content/case-studies.tsx`: typed case-study content with explicit JSX bodies.
- `src/components/case-study/`: CaseStudyView, CaseStudyHeader, and CaseStudySection; the App Router page selects content and metadata.
- `src/app/page.tsx`, `src/app/work/ashsovereign/page.tsx`, `layout.tsx`, `globals.css`: thin routes, metadata, and grouped styling.
- `src/pages/HomePage.tsx` was moved out of Next's Pages Router to remove the accidental standalone route.
- `next.config.ts`, `tailwind.config.ts`, `.eslintignore`, `.nvmrc`, package files: redirects, all-src scanning, generated-file exclusions, runtime, dependency and check commands.
- `public/images/work/litrunner-before.png`: original desktop screenshot; the historical filename is intentional.
- `README.md`, `AGENTS.md`, `docs/CODE-MAP.md`, both planning documents, and `docs/verification/`: continuation instructions and evidence.

See `docs/CODE-MAP.md` for the requirement-to-file table, component tree, adding a case study, route renaming, and verification steps. There are 14 focused/shared components under `src/components`; data records are not counted as components.

## Locally verified

Final checks were performed on the production build, not only the development server.

- Runtime: Node 24.22.3 LTS; pinned in `.nvmrc`. A temporary runtime was installed under `/private/tmp/litrunner-runtime`; no global Node version was changed. Initial baseline checks used available Node 20.19.0, then final installation/build checks were repeated on Node 24 because Node 20 is EOL.
- `npm ci --registry=https://registry.npmjs.org --no-audit --no-fund`: passed on Node 24.
- `npm run lint`: passed with zero project warnings/errors.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepage and `/work/ashsovereign` statically rendered.
- `npm start -- --hostname 127.0.0.1`: production preview started successfully.
- `git diff --check`: passed.
- Both pages checked at 320, 390, 768, and 1440 CSS pixels: document width matched viewport, no horizontal overflow, images loaded, no unnamed links.
- Actual Tab traversal: all 19 homepage links and 10 case-study links reachable with visible focus rings. Skip link moved focus to `main-content`. Case-study entry/return, Work/Life/Contact navigation, and browser hash destinations exercised.
- Local pages/assets returned successfully; both legacy routes followed redirects to their intended destinations.
- No browser console errors or warnings observed on the final pages.
- Refactor comparison: page titles, image markup, link structure, and normalized visible text matched the expected pre-refactor output after accounting for the requested résumé URL/copy update. At 1440px, document heights were unchanged: homepage 1894px, case study 3003px. Final mobile rendering was inspected again.
- Final measurements: `docs/verification/browser-checks.json`. Baseline screenshot is included in the case study. Final screenshots were inspected in this chat; they are not saved as repository files.

These checks are not a full screen-reader audit, a cross-browser/device lab run, or a public-deployment verification.

## Dependency results

- Next.js and eslint-config-next: 15.0.4 → 15.5.29; existing React 19/TypeScript/Tailwind application retained.
- Compatible overrides patch Next's nested PostCSS 8 and brace-expansion 1. Keep the override explanation in README until upstream resolution permits removal.
- Audit baseline: 14 affected packages (1 critical, 10 high, 3 moderate).
- Final installed graph: 8 moderate findings in development tooling; 0 high and 0 critical. Remaining paths involve TypeScript ESLint and Sucrase/glob/minimatch. Do not report a clean audit or apply forced major upgrades silently.
- Details and advisory URLs: `docs/verification/dependency-audit.json`.
- Node release status reference: https://nodejs.org/en/about/previous-releases

## External verification

Publicly opened: GitHub profile and repository, LinkedIn profile, corrected Instagram profile, Ooty photo, and the quotation source. These checks establish observed destinations, not a guarantee of future availability. The email link is syntactically checked and matches supplied materials; no message was sent and delivery was not tested.

Ooty: https://500px.com/photo/1106187294/ooty-by-ronak-singh.com
Quote source: https://en.wikisource.org/wiki/The_Works_of_Epictetus%2C_His_Discourses%2C_in_Four_Books%2C_the_Enchiridion%2C_and_Fragments/Book_1/Chapter_15

Résumé: owner-confirmed; browser-blocked for independent verification. Public deployment, canonical domain, sharing-image URL, and external profile distribution remain unverified/not performed. No employer-restricted material was added to the app or repository.

## Remaining decisions and exact next action

1. Review the local AshSovereign preview and its introduction/case-study wording. Independently open the latest résumé in a signed-out browser before launch.
2. Confirm a deployment destination and publish only when the user requests it. Configure canonical and absolute sharing-image URLs once the domain is known; verify the deployed result afterward.
3. After the first release, add a deeper independent-project example with the owner's actual contribution, one difficult decision/debugging incident, tests or reproduction steps, and outcomes. This portfolio case study is a limited frontend example and explicitly credits assistance.
4. Add an optional personal caption/reflection in the owner's own words when supplied. Do not manufacture vulnerability or treat the quote as an autobiographical statement.

Keep this checkpoint current after each session. Distinguish implemented, locally verified, externally observed, and publicly deployed work.

## Photo update and GitHub publication session — 15 November 2026

The owner explicitly requested committing and pushing the portfolio changes, then supplied a replacement profile photo before the commit.

- Added the supplied PNG unchanged as `public/images/ronak-profile.png` (1286×1260). The hero uses `portfolio.portrait` from the shared content file. The existing responsive frame handles the display crop.
- Re-ran lint, TypeScript, and production build on Node 24.22.3: all passed.
- Inspected the new portrait at desktop and mobile sizes; it loaded successfully at 320, 390, 768, and 1440px with no horizontal overflow.
- Fetched `origin`: remote `main` still matched the reviewed base, and no `origin/improve-portfolio` branch existed before this push.
- Publish source to `origin/improve-portfolio`; do not merge into `main`, force-push, rename the repository, or deploy the website as part of this request. The remote hash is checked after pushing; the final result is recorded in the chat and the planning-directory checkpoint.
