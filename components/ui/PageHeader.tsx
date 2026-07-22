import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** Cabecera común para las páginas interiores (servicios, contacto, etc.). */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40" aria-labelledby="page-title">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-gradient-soft blur-3xl" />
      </div>
      <div className="container-page pb-4 text-center">
        {eyebrow && (
          <div className="mb-5 flex justify-center">
            <Badge>{eyebrow}</Badge>
          </div>
        )}
        <h1
          id="page-title"
          className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
