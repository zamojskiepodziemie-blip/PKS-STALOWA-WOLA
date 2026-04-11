export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

import { dictionaries, type Dictionary } from './dictionaries';

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
