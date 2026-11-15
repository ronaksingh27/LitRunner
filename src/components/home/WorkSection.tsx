import NextLink from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/content/portfolio";

export default function WorkSection() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <SectionHeading eyebrow="01 / Selected work" id="work-title" title="A closer look at the build." />
      <article className="project-card">
        <div className="project-number" aria-hidden="true">01</div>
        <div className="project-body">
          <p className="project-meta">Personal project · Next.js / TypeScript / Tailwind CSS</p>
          <h3><NextLink href={portfolio.caseStudyPath}>{portfolio.brand}: a personal home, with purpose <span aria-hidden="true">↗</span></NextLink></h3>
          <p>Improving this existing portfolio so a visitor can find my engineering focus, inspect a real change, and get to know the person behind it.</p>
          <p className="project-note">A small, ongoing iteration. Built with AI assistance; scope, decisions, and checks are documented.</p>
          <NextLink className="text-link" href={portfolio.caseStudyPath}>Read the case study <span aria-hidden="true">→</span></NextLink>
        </div>
      </article>
    </section>
  );
}
