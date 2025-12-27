import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface PrivacyPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return generateLocalizedMetadata({
    locale: params.locale,
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    path: '/privacy',
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4">{dict.privacy.title}</h1>
          <p className="mb-8 text-neutral-500">{dict.privacy.lastUpdated}</p>

          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed text-neutral-600">
              {dict.privacy.content}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
