"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

/**
 * Botón flotante de contacto, pensado para móvil y sin resultar invasivo.
 * Lleva directamente al formulario de análisis gratuito.
 */
export function FloatingContact() {
  const pathname = usePathname();
  // En la home el formulario está en /#analisis; en el resto, en /contacto.
  const href = pathname === "/" ? "/#analisis" : "/contacto";

  return (
    <Link
      href={href}
      className="fixed bottom-6 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:hidden"
      aria-label="Pedir diagnóstico gratis"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Diagnóstico gratis
    </Link>
  );
}
