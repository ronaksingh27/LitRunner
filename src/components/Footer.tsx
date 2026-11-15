import { portfolio } from "@/content/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>{portfolio.owner} <span aria-hidden="true">/</span> {portfolio.brand}</p>
      <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
