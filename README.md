# Sheng Huang — Portfolio

Personal portfolio site built with [Astro 5](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

**Live:** https://shengh318.github.io

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) (static site generation) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) |
| UI Animations | CSS keyframes, Canvas 2D, IntersectionObserver |
| Icons | Inline SVG paths (no icon library) |
| Deployment | GitHub Actions (`peaceiris/actions-gh-pages`) → `gh-pages` branch |

## Project Structure

```
src/
├── pages/
│   └── index.astro           # Single-page entry — imports all sections in order
├── layouts/
│   └── BaseLayout.astro      # HTML shell: Inter font, meta tags, global CSS, main.js
├── components/
│   ├── Header.astro          # Fixed top nav with scroll-aware backdrop blur
│   ├── Hero.astro            # Full-viewport hero: name, tagline, CTA, globe canvas
│   ├── About.astro           # Terminal-style bio (BIO.SYS) + download-resume widget + HudTerminal
│   ├── Experience.astro      # Timeline-style cards; uses HudDiagnostic
│   ├── Skills.astro          # Holographic categories (Languages / Tools / Hardware) + canvas core
│   ├── Projects.astro        # Holographic project cards: status badges, skill bars, highlights; uses HudRepulsor
│   ├── Contact.astro         # HUD comms terminal with channel rows, signal bars, availability status; uses HudComm
│   ├── Footer.astro          # Copyright + "Built with Astro" + SYS: ONLINE status
│   └── hud/                  # Decorative SVG gadgets (positioned absolutely, non-interactive, z-0)
│       ├── HudTerminal.astro     # Typewriter animation in About section
│       ├── HudDiagnostic.astro   # Signal-bars blips in Experience
│       ├── HudRepulsor.astro     # Pulsing repulsor rings in Projects
│       └── HudComm.astro         # Communication waveform in Contact
├── data/
│   └── projects.ts           # Single source of truth: projects[], skills{}, experience[]
├── scripts/
│   └── main.js               # Client JS: custom cursor, nav scroll, reveal, mobile menu
└── styles/
    └── global.css            # Tailwind import + theme tokens + all custom CSS (~1120 lines)
public/
├── resume.pdf                # Deployable resume (built from Resume/ source)
└── images/                   # Headshot / photo directory (currently empty)
Resume/
└── HUANG Sheng 2024 Resume.pdf   # Source resume PDF
.github/
└── workflows/
    └── deploy.yml            # GitHub Actions: build & deploy on push to main
REVAMP_PLAN.md                # Planned redesign (amber/gold theme, GSAP animations)
```

## Architecture

### Page flow

`index.astro` composes all sections in order:

```
Header → Hero → About → Experience → Skills → Projects → Contact → Footer
```

Each section is a self-contained `.astro` component with its own `<script>` tag for interactivity and optionally imports a HUD gadget for background decoration. Section titles use `_` prefix convention (`_ABOUT`, `_EXPERIENCE`, `_SKILLS`, `_PROJECTS`, `_CONTACT`).

### Data layer (`src/data/projects.ts`)

All editable content lives in one file:

| Export | Type | Description |
|--------|------|-------------|
| `projects` | `Project[]` | 6 project entries (id, icon, name, description, status, role, highlights, skills[]) |
| `skills` | `{ languages, tools, hardware }` | Skill categories (name, icon, percent) |
| `experience` | `{ role, company, period, description[] }[]` | 3 work history entries |

⚠️ **Placeholder content exists** — `experience` data has dummy entries like "Your Company Name", "[Conference Name]", "[Course Name]" that need real values.

### Theme & Styling

- **Teal-on-black** palette defined in `src/styles/global.css` via Tailwind's `@theme` (around line 3).
- Key tokens: `accent` (#14b8a6), `base` (#0a0a0a), `card` (#1a1a1a), `text-primary` (#f5f5f5).
- Component-specific styles use `<style>` tags in `.astro` components.
- Utility classes: `.reveal` / `.reveal-stagger` (IntersectionObserver fade-in), `.glass-card` (translucent bg + border + hover glow), `.section-bg` (subtle grid overlay).
- Font: Inter (loaded from Google Fonts in `BaseLayout.astro`).

### HUD gadget system

Four decorative SVG components (no standalone `HudArc.astro` — Skills uses inline Canvas 2D instead). All positioned absolutely, non-interactive, `z-index: 0`. Shared CSS keyframes in `global.css`:
- `hudSpin` / `hudSpinRev` — rotation
- `hudPop` — scale pulse
- `hudBlip` — diagnostic blip
- `hudRepGlow` / `hudRepSpoke` — repulsor effects
- `hudCommGlow` / `hudRingExpand` — communication waves
- `sysPulse` — system status dot

### Canvas visualizations

1. **Hero globe** (`Hero.astro` <script>) — Orthographic globe rendering on a 340×340 canvas with:
   - Rough continent outlines (latitude/longitude polygon data for NA, SA, EU, AF, AS, AU, GL, AN)
   - Rotating graticule (lat/lng grid lines)
   - 8 satellites in 2 orbital shells with individual speeds
   - 26 ground stations with pulsating markers
   - Signal pulse animations (uplink/downlink) between stations and satellites
   - Scan radar wedge with conic gradient
   - Expanding ring waves and core pulse
   - Self-contained `requestAnimationFrame` loop; rotation increments 0.12°/frame

2. **Skills core** (`Skills.astro` <script>) — Dynamic canvas (320px desktop, 200px mobile):
   - Concentric rings with alternating dash patterns
   - Rotating arc segments in opposite directions
   - Scan radar sweep
   - Orbiting particles connected to center
   - Ambient floating particles
   - Uses IntersectionObserver to pause/resume render loop

### Client JS (`src/scripts/main.js`)

- **Custom cursor**: Three-element cursor (`#cursor`, `#cursor-dot`, `#cursor-ring`) with smooth follow interpolation, click ripple, and hover state on links/buttons. Disabled on touch devices via `(hover: none) and (pointer: coarse)`.
- **Nav scroll**: Header gets `.scrolled` class past 60px scroll (adds backdrop blur + border).
- **Reveal**: IntersectionObserver with 0.1 threshold triggers `.visible` on `.reveal` / `.reveal-stagger` elements (one-shot, unobserve after trigger).
- **Mobile menu**: Functions `initMobileMenu` exist for `#menu-toggle` / `#mobile-menu` but **no hamburger button is wired in `Header.astro`** — needs implementation.

### Notable interactions

- **Download resume** (About.astro): Terminal-style progress bar animation (1.5s fill) before triggering actual download via dynamically created `<a>` element.
- **HudTerminal typewriter** (hud/HudTerminal.astro): Sequentially types 7 lines (affiliation, location, field, role, interests, status) at 35ms per character with cursor management.
- **Bio cursor blink** (About.astro): IntersectionObserver toggles blinking cursor visibility when About section enters/leaves viewport.
- **Project cards** (Projects.astro): 3D tilt on mousemove via `perspective(800px) rotateX/Y()` + radial sheen overlay that follows cursor position. Each card has HUD corner brackets, a color-coded status badge (`PRODUCTION`/`ACTIVE`/`BETA`) with pulsing dot, role tag (`[Solo]`), impact highlight bullets, and animated skill bars that fill on scroll reveal. A scan line sweeps across the card on hover. Cards are equal-height within each grid row.
- **Contact comms terminal** (Contact.astro): HUD-frame interface styled as a communication console. Top status bar shows "COMMS TERMINAL v2.4 | SYS: ONLINE | SECURE CHANNEL". Three channel rows (`[CH-01]` through `[CH-03]`) with animated signal equalizer bars that activate on hover. Channel action labels (`OPEN`/`SEND`/`GET`) are dim by default and flash bright on row hover. Bottom terminal prompt blinks with a block cursor. Availability badge with green pulsing dot plus estimated response time.

## Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to ./dist
npm run preview  # Preview production build locally
```

## Deployment

1. Push to `main` → triggers `.github/workflows/deploy.yml`.
2. Workflow: `npm ci` → `npm run build` → `peaceiris/actions-gh-pages` pushes `./dist/` to `gh-pages` branch.
3. GitHub Pages serves from `gh-pages` branch root.
4. `.nojekyll` at repo root prevents Jekyll processing.

## Status & known gaps

| Area | Status |
|------|--------|
| `experience[]` in `projects.ts` | ⚠️ **Placeholder data** — company name, conference, course name are dummy values |
| `HudArc.astro` | ❌ **Does not exist** — Skills section uses inline Canvas 2D instead |
| Mobile hamburger menu | ❌ `initMobileMenu()` exists in `main.js` but no button in `Header.astro` |
| `public/images/` | ❌ **Empty** — headshot photo placeholder for About section |
| LinkedIn link | ⚠️ **Placeholder** — `your-username` needs real URL (in both Hero.astro and Contact.astro) |
| Project highlight metrics | ⚠️ **Placeholders** — `highlights[]` in `projects.ts` are inferred from descriptions; replace with real impact numbers |
| `REVAMP_PLAN.md` | 📝 Documented plan to switch to amber/gold theme with GSAP animations |

## Key conventions for AI assistants

- **All content** is in `src/data/projects.ts` — edit there first for text changes.
- **Color palette** is teal-on-black in `global.css` `@theme` (not Tailwind config file).
- **New sections**: Create `<section id="name">` component in `src/components/`, import in `index.astro`.
- **HUD gadgets**: Pure decorative SVGs; place as children of the parent section for background decoration.
- **Animations**: CSS keyframes + IntersectionObserver (no JS animation library).
- **Globe canvas** in Hero.astro is a self-contained IIFE with `requestAnimationFrame`.
- **Skills canvas** is inlined in Skills.astro's <script> — not a separate component.
