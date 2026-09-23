"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <SectionHeading
            number="01 — Work"
            title="Selected systems"
            subtitle="Case studies in agents, fine-tuning, and computer vision. Open any row for the full write-up."
          />
        )}

        <div className="border-t border-border-subtle">
          {projects.map((project, index) => (
            <motion.button
              key={project.slug}
              type="button"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group w-full text-left border-b border-border-subtle py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
            >
              <span className="md:col-span-1 font-display text-xl text-accent-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl md:text-4xl text-text-primary group-hover:text-accent-primary-light transition-colors duration-300">
                  {project.displayName}
                </h3>
                <p className="mt-3 text-sm text-text-muted">
                  {project.disciplines.join("  ·  ")}
                </p>
              </div>
              <p className="md:col-span-5 text-text-secondary leading-relaxed md:pt-2">
                {project.outcome}
              </p>
              <span className="md:col-span-1 md:justify-self-end md:pt-2 text-text-muted group-hover:text-accent-primary transition-colors">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="py-16 text-text-muted">Projects will appear here once they are added.</p>
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
