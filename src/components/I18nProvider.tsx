import { useState, useEffect, ReactNode } from 'react';
import { I18nContext, Locale, getTranslations } from '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale;
      if (saved && ['en', 'de', 'es', 'fr'].includes(saved)) {
        return saved;
      }
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'de', 'es', 'fr'].includes(browserLang)) {
        return browserLang as Locale;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};
