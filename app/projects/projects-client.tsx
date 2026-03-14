"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/content";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-text-muted">Loading projects...</p>
        </motion.div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
