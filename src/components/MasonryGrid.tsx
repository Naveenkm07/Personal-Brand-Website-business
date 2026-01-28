import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function MasonryGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "columns-1 gap-6 sm:columns-2 lg:columns-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MasonryItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 break-inside-avoid", className)}>{children}</div>
  );
}
