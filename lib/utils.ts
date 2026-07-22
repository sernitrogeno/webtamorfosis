/** Une clases condicionalmente, filtrando valores vacíos. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
