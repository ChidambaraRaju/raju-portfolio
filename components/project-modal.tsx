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
      <DialogHeader>
        <DialogClose onClick={() => onOpenChange(false)} />
        <p className="text-sm text-fg-muted">
          {brief ? "From the publication" : project.displayName}
        </p>
        <DialogTitle>{brief?.title ?? project.displayName}</DialogTitle>
      </DialogHeader>

      <DialogContent>
        {brief ? (
          <div className="space-y-7">
            <p className="text-lg leading-relaxed text-fg">{brief.summary}</p>
            <ul className="space-y-4">
              {brief.points.map((point) => (
                <li
                  key={point}
                  className="border-l border-plasma-pink/60 pl-4 text-sm leading-relaxed text-fg-muted"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="leading-relaxed text-fg-muted">{project.shortDescription}</p>
        )}

        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2.5 border-t border-line pt-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-fg/[0.04] px-4 py-2 text-sm text-fg transition-colors hover:border-fg/40 hover:bg-fg/[0.09]"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-fg-muted" />
              </a>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
