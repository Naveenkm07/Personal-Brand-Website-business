import rawProjects from "@/data/projects.json";

export type ProjectCategory =
  | "Web Design"
  | "Web Development"
  | "UI/UX"
  | "Branding"
  | "Photography";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  thumbnailImage: string;
  tags: string[];
  featured: boolean;
};

export const projects = rawProjects as Project[];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function hasCaseStudy(slug: string) {
  const p = getProjectBySlug(slug);
  return Boolean(p?.tags?.includes("Case Study"));
}
