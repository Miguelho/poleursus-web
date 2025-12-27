import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  dict: Dictionary;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const googlePlayUrl =
    process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
    'https://play.google.com/store/apps/details?id=com.poleursus.pulse';

  return (
    <Section className="bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 fade-in">{dict.pulse.hero.title}</h1>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl fade-in">
            {dict.pulse.hero.subtitle}
          </p>
          <p className="mb-10 text-lg text-neutral-500 fade-in">
            {dict.pulse.hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row fade-in">
            <Button href={googlePlayUrl} variant="primary" external>
              {dict.pulse.hero.primaryCta}
            </Button>
            <Button href="#features" variant="outline">
              {dict.pulse.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
