import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import { getAboutContent, getSkills, getCertifications } from "@/lib/content";

export default async function Home() {
  const [aboutContent, skills, certifications] = await Promise.all([
    getAboutContent(),
    getSkills(),
    getCertifications(),
  ]);

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />
      <Hero />
      <About content={aboutContent} />
      <Skills skills={skills} />
      <Certifications certifications={certifications} />
      <Contact />
    </main>
  );
}
