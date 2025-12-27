import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface TargetAudienceSectionProps {
  dict: Dictionary;
}

export default function TargetAudienceSection({ dict }: TargetAudienceSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center">{dict.pulse.audience.title}</h2>

          <div className="space-y-8">
            <div className="rounded-2xl border-2 border-primary-200 bg-primary-50/50 p-8">
              <p className="text-lg leading-relaxed text-neutral-700">
                {dict.pulse.audience.forWho}
              </p>
            </div>

            <div className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-8">
              <p className="text-lg leading-relaxed text-neutral-600">
                {dict.pulse.audience.notFor}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
