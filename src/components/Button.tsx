import Link from "next/link";

import { cn } from "@/lib/cn";

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
  primary:
    "bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80 hover:-translate-y-px",
  secondary:
    "border border-[color:var(--color-border)] bg-transparent hover:bg-black/[.04] dark:hover:bg-white/[.06] hover:-translate-y-px",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link href={href} className={cn(styles.base, styles[variant], className)}>
      {children}
    </Link>
  );
}
