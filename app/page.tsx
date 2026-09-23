import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WorkList from "@/components/work-list";
import About from "@/components/about";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import { getAboutContent, getSkills, getCertifications, getProjects } from "@/lib/content";

export default async function Home() {
  const [aboutContent, skills, certifications, projects] = await Promise.all([
    getAboutContent(),
    getSkills(),
    getCertifications(),
    getProjects(),
  ]);

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />
      <Hero />
      <WorkList projects={projects} />
      <About content={aboutContent} />
      <Skills skills={skills} />
      <Certifications certifications={certifications} />
      <Contact />
    </main>
  );
}
