import Link from 'next/link';

export default function RootNotFound() {
  return (
    <html lang="es">
      <body className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-neutral-900">404</h1>
          <p className="mb-8 text-xl text-neutral-600">
            Página no encontrada / Page not found
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/es"
              className="rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
            >
              Ir al inicio (ES)
            </Link>
            <Link
              href="/en"
              className="rounded-lg border-2 border-neutral-900 px-6 py-3 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Go home (EN)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
