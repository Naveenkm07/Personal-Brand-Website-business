import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Work | ${siteConfig.name}`,
  description: "Projects, explorations, and selected case studies.",
  openGraph: {
    title: `Work | ${siteConfig.name}`,
    description: "Projects, explorations, and selected case studies.",
    images: ["/og.svg"],
  },
};

export default function WorkPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Work"
            description="A masonry-style grid of projects. Each card links to a case study when available."
          />
        </Reveal>

        <div className="mt-10">
          <WorkGallery projects={projects} />
        </div>
      </Container>
    </div>
  );
}
