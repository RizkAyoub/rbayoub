import { en } from './en';
import { fr } from './fr';

export type Lang = 'en' | 'fr';

export const content = { en, fr } as const;

export function getContent(lang: Lang) {
  return content[lang];
}

export function getLangFromPath(path: string): Lang {
  if (path.startsWith('/fr')) return 'fr';
  return 'en';
}

export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const fromLang: Lang = getLangFromPath(currentPath);
  if (fromLang === targetLang) return currentPath;

  if (fromLang === 'en' && targetLang === 'fr') {
    return currentPath.replace(/^\/en/, '/fr');
  }
  if (fromLang === 'fr' && targetLang === 'en') {
    return currentPath.replace(/^\/fr/, '/en');
  }
  return currentPath;
}
