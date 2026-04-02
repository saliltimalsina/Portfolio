# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Type check (tsc -b) + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

No test runner is configured.

## Architecture

Single-page React 19 + TypeScript portfolio built with Vite. All application logic lives in `src/App.tsx` — there are no sub-components or separate pages.

**Key interactive systems in App.tsx:**
- **Mouse-tracking blob** — a pink decorative element that follows the cursor using `requestAnimationFrame` with easing; pauses/resizes on nav hover
- **Scroll reveal** — `IntersectionObserver` adds/removes CSS classes to animate sections as they enter the viewport
- **Card hover highlights** — radial gradient overlay tracks mouse position within each card element
- **Carousel** — horizontal scroll container with prev/next controls

**Styling:** `src/index.css` holds all styles (~260 lines). `src/App.css` is minimal. No CSS framework or utility library is used — all styles are hand-written.

**Assets:** Static images in `src/assets/`. SVG icon sprite in `public/icons.svg`.

**TypeScript:** Strict mode enabled (`noUnusedLocals`, `noUnusedParameters`). Target ES2023.
