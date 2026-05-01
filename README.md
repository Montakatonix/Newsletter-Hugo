# Almanaque Contemporaneo

Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruido do tempo.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Vercel

## Instalacao local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts
- `npm run dev` — desenvolvimento
- `npm run build` — build producao
- `npm run start` — servidor local
- `npm run lint` — linting
- `npm run type-check` — TypeScript check

## Newsletter

Configurar em `.env.local`:
```env
NEWSLETTER_PROVIDER=beehiiv
BEEHIIV_API_KEY=bh-api-xxx
BEEHIIV_PUBLICATION_ID=pub_xxx
```

## Deploy

Push para `main` → Vercel deploya automaticamente.