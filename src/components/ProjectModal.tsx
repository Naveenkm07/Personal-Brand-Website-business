"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/cn";
import { hasCaseStudy, type Project } from "@/lib/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (project) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [project, onClose]);

  const open = Boolean(project);

  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative mx-auto flex h-dvh w-full max-w-4xl items-center px-5 sm:px-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              className={cn(
                "relative w-full overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-background",
              )}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[360px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.title}
                      width={220}
                      height={160}
                      className="opacity-90"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-[color:var(--color-muted-foreground)]">
                        {project.category}
                      </div>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-foreground"
                    >
                      Close
                    </button>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {hasCaseStudy(project.slug) ? (
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Read case study
                      </Link>
                    ) : null}

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-muted)] active:translate-y-0"
                    >
                      Start a project
                    </Link>
                  </div>

                  <div className="mt-8 text-xs text-[color:var(--color-muted-foreground)]">
                    Tip: press Escape to close.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
