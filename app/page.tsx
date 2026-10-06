import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WorkList from "@/components/work-list";
import About from "@/components/about";
import Toolkit from "@/components/toolkit";
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
    <main className="min-h-screen bg-ink">
      <Navigation />
      <Hero />
      <WorkList projects={projects} />
      <About content={aboutContent} />
      <Toolkit skills={skills} certifications={certifications} />
      <Contact />
    </main>
  );
}
