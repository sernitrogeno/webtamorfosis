/**
 * Validación compartida del formulario de análisis gratuito.
 * Se usa tanto en el cliente (feedback inmediato) como preparada para el
 * servidor (ver app/api/contact/route.ts).
 */

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  url: string;
  sector: string;
  problem: string;
  budget: string;
  message: string;
  privacy: boolean;
  // Campo honeypot anti-spam: debe permanecer vacío.
  website?: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

// Límites razonables para evitar abusos.
export const FIELD_LIMITS = {
  name: 80,
  company: 120,
  email: 160,
  phone: 40,
  url: 300,
  message: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/** Normaliza una URL añadiendo https:// si falta, para validar mejor. */
function normalizeUrl(value: string): string {
  const v = value.trim();
  if (!v) return v;
  if (!/^https?:\/\//i.test(v)) return `https://${v}`;
  return v;
}

export function isValidUrl(value: string): boolean {
  try {
    const u = new URL(normalizeUrl(value));
    return Boolean(u.hostname && u.hostname.includes("."));
  } catch {
    return false;
  }
}

/**
 * Valida los campos del formulario y devuelve un mapa de errores.
 * Un objeto vacío significa que el formulario es válido.
 */
export function validateContactForm(
  values: ContactFormValues
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Introduce tu nombre.";
  } else if (values.name.length > FIELD_LIMITS.name) {
    errors.name = "El nombre es demasiado largo.";
  }

  if (!values.email.trim()) {
    errors.email = "Introduce tu correo electrónico.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Introduce un correo válido.";
  }

  if (values.phone && values.phone.length > FIELD_LIMITS.phone) {
    errors.phone = "El teléfono es demasiado largo.";
  }

  if (!values.url.trim()) {
    errors.url = "Añade la URL de tu web (o indica que aún no tienes).";
  } else if (!isValidUrl(values.url)) {
    errors.url = "Añade la URL completa de tu web, por ejemplo tudominio.com";
  }

  if (values.message && values.message.length > FIELD_LIMITS.message) {
    errors.message = "El mensaje es demasiado largo.";
  }

  if (!values.privacy) {
    errors.privacy = "Debes aceptar la política de privacidad.";
  }

  return errors;
}
