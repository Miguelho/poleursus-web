import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { i18n, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { generateLocalizedMetadata } from '@/lib/metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return generateLocalizedMetadata({
    locale: params.locale,
    title: dict.common.siteName,
    description: dict.home.meta.description,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Validate locale
  if (!i18n.locales.includes(params.locale)) {
    notFound();
  }

  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
        <Analytics />
      </body>
    </html>
  );
}
