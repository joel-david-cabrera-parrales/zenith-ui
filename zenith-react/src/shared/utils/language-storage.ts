export type AppLanguage = 'es' | 'en' | 'fr' | 'de';

export const DEFAULT_LANGUAGE: AppLanguage = 'en';

const STORAGE_KEY = 'zenith-ui:language';

export function getStoredLanguage(): AppLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw && ['es', 'en', 'fr', 'de'].includes(raw)) {
      return raw as AppLanguage;
    }
  } catch {
    // ignore storage errors
  }
  return DEFAULT_LANGUAGE;
}

export function setStoredLanguage(language: AppLanguage): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // ignore storage errors
  }
}

export const LANGUAGE_OPTIONS: { code: AppLanguage; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];