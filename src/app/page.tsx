import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Portfolio`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.tagline,
    images: ["/og.svg"],
  },
};

export default function Home() {
  const featured = featuredProjects.slice(0, 6);

  return (
    <div>
      <Hero />

      <section className="mt-16 border-t border-[color:var(--color-border)] py-16 sm:mt-20 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Selected Work"
              description="A few highlighted projects and case studies. Swap these with your own work in src/lib/projects.ts and src/content/case-studies."
            />
          </Reveal>

          <div className="mt-10">
            <WorkGallery projects={featured} />
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 flex">
              <Button href="/work" variant="secondary">
                View all projects
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[color:var(--color-border)] py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-muted)] p-10">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                This is a placeholder CTA block. Replace with your services, availability, or booking flow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Contact</Button>
                <Button href="/resume" variant="secondary">
                  View resume
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
