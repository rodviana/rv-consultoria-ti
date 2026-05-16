import { en } from "./locales/en";
import { pt } from "./locales/pt";
import type { Locale, Messages } from "./types";

const dictionaries: Record<Locale, Messages> = { pt, en };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Locale, Messages };
