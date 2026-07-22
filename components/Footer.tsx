"use client";

import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { site, mainNav, footerServiceLinks, legalNav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { openCookiePreferences } from "@/components/CookieBanner";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white/50 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div className="max-w-xs">
            <Logo href="/" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-5 flex gap-2">
              {/* TODO: sustituir por los perfiles sociales reales. */}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Webtamorfosis"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-muted transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Webtamorfosis"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-muted transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del sitio">
            <h2 className="text-sm font-semibold text-foreground">Navegación</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/transformaciones"
                  className="text-muted transition hover:text-foreground"
                >
                  Transformaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted transition hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className="text-sm font-semibold text-foreground">Servicios</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className="text-sm font-semibold text-foreground">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 text-muted transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                {/* TODO: sustituir por el teléfono real. */}
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 text-muted transition hover:text-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.contact.phone}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted">
              {/* TODO: sustituir por la dirección real cuando exista. No se
                  incluye una dirección física inventada. */}
              Datos de contacto provisionales, pendientes de configurar.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-6 text-xs text-muted dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="transition hover:text-foreground"
              >
                Configurar cookies
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
