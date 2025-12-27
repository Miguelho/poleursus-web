# Assets Guide

Este archivo documenta los assets que necesitas crear o reemplazar para completar la web.

## Imágenes Requeridas

### General (`/public/images/`)

1. **poleursus-logo.svg**
   - Logo principal de Poleursus
   - Formato: SVG (vectorial para escalabilidad)
   - Uso: Header, Footer

2. **pulse-icon.svg**
   - Ícono de la app Pulse
   - Formato: SVG
   - Tamaño recomendado: cuadrado (puede ser 512x512)

3. **og-image.png**
   - Imagen OpenGraph por defecto
   - Dimensiones: 1200x630px
   - Uso: Compartir en redes sociales (home)

4. **favicon.ico**
   - Favicon del sitio
   - Tamaño: 32x32px
   - Formato: ICO

5. **apple-touch-icon.png**
   - Ícono para iOS
   - Dimensiones: 180x180px

6. **icon-192.png** y **icon-512.png**
   - Íconos para PWA
   - Dimensiones: 192x192px y 512x512px respectivamente

### Pulse Screenshots (`/public/images/pulse/`)

7. **screenshot-1.png** a **screenshot-6.png**
   - Capturas de pantalla de la app Pulse
   - Dimensiones recomendadas: 750x1624px (proporción iPhone)
   - Formato: PNG
   - Optimizar para web (compresión)
   - Uso: Sección Screenshots en /pulse

8. **og-pulse.png**
   - Imagen OpenGraph específica para Pulse
   - Dimensiones: 1200x630px
   - Uso: Compartir /pulse en redes sociales

## Placeholders Actuales

Actualmente el proyecto usa referencias a estos archivos pero **no existen físicamente**. El proyecto compilará pero mostrará imágenes rotas hasta que los crees.

### Cómo Crear Placeholders Temporales

Si no tienes los assets finales, puedes crear placeholders simples:

#### Opción 1: Usar herramientas online
- [placeholder.com](https://placeholder.com) para imágenes PNG
- [SVG placeholder generators](https://placeholder.com)

#### Opción 2: Crear con código
```bash
# Instalar ImageMagick (macOS)
brew install imagemagick

# Crear placeholder OG image (1200x630)
convert -size 1200x630 xc:#0ea5e9 -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Poleursus" public/images/og-image.png

# Crear placeholder Pulse OG (1200x630)
convert -size 1200x630 xc:#0ea5e9 -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Pulse" public/images/pulse/og-pulse.png

# Crear screenshots placeholder (750x1624)
for i in {1..6}; do
  convert -size 750x1624 xc:#f5f5f5 -pointsize 40 -fill "#262626" -gravity center \
    -annotate +0+0 "Screenshot $i" public/images/pulse/screenshot-$i.png
done

# Crear favicon (32x32)
convert -size 32x32 xc:#0ea5e9 public/favicon.ico

# Crear apple-touch-icon (180x180)
convert -size 180x180 xc:#0ea5e9 public/apple-touch-icon.png

# Crear PWA icons
convert -size 192x192 xc:#0ea5e9 public/icon-192.png
convert -size 512x512 xc:#0ea5e9 public/icon-512.png
```

## Optimización de Imágenes

Una vez que tengas los assets reales:

1. **Comprimir PNGs**: Usa [TinyPNG](https://tinypng.com) o similar
2. **Optimizar SVGs**: Usa [SVGOMG](https://jakearchibald.github.io/svgomg/)
3. **Generar AVIF/WebP**: Next.js lo hace automáticamente con `next/image`

## Variables de Entorno

Recuerda configurar las URLs en `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://poleursus.com
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=TU_APP_ID_REAL
```

Copia `.env.local.example` a `.env.local` y actualiza los valores.
