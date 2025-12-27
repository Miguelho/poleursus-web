'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, localeNames, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Remove current locale from pathname and add new locale
    const segments = pathname.split('/').filter(Boolean);
    if (i18n.locales.includes(segments[0] as Locale)) {
      segments.shift();
    }
    const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-neutral-200 p-1">
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            locale === currentLocale
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
          }`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
