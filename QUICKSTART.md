# Quick Start Guide

Guía rápida para poner en marcha el proyecto Poleursus Web en menos de 5 minutos.

## Pre-requisitos

- Node.js 18+ ([descargar](https://nodejs.org))
- npm o yarn
- Editor de código (VS Code recomendado)

## Paso 1: Clonar e Instalar (1 min)

```bash
# Si ya clonaste el repo, salta esto
git clone https://github.com/TU_USUARIO/poleursus-web.git
cd poleursus-web

# Instalar dependencias
npm install
```

## Paso 2: Configurar Entorno (30 seg)

```bash
# Copiar archivo de ejemplo
cp .env.local.example .env.local

# Editar con tus valores (o dejar placeholders por ahora)
# nano .env.local  # o usa tu editor favorito
```

Contenido de `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.example.app
```

## Paso 3: Crear Assets Placeholder (2 min)

### Opción A: Usando ImageMagick (recomendado)

```bash
# Instalar ImageMagick si no lo tienes
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick
# Windows: https://imagemagick.org/script/download.php

# Crear placeholders automáticamente
chmod +x create-placeholders.sh
./create-placeholders.sh
```

### Opción B: Manualmente

Creass.com)):

```
public/
  images/
    og-image.png (1200x630)
    pulse/
      og-pulse.png (1200x630)
      screenshot-1.png (750x1624)
      screenshot-2.png (750x1624)
      screenshot-3.png (750x1624)
      screenshot-4.png (750x1624)
      screenshot-5.png (750x1624)
      screenshot-6.png (750x1624)
  favicon.ico (32x32)
```

### Opción C: Usar colores sólidos temporales

Crea archivos PNG de colores sólidos con dimensiones correctas como placeholders temporales.

## Paso 4: Ejecutar Desarrollo (10 seg)

```bash
npm run dev
```

Abre: [http://localhost:3000](http://localhost:3000)

## Paso 5: Verificar Rutas (1 min)

Prueba estas URLs en tu navegador:

- ✅ http://localhost:3000 → debe redirigir a /es
- ✅ http://localhost:3000/es → Home en español
- ✅ http://localhost:3000/en → Home en inglés
- ✅ http://localhost:3000/es/pulse → Pulse landing (ES)
- ✅ http://localhost:3000/en/pulse → Pulse landing (EN)

## Próximos Pasos

### Personalizar Contenido

Edita los diccionarios para cambiar textos:
- `/src/i18n/dictionaries/es.json` (contenido en español)
- `/src/i18n/dictionaries/en.json` (contenido en inglés)

### Añadir Assets Reales

Reemplaza los placeholders con imágenes reales:
1. Logo de Poleursus
2. Capturas de pantalla de Pulse
3. Imágenes OpenGraph personalizadas

Ver [ASSETS_README.md](./ASSETS_README.md) para detalles.

### Build de Producción

```bash
# Verificar que todo compila sin errores
npm run build

# Ejecutar build localmente
npm start
```

### Deploy a Vercel

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para guía completa de deployment.

## Troubleshooting Rápido

### Error: "Cannot find module"

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error: "Failed to compile"

```bash
# Verificar errores de TypeScript
npm run type-check

# Verificar errores de lint
npm run lint
```

### Imágenes no cargan (broken image icons)

Verifica que los archivos existan en `/public/images/`. Recuerda que Next.js sirve archivos de `/public/` directamente en la raíz URL.

### Middleware redirect loop

Verifica que `src/middleware.ts` no tenga conflictos con `next.config.js`. Debe haber un solo redirect de `/` → `/es`.

## Scripts Útiles

```bash
npm run dev          # Desarrollo con hot reload
npm run build        # Build de producción
npm start            # Ejecutar build de producción
npm run lint         # Verificar código con ESLint
npm run type-check   # Verificar tipos TypeScript
```

## Ayuda

- 📖 **Documentación completa**: Ver [README.md](./README.md)
- 🚀 **Deploy**: Ver [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🎨 **Assets**: Ver [ASSETS_README.md](./ASSETS_README.md)
- 🐛 **Issues**: Abrir issue en GitHub

---

**¡Listo!** Tu landing de Poleursus está corriendo. 🎉
