# José Ángel Ulibarri — AI Automation Specialist

Sitio personal / portafolio de José Ángel Ulibarri (alquimIA). Diseño minimalista oscuro con paleta tiffany sobre negro, animaciones GSAP, glassmorphism y fondo aurora animado.

## Stack

- HTML + Tailwind CSS (CDN) + Vanilla JavaScript
- GSAP + ScrollTrigger para animaciones
- Lucide para iconos
- Fuentes: Instrument Serif (display) + JetBrains Mono (body)
- Sin build step — un único `index.html`

## Desarrollo local

```bash
npm install
npm run dev          # servidor en http://localhost:3000
npm run screenshot   # captura full-page en temporary screenshots/
```

## Deploy

Optimizado para deploy en Vercel — basta con conectar el repo y desplegar (no requiere build).

## Estructura

```
.
├── index.html              # sitio completo
├── serve.mjs               # dev server (zero-deps, puerto 3000)
├── screenshot.mjs          # captura full-page con Puppeteer
├── tools/generate_image.js # generación de imágenes vía OpenRouter
├── brand_assets/           # assets de marca
└── media/                  # imágenes generadas
```

## Responsive

Diseño mobile-first verificado en viewports de 320px, 375px y desktop.
