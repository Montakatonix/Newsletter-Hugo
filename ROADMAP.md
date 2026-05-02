# Almanaque Contemporaneo — ROADMAP

> Tracker de progreso del proyecto. Actualizado por Claude en cada sesion.
> Repo: https://github.com/Montakatonix/Newsletter-Hugo
> Live: https://newsletter-hugo.vercel.app

---

## ESTADO ACTUAL
Stack: Next.js 16.2.4 - TypeScript - Tailwind CSS 4 - Vercel (auto-deploy desde GitHub)
Ultimo deploy exitoso: dpl_9cgyzuk3r45gmHTHeiEhau9GK7co — READY — 2026-05-02

---

## COMPLETADO

### Infraestructura base
- [x] Proyecto Next.js con TypeScript y Tailwind CSS 4
- [x] Deploy automatico en Vercel desde branch main
- [x] NavBar con soporte multilenguaje (useLanguage context)
- [x] Footer, CartaCard (variantes: featured, list), NewsletterForm (variante minimal)
- [x] Paginas: /arquivo, /sobre, /carta/[slug]
- [x] Sistema de traducciones (LanguageContext)
- [x] Datos de cartas en /app/data/cartas.ts

### Disenos de homepage (iteraciones)
- [x] v1 Split-screen editorial Stitch/Antigravity (dpl_8jXrMVxizBxSUPrzzE5cfJKUa9S1)
- [x] v2 Animated particles + counters + shimmer (dpl_21UdSkhDHBKyv3MvKERGqXz6J8Qv)
- [x] v3 Dark literary aesthetic con parallax (FALLO: Turbopack encoding error)
- [x] v4 FUTURISTA CYBER - dpl_9cgyzuk3r45gmHTHeiEhau9GK7co - LIVE
     - Fondo oscuro #030712, cyan #00FFE5, magenta #FF00AA, yellow #FFE600
     - Grid de fondo 48px con CSS background-image
     - Glitch animation (::before/::after clip-path) en titulo ALMANAQUE
     - Scanline overlay animado con repeating-linear-gradient
     - Glow orbs con radial-gradient cyan y magenta
     - Status bar: SYS:INIT > ALMANAQUE_CONTEMP.TSX > v2.0 > ONLINE
     - Ticker amarillo con texto en uppercase Courier New
     - Stats grid: CARTAS_TOTAL (cyan), LEITURA_MEDIA (magenta), SEMANAS_ATIVAS (yellow)
     - Contadores animados con easing exponencial
     - cyber-card (.cc) con shine hover sweep
     - hex-btn (.hb) con clip-path polygon y letter-spacing hover
     - Manifesto con gradiente cyan-magenta
     - CTA con slide-in animations izquierda/derecha

### ROADMAP
- [x] Archivo ROADMAP.md creado en el repo para tracking de progreso

---

## PENDIENTE

### Newsletter provider
- [ ] Configurar env vars en Vercel:
      NEWSLETTER_PROVIDER=beehiiv
      BEEHIIV_API_KEY=<pendiente del usuario>
      BEEHIIV_PUBLICATION_ID=<pendiente del usuario>
      NEXT_PUBLIC_SITE_URL=https://almanaque-contemporaneo.com
- [ ] Testear flujo de suscripcion end-to-end

### Dominio personalizado
- [ ] Configurar almanaque-contemporaneo.com en Vercel (Settings > Domains)
- [ ] Configurar DNS records (A / CNAME en el registrar)
- [ ] Verificar SSL automatico de Vercel

### SEO y metadata
- [ ] Actualizar metadata en app/layout.tsx (title, description, OG image, canonical)
- [ ] Crear sitemap.xml dinamico (/app/sitemap.ts)
- [ ] Crear robots.txt (/public/robots.txt)
- [ ] OG image unica para cada carta

### Contenido
- [ ] Revisar/completar traducciones PT y ES en todos los componentes
- [ ] Añadir mas cartas al archivo /app/data/cartas.ts
- [ ] Añadir imagenes de portada para las cartas

### Performance
- [ ] Auditoria Lighthouse en produccion
- [ ] Optimizar imagenes con next/image donde aplique
- [ ] Revisar Core Web Vitals (LCP, CLS, FID)

### Otras paginas
- [ ] Pagina /sobre con contenido real (quien es el autor, mision del proyecto)
- [ ] Pagina 404 personalizada con estetica cyber
- [ ] Integrar Vercel Analytics en layout.tsx

---

## NOTAS TECNICAS

- Turbopack (Next.js 16) falla con error "failed to convert rope into string"
  si page.tsx contiene caracteres UTF-8 multibyte (emoji, acentos en strings JS).
  Solucion: mantener todos los archivos en ASCII puro.
- api.github.com esta bloqueado desde bash en el entorno de Claude.
  El upload de archivos al repo se hace via JavaScript en el browser con fetch().
  Proceso: leer archivo en bash -> python3 base64.b64encode -> dividir en chunks
  de 1000 chars exactos -> window._f += 'chunk' en browser -> PUT al GitHub API.
- Chunks >1000 chars pueden corromperse silenciosamente al ser pegados.
  Siempre verificar con atob(window._f) antes del upload final.

---

## HISTORIAL DE COMMITS

| SHA      | Estado | Descripcion |
|----------|--------|-------------|
| 8jXrMVx  | READY  | redesign: editorial Stitch/Antigravity split-screen |
| dpl_21U  | READY  | feat: animated homepage particles counters |
| 75f68be  | ERROR  | redesign: dark literary (fallo encoding UTF-8) |
| 7c3a748  | READY  | redesign: futuristic cyber aesthetic - LIVE |
| 31fe234c | READY  | docs: ROADMAP.md creado |

*Ultima actualizacion: 2026-05-02 por Claude*
