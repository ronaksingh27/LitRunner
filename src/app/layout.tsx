import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: { default: `${portfolio.owner} — ${portfolio.role} · ${portfolio.brand}`, template: `%s · ${portfolio.brand}` },
  description: "Ronak Singh’s personal home: software engineering, a closer look at the work, and life beyond the screen.",
  openGraph: {
    title: `${portfolio.owner} — ${portfolio.role} · ${portfolio.brand}`,
    description: "Software engineering, a closer look at the work, and life beyond the screen.",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary", title: `${portfolio.owner} · ${portfolio.brand}`, description: "Software engineering and life beyond the screen." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
