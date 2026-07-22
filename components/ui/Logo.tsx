import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string | null;
  /** Muestra la marca del isotipo geométrico junto al texto. */
  withMark?: boolean;
}

/**
 * Logotipo textual Webtamorfosis.
 * Destaca visualmente la combinación "Web" + "tamorfosis" mediante peso
 * tipográfico y gradiente de marca. El isotipo es una forma geométrica y
 * abstracta (dos triángulos que evolucionan), no una mariposa literal.
 */
export function Logo({ className, href = "/", withMark = true }: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {withMark && <LogoMark className="h-6 w-6 shrink-0" />}
      <span className="text-lg font-extrabold tracking-tight">
        <span className="text-foreground">{site.brandSplit.first}</span>
        <span className="text-gradient">{site.brandSplit.second}</span>
      </span>
    </span>
  );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label={`${site.name} — inicio`}
    >
      {content}
    </Link>
  );
}

/** Isotipo geométrico: dos formas que se transforman de apagado a brillante. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="wt-mark" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#3b6dff" />
        </linearGradient>
      </defs>
      {/* Ala apagada (antes) */}
      <path
        d="M15 4 L4 16 L15 28 Z"
        className="fill-slate-300 dark:fill-white/20"
      />
      {/* Ala brillante (después) */}
      <path d="M17 4 L28 16 L17 28 Z" fill="url(#wt-mark)" />
    </svg>
  );
}
