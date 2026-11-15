import { FaCameraRetro } from "react-icons/fa";
import Link from "@/components/link";
import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/content/portfolio";

export default function LifeSection() {
  return (
    <section id="life" className="section life-section" aria-labelledby="life-title">
      <SectionHeading eyebrow="02 / Beyond the screen" id="life-title" title="There’s more to me than code." />
      <div className="life-grid">
        <div className="photo-story">
          <FaCameraRetro className="life-icon" size={28} aria-hidden="true" />
          <p className="project-meta">A little photography</p>
          <h3>Ooty, through my lens.</h3>
          <p>A forest photograph from Ooty. A small glimpse of what catches my eye beyond software.</p>
          <Link href={portfolio.photography} description="See my Ooty photograph" />
        </div>
        <figure className="quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>No great thing is created suddenly.</blockquote>
          <figcaption>— Epictetus, <a href={portfolio.quote}><cite>Discourses</cite>, I.15</a></figcaption>
        </figure>
      </div>
    </section>
  );
}
