# Guía de Deployment en Vercel

Esta guía te ayudará a desplegar la web de Poleursus en Vercel paso a paso.

## Pre-requisitos

- Una cuenta en [Vercel](https://vercel.com)
- Código subido a GitHub (o GitLab/Bitbucket)
- Node.js 18+ instalado localmente para testing

## Paso 1: Preparar el Proyecto

### 1.1 Instalar dependencias

```bash
npm install
```

### 1.2 Crear archivo `.env.local`

Copia el archivo de ejemplo:

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus valores:

```env
NEXT_PUBLIC_BASE_URL=https://poleursus.com
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.poleursus.pulse
```

### 1.3 Añadir assets (IMPORTANTE)

Antes de desplegar, asegúrate de tener al menos placeholders para:
- `/public/images/og-image.png`
- `/public/images/pulse/og-pulse.png`
- `/public/images/pulse/screenshot-{1-6}.png`
- `/public/favicon.ico`

Ver [ASSETS_README.md](./ASSETS_README.md) para detalles.

### 1.4 Testear localmente

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Verifica que:
- ✅ No hay errores de TypeScript: `npm run type-check`
- ✅ No hay errores de lint: `npm run lint`
- ✅ El build se completa sin errores
- ✅ Todas las rutas funcionan (`/es`, `/en`, `/es/pulse`, `/en/pulse`, etc.)
- ✅ El language switcher funciona correctamente
- ✅ Las imágenes cargan (aunque sean placeholders)

## Paso 2: Subir a GitHub

```bash
# Inicializar git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Poleursus web"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/poleursus-web.git
git branch -M main
git push -u origin main
```

## Paso 3: Deploy en Vercel

### 3.1 Importar Proyecto

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Selecciona "Import Git Repository"
3. Autoriza Vercel a acceder a GitHub
4. Selecciona el repositorio `poleursus-web`

### 3.2 Configurar Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Configuración recomendada:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (raíz del proyecto)
- **Build Command**: `npm run build` (por defecto)
- **Output Directory**: `.next` (por defecto)
- **Install Command**: `npm install` (por defecto)

### 3.3 Configurar Variables de Entorno

En la sección "Environment Variables", añade:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_BASE_URL` | `https://TU_DOMINIO.vercel.app` | Production |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | URL real de Google Play | Production |

**Nota**: Si vas a usar un dominio custom (ej: `poleursus.com`), usa ese dominio en `NEXT_PUBLIC_BASE_URL`.

### 3.4 Deploy

Click "Deploy". Vercel:
1. Clonará el repositorio
2. Instalará dependencias
3. Ejecutará el build
4. Desplegará el sitio

Tiempo estimado: 2-3 minutos.

## Paso 4: Verificar Deploy

Una vez completado, Vercel te dará una URL (ej: `https://poleursus-web.vercel.app`).

### 4.1 Checklist Post-Deploy

Verifica estas URLs:

- ✅ `https://tu-dominio.vercel.app` → redirige a `/es`
- ✅ `https://tu-dominio.vercel.app/es` → Home en español
- ✅ `https://tu-dominio.vercel.app/en` → Home en inglés
- ✅ `https://tu-dominio.vercel.app/es/pulse` → Landing Pulse (ES)
- ✅ `https://tu-dominio.vercel.app/en/pulse` → Landing Pulse (EN)
- ✅ `https://tu-dominio.vercel.app/es/privacy` → Privacidad
- ✅ `https://tu-dominio.vercel.app/en/privacy` → Privacy
- ✅ Language switcher funciona en todas las páginas
- ✅ Imágenes cargan correctamente
- ✅ Links externos (Google Play) funcionan

### 4.2 Testear SEO

1. **OpenGraph Tags** (compartir en redes sociales):
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

2. **Sitemap**:
   - Visita: `https://tu-dominio.vercel.app/sitemap.xml`
   - Verifica que aparezcan todas las rutas ES/EN

3. **Robots.txt**:
   - Visita: `https://tu-dominio.vercel.app/robots.txt`
   - Verifica que apunte al sitemap

4. **Lighthouse**:
   - Abre DevTools → Lighthouse
   - Ejecuta auditoría para Mobile y Desktop
   - Objetivos: Performance 90+, Accessibility 95+, SEO 100

## Paso 5: Dominio Custom (Opcional)

### 5.1 Configurar Dominio en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Añade tu dominio: `poleursus.com`
4. Vercel te dará instrucciones DNS

### 5.2 Configurar DNS

En tu proveedor de dominio (Namecheap, GoDaddy, etc.):

**Opción A: Usar registro A** (recomendado)
```
Type: A
Name: @
Value: 76.76.21.21
```

**Opción B: Usar CNAME**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Propagación DNS: 24-48 horas (usualmente menos).

### 5.3 Actualizar Variables de Entorno

Una vez que el dominio esté activo:
1. Ve a Settings → Environment Variables
2. Actualiza `NEXT_PUBLIC_BASE_URL` a `https://poleursus.com`
3. Redeploy el proyecto (Deployments → ... → Redeploy)

## Paso 6: Configuración Adicional

### 6.1 Configurar Redirects

Si quieres que `www.poleursus.com` redirija a `poleursus.com`:

1. Settings → Domains
2. Añade `www.poleursus.com`
3. Selecciona "Redirect to poleursus.com"

### 6.2 Analytics (Opcional)

Añadir Vercel Analytics:

```bash
npm install @vercel/analytics
```

En `src/app/[locale]/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

// En el return del layout:
<body>
  {/* ... */}
  <Analytics />
</body>
```

Redeploy el proyecto.

### 6.3 Speed Insights (Opcional)

```bash
npm install @vercel/speed-insights
```

Añadir en el mismo layout:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

<body>
  {/* ... */}
  <SpeedInsights />
</body>
```

## Paso 7: Monitoreo Post-Deploy

### 7.1 Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade tu propiedad (dominio)
3. Verifica propiedad (DNS o archivo HTML)
4. Envía sitemap: `https://poleursus.com/sitemap.xml`

### 7.2 Core Web Vitals

Monitorea en:
- Vercel Analytics Dashboard
- Google Search Console → Core Web Vitals
- PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)

### 7.3 Errores y Logs

- Vercel Dashboard → Deployments → Logs
- Vercel Dashboard → Analytics → Errors

## Troubleshooting

### Problema: Build falla con error de TypeScript

**Solución**: Ejecuta localmente `npm run type-check` y corrige errores.

### Problema: Imágenes no cargan (404)

**Solución**: Verifica que los archivos existan en `/public/images/`. Next.js sirve archivos de `/public/` en la raíz.

### Problema: Redirect loop en `/`

**Solución**: Verifica `next.config.js` y `middleware.ts`. El redirect debe ser `/` → `/es`, no circular.

### Problema: Language switcher no funciona

**Solución**: Verifica que `LanguageSwitcher` use correctamente `usePathname()` y construya rutas válidas.

### Problema: Metadata no aparece en redes sociales

**Solución**:
1. Verifica que `NEXT_PUBLIC_BASE_URL` esté configurado
2. Usa Facebook Debugger para limpiar caché
3. Verifica que las imágenes OG existan y sean accesibles

## Despliegues Futuros

Vercel redespliega automáticamente cuando haces push a `main`:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel detectará el push y desplegará automáticamente.

### Preview Deployments

Cada pull request crea un preview deployment automático:
- Útil para testar cambios antes de mergear
- URL única por PR
- Se destruye al cerrar el PR

## Recursos Adicionales

- [Documentación Vercel](https://vercel.com/docs)
- [Next.js Deploy](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli) (deploy desde terminal)

## Contacto

Para soporte, consulta la documentación oficial o abre un issue en el repositorio.

---

**Última actualización**: Enero 2025
