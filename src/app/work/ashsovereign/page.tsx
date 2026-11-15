import type { Metadata } from "next";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import { ashSovereignCaseStudy } from "@/content/case-studies";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: `${portfolio.brand} — a portfolio iteration`,
  description: "A focused improvement to an existing Next.js portfolio: scope, ownership, navigation decisions, and verification.",
  openGraph: {
    title: `${portfolio.brand} — a portfolio iteration`,
    description: "The decisions behind a clearer, more usable personal portfolio.",
    type: "article",
  },
};

export default function AshSovereignCaseStudyPage() {
  return <CaseStudyView study={ashSovereignCaseStudy} />;
}
