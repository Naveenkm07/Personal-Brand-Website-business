import Link from "next/link";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[color:var(--color-muted-foreground)]">
          <div className="font-medium text-foreground">{siteConfig.name}</div>
          <div>© {new Date().getFullYear()} · All rights reserved.</div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link className="hover:underline" href={siteConfig.socials.github}>
            GitHub
          </Link>
          <Link className="hover:underline" href={siteConfig.socials.linkedin}>
            LinkedIn
          </Link>
          <Link className="hover:underline" href={siteConfig.socials.twitter}>
            X
          </Link>
          <Link className="hover:underline" href={siteConfig.socials.dribbble}>
            Dribbble
          </Link>
        </div>
      </Container>
    </footer>
  );
}
