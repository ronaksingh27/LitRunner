import type { CaseStudyData } from "@/content/case-studies";

type CaseStudyHeaderProps = Pick<CaseStudyData, "eyebrow" | "title" | "subtitle" | "intro" | "facts">;

export default function CaseStudyHeader({ eyebrow, title, subtitle, intro, facts }: CaseStudyHeaderProps) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}<br /><span>{subtitle}</span></h1>
      <p className="case-intro">{intro}</p>
      <dl className="case-facts">
        {facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </>
  );
}
