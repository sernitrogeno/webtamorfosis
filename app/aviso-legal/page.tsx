import type { Metadata } from "next";
import { LegalContent, LegalSection } from "@/components/ui/LegalContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de Webtamorfosis. Plantilla pendiente de completar con los datos reales del titular.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

/*
 * DATOS QUE DEBE COMPLETAR EL PROPIETARIO (sustituir los [PLACEHOLDER]):
 *  - Nombre o razón social
 *  - NIF / CIF
 *  - Domicilio
 *  - Correo electrónico de contacto
 *  - Datos de registro mercantil (si aplica)
 *  - Proveedor de hosting
 */

export default function AvisoLegalPage() {
  return (
    <LegalContent title="Aviso legal" updated="[FECHA]">
      <LegalSection title="1. Datos identificativos">
        <p>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se informa de los
          siguientes datos del titular de este sitio web:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Titular: [NOMBRE O RAZÓN SOCIAL]</li>
          <li>NIF/CIF: [NIF / CIF]</li>
          <li>Domicilio: [DOMICILIO]</li>
          <li>Correo electrónico: {site.contact.email}</li>
          <li>Datos de registro: [DATOS DE REGISTRO MERCANTIL, SI APLICA]</li>
          <li>Proveedor de hosting: [PROVEEDOR DE HOSTING]</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          El presente aviso legal regula el uso del sitio web {site.url}{" "}
          (en adelante, «el sitio»), cuyo objeto es ofrecer información sobre los
          servicios de rediseño y diseño web de {site.name}.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso al sitio es gratuito y atribuye la condición de usuario, que
          se compromete a utilizarlo conforme a la ley, la buena fe y este aviso
          legal. El usuario se compromete a no realizar un uso indebido de los
          contenidos ni a introducir contenidos que puedan dañar el sitio.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los contenidos del sitio (textos, diseños, logotipos y elementos
          gráficos) son titularidad de [NOMBRE O RAZÓN SOCIAL] o de terceros que
          han autorizado su uso, y están protegidos por la normativa de propiedad
          intelectual e industrial. Queda prohibida su reproducción sin
          autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Exclusión de responsabilidad">
        <p>
          El titular no se hace responsable de los daños que pudieran derivarse
          del uso del sitio, ni garantiza la ausencia de interrupciones o errores
          en el acceso, si bien se compromete a resolverlos en la medida de lo
          posible.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislación aplicable">
        <p>
          Este aviso legal se rige por la legislación española. Para cualquier
          controversia, las partes se someten a los juzgados y tribunales que
          correspondan conforme a la normativa vigente.
        </p>
      </LegalSection>
    </LegalContent>
  );
}
