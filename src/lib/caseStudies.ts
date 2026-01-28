import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";

import { compileMDX } from "next-mdx-remote/rsc";

const CASE_STUDIES_DIR = path.join(
  process.cwd(),
  "src",
  "content",
  "case-studies",
);

export type CaseStudyFrontmatter = {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tools: string[];
};

export type CaseStudy = {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: ReactNode;
};

export function getCaseStudySlugs() {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [] as string[];

  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy> {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Case study not found: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const frontmatter = parsed.data as CaseStudyFrontmatter;

  const compiled = await compileMDX<CaseStudyFrontmatter>({
    source: parsed.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: false,
    },
    components: {},
  });

  return {
    slug,
    frontmatter,
    content: compiled.content,
  };
}

export async function getAllCaseStudies() {
  const slugs = getCaseStudySlugs();
  const items = await Promise.all(slugs.map((s) => getCaseStudyBySlug(s)));

  return items;
}
