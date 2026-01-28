import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/caseStudies";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const cs = await getCaseStudyBySlug(slug);

    return {
      title: `${cs.frontmatter.title} | Case Study | ${siteConfig.name}`,
      description: cs.frontmatter.subtitle,
      openGraph: {
        title: `${cs.frontmatter.title} | Case Study | ${siteConfig.name}`,
        description: cs.frontmatter.subtitle,
        images: ["/og.svg"],
      },
    };
  } catch {
    return {
      title: `Case Study | ${siteConfig.name}`,
      description: siteConfig.tagline,
      openGraph: {
        title: `Case Study | ${siteConfig.name}`,
        description: siteConfig.tagline,
        images: ["/og.svg"],
      },
    };
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let cs;
  try {
    cs = await getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-sm text-[color:var(--color-muted-foreground)]">
              Case Study
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              {cs.frontmatter.title}
            </h1>
            <p className="mt-4 text-pretty text-base leading-7 text-[color:var(--color-muted-foreground)]">
              {cs.frontmatter.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]">
                {cs.frontmatter.year}
              </span>
              <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]">
                {cs.frontmatter.role}
              </span>
              {cs.frontmatter.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="prose prose-zinc mt-12 max-w-none dark:prose-invert">
            {cs.content}
          </article>
        </Reveal>
      </Container>
    </div>
  );
}
