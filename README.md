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

## Home scroll experience

- `src/components/scene/` holds the WebGL scene (React Three Fiber). `sceneStates.ts` has the four states (hero, why us, services, journey) and `diskShader.ts` the accretion disk shader, both copied from the live Framer component.
- `src/components/home/SceneChoreography.tsx` is the single scroll controller (GSAP ScrollTrigger): it switches scene states when each section reaches the top of the screen and scrubs the card reveals between the `*-showup-trigger` and `*-cleanup-trigger` regions. Region sizes live in `SceneTrack.module.css`.
- Smooth scrolling uses Lenis, as on the live site. Reduced motion turns off smooth scroll, scene motion and scrubbing, and shortens the pauses.
- Without WebGL, `public/images/scene-hero.jpg` (a frame of our own scene) is shown instead.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

Fonts are self-hosted from `src/fonts/` (Anton, Inter, JetBrains Mono, Moon 2.0).
