import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                {dict.common.poleursus}
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.home.hero.description}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-neutral-900">
                {dict.common.siteName}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/pulse`}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {dict.common.pulse}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-neutral-900">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/privacy`}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {dict.common.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms`}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {dict.common.terms}
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@poleursus.com"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {dict.common.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
            <p className="text-sm text-neutral-500">
              © {currentYear} {dict.common.poleursus}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
