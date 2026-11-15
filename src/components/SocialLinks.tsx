import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/content/portfolio";

const profiles = [
  { name: "GitHub", href: portfolio.github, Icon: FaGithub },
  { name: "LinkedIn", href: portfolio.linkedin, Icon: FaLinkedin },
  { name: "Instagram", href: portfolio.instagram, Icon: FaInstagram },
];

export default function SocialLinks() {
  return (
    <div className="portrait-links">
      {profiles.map(({ name, href, Icon }) => (
        <a key={name} href={href} aria-label={`${portfolio.firstName} on ${name}`}>
          <Icon aria-hidden="true" size={21} />
        </a>
      ))}
    </div>
  );
}
