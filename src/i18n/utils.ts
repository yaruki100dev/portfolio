import { getRelativeLocaleUrl } from "astro:i18n";
import { en } from "./translations/en";
import { es } from "./translations/es";
import type { Locale, Translation } from "./types";

export const locales = ["en", "es"] as const;
export const defaultLocale: Locale = "en";

const translations: Record<Locale, Translation> = { en, es };

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export function getLocalizedPath(locale: Locale, path = "/"): string {
  const localized = getRelativeLocaleUrl(
    locale,
    path === "/" ? undefined : path.replace(/^\/+|\/+$/g, ""),
  );
  return localized.endsWith("/") ? localized : `${localized}/`;
}

export function formatMessage(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, value),
    template,
  );
}
