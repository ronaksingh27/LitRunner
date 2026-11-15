import type { ReactNode } from "react";
import Image from "next/image";
import { portfolio } from "@/content/portfolio";

export type CaseStudySectionData = {
  id: string;
  title: string;
  body: ReactNode;
};

export type CaseStudyData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  facts: { label: string; value: string }[];
  sections: CaseStudySectionData[];
  source: { href: string; label: string };
};

// JSX bodies allow links, images, and inline code without a Markdown parser or CMS.
export const ashSovereignCaseStudy: CaseStudyData = {
  eyebrow: "Case study / Personal website",
  title: "A personal home.",
  subtitle: "A clearer purpose.",
  intro: `An iteration on ${portfolio.brand}, the site you’re reading: make my software engineering focus easy to find, while keeping room for photography and the person behind the work.`,
  facts: [
    { label: "When", value: "November 2026" },
    { label: "Stack", value: "Next.js · TypeScript · Tailwind CSS" },
    { label: "Scope", value: "One homepage + one case study" },
  ],
  sections: [
    {
      id: "starting-point",
      title: "The starting point",
      body: (
        <>
          <p>The existing app already had my portrait, social links, and a visual identity. But the introduction didn’t explain my engineering focus. Portfolio navigation displayed a label, Profile had no destination, and two resource links pointed to a placeholder domain. Useful content was hidden inside a fixed-height scrolling card.</p>
          <figure className="case-figure">
            <Image src="/images/work/litrunner-before.png" alt="Original portfolio page: portrait, icon navigation, broad introduction, and resource links inside a gray card." width={2880} height={1612} sizes="(max-width: 700px) 85vw, 736px" />
            <figcaption>The original desktop rendering, captured before this iteration. <a href={portfolio.baseline}>Inspect the starting source</a>.</figcaption>
          </figure>
        </>
      ),
    },
    {
      id: "ownership",
      title: "Ownership and constraints",
      body: (
        <>
          <p>I set the brief: reuse the application, prioritize the current job search, preserve personal interests, and only use facts I can stand behind. I selected {portfolio.brand} as this first example, provided the current résumé destination, and chose to include my Ooty photography.</p>
          <p>This iteration was implemented with Codex assistance, including code changes, dependency maintenance, and verification. The record distinguishes those changes from my prior work. It is a small frontend example; it does not establish backend or production-scale experience.</p>
        </>
      ),
    },
    {
      id: "navigation",
      title: "The main decision: fewer interactions",
      body: (
        <>
          <p>Work, Life, and Contact now use ordinary anchor links on one page. The case study has its own URL. This makes the destinations usable with a keyboard, supports browser history and direct links, and removes the need for client-side state just to switch between static sections.</p>
          <p>Keeping one document also meant removing the fixed viewport height and nested scrolling. The content can grow naturally on a small screen. The existing portrait, texture, and yellow/blue accents remain; hierarchy and spacing do the heavier lifting.</p>
        </>
      ),
    },
    {
      id: "routing",
      title: "A small routing detail that mattered",
      body: (
        <>
          <p>The homepage content component lived in <code>src/pages/HomePage.tsx</code>. Next.js treated that file as a separate public route, even though it was intended as a component. Moving it into <code>src/components</code> keeps the shared content in one place. A redirect preserves the old URL.</p>
          <p>The lockfile also depended on an unreachable registry. Its package URLs were normalized to npm’s public registry. The framework stayed on Next.js 15, with a compatible security update rather than a new stack.</p>
        </>
      ),
    },
    {
      id: "verification",
      title: "How this is checked",
      body: (
        <>
          <p>The checks for this iteration cover the production build, TypeScript and lint, narrow mobile layouts, keyboard navigation, image loading, and link destinations. The repository handoff records commands, observed results, and remaining gaps so that the evidence can be checked again.</p>
          <ul>
            <li><code>npm ci</code> installs the locked dependency tree.</li>
            <li><code>npm run lint</code> and <code>npm run typecheck</code> check the source.</li>
            <li><code>npm run build</code>, then <code>npm start</code>, produce and serve the production version.</li>
            <li>Browser checks exercise anchor links, the case-study round trip, focus order, and mobile overflow.</li>
          </ul>
        </>
      ),
    },
    {
      id: "next-steps",
      title: "The result, and what comes next",
      body: (
        <>
          <p>The page now explains my current focus, offers a direct path to work and contact, and keeps a little photography alongside the engineering. Empty destinations have been removed. These are observable interface changes, not claims about improved hiring outcomes.</p>
          <aside className="case-aside">The next content improvement is a deeper example from a separate project, with specific ownership, a difficult bug or tradeoff, and reproducible evidence. The résumé destination is current and confirmed by its owner.</aside>
          <p>A personal reflection can follow when I have something I want to share in my own words. Leaving space for that is more honest than inventing a story to make the page feel complete.</p>
        </>
      ),
    },
  ],
  source: { href: portfolio.repository, label: "Visit the source repository" },
};
