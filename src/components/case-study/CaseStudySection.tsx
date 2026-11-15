import type { CaseStudySectionData } from "@/content/case-studies";

export default function CaseStudySection({ id, title, body }: CaseStudySectionData) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {body}
    </section>
  );
}
