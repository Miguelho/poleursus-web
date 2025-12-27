import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

interface PillarsSectionProps {
  dict: Dictionary;
}

export default function PillarsSection({ dict }: PillarsSectionProps) {
  return (
    <Section id="features">
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center">{dict.pulse.pillars.title}</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {dict.pulse.pillars.items.map((pillar, index) => (
              <Card key={index} className="text-center">
                <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
