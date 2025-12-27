import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface ProblemSectionProps {
  dict: Dictionary;
}

export default function ProblemSection({ dict }: ProblemSectionProps) {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6">{dict.pulse.problem.title}</h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            {dict.pulse.problem.content}
          </p>
        </div>
      </Container>
    </Section>
  );
}
