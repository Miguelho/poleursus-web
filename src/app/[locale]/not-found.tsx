import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4">404</h1>
          <p className="mb-8 text-xl text-neutral-600">
            Página no encontrada / Page not found
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/es" variant="primary">
              Ir al inicio (ES)
            </Button>
            <Button href="/en" variant="outline">
              Go home (EN)
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
