"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content";
import SectionHeading from "@/components/section-heading";
import ProjectModal from "@/components/project-modal";

interface WorkListProps {
  projects: Project[];
  showHeading?: boolean;
}

export default function WorkList({ projects, showHeading = true }: WorkListProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <SectionHeading
            title="Selected systems"
            subtitle="Agents, fine-tuning, and computer vision. Open any row for the publication brief and links."
          />
        )}

        <ul className="border-t border-line">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="group relative isolate -mx-3 grid grid-cols-1 gap-4 border-b border-line px-3 py-8 md:-mx-5 md:grid-cols-12 md:gap-6 md:px-5 md:py-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-plasma-wash transition-transform duration-500 ease-out group-hover:scale-x-100 group-has-[:focus-visible]:scale-x-100"
              />

              <div className="md:col-span-5">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-plasma-amber"
                  >
                    <span className="plasma-sweep">{project.displayName}</span>
                  </button>
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.disciplines.map((discipline) => (
                    <li
                      key={discipline}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-fg-muted transition-colors duration-300 group-hover:border-line-strong"
                    >
                      {discipline}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-relaxed text-fg-muted md:col-span-4 md:pt-1.5">
                {project.outcome}
              </p>

              <div className="flex items-start justify-between gap-4 md:col-span-3 md:justify-end md:pt-1 md:text-right">
                <p>
                  <span className="block font-mono text-2xl tracking-tight text-fg transition-colors duration-300 group-hover:text-plasma-amber">
                    {project.metric.value}
                  </span>
                  <span className="mt-1 block text-sm text-fg-muted">{project.metric.label}</span>
                </p>
                <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
            </li>
          ))}
        </ul>

        {projects.length === 0 && (
          <p className="py-16 text-fg-muted">Projects will appear here once they are added.</p>
        )}
      </div>

      <ProjectModal
        project={selected}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
