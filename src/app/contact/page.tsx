import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Contact / Booking"
            description="Use this page to route inquiries into a simple email flow or an external booking tool."
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-muted)] p-8">
              <div className="text-sm text-[color:var(--color-muted-foreground)]">
                Quick contact
              </div>
              <div className="mt-3 text-base font-semibold tracking-tight">
                {siteConfig.email}
              </div>
              <div className="mt-2 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                Response time: 24–48 hours (placeholder).
              </div>
              <div className="mt-6">
                <Button href={`mailto:${siteConfig.email}`}>Email me</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-3xl border border-[color:var(--color-border)] p-8">
                <div className="text-sm text-[color:var(--color-muted-foreground)]">
                  Send a message
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  Contact form
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                  Fill out the form below and I’ll get back to you.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div className="rounded-3xl border border-[color:var(--color-border)] p-8">
                <div className="text-sm text-[color:var(--color-muted-foreground)]">
                  Booking
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  Discovery call (placeholder)
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                  Replace this with a Calendly/Cal.com link or embed. For now, it’s a
                  simple outbound link placeholder.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.socials.linkedin} variant="secondary">
                    Book via link
                  </Button>
                  <Link
                    className="self-center text-sm text-[color:var(--color-muted-foreground)] hover:underline"
                    href="/work"
                  >
                    Prefer to browse work first?
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
