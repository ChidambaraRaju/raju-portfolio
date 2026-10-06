import { getProjects } from "@/lib/content";
import Navigation from "@/components/navigation";
import WorkList from "@/components/work-list";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-ink">
      <Navigation />

      <section className="px-6 pb-4 pt-40">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-fg md:text-7xl">
            Selected systems
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
            Case studies in agents, fine-tuning, and computer vision.
          </p>
        </div>
      </section>

      <WorkList projects={projects} showHeading={false} />
    </main>
  );
}
