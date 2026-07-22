/** Opciones y textos del formulario de análisis gratuito. */

export const problemOptions = [
  "Diseño anticuado",
  "Web lenta",
  "No se adapta a móvil",
  "No genera contactos",
  "Necesito una web nueva",
  "No sé qué problema tiene",
  "Otro",
] as const;

export const budgetOptions = [
  "Menos de 1.000 €",
  "Entre 1.000 € y 2.000 €",
  "Entre 2.000 € y 4.000 €",
  "Más de 4.000 €",
  "Todavía no lo sé",
] as const;

export const sectorOptions = [
  "Restauración",
  "Salud",
  "Gimnasio / Deporte",
  "Peluquería / Estética",
  "Comercio / Tienda",
  "Profesional independiente",
  "Academia / Formación",
  "Servicios",
  "Alojamiento / Turismo",
  "Despacho / Consultoría",
  "Construcción / Reformas",
  "Otro",
] as const;

/**
 * Qué incluye el DIAGNÓSTICO GRATIS (rápido, automático con nuestra
 * herramienta): la nota de la web y los principales puntos a mejorar.
 */
export const freeDiagnosisIncludes = [
  "La nota general de tu web (de 0 a 100)",
  "Cómo se ve y funciona en el móvil",
  "Si carga rápido o lento",
  "Los principales puntos que deberías mejorar",
  "Si transmite confianza a primera vista",
] as const;

/**
 * Qué incluye el ANÁLISIS COMPLETO (de pago): el detalle exacto de qué
 * cambiar y por qué, con prioridades y plan de acción.
 */
export const fullAnalysisIncludes = [
  "Qué cambiar exactamente, página por página",
  "Por qué falla cada punto y cómo te cuesta clientes",
  "Prioridades: qué corregir primero y por qué",
  "Comparativa con negocios de tu sector",
  "Plan de acción claro para transformar tu web",
  "Estimación de alcance y presupuesto del rediseño",
] as const;
