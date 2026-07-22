import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

interface LegalContentProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/**
 * Envoltorio común para las páginas legales.
 * Muestra un aviso visible de que el texto es una plantilla pendiente de
 * revisión profesional.
 */
export function LegalContent({ title, updated, children }: LegalContentProps) {
  return (
    <>
      <PageHeader eyebrow="Textos legales" title={title} />
      <div className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-warm-500/25 bg-warm-500/5 p-4 text-sm text-muted">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-warm-600"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-foreground">
                Plantilla pendiente de revisión.
              </strong>{" "}
              Este texto es una plantilla orientativa y no constituye
              asesoramiento legal definitivo. Debe revisarse y completarse con
              los datos reales del titular antes de publicar la web.
            </p>
          </div>

          <p className="mb-8 text-sm text-muted">
            Última actualización: {updated}
          </p>

          <div className="legal-prose space-y-6">{children}</div>
        </div>
      </div>
    </>
  );
}

/** Título de sección dentro de un documento legal. */
export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}
