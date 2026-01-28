import type { Metadata } from "next";

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return Promise.resolve({
    title: `Case Study`,
    description: "In-depth case study showcasing process, tools, and outcomes.",
  });
}
