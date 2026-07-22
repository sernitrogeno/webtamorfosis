import type { NavLink } from "@/types";

/**
 * Configuración global del sitio.
 * -----------------------------------------------------------------------
 * SUSTITUIR por los datos reales antes de publicar (marcados con TODO).
 */
export const site = {
  name: "Webtamorfosis",
  // Web = Web + Metamorfosis
  brandSplit: { first: "Web", second: "tamorfosis" },
  tagline: "Transformamos webs antiguas en experiencias digitales que venden.",
  taglineAlt: "La evolución digital de tu negocio empieza aquí.",
  description:
    "Transformamos páginas web antiguas en webs modernas, rápidas y diseñadas para generar confianza, contactos y ventas. Descubre gratis la nota de tu web.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.webtamorfosis.es",
  locale: "es_ES",

  // TODO: sustituir por los datos de contacto reales.
  contact: {
    email: "hola@webtamorfosis.es",
    phone: "+34 XXX XXX XXX", // TODO: teléfono real
    phoneHref: "tel:+34000000000", // TODO: teléfono real
    // TODO: tiempo de respuesta orientativo, editable libremente.
    responseTime: "Normalmente respondemos en 1-2 días laborables.",
  },

  // TODO: sustituir por los perfiles reales.
  social: {
    instagram: "https://instagram.com/", // TODO
    linkedin: "https://linkedin.com/", // TODO
  },
} as const;

export const mainNav: NavLink[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Precios", href: "/#precios" },
  { label: "Transformaciones", href: "/transformaciones" },
  { label: "Preguntas frecuentes", href: "/#faq" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Rediseño web completo", href: "/servicios#rediseno-web" },
  { label: "Web nueva desde cero", href: "/servicios#web-nueva" },
  { label: "Mejora de velocidad", href: "/servicios#velocidad" },
  { label: "Diseño responsive", href: "/servicios#responsive" },
  { label: "SEO básico", href: "/servicios#seo" },
  { label: "Mantenimiento web", href: "/servicios#mantenimiento" },
];

export const legalNav: NavLink[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
];
