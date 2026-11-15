import NextLink from "next/link";
import Link from "@/components/link";
import SiteShell from "@/components/SiteShell";
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudySection from "./CaseStudySection";
import type { CaseStudyData } from "@/content/case-studies";

export default function CaseStudyView({ study }: { study: CaseStudyData }) {
  return (
    <SiteShell>
      <main id="main-content" tabIndex={-1} className="case-study">
        <NextLink className="text-link" href="/#work"><span aria-hidden="true">←</span> Back to selected work</NextLink>
        <CaseStudyHeader {...study} />
        <div className="case-content">
          {study.sections.map(section => <CaseStudySection key={section.id} {...section} />)}
          <Link href={study.source.href} description={study.source.label} />
        </div>
      </main>
    </SiteShell>
  );
}
