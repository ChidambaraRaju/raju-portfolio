import { getProjects } from "@/lib/content";
import Navigation from "@/components/navigation";
import ProjectsClient from "./projects-client";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      {/* Page Header */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        {/* Atmospheric mesh decoration matching the rest of the site */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent-primary/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-accent-secondary/2 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-2">
            <h1 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tight text-text-primary">
              <span className="text-gradient">Projects</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-base text-text-secondary max-w-xl font-mono tracking-wide mt-2 border-l border-accent-primary/20 pl-4 py-1">
            Real-world AI systems & core methodology implementation.
          </p>

          <div className="w-full h-[1px] bg-border-subtle mt-8" />
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

