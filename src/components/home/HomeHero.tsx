import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface HomeHeroProps {
  dict: Dictionary;
}

export default function HomeHero({ dict }: HomeHeroProps) {
  return (
    <Section className="bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 fade-in">{dict.home.hero.title}</h1>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl fade-in">
            {dict.home.hero.subtitle}
          </p>
          <p className="text-lg text-neutral-500 fade-in">
            {dict.home.hero.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}
