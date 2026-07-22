"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Etiqueta del contenedor. Por defecto div. */
  as?: "div" | "li" | "span";
  y?: number;
}

/**
 * Aparición suave al entrar en pantalla.
 * Respeta la preferencia "prefers-reduced-motion": si está activa, muestra
 * el contenido sin animación.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 14,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.5, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
