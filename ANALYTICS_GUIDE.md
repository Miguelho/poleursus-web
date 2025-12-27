# Guía de Analytics para Poleursus Web

Esta guía te muestra cómo añadir analytics a tu web para trackear tráfico, usuarios, páginas vistas, etc.

---

## Opción 1: Vercel Analytics (Recomendado) ⚡

**Ventajas:**
- ✅ Setup en 2 minutos
- ✅ Integración nativa con Vercel
- ✅ Respeta privacidad (GDPR compliant)
- ✅ Datos en tiempo real
- ✅ No requiere cookies
- ✅ Web Vitals automáticos
- ✅ **Gratis hasta 100k eventos/mes**

**Desventajas:**
- ❌ Solo funciona en Vercel
- ❌ Menos detallado que Google Analytics

### Instalación

#### 1. Instalar paquete

```bash
npm install @vercel/analytics
```

#### 2. Añadir al layout

Edita `src/app/[locale]/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

// ... resto del código

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
        <Analytics />  {/* ← Añade esta línea */}
      </body>
    </html>
  );
}
```

#### 3. Deploy

```bash
git add .
git commit -m "Add Vercel Analytics"
git push
```

#### 4. Ver datos

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Click en "Analytics" en el sidebar
4. Verás: páginas vistas, visitantes únicos, top páginas, países, etc.

### Métricas que verás:

- **Visitors**: Visitantes únicos
- **Page Views**: Páginas vistas totales
- **Top Pages**: Páginas más visitadas
- **Top Referrers**: De dónde viene el tráfico
- **Countries**: Países de los visitantes
- **Devices**: Desktop vs Mobile
- **Browsers**: Navegadores usados

---

## Opción 2: Google Analytics 4 (GA4) 📊

**Ventajas:**
- ✅ Completamente gratis
- ✅ Muy detallado
- ✅ Integración con Google Ads
- ✅ Datos demográficos
- ✅ Informes personalizados
- ✅ Funciona en cualquier hosting

**Desventajas:**
- ❌ Setup más complejo
- ❌ Requiere banner de cookies (GDPR)
- ❌ Curva de aprendizaje
- ❌ Google rastrea a tus usuarios

### Instalación

#### 1. Crear cuenta y property

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una cuenta (si no tienes)
3. Crea una property: "Poleursus Web"
4. Selecciona "Web" como plataforma
5. Copia tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

#### 2. Instalar gtag via Script

Edita `src/app/[locale]/layout.tsx`:

```tsx
import Script from 'next/script';

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const dict = await getDictionary(params.locale);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // Tu Measurement ID

  return (
    <html lang={params.locale} className="scroll-smooth">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
      </body>
    </html>
  );
}
```

#### 3. Añadir variable de entorno

Edita `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Añade también en Vercel (Settings → Environment Variables).

#### 4. Deploy

```bash
git add .
git commit -m "Add Google Analytics"
git push
```

#### 5. Ver datos

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Selecciona tu property
3. Explora: Reports → Realtime, Acquisition, Engagement, etc.

### Métricas que verás:

- **Users**: Usuarios nuevos y recurrentes
- **Sessions**: Sesiones totales
- **Bounce Rate**: Tasa de rebote
- **Average Session Duration**: Duración promedio
- **Traffic Sources**: Orgánico, directo, social, referral
- **Demographics**: Edad, género, intereses
- **Devices**: Desktop, tablet, mobile
- **Conversions**: Si configuras objetivos

### ⚠️ GDPR/Privacidad

Si usas GA4 **necesitas un banner de cookies**. Opciones:

1. **CookieYes** (gratis hasta 25k páginas vistas/mes)
2. **Osano** (gratis para sitios pequeños)
3. **Manual**: Crear tu propio banner con Next.js

---

## Opción 3: Plausible Analytics (Privacy-First) 🔒

**Ventajas:**
- ✅ Respeta privacidad (no cookies, GDPR compliant)
- ✅ UI simple y elegante
- ✅ Script ligero (< 1KB)
- ✅ Open source
- ✅ No rastrea a usuarios

**Desventajas:**
- ❌ **De pago**: $9/mes (hasta 10k páginas vistas)
- ❌ Menos funcionalidades que GA4

### Instalación

#### 1. Crear cuenta

1. Ve a [plausible.io](https://plausible.io)
2. Crea cuenta (trial 30 días gratis)
3. Añade tu dominio: `poleursus.com`

#### 2. Instalar script

Edita `src/app/[locale]/layout.tsx`:

```tsx
import Script from 'next/script';

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} className="scroll-smooth">
      <head>
        <Script
          defer
          data-domain="poleursus.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
      </body>
    </html>
  );
}
```

#### 3. Deploy

```bash
git add .
git commit -m "Add Plausible Analytics"
git push
```

#### 4. Ver datos

1. Ve a [plausible.io](https://plausible.io)
2. Dashboard → Selecciona `poleursus.com`
3. Verás: visitantes, páginas, fuentes, países

### Métricas que verás:

- **Unique Visitors**: Visitantes únicos
- **Total Page Views**: Páginas vistas
- **Bounce Rate**: Tasa de rebote
- **Visit Duration**: Duración de visita
- **Top Pages**: Páginas más vistas
- **Top Sources**: De dónde viene tráfico
- **Countries**: Países
- **Devices**: Desktop/Mobile

---

## Comparación Rápida

| Feature | Vercel Analytics | Google Analytics 4 | Plausible |
|---------|------------------|-------------------|-----------|
| **Precio** | Gratis (100k eventos) | Gratis | $9/mes |
| **Setup** | 2 minutos | 10 minutos | 5 minutos |
| **Privacidad** | ✅ Excelente | ⚠️ Rastrea usuarios | ✅ Excelente |
| **Cookies** | No requiere | Requiere banner | No requiere |
| **Detalle** | Básico | Muy detallado | Medio |
| **GDPR** | ✅ Compliant | ⚠️ Requiere consent | ✅ Compliant |
| **Hosting** | Solo Vercel | Cualquiera | Cualquiera |
| **Real-time** | ✅ Sí | ✅ Sí | ✅ Sí |

---

## Recomendación por Caso de Uso

### Si estás en Vercel → **Vercel Analytics**
- Más fácil
- Sin configuración
- Respeta privacidad
- Gratis

### Si necesitas análisis profundo → **Google Analytics 4**
- Muy detallado
- Gratis
- Integración con Google Ads
- Requiere banner de cookies

### Si priorizas privacidad → **Plausible**
- Privacy-first
- No cookies
- UI simple
- De pago

---

## Mi Recomendación para Poleursus

**Start simple → Escala cuando necesites más**

### Fase 1: Inicio (ahora)
→ **Vercel Analytics**
- Gratis, simple, suficiente para empezar
- Ver si la gente visita tu web
- Identificar páginas populares

### Fase 2: Crecimiento (cuando tengas 1k+ visitas/mes)
→ **Añadir Google Analytics 4**
- Mantén Vercel Analytics
- Añade GA4 para análisis profundo
- Optimiza conversiones

### Fase 3: Privacidad premium (opcional)
→ **Migrar a Plausible**
- Si la privacidad es prioritaria
- Cuando tengas presupuesto
- Imagen de marca privacy-first

---

## Setup Recomendado (Dual Analytics)

Puedes usar **Vercel Analytics + Google Analytics** simultáneamente:

```tsx
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const dict = await getDictionary(params.locale);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={params.locale} className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
```

Beneficios:
- Vercel Analytics: datos rápidos y privacy-friendly
- Google Analytics: análisis profundo cuando lo necesites

---

## Próximos Pasos

1. **Elige tu opción** (recomiendo empezar con Vercel Analytics)
2. **Instala según las instrucciones** de arriba
3. **Deploy** a Vercel
4. **Espera 24-48h** para ver primeros datos
5. **Revisa métricas** semanalmente

---

## Recursos

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/9304153)
- [Plausible Docs](https://plausible.io/docs)
- [Web Analytics Best Practices](https://web.dev/vitals/)

---

**Última actualización**: Enero 2025
