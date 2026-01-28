"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { hasCaseStudy, type Project } from "@/lib/projects";

export function ProjectCard({
  project,
  onQuickView,
}: {
  project: Project;
  onQuickView?: (project: Project) => void;
}) {
  const hasCS = hasCaseStudy(project.slug);
  const href = hasCS ? `/case-studies/${project.slug}` : "/work";
  const cta = hasCS ? "View case study" : "View project";

  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-background",
        "hover:bg-[color:var(--color-muted)] transition-colors",
      )}
    >
      <div className="relative aspect-[16/11] w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
        <div className="absolute inset-0 grid place-items-center overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            width={64}
            height={64}
            className="opacity-80 transition-transform duration-300 group-hover:scale-125"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="text-xs text-[color:var(--color-muted-foreground)]">
            {project.category}
          </div>
        </div>

        <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs",
                "text-[color:var(--color-muted-foreground)] transition-colors",
                "hover:bg-background hover:text-foreground",
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 text-sm font-medium">
          <span className="text-foreground/80 transition-colors group-hover:text-foreground">
            {cta}
          </span>

          {onQuickView ? (
            <button
              type="button"
              className={cn(
                "rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs",
                "text-[color:var(--color-muted-foreground)] transition-colors",
                "hover:bg-background hover:text-foreground",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(project);
              }}
            >
              Quick view
            </button>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
