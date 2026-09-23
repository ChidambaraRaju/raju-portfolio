"use client";

import { Project } from "@/lib/content";
import WorkList from "@/components/work-list";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return <WorkList projects={projects} showHeading={false} />;
}
