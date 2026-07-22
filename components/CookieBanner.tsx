"use client";

import { useEffect, useState, useCallback } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Banner de cookies funcional.
 * - Permite aceptar todas, rechazar las no necesarias o configurar preferencias.
 * - Guarda la decisión en localStorage.
 * - Las cookies no necesarias (analíticas / marketing) NO se cargan antes del
 *   consentimiento: la carga real debe engancharse en `applyConsent()`.
 * - Reabrible desde el footer mediante `openCookiePreferences()`.
 */

const STORAGE_KEY = "webtamorfosis.cookie-consent.v1";
const OPEN_EVENT = "webtamorfosis:open-cookie-preferences";

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

/** Llamar desde cualquier parte para reabrir la configuración de cookies. */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function readConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

function persist(consent: CookieConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* almacenamiento no disponible: se ignora silenciosamente */
  }
}

/**
 * Aquí se activan realmente las herramientas según el consentimiento.
 * De momento solo deja preparada la estructura; NO carga Google Analytics ni
 * herramientas de marketing reales.
 */
function applyConsent(consent: CookieConsent) {
  if (consent.analytics) {
    // TODO: inicializar analítica (p. ej. Google Analytics con NEXT_PUBLIC_GA_ID).
  }
  if (consent.marketing) {
    // TODO: inicializar píxeles de marketing.
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      applyConsent(existing);
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      setVisible(true);
    }

    const onOpen = () => {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setShowConfig(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  const decide = useCallback((consent: CookieConsent) => {
    persist(consent);
    applyConsent(consent);
    setVisible(false);
    setShowConfig(false);
  }, []);

  const now = () => new Date().toISOString();

  const acceptAll = () =>
    decide({ necessary: true, analytics: true, marketing: true, decidedAt: now() });
  const rejectAll = () =>
    decide({ necessary: true, analytics: false, marketing: false, decidedAt: now() });
  const saveConfig = () =>
    decide({ necessary: true, analytics, marketing, decidedAt: now() });

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
    >
      <div className="container-page">
        <div className="surface-card relative mx-auto max-w-2xl p-5 shadow-glow sm:p-6">
          <button
            type="button"
            onClick={rejectAll}
            aria-label="Rechazar cookies no necesarias y cerrar"
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="pr-6">
              <h2 className="text-base font-semibold">Usamos cookies</h2>
              <p className="mt-1 text-sm text-muted">
                Utilizamos cookies necesarias para el funcionamiento del sitio y,
                con tu permiso, cookies analíticas y de marketing. Puedes aceptar
                todas, rechazar las no necesarias o configurar tus preferencias.{" "}
                <Link
                  href="/politica-cookies"
                  className="font-medium text-brand-600 underline underline-offset-2 dark:text-brand-300"
                >
                  Más información
                </Link>
                .
              </p>
            </div>
          </div>

          {showConfig && (
            <fieldset className="mt-4 space-y-2 rounded-xl border border-black/5 p-3 dark:border-white/10">
              <legend className="sr-only">Preferencias de cookies</legend>
              <ConsentRow
                title="Necesarias"
                description="Imprescindibles para el funcionamiento del sitio. Siempre activas."
                checked
                disabled
              />
              <ConsentRow
                title="Analíticas"
                description="Nos ayudan a entender cómo se usa la web para mejorarla."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ConsentRow
                title="Marketing"
                description="Permiten mostrar contenido y anuncios más relevantes."
                checked={marketing}
                onChange={setMarketing}
              />
            </fieldset>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            {!showConfig && (
              <button
                type="button"
                onClick={() => setShowConfig(true)}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-muted transition hover:text-foreground"
              >
                Configurar
              </button>
            )}
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              Rechazar no necesarias
            </button>
            {showConfig ? (
              <button
                type="button"
                onClick={saveConfig}
                className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                Guardar preferencias
              </button>
            ) : null}
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsentRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex items-start gap-3 rounded-lg p-2",
        !disabled && "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/5"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600"
      />
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="block text-xs text-muted">{description}</span>
      </span>
    </label>
  );
}
