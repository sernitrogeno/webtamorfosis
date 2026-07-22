import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Marquesina horizontal continua (respeta prefers-reduced-motion vía la
 * regla global que anula las animaciones). Duplica el contenido para un bucle
 * sin cortes.
 */
export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        className
      )}
    >
      <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}
