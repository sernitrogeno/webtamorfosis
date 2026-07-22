"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck, Send } from "lucide-react";
import {
  validateContactForm,
  FIELD_LIMITS,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/lib/validation";
import { problemOptions, budgetOptions, sectorOptions } from "@/data/form";
import type { FormStatus } from "@/types";
import { cn } from "@/lib/utils";

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  url: "",
  sector: "",
  problem: "",
  budget: "",
  message: "",
  privacy: false,
  website: "", // honeypot
};

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const uid = useId();

  const set = <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K]
  ) => {
    setValues((v) => ({ ...v, [key]: value }));
    // Limpia el error del campo al escribir.
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // Lleva el foco al primer campo con error.
      const first = Object.keys(validationErrors)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialValues); // limpia solo tras éxito
    } catch {
      // No se borran los datos si ocurre un error.
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="surface-card flex flex-col items-center gap-4 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">Solicitud recibida</h3>
        <p className="max-w-md text-muted">
          Revisaremos tu web y te enviaremos su nota y los principales puntos a
          mejorar. Si quieres, te contamos cómo transformarla. Gracias por
          confiar en Webtamorfosis.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-600 underline underline-offset-2 dark:text-brand-300"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="surface-card p-6 sm:p-8"
      aria-label="Formulario de diagnóstico gratis"
    >
      {/* Honeypot anti-spam: oculto para usuarios, tentador para bots. */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>No rellenar este campo</label>
        <input
          id={`${uid}-website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <div className={cn("grid gap-5", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
        <Field
          id={`${uid}-name`}
          label="Nombre"
          required
          error={errors.name}
        >
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            maxLength={FIELD_LIMITS.name}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field id={`${uid}-company`} label="Empresa" error={errors.company}>
          <input
            id={`${uid}-company`}
            type="text"
            autoComplete="organization"
            maxLength={FIELD_LIMITS.company}
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field
          id={`${uid}-email`}
          label="Correo electrónico"
          required
          error={errors.email}
        >
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            maxLength={FIELD_LIMITS.email}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field
          id={`${uid}-phone`}
          label="Teléfono"
          hint="Opcional"
          error={errors.phone}
        >
          <input
            id={`${uid}-phone`}
            type="tel"
            autoComplete="tel"
            maxLength={FIELD_LIMITS.phone}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
          />
        </Field>

        <Field
          id={`${uid}-url`}
          label="URL de tu web actual"
          required
          hint="Si aún no tienes, escribe «No tengo web»"
          error={errors.url}
          className={compact ? "" : "sm:col-span-2"}
        >
          <input
            id={`${uid}-url`}
            type="text"
            inputMode="url"
            placeholder="tunegocio.com"
            maxLength={FIELD_LIMITS.url}
            value={values.url}
            onChange={(e) => set("url", e.target.value)}
            aria-invalid={!!errors.url}
            aria-describedby={errors.url ? `${uid}-url-error` : undefined}
            className={inputClass(!!errors.url)}
          />
        </Field>

        <Field id={`${uid}-sector`} label="Sector">
          <select
            id={`${uid}-sector`}
            value={values.sector}
            onChange={(e) => set("sector", e.target.value)}
            className={selectClass}
          >
            <option value="">Selecciona una opción</option>
            {sectorOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${uid}-problem`} label="Principal problema">
          <select
            id={`${uid}-problem`}
            value={values.problem}
            onChange={(e) => set("problem", e.target.value)}
            className={selectClass}
          >
            <option value="">Selecciona una opción</option>
            {problemOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${uid}-budget`}
          label="Presupuesto aproximado"
          hint="Opcional"
          className={compact ? "" : "sm:col-span-2"}
        >
          <select
            id={`${uid}-budget`}
            value={values.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={selectClass}
          >
            <option value="">Prefiero no indicarlo</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${uid}-message`}
          label="Mensaje"
          hint="Cuéntanos brevemente qué necesitas"
          error={errors.message}
          className={compact ? "" : "sm:col-span-2"}
        >
          <textarea
            id={`${uid}-message`}
            rows={4}
            maxLength={FIELD_LIMITS.message}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className={cn(inputClass(!!errors.message), "resize-y")}
          />
        </Field>
      </div>

      {/* Privacidad */}
      <div className="mt-5">
        <label className="flex items-start gap-3">
          <input
            id={`${uid}-privacy`}
            type="checkbox"
            checked={values.privacy}
            onChange={(e) => set("privacy", e.target.checked)}
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? `${uid}-privacy-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600"
          />
          <span className="text-sm text-muted">
            He leído y acepto la{" "}
            <Link
              href="/politica-privacidad"
              className="font-medium text-brand-600 underline underline-offset-2 dark:text-brand-300"
            >
              política de privacidad
            </Link>
            .{" "}
            <span className="text-[13px]">
              Tus datos no se compartirán con terceros.
            </span>
          </span>
        </label>
        {errors.privacy && (
          <p
            id={`${uid}-privacy-error`}
            className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400"
          >
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.privacy}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          No hemos podido enviar tu solicitud. Revisa tu conexión e inténtalo de
          nuevo, o escríbenos directamente por correo.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden="true" />
          Sin compromiso · No recibirás llamadas comerciales automatizadas
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Pedir mi diagnóstico gratis
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ---------- Subcomponentes y estilos de campo ---------- */

function Field({
  id,
  label,
  hint,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="text-brand-500"> *</span>}
        </label>
        {hint && <span className="text-xs text-muted">{hint}</span>}
      </div>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

const baseControl =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground transition placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-white/5";

function inputClass(hasError: boolean) {
  return cn(
    baseControl,
    hasError
      ? "border-red-300 focus-visible:ring-red-500 dark:border-red-500/40"
      : "border-black/10 dark:border-white/10"
  );
}

const selectClass = cn(baseControl, "border-black/10 dark:border-white/10 cursor-pointer");
