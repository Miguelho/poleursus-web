import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ProductsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export default function ProductsSection({ locale, dict }: ProductsSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center">{dict.home.products.title}</h2>

          <Card className="text-center">
            <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
              {dict.home.products.pulse.name}
            </h3>
            <p className="mb-6 text-lg text-neutral-600">
              {dict.home.products.pulse.description}
            </p>
            <Button href={`/${locale}/pulse`} variant="primary">
              {dict.home.products.pulse.cta}
            </Button>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
