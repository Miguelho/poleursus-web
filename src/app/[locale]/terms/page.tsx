import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface TermsPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return generateLocalizedMetadata({
    locale: params.locale,
    title: dict.terms.meta.title,
    description: dict.terms.meta.description,
    path: '/terms',
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4">{dict.terms.title}</h1>
          <p className="mb-8 text-neutral-500">{dict.terms.lastUpdated}</p>

          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed text-neutral-600">
              {dict.terms.content}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
