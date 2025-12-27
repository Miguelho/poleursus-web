import type { Locale } from './config';
import type { Dictionary } from './types';

const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default as Dictionary),
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
  return dictionaryLoader();
};
