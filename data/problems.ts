import {
  Timer,
  Smartphone,
  PenTool,
  MessageSquareWarning,
  ShieldQuestion,
  MousePointerClick,
  Search,
  FormInput,
  RefreshCw,
  Gem,
} from "lucide-react";
import type { Problem } from "@/types";

export const problems: Problem[] = [
  {
    icon: Timer,
    title: "Tarda demasiado en cargar",
    description:
      "Cada segundo de espera hace que más visitantes se marchen antes de ver lo que ofreces.",
  },
  {
    icon: Smartphone,
    title: "Se ve mal en móvil",
    description:
      "La mayoría de tus clientes te visita desde el móvil. Si ahí no funciona, los pierdes.",
  },
  {
    icon: PenTool,
    title: "Tiene un diseño antiguo",
    description:
      "Una imagen desfasada genera dudas sobre si el negocio sigue activo o al día.",
  },
  {
    icon: MessageSquareWarning,
    title: "No explica bien qué ofreces",
    description:
      "Si el visitante no entiende en segundos qué haces, se va a buscar a otro sitio.",
  },
  {
    icon: ShieldQuestion,
    title: "No transmite confianza",
    description:
      "Una web descuidada puede generar desconfianza antes del primer contacto.",
  },
  {
    icon: MousePointerClick,
    title: "No tiene llamadas a la acción",
    description:
      "Sin botones claros para llamar, reservar o escribir, las visitas no se convierten en clientes.",
  },
  {
    icon: Search,
    title: "No aparece bien en Google",
    description:
      "Una estructura y unos textos mal preparados dificultan que te encuentren.",
  },
  {
    icon: FormInput,
    title: "Los formularios fallan",
    description:
      "Un formulario que no funciona es una oportunidad de contacto perdida cada día.",
  },
  {
    icon: RefreshCw,
    title: "Es difícil de actualizar",
    description:
      "Si cambiar un texto o una foto es un problema, la web acaba quedándose obsoleta.",
  },
  {
    icon: Gem,
    title: "No refleja la calidad real",
    description:
      "Tu negocio es mejor de lo que tu web transmite. Esa distancia te cuesta clientes.",
  },
];
