"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/content";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Sparkles, Play, FileText } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-[280px] border border-border-subtle hover:border-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
        {/* Visual indicator lines */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        
        <CardContent className="p-6">
          <h3 className="text-xl font-display font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300 flex items-center gap-2.5">
            <span className="text-2xl filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.15)]">{project.icon}</span>
            <span className="truncate">{project.displayName}</span>
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </CardContent>

        <CardContent className="p-6 pt-0 flex flex-wrap gap-2.5">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-200"
            >
              <Play className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
          {project.links.publication && (
            <a
              href={project.links.publication}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Read
            </a>
          )}
          {project.links.model && (
            <a
              href={project.links.model}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Model
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
