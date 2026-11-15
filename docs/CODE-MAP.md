# AshSovereign code map

Start here for a focused edit. Read `PORTFOLIO-HANDOFF.md` for the latest checks and unresolved content decisions.

## Where to change things

| Requirement | File |
| --- | --- |
| Brand, monogram, name, portrait asset, role metadata, résumé, social and contact destinations | `src/content/portfolio.ts` |
| Introduction, experience wording, portrait, main calls to action | `src/components/home/Hero.tsx` |
| Selected project preview | `src/components/home/WorkSection.tsx` |
| Photography, personal material, attributed quote | `src/components/home/LifeSection.tsx` |
| Contact wording and actions | `src/components/home/ContactSection.tsx` |
| Case-study facts, prose, images, and evidence links | `src/content/case-studies.tsx` |
| Shared header/navigation or footer | `src/components/Header.tsx`, `Footer.tsx` |
| Shared social icons and their accessible names | `src/components/SocialLinks.tsx` |
| Responsive layout, colors, spacing, focus styles | `src/app/globals.css` |
| Page title and sharing description | `src/app/layout.tsx`, case-study route metadata |
| Routes and redirects | `src/app/**/page.tsx`, `next.config.ts` |

The portrait source, dimensions, and alt text live in `portfolio.portrait`; the hero renders that record. The résumé URL has one source in `portfolio.ts`; the header and hero consume it. The current URL was supplied and confirmed by the owner. The repository is still named LitRunner on GitHub, so its source links retain that name.

## Composition and boundaries

```text
app/page.tsx
└── SiteShell (Header + children + Footer)
    └── HomePage (main landmark + section order)
        ├── Hero → SocialLinks + external Link
        ├── WorkSection → SectionHeading
        ├── LifeSection → SectionHeading + external Link
        └── ContactSection → external Link

app/work/ashsovereign/page.tsx (metadata + content selection)
└── CaseStudyView
    └── SiteShell
        └── main
            ├── CaseStudyHeader (facts and introduction)
            └── CaseStudySection × content sections
```

Page routes compose components. Homepage components own one visible section each. Shared components own repeated UI. Content modules own identity, destinations, and the typed case-study record. All are server components; the current site needs no client state.

`CaseStudyData` and `CaseStudySectionData` define the case-study contract. Rich body content is JSX (`ReactNode`) so links, inline code, and screenshots stay explicit, without adding a parser or CMS. Keep this content on the server. `CaseStudyView`, `CaseStudyHeader`, and `CaseStudySection` render any record that follows the contract.

Styles remain in one small stylesheet, grouped by shared shell, homepage, case study, and responsive breakpoints. CSS class names are the connection between the focused components and that stylesheet. Tailwind's source glob includes all of `src`, including JSX content.

## Common changes

1. To change the résumé or a profile link, edit only `portfolio.ts`, then inspect the rendered links.
2. To change the brand, edit `brand` and `monogram`. Brand-dependent UI and metadata derive from them. Routes remain explicit: changing the URL also requires moving its route folder, updating `caseStudyPath`, and retaining a redirect in `next.config.ts`.
3. To change the current professional focus, update the wording in `Hero.tsx` and `ContactSection.tsx`, plus `role` and relevant descriptions. Publish only owner-confirmed facts.
4. To add a case study, add a typed content record, create a thin App Router page using `CaseStudyView`, and add its preview to `WorkSection`. Keep section IDs unique within the page.
5. To reorder homepage sections, change only the composition in `HomePage.tsx` and recheck navigation/focus order.

## Verify a change

Use the Node version in `.nvmrc`. Run `npm run lint`, `npm run typecheck`, and `npm run build`. Stop a running development server before building. If a moved route leaves stale generated types, run a fresh build before the standalone typecheck.

For visible or structural edits, inspect the production preview on desktop and at 320/390px, tab through the page, activate navigation and the case-study return link, and check image loading and destinations. Record what was observed in `PORTFOLIO-HANDOFF.md`; code changes alone are not verification.
