# Sheng Huang — Portfolio

Personal portfolio site built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

Deployed at: https://shengh318.github.io

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) |
| UI Animations | CSS keyframes, Canvas 2D, IntersectionObserver |
| Icons | Inline SVG paths (no icon library) |
| Deployment | GitHub Actions → `peaceiris/actions-gh-pages` → `gh-pages` branch |

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Single-page entry — imports all sections in order
├── layouts/
│   └── BaseLayout.astro     # HTML shell: fonts (Inter), meta tags, global CSS, main.js
├── components/
│   ├── Header.astro         # Fixed top nav with scroll-aware backdrop blur
│   ├── Hero.astro           # Full-viewport hero: name, tagline, CTA, globe canvas
│   ├── About.astro          # Terminal-style bio + download-resume widget + HudTerminal
│   ├── Experience.astro     # Timeline-style cards; uses HudDiagnostic
│   ├── Skills.astro         # Category badges (Languages / Tools / Hardware); uses HudArc
│   ├── Projects.astro       # Cards with 3D tilt + sheen effects; uses HudRepulsor
│   ├── Contact.astro        # Terminal-style contact links; uses HudComm
│   ├── Footer.astro         # Copyright + "Built with Astro"
│   └── hud/                 # Decorative SVG gadgets (positioned absolutely per section)
│       ├── HudTerminal.astro    # Typewriter animation in About section
│       ├── HudArc.astro         # Spinning arc-reactor rings in Skills
│       ├── HudRepulsor.astro    # Pulsing repulsor rings in Projects
│       ├── HudDiagnostic.astro  # Signal-bars blips in Experience
│       └── HudComm.astro        # Communication waveform in Contact
├── data/
│   └── projects.ts          # All content: projects[], skills{}, experience[]
├── scripts/
│   └── main.js              # Client JS: custom cursor, nav scroll, reveal, mobile menu
└── styles/
    └── global.css           # Tailwind import + theme tokens + all custom CSS (~800 lines)
```

## Architecture

### Page flow

`index.astro` composes all sections in order inside `<main>`:

```
Header → Hero → About → Experience → Skills → Projects → Contact → Footer
```

Each section is a self-contained `.astro` component with its own `<script>` (for interactivity) and imports the relevant HUD gadget.

### Data layer

All editable content lives in `src/data/projects.ts`:
- `projects: Project[]` — project cards (id, icon, name, description, skills[])
- `skills` — categorized skill badges (languages, tools, hardware)
- `experience` — work history entries (role, company, period, description[])

No CMS or external data source. Edit the TS file to update content.

### Styling conventions

- **Theme tokens** defined in `global.css` via Tailwind's `@theme` directive (teal-on-black palette).
- **Component-specific styles** use `<style>` tags in `.astro` components.
- **Reveal animations**: `.reveal` / `.reveal-stagger` classes + IntersectionObserver in `main.js`.
- **Glass cards**: `.glass-card` class (translucent bg, border, hover glow).
- **Section backgrounds**: `.section-bg` applies subtle grid overlay; `.section-bg-glow` adds radial gradient spot.

### HUD gadget system

Five decorative SVG components positioned absolutely in their parent section (non-interactive, z-index 0). They use shared CSS keyframes defined in `global.css`:
- `hudSpin` / `hudSpinRev` — rotation
- `hudPop` — scale pulse
- `hudBlip` — diagnostic blip
- `hudRepGlow` / `hudRepSpoke` — repulsor effects
- `hudCommGlow` / `hudRingExpand` — communication waves
- `sysPulse` — system status dot

### Globe visualization

In `Hero.astro`'s `<script>`: full canvas-based orthographic globe with:
- Rough continent outlines (latitude/longitude polygon data)
- Rotating graticule (lat/lng grid lines)
- Satellites on orbital paths
- Ground stations with pulsating markers
- Signal pulse animations between stations and satellites
- Scan radar wedge
- Render loop via `requestAnimationFrame`

### Client JS (`main.js`)

- **Custom cursor** (`#cursor`, `#cursor-dot`, `#cursor-ring`) with smooth follow and click/hover effects. Disabled on touch devices.
- **Nav scroll** — header gets `.scrolled` class past 60px (adds backdrop blur).
- **Reveal** — IntersectionObserver for `.reveal` / `.reveal-stagger` fade-in.
- **Mobile menu** — toggle + overlay nav (not currently wired in Header; needs a hamburger button).

## Development

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to ./dist
npm run preview  # Preview production build locally
```

## Deployment

1. Push to `main` → triggers `.github/workflows/deploy.yml`.
2. Workflow runs `npm ci && npm run build`, then pushes `./dist` to `gh-pages` branch via `peaceiris/actions-gh-pages`.
3. GitHub Pages serves from `gh-pages` branch root.

The `.nojekyll` file at repo root prevents GitHub Pages from running Jekyll.

## Key conventions for AI assistants

- All content is in `src/data/projects.ts` — edit there first for text changes.
- Color palette is teal-on-black defined in `global.css` `@theme`.
- New sections get a `<section id="name">` component in `src/components/`, imported in `index.astro`.
- HUD gadgets are purely decorative SVGs; place them as children of the section for background decoration.
- Animations are CSS keyframes + IntersectionObserver (no JS animation library).
- The globe in Hero.astro is a self-contained Canvas 2D render loop.
