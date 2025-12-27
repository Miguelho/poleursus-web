import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';
import HomeHero from '@/components/home/HomeHero';
import ProductsSection from '@/components/home/ProductsSection';

interface HomePageProps {
  params: { locale: Locale };
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return generateLocalizedMetadata({
    locale: params.locale,
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <HomeHero dict={dict} />
      <ProductsSection locale={params.locale} dict={dict} />
    </>
  );
}
