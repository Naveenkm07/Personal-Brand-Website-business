import Link from "next/link";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

const experience = [
  {
    title: "Senior Creative Developer (Placeholder)",
    company: "Studio North",
    time: "2024 — 2026",
    points: [
      "Built motion-first landing pages and design systems.",
      "Led performance and accessibility improvements across key pages.",
      "Partnered with design to ship polished UI at speed.",
    ],
  },
  {
    title: "Designer / Developer (Placeholder)",
    company: "Freelance",
    time: "2022 — 2024",
    points: [
      "Delivered end-to-end brand + web experiences for creators.",
      "Created reusable components and content workflows.",
      "Helped clients define messaging and product positioning.",
    ],
  },
] as const;

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Accessibility",
  "Design Systems",
] as const;

const education = [
  {
    degree: "BFA in Interaction Design (Placeholder)",
    institution: "Design Institute",
    time: "2018 — 2022",
  },
] as const;

const tools = [
  "Figma",
  "VS Code",
  "Git",
  "Chrome DevTools",
  "Lighthouse",
  "PostCSS",
  "Vercel",
  "Netlify",
] as const;

export default function ResumePage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Resume"
            description="A quick overview. Replace with your real experience, links, and downloadable resume." 
          />
          <div className="mt-6">
            <Link
              href="/resume.pdf"
              download
              className="relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all will-change-transform hover:-translate-y-0.5 active:translate-y-0 bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80"
            >
              Download Resume (PDF)
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] p-8">
              <div className="text-sm text-[color:var(--color-muted-foreground)]">
                Contact
              </div>
              <div className="mt-3 text-sm">
                <div className="font-medium text-foreground">{siteConfig.name}</div>
                <Link
                  className="mt-2 block text-[color:var(--color-muted-foreground)] hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </Link>
              </div>

              <div className="mt-8 text-sm text-[color:var(--color-muted-foreground)]">
                Core skills
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-sm text-[color:var(--color-muted-foreground)]">
                Tools
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-sm text-[color:var(--color-muted-foreground)]">
                Education
              </div>
              <div className="mt-3 space-y-2">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <div className="text-sm font-medium">{edu.degree}</div>
                    <div className="text-xs text-[color:var(--color-muted-foreground)]">{edu.institution}</div>
                    <div className="text-xs text-[color:var(--color-muted-foreground)]">{edu.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experience.map((item, idx) => (
                <Reveal key={item.title} delay={Math.min(idx * 0.06, 0.18)}>
                  <div className="rounded-3xl border border-[color:var(--color-border)] p-8">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <div className="text-base font-semibold tracking-tight">
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm text-[color:var(--color-muted-foreground)]">
                          {item.company}
                        </div>
                      </div>
                      <div className="text-sm text-[color:var(--color-muted-foreground)]">
                        {item.time}
                      </div>
                    </div>

                    <ul className="mt-4 list-disc pl-5 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
