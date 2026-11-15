import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/#home" aria-label={`${portfolio.brand} home`}>
        <span className="brand-mark" aria-hidden="true">{portfolio.monogram}</span>
        {portfolio.brand}<span className="wordmark-dot" aria-hidden="true">.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#life">Life</Link>
        <Link href="/#contact">Contact</Link>
        <a className="nav-resume" href={portfolio.resume}>Résumé <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
