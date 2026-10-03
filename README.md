# wbz-modern-portfolio

Site oficial da Webcraftz, rebuilt in Next.js (App Router) + React from the Framer site at https://www.webcraftz.com.br/.

## Routes

- `/` Home: scroll-driven 3D scene (hero, why us, services, journey), clients, selected work, testimonials, FAQ, contact band
- `/cases` Work index with category filters
- `/cases/[slug]` Case study pages, generated from `src/content/projects.ts`

## Editing content

- Projects: `src/content/projects.ts` (entries with `needsReview` still have details to confirm)
- Testimonials: `src/content/testimonials.ts`
- Home copy: `src/content/home.ts`
- Contact email, nav and social links: `src/content/site.ts`

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

Fonts are self-hosted from `src/fonts/` (Anton, Inter, JetBrains Mono, Moon 2.0).
