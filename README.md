# Poleursus Web

Landing page comercial para Poleursus y Pulse, construida con Next.js 14, TypeScript y TailwindCSS.

## Características

- 🌍 **i18n manual** con español e inglés (rutas `/es/*` y `/en/*`)
- ⚡ **Next.js 14** con App Router
- 🎨 **TailwindCSS** con diseño minimalista premium
- 🔍 **SEO optimizado** con metadata localizada y hreflang tags
- 📱 **Responsive** mobile-first
- ♿ **Accesible** (WCAG AA)

## Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── [locale]/        # Rutas localizadas
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Estilos globales
│   ├── components/           # Componentes reutilizables
│   ├── i18n/                 # Sistema de internacionalización
│   │   ├── config.ts
│   │   ├── types.ts
│   │   ├── getDictionary.ts
│   │   └── dictionaries/
│   │       ├── es.json
│   │       └── en.json
│   ├── lib/                  # Utilidades y helpers
│   └── middleware.ts         # Middleware de i18n
├── public/                   # Assets estáticos
└── [archivos de configuración]
```

## Desarrollo

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

### Lint y type-check

```bash
npm run lint
npm run type-check
```

## i18n

Este proyecto usa un sistema i18n manual sin librerías externas:

- **Detección automática** de idioma desde `Accept-Language` header
- **Rutas localizadas**: `/es/*` (español) y `/en/*` (inglés)
- **Diccionarios JSON** en `src/i18n/dictionaries/`
- **Middleware** para redirección automática
- **LanguageSwitcher** para cambiar idioma manualmente

## Primeros Pasos

### 1. Configurar Variables de Entorno

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus valores reales.

### 2. Añadir Assets

⚠️ **IMPORTANTE**: Antes de ejecutar el proyecto, necesitas añadir imágenes placeholder.

Ver [ASSETS_README.md](./ASSETS_README.md) para la lista completa y cómo crear placeholders temporales.

Mínimo requerido:
- `/public/images/og-image.png` (1200x630)
- `/public/images/pulse/og-pulse.png` (1200x630)
- `/public/images/pulse/screenshot-{1-6}.png` (750x1624)
- `/public/favicon.ico` (32x32)

### 3. Instalar y Ejecutar

```bash
npm install
npm run dev
```

## Deploy en Vercel

**Guía completa**: Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas paso a paso.

**Resumen rápido**:
1. Push del código a GitHub
2. Importar repositorio en Vercel
3. Configurar variables de entorno
4. Deploy automático

Variables de entorno necesarias:
- `NEXT_PUBLIC_BASE_URL=https://poleursus.com`
- `NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=TU_APP_ID`

## Estructura de Rutas

- `/` → redirect a `/es`
- `/es` → Home Poleursus (español)
- `/en` → Home Poleursus (inglés)
- `/es/pulse` → Landing Pulse (español)
- `/en/pulse` → Landing Pulse (inglés)
- `/es/privacy` → Política de privacidad
- `/en/privacy` → Privacy policy
- `/es/terms` → Términos de servicio
- `/en/terms` → Terms of service

## Filosofía de Diseño

- **Minimalista premium**: Mucho espacio en blanco, tipografía limpia
- **Calmado y honesto**: Sin claims exagerados ni datos inventados
- **Performance-first**: Lighthouse scores 90+
- **Accesible**: WCAG AA compliance

## Licencia

© 2025 Poleursus. Todos los derechos reservados.
