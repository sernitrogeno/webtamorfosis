/**
 * Planes de precios orientativos.
 * -----------------------------------------------------------------------
 * Estructura: Análisis (gancho) · Análisis + Rediseño Web (principal) ·
 * Mantenimiento (servicio mensual). Además, complementos (extras) opcionales.
 *
 * Los precios son "desde" y de referencia. El precio final se cierra SIEMPRE
 * tras el análisis, según alcance real. No incluyen resultados garantizados.
 * Para ajustar precios o incluidos, edita este archivo.
 */

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  ideal: string;
  features: string[];
  featured?: boolean;
  highlightLabel?: string;
  ctaLabel: string;
}

/**
 * Gancho gratuito (arriba del todo): la nota de la web + principales mejoras.
 * Es un diagnóstico rápido y automático, NO el análisis completo de pago.
 */
export const freeDiagnosis = {
  name: "Diagnóstico gratis",
  price: "Gratis",
  priceNote: "al instante · sin compromiso",
  tagline:
    "Descubre la nota de tu web y los principales puntos que deberías mejorar.",
  features: [
    "La nota general de tu web (0–100)",
    "Cómo se ve en el móvil",
    "Los principales puntos a mejorar",
  ],
  ctaLabel: "Ver la nota de mi web",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "analisis-completo",
    name: "Análisis Completo",
    price: "Desde 149 €",
    priceNote: "se descuenta si rediseñas",
    tagline: "Sabrás exactamente qué falla en tu web, por qué y qué hacer.",
    ideal: "Quien quiere claridad total antes de decidir",
    features: [
      "Informe detallado, página por página",
      "Qué cambiar exactamente y por qué",
      "Prioridades: qué corregir primero",
      "Comparativa con negocios de tu sector",
      "Plan de acción para el rediseño",
    ],
    ctaLabel: "Pedir análisis completo",
  },
  {
    id: "rediseno",
    name: "Análisis + Rediseño Web",
    price: "Desde 1.490 €",
    priceNote: "pago único · análisis completo incluido",
    tagline: "El rediseño completo que convierte tu web en tu mejor comercial.",
    ideal: "Restaurantes, clínicas, comercios y pymes",
    featured: true,
    highlightLabel: "El más elegido",
    features: [
      "Análisis completo incluido y aplicado",
      "Diseño a medida, moderno y orientado a vender",
      "Web rápida y perfecta en el móvil",
      "Textos pensados para conseguir contactos",
      "SEO básico + Google Maps y redes sociales",
      "Formación para que puedas editarla tú",
    ],
    ctaLabel: "Quiero rediseñar mi web",
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento",
    price: "Desde 39 €/mes",
    priceNote: "sin permanencia",
    tagline: "Tu web siempre rápida, segura y al día, sin que te preocupes.",
    ideal: "Negocios que quieren delegar la parte técnica",
    features: [
      "Actualizaciones y copias de seguridad",
      "Soporte ante incidencias",
      "Pequeños cambios de textos e imágenes",
      "Revisión periódica del estado de la web",
    ],
    ctaLabel: "Añadir mantenimiento",
  },
];

/** Complementos opcionales del rediseño, con precios orientativos. */
export interface PricingExtra {
  label: string;
  price: string;
}

export const pricingExtras: PricingExtra[] = [
  { label: "Copywriting profesional", price: "desde 90 €/pág." },
  { label: "Reservas o citas online", price: "desde 190 €" },
  { label: "Tienda online (e-commerce)", price: "desde 590 €" },
  { label: "Página adicional", price: "desde 90 €" },
  { label: "Versión en otro idioma", price: "desde 150 €" },
  { label: "Blog o novedades", price: "desde 150 €" },
  { label: "Ficha de Google Business", price: "desde 90 €" },
  { label: "Sesión de fotografía", price: "a consultar" },
];

/** Ancla de precio de mercado (referencia real, no una promesa). */
export const marketPriceNote =
  "Como referencia, un rediseño web profesional para un negocio suele costar entre 900 € y 3.000 €, según el número de páginas y funciones. Con Webtamorfosis siempre sabes el precio cerrado antes de empezar.";

/** Microcopys de confianza de la sección de precios. */
export const pricingReassurance = [
  "Presupuesto cerrado antes de empezar",
  "Sin costes ocultos",
  "Sin permanencia",
];
