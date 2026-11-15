import Hero from "@/components/home/Hero";
import WorkSection from "@/components/home/WorkSection";
import LifeSection from "@/components/home/LifeSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <WorkSection />
      <LifeSection />
      <ContactSection />
    </main>
  );
}
