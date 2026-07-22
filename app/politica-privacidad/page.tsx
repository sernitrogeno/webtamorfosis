import type { Metadata } from "next";
import { LegalContent, LegalSection } from "@/components/ui/LegalContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Webtamorfosis. Plantilla pendiente de completar con los datos reales del titular.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: false, follow: true },
};

/*
 * DATOS QUE DEBE COMPLETAR EL PROPIETARIO (sustituir los [PLACEHOLDER]):
 *  - Nombre o razón social e identidad del responsable del tratamiento
 *  - NIF y domicilio
 *  - Correo de contacto para ejercer derechos
 *  - Finalidades y base jurídica del tratamiento
 *  - Servicios externos que traten datos (email marketing, CRM, hosting…)
 *  - Plazos de conservación de datos
 *  - Herramientas analíticas empleadas
 */

export default function PoliticaPrivacidadPage() {
  return (
    <LegalContent title="Política de privacidad" updated="[FECHA]">
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales recogidos en
          este sitio es:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Responsable: [NOMBRE O RAZÓN SOCIAL]</li>
          <li>NIF/CIF: [NIF / CIF]</li>
          <li>Domicilio: [DOMICILIO]</li>
          <li>Correo de contacto: {site.contact.email}</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Datos que recogemos">
        <p>
          A través del formulario de análisis gratuito podemos recoger: nombre,
          empresa, correo electrónico, teléfono (opcional), URL de tu web,
          sector, principal problema, presupuesto orientativo (opcional) y el
          mensaje que nos envíes.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidad y base jurídica">
        <p>
          Tratamos tus datos con la finalidad de atender tu solicitud, preparar
          un análisis y una propuesta, y mantener el contacto relacionado con
          dicho servicio. La base jurídica es tu consentimiento, que otorgas al
          enviar el formulario, y en su caso la aplicación de medidas
          precontractuales a petición tuya.
        </p>
        <p>[COMPLETAR con otras finalidades si las hubiera.]</p>
      </LegalSection>

      <LegalSection title="4. Conservación de los datos">
        <p>
          Conservaremos tus datos durante el tiempo necesario para atender tu
          solicitud y, posteriormente, durante los plazos legalmente exigibles.
          [COMPLETAR con los plazos de conservación concretos.]
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios y encargados del tratamiento">
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Para prestar el
          servicio podemos apoyarnos en proveedores que actúan como encargados
          del tratamiento (por ejemplo, proveedor de hosting o de envío de
          correo). [COMPLETAR con los servicios externos utilizados.]
        </p>
      </LegalSection>

      <LegalSection title="6. Tus derechos">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          {site.contact.email}. También puedes presentar una reclamación ante la
          Agencia Española de Protección de Datos (www.aepd.es) si consideras que
          el tratamiento no se ajusta a la normativa.
        </p>
      </LegalSection>

      <LegalSection title="7. Seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger tus
          datos frente a accesos no autorizados, pérdida o alteración.
        </p>
      </LegalSection>
    </LegalContent>
  );
}
