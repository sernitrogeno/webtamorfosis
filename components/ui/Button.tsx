import Link from "next/link";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Solo dos estilos principales de botón, para mantener consistencia visual.
type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

// Modern Minimal Agency: primario plano en color de marca; secundario con
// borde sutil. Sin gradientes ni sombras llamativas.
const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "border text-foreground hover:bg-foreground/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  // Permite atributos de anclaje (target, rel, etc.)
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...props },
    ref
  ) {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ("href" in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href} className={classes} ref={ref} {...rest}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} className={classes} ref={ref} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);
