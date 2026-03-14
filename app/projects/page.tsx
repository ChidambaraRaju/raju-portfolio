import { getProjects, Project } from "@/lib/content";
import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";
import ProjectsClient from "./projects-client";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Real-world AI systems I've built
          </p>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ProjectsClient projects={projects} />
        </div>
      </section>
    </main>
  );
}
