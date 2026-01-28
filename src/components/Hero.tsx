import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="pt-14 sm:pt-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {siteConfig.name}
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-4 text-lg text-[color:var(--color-muted-foreground)] sm:text-xl">
              {siteConfig.role}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-pretty text-lg leading-8 text-[color:var(--color-muted-foreground)]">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/work">View Work</Button>
              <Button href="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
