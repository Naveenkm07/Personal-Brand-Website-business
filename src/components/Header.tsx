"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const current = useMemo(() => pathname ?? "/", [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="hidden text-sm text-[color:var(--color-muted-foreground)] sm:inline">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? current === "/"
                : current.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-[color:var(--color-muted)] text-foreground"
                    : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-5 pb-5 sm:px-6">
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-background">
            <div className="flex flex-col p-2">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? current === "/"
                    : current.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm",
                      active
                        ? "bg-[color:var(--color-muted)] text-foreground"
                        : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
