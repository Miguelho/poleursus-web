import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-neutral-900 transition-colors hover:text-primary-600"
          >
            {dict.common.poleursus}
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <div className="hidden gap-6 md:flex">
              <Link
                href={`/${locale}/pulse`}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {dict.nav.pulse}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {dict.nav.privacy}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {dict.nav.terms}
              </Link>
            </div>

            <LanguageSwitcher currentLocale={locale} />
          </div>
        </nav>
      </Container>
    </header>
  );
}
