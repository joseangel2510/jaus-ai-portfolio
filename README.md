# ULÍA — Personal Site

Sitio personal de **José Ángel Ulibarri** (`ulia.agency`).
Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 ·
Framer Motion · lucide-react.

Diseño: dark mode, neón cyan/teal, vibe de laboratorio de ingeniería
(referencias visuales: Linear · Vercel · Anthropic · Raycast).

---

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # dev server (puerto 3000 — usa 3001 si ocupado)
npm run build        # build de producción
npm run start        # servir build de producción
npm run lint         # eslint
```

### Screenshots

```bash
# Full-page desktop a localhost:3001
node scripts/snap.mjs http://localhost:3001 label-aqui desktop

# Mobile
node scripts/snap.mjs http://localhost:3001 label-aqui mobile

# Custom viewport
node scripts/snap.mjs http://localhost:3001 label-aqui 1280x900

# Región específica (scrollY + height)
node scripts/snap-region.mjs http://localhost:3001 hero 0 900
```

Output → `temporary screenshots/` (gitignored).

---

## Variables de entorno

Crear `.env.local` (ver `.env.example`):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=528130966833
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/joseangelus/
```

Solo se usan estos dos canales — el método principal de contacto es
WhatsApp.

---

## Estructura

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # root layout (fonts + Nav + Footer + bg)
│   │   ├── page.tsx            # composición de secciones
│   │   ├── globals.css         # design tokens (Tailwind v4 @theme)
│   │   ├── opengraph-image.tsx # OG image dinámico (1200x630)
│   │   ├── robots.ts           # robots.txt
│   │   └── sitemap.ts          # sitemap.xml
│   ├── components/
│   │   ├── nav.tsx             # nav sticky con blur
│   │   ├── footer.tsx          # footer con HUD brackets
│   │   ├── grid-background.tsx # grid + canvas particles + glow
│   │   ├── custom-cursor.tsx   # cursor cyan follower
│   │   ├── reveal-on-scroll.tsx # IntersectionObserver global
│   │   ├── decode-text.tsx     # animación decode (random → texto final)
│   │   ├── terminal-log.tsx    # panel terminal animado
│   │   ├── magnetic.tsx        # wrapper magnetic-button
│   │   ├── brand-icons.tsx     # SVG inline LinkedIn / WhatsApp
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── stack-marquee.tsx
│   │       ├── about.tsx
│   │       ├── services.tsx
│   │       ├── cases.tsx
│   │       ├── process.tsx
│   │       └── contact.tsx
│   └── lib/
│       ├── contact.ts          # build URLs WhatsApp + display formatting
│       └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── scripts/
│   ├── snap.mjs                # full-page screenshot tool
│   └── snap-region.mjs         # region screenshot tool
├── public/                     # SVG assets
└── legacy-template/            # template estático original (archivado)
```

---

## Design system

Tokens en `src/app/globals.css` dentro de `@theme { ... }` (Tailwind v4).

| Token                  | Valor      | Uso                                  |
| ---------------------- | ---------- | ------------------------------------ |
| `--color-base`         | `#050608`  | Fondo principal                      |
| `--color-surface`      | `#0a0d12`  | Cards / elevación nivel 1            |
| `--color-raised`       | `#11161d`  | Elevación nivel 2 / hover            |
| `--color-line`         | `#1a1f28`  | Bordes sutiles                       |
| `--color-line-strong`  | `#232a35`  | Bordes normales                      |
| `--color-ink`          | `#f5f7fa`  | Texto primario                       |
| `--color-ink-2`        | `#a8b2c1`  | Texto secundario                     |
| `--color-ink-3`        | `#6b7689`  | Texto terciario / labels             |
| `--color-ink-4`        | `#4a5263`  | Texto muted                          |
| `--color-accent`       | `#00e5c3`  | Cyan/teal — acento principal         |
| `--color-accent-glow`  | `#00ffd1`  | Glows / highlights                   |
| `--color-accent-dim`   | `#00a88f`  | Detalles cyan apagados               |

Fonts (`next/font`):
- **Geist** — display / headings (`font-display`)
- **Inter** — body (`font-sans`)
- **JetBrains Mono** — labels técnicos, terminal, métricas (`font-mono`)

---

## Deploy en Vercel

El proyecto vive en la **raíz** del repo, así que Vercel auto-detecta
Next.js sin configuración extra.

1. **Vercel** → New Project → importar el repo
2. Framework Preset: **Next.js** (auto-detectado)
3. Root Directory: **`./`** (default)
4. Environment variables:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `528130966833`
   - `NEXT_PUBLIC_LINKEDIN_URL` = `https://www.linkedin.com/in/joseangelus/`
5. Deploy.

Custom domain: añadir `ulia.agency` en Vercel → Settings → Domains.

> Si tu proyecto en Vercel tenía configurado **Root Directory** apuntando
> a `site/` o cualquier subcarpeta — bórralo y deja `./`. La raíz tiene
> el `package.json` correcto desde este commit.

---

## Accesibilidad

- Contraste AA cumplido (cyan sobre base, ink sobre base)
- `prefers-reduced-motion` respetado — todas las animaciones se desactivan
- Custom cursor desactivado en `pointer: coarse` (touch devices)
- Navegación por teclado: focus-visible en todos los CTAs
- `lang="es"` en `<html>`

---

## Notas técnicas

- `lucide-react@1.x` ya **no** incluye iconos de marca (LinkedIn, GitHub,
  Twitter, etc). Por eso `brand-icons.tsx` define los SVGs inline.
- Tailwind v4 usa configuración basada en CSS (`@theme`) — no hay
  `tailwind.config.ts`.
- `legacy-template/` contiene el template estático original (pre-Next.js)
  por si en el futuro lo quieres revisitar. Vercel lo ignora porque no
  hay `package.json` ahí en el lugar que mire.
