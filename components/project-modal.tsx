"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/content";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Github, ExternalLink, Play, Sparkles, FileText } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-gradient mb-3 mt-6">{children}</h3>
);

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  // Extract sections from markdown content
  const sections: Record<string, string> = {};
  let currentSection = "";
  const contentLines = project.content.split("\n");

  contentLines.forEach((line) => {
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      currentSection = headingMatch[1];
      sections[currentSection] = "";
    } else if (currentSection) {
      sections[currentSection] += line + "\n";
    }
  });

  const hasLinks =
    project.links.github || project.links.demo || project.links.publication || project.links.model;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogClose onClick={() => onOpenChange(false)} />

      <DialogHeader>
        <DialogTitle>{project.displayName}</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="markdown-content prose prose-invert max-w-none">
          {Object.entries(sections).map(([sectionTitle, sectionContent]) => {
            // Skip Overview as it's shown in the title
            if (sectionTitle === "Overview" || sectionTitle === "Links" || !sectionContent.trim()) {
              return null;
            }

            return (
              <div key={sectionTitle}>
                <SectionTitle>{sectionTitle}</SectionTitle>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p className="text-text-secondary leading-relaxed mb-3">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-text-secondary space-y-2 mb-3 ml-4">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-text-secondary leading-relaxed">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-accent-purple-light font-semibold">{children}</strong>
                    ),
                  }}
                >
                  {sectionContent}
                </ReactMarkdown>
              </div>
            );
          })}
        </div>

        {hasLinks && (
          <div className="mt-8 pt-6 border-t border-border-subtle">
            <SectionTitle>Links</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <Button variant="default" asChild>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button variant="secondary" asChild>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Live Demo
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
              {project.links.publication && (
                <Button variant="outline" asChild>
                  <a
                    href={project.links.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Read
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
              {project.links.model && (
                <Button variant="outline" asChild>
                  <a
                    href={project.links.model}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Model
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
