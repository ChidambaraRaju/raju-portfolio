"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/content";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink, FileText, Play } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-[280px] hover:border-accent-purple/50 hover:shadow-glow transition-all duration-300 cursor-pointer flex flex-col justify-between">
        <CardContent className="p-6">
          <h3
            onClick={onClick}
            className="text-xl font-semibold text-gradient mb-3 group-hover:text-accent-purple-light transition-colors flex items-center gap-2"
          >
            <span className="text-lg">{project.icon}</span>
            {project.displayName}
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            {project.shortDescription}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-accent-purple/30 text-accent-purple-light hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-accent-purple/30 text-accent-purple-light hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-colors"
            >
              <Play className="w-4 h-4" />
              Demo
            </a>
          )}
          {project.links.publication && (
            <a
              href={project.links.publication}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-accent-purple/30 text-accent-purple-light hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Read
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
