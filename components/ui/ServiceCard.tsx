import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  /** Si es true, el título enlaza al detalle en /servicios. */
  linkToDetail?: boolean;
}

export function ServiceCard({ service, linkToDetail = true }: ServiceCardProps) {
  const Icon = service.icon;
  const href = `/servicios#${service.slug}`;

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.02]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 transition group-hover:bg-brand-gradient group-hover:text-white dark:text-brand-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">
        {linkToDetail ? (
          <Link href={href} className="after:absolute after:inset-0">
            {service.title}
          </Link>
        ) : (
          service.title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      <p className="mt-4 flex items-start gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-200">
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
          aria-hidden="true"
        />
        {service.benefit}
      </p>
    </div>
  );
}
