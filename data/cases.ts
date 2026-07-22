import { UtensilsCrossed, Stethoscope, HardHat } from "lucide-react";
import type { CaseStudy } from "@/types";

/**
 * Casos de transformación.
 * -----------------------------------------------------------------------
 * IMPORTANTE: son EJEMPLOS CONCEPTUALES, no clientes ni proyectos reales.
 * Para añadir un caso real en el futuro, sustituye estos objetos por datos
 * reales y actualiza la etiqueta "Ejemplo conceptual" donde corresponda.
 */
export const cases: CaseStudy[] = [
  {
    slug: "restaurante-local",
    name: "Restaurante local",
    sectorLabel: "Restauración",
    sector: "restauracion",
    icon: UtensilsCrossed,
    before: [
      "Carta en PDF difícil de leer",
      "Web lenta",
      "Información desactualizada",
      "Reservas poco visibles",
    ],
    after: [
      "Carta visual y fácil de leer",
      "Botón de reserva destacado",
      "Diseño gastronómico moderno",
      "Integración con mapas",
      "Experiencia móvil optimizada",
    ],
    decisions: [
      "Sustituir el PDF por una carta navegable pensada para el móvil.",
      "Colocar la reserva como acción principal, siempre a la vista.",
      "Usar fotografía y espacios amplios para dar apetito y confianza.",
      "Integrar ubicación y horario para resolver dudas al instante.",
    ],
  },
  {
    slug: "clinica",
    name: "Clínica",
    sectorLabel: "Salud",
    sector: "salud",
    icon: Stethoscope,
    before: [
      "Diseño poco profesional",
      "Servicios mal organizados",
      "Falta de confianza",
      "Formulario complicado",
    ],
    after: [
      "Estructura clara",
      "Presentación del equipo",
      "Servicios organizados",
      "Solicitud de cita visible",
      "Diseño limpio y tranquilizador",
    ],
    decisions: [
      "Ordenar los servicios por especialidad para facilitar la búsqueda.",
      "Presentar al equipo para transmitir cercanía y confianza.",
      "Simplificar la solicitud de cita a lo imprescindible.",
      "Usar una paleta limpia y serena, adecuada al sector salud.",
    ],
  },
  {
    slug: "empresa-reformas",
    name: "Empresa de reformas",
    sectorLabel: "Servicios",
    sector: "servicios",
    icon: HardHat,
    before: [
      "Fotos desordenadas",
      "Falta de casos reales",
      "Pocas llamadas a la acción",
      "Mala experiencia móvil",
    ],
    after: [
      "Portfolio visual",
      "Servicios bien explicados",
      "Formulario de presupuesto",
      "Diseño sólido y profesional",
    ],
    decisions: [
      "Crear un portfolio antes/después que demuestre el trabajo.",
      "Explicar cada servicio con lenguaje claro, sin tecnicismos.",
      "Facilitar la petición de presupuesto desde cualquier página.",
      "Reforzar la solidez de la marca con un diseño robusto.",
    ],
  },
];
