import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "@/components/link";
import { portfolio } from "@/content/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div><p className="eyebrow">03 / Say hello</p><h2 id="contact-title">Let’s start a conversation.</h2><p>Have a software engineering opportunity, a question about my work, or something interesting to share?</p></div>
      <div className="contact-links">
        <Link href={portfolio.email} description="Email Ronak" className="button button-primary" />
        <Link href={portfolio.linkedin} description="Connect on LinkedIn" Icon={FaLinkedin} />
        <Link href={portfolio.github} description="Explore my GitHub" Icon={FaGithub} />
      </div>
    </section>
  );
}
