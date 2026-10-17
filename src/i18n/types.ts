import type { en } from "./translations/en";

type DeepTranslation<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: DeepTranslation<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: DeepTranslation<T[K]> }
      : T;

export type Translation = DeepTranslation<typeof en>;
export type Locale = "en" | "es";
