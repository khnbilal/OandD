# One&Done — Next.js Workout App

Responsive Next.js App Router application built around the supplied OAD Workout Manual, brand identity and 32 Beginner/Intermediate thumbnail images.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build: `npm run build`; run with `npm start`.

## Features in this version

- Mobile-first dashboard and responsive desktop navigation.
- Daily workout, program day, weekly schedule with workout/walking/activity days, progress and next-up preview.
- Interrupted sessions are saved locally; the dashboard offers Continue Workout and resumes at the saved session step.
- Guided session sequence: Warm Up → selected workout → Flow Down.
- Native MP4 playback with automatic progression on `ended`, pause/resume, restart, and separate demo playback.
- Session completion celebration with summary metrics.
- Progress screen with weekly adherence, consecutive scheduled-activity streak, completed activity calendar, milestones, activity history, shareable progress summary and printable certificate.
- Beginner and Intermediate workout libraries use the exact ordering supplied in the reference screenshots.
- Browser-local progress persistence, light/dark themes, and reset functionality.

## Canonical workout ordering

The `WORKOUT_ORDER` constant in `app/workouts.ts` is the single source of truth. The dashboard featured cards and both expanded workout libraries use `getOrderedWorkouts()` so rendering does not depend on the order of the underlying manifest or CSS layout.

## Workout order

Beginner: Warm Up, Burst, Accelerate, Flow Down, Agility, Speed, Momentum, Blast, Slimmer, Lean Out, Dynamic, Torch, Tone, Tighten, Strengthen, Invigorate.

Intermediate: Warm Up, Flow Down, Speed, Agility, Momentum, Accelerate, Burst, Blast, Slimmer, Lean Out, Dynamic, Torch, Tone, Tighten, Strengthen, Invigorate.

## Replace videos

Video assets live in `public/videos/`. Replace placeholder MP4s with the trainer's supplied videos while keeping filenames unchanged. Paths are configured in `app/workouts.ts`. See `public/videos/README.md`.

## Persistence limitation

This MVP stores progress in the current browser's local storage. It does not yet synchronize progress across devices or share client records with a trainer dashboard. Use demo data for presentations; real shared coaching requires authentication, server-side authorization and a shared database.


## Visual design and motion

The interface uses a refreshed Studio visual theme with a violet/lavender and acid-lime accent palette, updated Space Grotesk typography, layered surfaces, elevated workout cards, subtle gradients, and consistent icon treatments. CSS motion includes staggered page/card entrances, hero image drift, hover elevation, icon micro-interactions, button sheen, progress-gradient movement, modal/trophy entrances, and theme-aware transitions. `prefers-reduced-motion` is respected; no animation library is required.
