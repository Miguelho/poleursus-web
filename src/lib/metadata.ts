import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';

interface GenerateMetadataParams {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function generateLocalizedMetadata({
  locale,
  title,
  description,
  path = '',
  ogImage = '/images/og-image.png',
}: GenerateMetadataParams): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://poleursus.com';
  const url = `${baseUrl}/${locale}${path}`;
  const alternateLanguages: Record<string, string> = {
    es: `${baseUrl}/es${path}`,
    en: `${baseUrl}/en${path}`,
  };

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Poleursus',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
