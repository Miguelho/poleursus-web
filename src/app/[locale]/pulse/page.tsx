import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';
import HeroSection from '@/components/pulse/HeroSection';
import ProblemSection from '@/components/pulse/ProblemSection';
import PillarsSection from '@/components/pulse/PillarsSection';
import DifferenceSection from '@/components/pulse/DifferenceSection';
import TargetAudienceSection from '@/components/pulse/TargetAudienceSection';
import ScreenshotsSection from '@/components/pulse/ScreenshotsSection';
import FAQSection from '@/components/pulse/FAQSection';

interface PulsePageProps {
  params: { locale: Locale };
}

export async function generateMetadata({
  params,
}: PulsePageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return generateLocalizedMetadata({
    locale: params.locale,
    title: dict.pulse.meta.title,
    description: dict.pulse.meta.description,
    path: '/pulse',
    ogImage: '/images/pulse/og-pulse.png',
  });
}

export default async function PulsePage({ params }: PulsePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <HeroSection dict={dict} />
      <ProblemSection dict={dict} />
      <PillarsSection dict={dict} />
      <DifferenceSection dict={dict} />
      <TargetAudienceSection dict={dict} />
      <ScreenshotsSection dict={dict} />
      <FAQSection dict={dict} />
    </>
  );
}
