import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Tag className="text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.6rem]">
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
