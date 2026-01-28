import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="About"
            description="Replace this page with your story, process, and what you care about."
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-muted)] p-8">
              <div className="text-sm text-[color:var(--color-muted-foreground)]">
                Currently
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight">
                {siteConfig.role}
              </div>
              <div className="mt-2 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                {siteConfig.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="lg:col-span-2">
              <div className="prose prose-zinc max-w-none dark:prose-invert">
                <p>
                  This is placeholder copy. Use this space to describe your craft and
                  the kind of work you want to be known for.
                </p>
                <p>
                  Suggested structure:
                </p>
                <ul>
                  <li>What you do and who you help</li>
                  <li>Your creative philosophy</li>
                  <li>Your process (discovery → design → build)</li>
                  <li>Tools you love and why</li>
                </ul>
                <p>
                  Keep it short, specific, and human.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
