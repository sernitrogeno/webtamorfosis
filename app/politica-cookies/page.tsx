import type { Metadata } from "next";
import { LegalContent, LegalSection } from "@/components/ui/LegalContent";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Webtamorfosis. Plantilla pendiente de completar con las cookies reales utilizadas.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: false, follow: true },
};

/*
 * DATOS QUE DEBE COMPLETAR EL PROPIETARIO (sustituir los [PLACEHOLDER]):
 *  - Listado real de cookies utilizadas (nombre, proveedor, finalidad, duración)
 *  - Herramientas analíticas y de marketing empleadas
 *  - Servicios externos que instalen cookies
 *  - Plazos de conservación de cada cookie
 */

export default function PoliticaCookiesPage() {
  return (
    <LegalContent title="Política de cookies" updated="[FECHA]">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que se descargan en tu dispositivo al
          visitar una web y que permiten, entre otras cosas, recordar tus
          preferencias o entender cómo se utiliza el sitio.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos de cookies que utilizamos">
        <p>Clasificamos las cookies en las siguientes categorías:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Necesarias:</strong> imprescindibles
            para el funcionamiento del sitio y la gestión de tus preferencias de
            consentimiento. No requieren tu autorización.
          </li>
          <li>
            <strong className="text-foreground">Analíticas:</strong> nos ayudan a
            entender el uso del sitio para mejorarlo. Solo se activan con tu
            consentimiento. [COMPLETAR con la herramienta analítica utilizada.]
          </li>
          <li>
            <strong className="text-foreground">Marketing:</strong> permiten mostrar
            contenido y anuncios más relevantes. Solo se activan con tu
            consentimiento. [COMPLETAR con los servicios utilizados.]
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Relación de cookies">
        <p>
          [COMPLETAR con la tabla de cookies reales: nombre, proveedor,
          finalidad, tipo y duración. Actualízala cada vez que se añadan o
          eliminen servicios que instalen cookies.]
        </p>
      </LegalSection>

      <LegalSection title="4. Gestión del consentimiento">
        <p>
          Al acceder por primera vez al sitio te mostramos un banner desde el que
          puedes aceptar todas las cookies, rechazar las no necesarias o
          configurar tus preferencias. Las cookies no necesarias no se cargan
          hasta que das tu consentimiento. Puedes cambiar tu decisión en
          cualquier momento:
        </p>
        <CookieSettingsButton />
      </LegalSection>

      <LegalSection title="5. Cómo desactivar las cookies en el navegador">
        <p>
          También puedes configurar o eliminar las cookies desde los ajustes de
          tu navegador. Ten en cuenta que desactivar ciertas cookies puede
          afectar al funcionamiento del sitio.
        </p>
      </LegalSection>
    </LegalContent>
  );
}
