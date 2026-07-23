import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
  /** Contenido ampliado usado en la página /servicios */
  detail?: {
    problem: string;
    includes: string[];
    forWho: string;
    result: string;
  };
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type CaseSector = "restauracion" | "salud" | "servicios" | "deporte";

export interface CaseStudy {
  slug: string;
  name: string;
  sectorLabel: string;
  sector: CaseSector;
  icon: LucideIcon;
  before: string[];
  after: string[];
  /** Decisiones de diseño mostradas en la página /transformaciones */
  decisions?: string[];
}

export interface Sector {
  icon: LucideIcon;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
