# Experience Section Rework — JARVIS Mission Log

## Goal
Redesign the Experience section from flat stacked cards into a futuristic Iron Man / JARVIS-inspired holographic timeline with glowing HUD elements, scan lines, animated borders, and a cinematic AI command center feel.

## Tech Constraints
- Astro 5 + Tailwind CSS v4 + TypeScript
- No React, no Framer Motion, no extra dependencies
- All animations via CSS keyframes + IntersectionObserver (existing codebase pattern)
- Reuse existing `reveal-stagger` class for scroll reveals
- Reuse existing `data-tilt` JS pattern from Projects.astro for 3D hover parallax

## Files to Modify
1. `src/components/Experience.astro` — Complete rewrite
2. `src/styles/global.css` — Remove old Experience CSS (`.exp-cards`, `.exp-card`, `.exp-card-marker`, `.exp-card-body`, `.exp-card-header`, `.exp-card-title`, `.exp-card-meta`, `.exp-card-desc`, `.exp-cards-line`, etc.) and add new styles

## Visual Structure

```
┌──────────────────────────────────────────────────────┐
│  _EXPERIENCE                  [TRACKING 3 MISSIONS]   │
│                                                        │
│  ● [LOG 001]  ───────────  2025                        │
│  ┌────────────────────────────────────────────────┐   │
│  │ ═══ SOFTWARE ENGINEERING INTERN ═══            │   │
│  │ Your Company Name                              │   │
│  │ ● STATUS: COMPLETED                            │   │
│  │ ▸ Led development of key feature               │   │
│  │ ▸ Improved system performance                  │   │
│  │ ▸ Collaborated cross-functionally              │   │
│  │                                   [DETAILS]    │   │
│  └────────────────────────────────────────────────┘   │
│                        ║                               │
│                        ║  (animated energy flow)       │
│                        ║                               │
│  ● [LOG 002]  ───  2024 – Present                      │
│  ┌────────────────────────────────────────────────┐   │
│  │ ═══ RESEARCH ASSISTANT ═══                    │   │
│  │ MIT Computer Science & AI Lab                  │   │
│  │ ● STATUS: ACTIVE                               │   │
│  │ ▸ Conducted research in computer systems       │   │
│  │ ▸ Developed research software                  │   │
│  │ ▸ Published findings at [Conference]           │   │
│  └────────────────────────────────────────────────┘   │
│                        ║                               │
│  ● [LOG 003]  ───  Spring 2024                        │
│  ┌────────────────────────────────────────────────┐   │
│  │ ═══ TEACHING ASSISTANT ═══                     │   │
│  │ MIT Department of EECS                          │   │
│  │ ● STATUS: COMPLETED                             │   │
│  │ ▸ TA for [Course Name]                         │   │
│  │ ▸ Held office hours and led recitations        │   │
│  │ ▸ Developed course materials                   │   │
│  └────────────────────────────────────────────────┘   │
│                                                        │
│  [SYS: ONLINE]    [SIGNAL: STRONG]                      │
└──────────────────────────────────────────────────────┘
```

## Key Visual Elements

### 1. Section Title
- `_EXPERIENCE` with `[TRACKING 3 MISSIONS]` data tag beside it
- Animated scanning effect on the title line

### 2. Vertical Timeline Energy Flow
- A thin vertical line between the card area and the left-side markers
- CSS gradient animation that pulses downward (energy flow)
- Ends at the last card with a soft fade-out

### 3. Timeline Node Markers
- Left-side hexagonal/diamond nodes with pulse-ring animation
- `[LOG 001]` monospace label above each node
- Connection line from node to the period tag

### 4. Mission Cards (Glassmorphism)
- `background: rgba(26, 26, 26, 0.4)` with `backdrop-filter: blur(8px)`
- Thin teal border `rgba(20, 184, 166, 0.1)`
- Subtle inner glow on hover
- Content: role title (bold with text-shadow glow), company, status badge, bullet list

### 5. Status Badge Per Card
- Animated green dot for "ACTIVE" (pulsing)
- Muted dot for "COMPLETED" (static)
- Monospace text in accent color

### 6. Hover Effects on Cards
- SVG border trace animation (stroke-dasharray + stroke-dashoffset)
- Horizontal scan line that sweeps down the card
- Subtle upward glow shift
- 3D tilt via `data-tilt` JS (same as Projects.astro)

### 7. Scroll Reveal
- Use existing `reveal-stagger` class
- Each card fades in + slides up sequentially on scroll

## CSS Animations Needed (all scoped in Experience.astro `<style>`)

Create these keyframe animations:
1. `energyFlow` — moves gradient light down the vertical timeline
2. `nodePulse` — timeline node ring expands/shrinks with glow
3. `scanSweep` — scan line moves top-to-bottom on hover
4. `borderTrace` — SVG rect stroke draws around the card on hover
5. `statusBlink` — pulsing status dot (active only)

## Experience Data (unchanged, in `src/data/projects.ts`)

```
Software Engineering Intern — Your Company Name — Summer 2025 — COMPLETED
Research Assistant — MIT CSAIL — Fall 2024 – Present — ACTIVE
Teaching Assistant — MIT EECS — Spring 2024 — COMPLETED
```

## Responsive Behavior

| Breakpoint | Timeline | Cards | Animations |
|------------|----------|-------|------------|
| >= 1024px | Full energy flow + node rings | Max width cards | All effects |
| 768-1023px | Energy flow present | Slightly narrower | 3D tilt disabled |
| < 768px | Hide energy line, simplify nodes | Full width stacked | No scan/border animation |

## CSS to Remove from global.css

Delete or comment out the old Experience block (lines 664-737 approximately):
- `.exp-cards`
- `.exp-cards-line`
- `.exp-card`
- `.exp-card-marker`
- `.exp-card-body`
- `.exp-card-header`
- `.exp-card-title`
- `.exp-card-meta`
- `.exp-card-desc`
- `.exp-card-desc li`
- `.exp-card-desc li::before`
- `.timeline-tag`

## Step-by-Step Implementation

1. Remove old Experience CSS from `global.css`
2. Rewrite `Experience.astro` with the new structure
3. Write all new CSS keyframes and styles inside `<style>` in Experience.astro
4. Add IntersectionObserver-based `data-tilt` JS for 3D hover effect
5. Build and verify
6. Review on mobile

## Questions for You (answer in new session)
1. Particles background — small canvas particle system behind cards, or skip?
2. 3D tilt on cards — yes/no? (same as Projects section)
3. Status bar at bottom of section — `[SYS: ONLINE] [SIGNAL: STRONG]` — yes/no?
