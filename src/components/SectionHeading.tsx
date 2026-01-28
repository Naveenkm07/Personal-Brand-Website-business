import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-end justify-between gap-6", className)}>
      <div>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted-foreground)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
