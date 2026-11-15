import Image from "next/image";
import Link from "@/components/link";
import SocialLinks from "@/components/SocialLinks";
import { portfolio } from "@/content/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-rule" /> {portfolio.owner} · a.k.a. {portfolio.brand}</p>
        <h1 id="intro-title">Hey, I’m {portfolio.firstName}.<br />A software engineer,<br /><span>and a curious person.</span></h1>
        <p className="hero-intro">I have about two years of engineering experience and I’m looking for my next software engineering role.</p>
        <p className="muted hero-personal">I love exploring interesting topics, building things, and making room for life beyond the screen.</p>
        <div className="actions">
          <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
          <Link className="button button-secondary" href={portfolio.resume} description="View résumé" />
        </div>
      </div>
      <figure className="portrait">
        <div className="portrait-frame">
          <Image
            src={portfolio.portrait.src}
            alt={portfolio.portrait.alt}
            width={portfolio.portrait.width}
            height={portfolio.portrait.height}
            priority
            sizes="(max-width: 700px) 160px, 256px"
          />
        </div>
        <figcaption>{portfolio.firstName}, away from the code.</figcaption>
        <SocialLinks />
      </figure>
    </section>
  );
}
