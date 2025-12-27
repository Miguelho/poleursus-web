# Pre-Deploy Checklist

Usa este checklist antes de hacer tu primer commit y deployment.

## ✅ Configuración Inicial

### 1. Dependencias
```bash
[ ] npm install
[ ] Verificar que no hay errores
```

### 2. Variables de Entorno
```bash
[ ] Copiar .env.local.example a .env.local
[ ] Actualizar NEXT_PUBLIC_BASE_URL (http://localhost:3000 para dev)
[ ] Actualizar NEXT_PUBLIC_GOOGLE_PLAY_URL (URL real o placeholder)
```

### 3. Assets Placeholder
Elige una opción:

**Opción A: Script automático (requiere ImageMagick)**
```bash
[ ] brew install imagemagick (macOS) o apt-get install imagemagick (Linux)
[ ] chmod +x create-placeholders.sh
[ ] ./create-placeholders.sh
```

**Opción B: Manual**
```bash
[ ] Crear public/images/og-image.png (1200x630)
[ ] Crear public/images/pulse/og-pulse.png (1200x630)
[ ] Crear public/images/pulse/screenshot-{1-6}.png (750x1624)
[ ] Crear public/favicon.ico (32x32)
[ ] Crear public/apple-touch-icon.png (180x180)
[ ] Crear public/icon-192.png y icon-512.png
```

## ✅ Testing Local

### 4. Verificación de Build
```bash
[ ] npm run dev (debe iniciar sin errores)
[ ] Abrir http://localhost:3000
[ ] Verificar redirect a /es
```

### 5. Test de Rutas
```bash
[ ] Visitar http://localhost:3000/es (home español)
[ ] Visitar http://localhost:3000/en (home inglés)
[ ] Visitar http://localhost:3000/es/pulse (landing pulse ES)
[ ] Visitar http://localhost:3000/en/pulse (landing pulse EN)
[ ] Visitar http://localhost:3000/es/privacy (privacidad)
[ ] Visitar http://localhost:3000/en/privacy (privacy)
[ ] Visitar http://localhost:3000/es/terms (términos)
[ ] Visitar http://localhost:3000/en/terms (terms)
```

### 6. Test de Funcionalidad
```bash
[ ] Language switcher funciona (ES ↔ EN)
[ ] Language switcher preserva ruta (/es/pulse ↔ /en/pulse)
[ ] Navegación header funciona (links a Pulse, Privacy, Terms)
[ ] Footer links funcionan
[ ] Botones CTA en Pulse hero funcionan
[ ] FAQ accordion expande/colapsa correctamente
[ ] Imágenes cargan (aunque sean placeholders)
[ ] No hay errores en DevTools Console
```

### 7. Test Responsive
```bash
[ ] Abrir DevTools → Toggle device toolbar
[ ] Probar mobile (375px)
[ ] Probar tablet (768px)
[ ] Probar desktop (1440px)
[ ] Header responsive funciona
[ ] Grids de cards se adaptan
[ ] Imágenes se redimensionan correctamente
```

## ✅ Code Quality

### 8. Type Check
```bash
[ ] npm run type-check
[ ] No hay errores de TypeScript
```

### 9. Lint
```bash
[ ] npm run lint
[ ] No hay warnings críticos
```

### 10. Build de Producción
```bash
[ ] npm run build
[ ] Build completa sin errores
[ ] npm start
[ ] Probar algunas rutas en modo producción
```

## ✅ SEO & Metadata

### 11. Meta Tags
```bash
[ ] Abrir DevTools → Elements → <head>
[ ] Verificar <title> correcto por página
[ ] Verificar <meta name="description">
[ ] Verificar <meta property="og:*"> (OpenGraph)
[ ] Verificar <meta name="twitter:*">
[ ] Verificar <link rel="canonical">
[ ] Verificar <link rel="alternate" hreflang="...">
```

### 12. Assets Públicos
```bash
[ ] Visitar http://localhost:3000/robots.txt
[ ] Verificar contenido correcto (Allow: /, Sitemap: ...)
[ ] Visitar http://localhost:3000/sitemap.xml
[ ] Verificar todas las rutas incluidas (ES/EN)
[ ] Verificar hreflang tags en sitemap
```

## ✅ Git & GitHub

### 13. Git Setup
```bash
[ ] git init (si no lo hiciste)
[ ] git add .
[ ] git status (verificar que .env.local NO esté staged)
[ ] Verificar .gitignore incluye .env*.local
```

### 14. Primer Commit
```bash
[ ] Copiar mensaje de COMMIT_MESSAGE.txt
[ ] git commit -m "..." (pegar mensaje)
[ ] Verificar commit exitoso
```

### 15. GitHub
```bash
[ ] Crear repo en GitHub (poleursus-web)
[ ] git remote add origin https://github.com/TU_USUARIO/poleursus-web.git
[ ] git branch -M main
[ ] git push -u origin main
```

## ✅ Vercel Deployment

### 16. Importar Proyecto
```bash
[ ] Ir a vercel.com/new
[ ] Autorizar GitHub
[ ] Seleccionar repo poleursus-web
[ ] Framework detectado: Next.js
```

### 17. Configurar Variables
```bash
[ ] Añadir NEXT_PUBLIC_BASE_URL (https://TU_DOMINIO.vercel.app)
[ ] Añadir NEXT_PUBLIC_GOOGLE_PLAY_URL (URL real)
[ ] Environment: Production
```

### 18. Deploy
```bash
[ ] Click "Deploy"
[ ] Esperar build completo (~2-3 min)
[ ] Deploy exitoso
[ ] Visitar URL de preview
```

## ✅ Post-Deploy Verification

### 19. Verificar Rutas en Producción
```bash
[ ] https://tu-dominio.vercel.app → redirige a /es
[ ] https://tu-dominio.vercel.app/es (home funciona)
[ ] https://tu-dominio.vercel.app/en (home funciona)
[ ] https://tu-dominio.vercel.app/es/pulse (pulse funciona)
[ ] https://tu-dominio.vercel.app/en/pulse (pulse funciona)
[ ] Language switcher funciona
```

### 20. SEO Validation
```bash
[ ] Abrir Facebook Debugger: https://developers.facebook.com/tools/debug/
[ ] Pegar URL: https://tu-dominio.vercel.app/es/pulse
[ ] Verificar OG tags correctos
[ ] Abrir Twitter Card Validator: https://cards-dev.twitter.com/validator
[ ] Verificar Twitter cards
```

### 21. Lighthouse Audit
```bash
[ ] Abrir DevTools → Lighthouse
[ ] Run audit (Mobile)
[ ] Performance: 90+ ✅
[ ] Accessibility: 95+ ✅
[ ] Best Practices: 95+ ✅
[ ] SEO: 100 ✅
[ ] Repetir para Desktop
```

### 22. Google Search Console (Opcional)
```bash
[ ] Ir a search.google.com/search-console
[ ] Añadir propiedad (dominio)
[ ] Verificar propiedad
[ ] Enviar sitemap: https://tu-dominio.vercel.app/sitemap.xml
```

## ✅ Mejoras Post-Deploy (Opcional)

### 23. Analytics
```bash
[ ] npm install @vercel/analytics
[ ] Añadir <Analytics /> en layout
[ ] Redeploy
```

### 24. Speed Insights
```bash
[ ] npm install @vercel/speed-insights
[ ] Añadir <SpeedInsights /> en layout
[ ] Redeploy
```

### 25. Dominio Custom
```bash
[ ] Vercel Settings → Domains
[ ] Añadir dominio: poleursus.com
[ ] Configurar DNS en proveedor
[ ] Esperar propagación (24-48h)
[ ] Actualizar NEXT_PUBLIC_BASE_URL
[ ] Redeploy
```

## ✅ Documentación Final

### 26. README Update
```bash
[ ] Actualizar README con URL de producción
[ ] Añadir badges (deployment status, etc.)
[ ] Actualizar screenshots si creaste nuevos
```

### 27. Release Tag
```bash
[ ] git tag v1.0.0
[ ] git push --tags
[ ] Crear GitHub Release con changelog
```

---

## 🎉 Completado

Si todos los checkboxes están marcados:

✅ **Tu proyecto está 100% deployado y funcionando!**

Próximos pasos opcionales:
- Reemplazar assets placeholder con diseños reales
- Añadir contenido legal real (privacy, terms)
- Configurar Google Analytics
- Implementar blog con MDX
- Añadir newsletter signup

---

**Última actualización**: Enero 2025
