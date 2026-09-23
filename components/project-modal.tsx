"use client";

import { Project } from "@/lib/content";
import { publicationBriefs } from "@/lib/publication-briefs";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Github, ArrowUpRight, Play, Sparkles, FileText } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  const brief = publicationBriefs[project.slug];

  const links = [
    project.links.github && { href: project.links.github, label: "GitHub", icon: Github },
    project.links.demo && { href: project.links.demo, label: "Live demo", icon: Play },
    project.links.publication && { href: project.links.publication, label: "Publication", icon: FileText },
    project.links.model && { href: project.links.model, label: "Model", icon: Sparkles },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github }[];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogClose onClick={() => onOpenChange(false)} />

      <DialogHeader className="text-left">
        <p className="text-sm tracking-[0.16em] uppercase text-accent-primary">Publication</p>
        <DialogTitle>{brief?.title ?? project.displayName}</DialogTitle>
      </DialogHeader>

      <DialogContent>
        {brief ? (
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed">{brief.summary}</p>
            <ul className="space-y-3">
              {brief.points.map((point) => (
                <li key={point} className="text-sm text-text-secondary leading-relaxed pl-4 border-l border-accent-primary/40">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-text-secondary leading-relaxed">{project.shortDescription}</p>
        )}

        {links.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent-primary-light transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
