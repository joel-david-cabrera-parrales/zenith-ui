import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';
import type { AppLanguage } from '../utils/language-storage';
import { getStoredLanguage, setStoredLanguage } from '../utils/language-storage';

import esDict from '../i18n/es.json';
import enDict from '../i18n/en.json';
import frDict from '../i18n/fr.json';
import deDict from '../i18n/de.json';

type Dictionary = Record<string, unknown>;

const DICTIONARIES: Record<AppLanguage, Dictionary> = {
  es: esDict as unknown as Dictionary,
  en: enDict as unknown as Dictionary,
  fr: frDict as unknown as Dictionary,
  de: deDict as unknown as Dictionary,
};

export const LanguageProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [language, setLanguageState] = useState<AppLanguage>(() => getStoredLanguage());

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const setLanguage = (next: AppLanguage) => {
    setLanguageState(next);
  };

  const lookup = (dict: Dictionary, key: string): string | null => {
    const keys = key.split('.');
    let current: unknown = dict;
    for (const part of keys) {
      if (current && typeof current === 'object' && part in current) {
        current = (current as Dictionary)[part];
      } else {
        return null;
      }
    }
    return typeof current === 'string' ? current : null;
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const dict = DICTIONARIES[language];
    const template = lookup(dict, key) ?? key;
    if (!params) return template;
    return template.replace(/\{\{(\w+)\}\}/g, (_match, p: string) => {
      const val = params[p];
      return val !== undefined ? String(val) : `{{${p}}}`;
    });
  };

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};