import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface DifferenceSectionProps {
  dict: Dictionary;
}

export default function DifferenceSection({ dict }: DifferenceSectionProps) {
  return (
    <Section className="bg-primary-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6">{dict.pulse.difference.title}</h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            {dict.pulse.difference.content}
          </p>
        </div>
      </Container>
    </Section>
  );
}
