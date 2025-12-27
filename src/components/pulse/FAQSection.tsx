import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';

interface FAQSectionProps {
  dict: Dictionary;
}

export default function FAQSection({ dict }: FAQSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center">{dict.pulse.faq.title}</h2>

          <Accordion items={dict.pulse.faq.items} />
        </div>
      </Container>
    </Section>
  );
}
