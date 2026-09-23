import { getProjects } from "@/lib/content";
import Navigation from "@/components/navigation";
import WorkList from "@/components/work-list";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      <section className="pt-36 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="mb-3 text-sm tracking-[0.18em] uppercase text-accent-primary">Work</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight text-text-primary">
            Selected systems
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary leading-relaxed">
            Case studies in agents, fine-tuning, and computer vision.
          </p>
        </div>
      </section>

      <WorkList projects={projects} showHeading={false} />
    </main>
  );
}
