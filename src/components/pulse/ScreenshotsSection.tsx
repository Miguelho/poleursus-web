import Image from 'next/image';
import type { Dictionary } from '@/i18n/types';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface ScreenshotsSectionProps {
  dict: Dictionary;
}

export default function ScreenshotsSection({ dict }: ScreenshotsSectionProps) {
  // Placeholder screenshots (replace with actual images)
  const screenshots = [
    '/images/pulse/screenshot-1.png',
    '/images/pulse/screenshot-2.png',
    '/images/pulse/screenshot-3.png',
    '/images/pulse/screenshot-4.png',
    '/images/pulse/screenshot-5.png',
    '/images/pulse/screenshot-6.png',
  ];

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center">{dict.pulse.screenshots.title}</h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="aspect-[750/1624] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md"
              >
                <Image
                  src={src}
                  alt={`${dict.pulse.screenshots.alt} ${index + 1}`}
                  width={750}
                  height={1624}
                  className="h-full w-full object-contain"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
