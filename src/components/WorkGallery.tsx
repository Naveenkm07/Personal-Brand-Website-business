"use client";

import { useState } from "react";

import { MasonryGrid, MasonryItem } from "@/components/MasonryGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects";

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <MasonryGrid>
        {projects.map((project, idx) => (
          <MasonryItem key={project.slug}>
            <Reveal delay={Math.min(idx * 0.03, 0.2)}>
              <ProjectCard project={project} onQuickView={setSelected} />
            </Reveal>
          </MasonryItem>
        ))}
      </MasonryGrid>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
