# Almanaque Contemporaneo — ROADMAP

> Tracker de progreso del proyecto. Actualizado por Claude en cada sesion.
> Repo: https://github.com/Montakatonix/Newsletter-Hugo
> Live: https://newsletter-hugo.vercel.app

---

## ESTADO ACTUAL
Stack: Next.js 16.2.4 - TypeScript - Tailwind CSS 4 - Vercel (auto-deploy desde GitHub)

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
- [x] v4 FUTURISTA CYBER - commit 7c3a748 - fondo #030712 cyan #00FFE5 magenta #FF00AA
     grid 48px, glitch en titulo, scanline overlay, glow orbs,
     stats counters animados, ticker cyan, cyber-card shine hover, hex-btn clip-path

---

## EN PROGRESO

- [ ] Deploy v4 futurista - commit 7c3a748 - BUILDING en Vercel

---

## PENDIENTE

### Newsletter provider
- [ ] Env vars Beehiiv: NEWSLETTER_PROVIDER, BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID
- [ ] NEXT_PUBLIC_SITE_URL=https://almanaque-contemporaneo.com
- [ ] Testear flujo de suscripcion end-to-end

### Dominio personalizado
- [ ] Configurar almanaque-contemporaneo.com en Vercel
- [ ] Configurar DNS (A / CNAME records)
- [ ] Verificar SSL automatico

### SEO y metadata
- [ ] Metadata en layout.tsx (title, description, OG tags)
- [ ] sitemap.xml y robots.txt
- [ ] OG image para cada carta

### Contenido
- [ ] Revisar traducciones PT/ES en todos los componentes
- [ ] Añadir mas cartas a /app/data/cartas.ts
- [ ] Imagenes de portada para las cartas

### Performance
- [ ] Auditoria Lighthouse
- [ ] Optimizar imagenes con next/image
- [ ] Revisar Core Web Vitals

### Otras paginas
- [ ] Pagina /sobre con contenido real
- [ ] Pagina 404 personalizada
- [ ] Analytics (Vercel Analytics)

---

## NOTAS TECNICAS

- Turbopack falla con UTF-8 multibyte en page.tsx: usar solo ASCII puro
- api.github.com bloqueado desde bash: subir archivos via browser JS fetch()
- Proceso upload: base64 → chunks de 1000 chars → += en browser → PUT GitHub API
- Chunks >1000 chars pueden corromperse silenciosamente

---

## HISTORIAL DE COMMITS

| SHA     | Descripcion |
|---------|-------------|
| 8jXrMVx | redesign: editorial Stitch/Antigravity split-screen |
| dpl_21U | feat: animated homepage particles counters |
| 75f68be | redesign: dark literary (fallo encoding) |
| 7c3a748 | redesign: futuristic cyber aesthetic |

*Ultima actualizacion: 2026-05-02*
