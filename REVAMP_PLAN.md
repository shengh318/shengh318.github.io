# Portfolio Revamp Plan

## Overview
Revamp `shengh318.github.io` into a professional, modern portfolio site using **Astro + Tailwind CSS + GSAP**, deployed to GitHub Pages.

---

## Tech Stack
- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **Typography:** Typed.js
- **Deployment:** GitHub Actions → GitHub Pages
- **Icons:** Lucide icons (via astro-icon or inline SVG)

---

## Theme: Amber/Gold on Dark

| Token | Value | Usage |
|-------|-------|-------|
| `bg-base` | `#0f0f0f` | Page background |
| `bg-surface` | `#1a1a2e` | Section backgrounds |
| `bg-card` | `#1e293b/80` | Glassmorphism cards |
| `accent` | `#f59e0b` | Primary accent (amber-500) |
| `accent-light` | `#fbbf24` | Lighter accent (amber-400) |
| `accent-dark` | `#d97706` | Darker accent (amber-600) |
| `text-primary` | `#f8fafc` | Primary text (slate-50) |
| `text-muted` | `#94a3b8` | Muted text (slate-400) |
| `glass-bg` | `rgba(30, 41, 59, 0.6)` | Glassmorphism background |
| `glass-border` | `rgba(255, 255, 255, 0.08)` | Glassmorphism border |

### Typography
- **Headings:** Inter (sans-serif), font-bold to font-extrabold
- **Body:** DM Sans or Inter, font-normal
- **Code/Monospace:** JetBrains Mono (if needed)

---

## Site Structure

```
shengh318.github.io/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ScrollReveal.astro
│   │   └── FloatingShape.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── data/
│   │   └── projects.ts
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   │   ├── about.webp (or about.jpg — headshot)
│   │   └── resume.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── REVAMP_PLAN.md
```

---

## Sections

### 1. Header (Navigation)
- Fixed position, full-width
- Transparent by default → glassmorphism on scroll (GSAP-driven class toggle)
- Logo: "Sheng" in amber on left
- Nav links: Home, About, Experience, Skills, Projects, Contact
- Active link indicator: amber underline
- Mobile: hamburger menu with slide-down drawer

### 2. Hero (Landing)
- Full viewport height (`100vh`)
- **Background:** Animated CSS gradient mesh (`#0f0f0f` → `#1a1a2e` → `#1a1500`), slowly shifting
- **Floating geometric shapes:** 4-5 elements (circles, diamonds, hexagons) with amber tint & backdrop-blur, animated via GSAP (`repeat: -1, yoyo: true, random translate/rotate`)
- **Content:**
  - "Hello, I'm" (small, muted)
  - "Sheng **Huang**" (large, "Huang" in amber with subtle text-shadow glow)
  - Typed.js subtitle cycling: "Software Engineer | AI/ML Engineer | Researcher"
  - Tagline: "Building intelligent systems that solve real-world problems"
- **CTA Buttons:**
  - "Download Resume" → amber gradient filled, download icon, links to `/resume.pdf`
  - "View Projects" → amber border only, links to `#projects`
- **Social links row:**
  - LinkedIn placeholder → `https://linkedin.com/in/your-username`
  - Email → `mailto:shengh@mit.edu`
- **Scroll indicator:** Down arrow at bottom, gentle bounce animation, auto-hides on scroll

### 3. About
- Two-column layout: photo left, text right (stacks on mobile)
- **Photo:** Circular headshot (`public/images/about.webp`), subtle amber border glow on hover
- **Bio:** 2-3 paragraphs covering:
  - MIT CS grad student, computer systems focus
  - Research experience across departments
  - Software design & engineering
  - Teaching experience
- **Stats row:** Key metrics (years of experience, projects completed, etc.) with amber numbers
- **Resume download button** (secondary style)

### 4. Experience (Timeline)
- Vertical timeline with left-aligned line
- **Line:** 2px wide, amber gradient fade at top and bottom
- **Dots:** Amber circles at each entry point
- **Cards:** Glassmorphism, staggered slide-in via ScrollTrigger
- **Placeholder entries** (3-4 items, user to fill details):
  - Company/Organization name
  - Role/Title
  - Date range
  - Brief description (2-3 bullet points)

### 5. Skills
- Categorized grid: **Languages**, **Frameworks & Tools**, **Hardware & Embedded**
- Each skill as a pill/badge with icon + label
- Staggered entrance animation via GSAP ScrollTrigger
- Skills to include (from current projects):
  - Python, TypeScript, C++, SQL
  - ROS, JSON API
  - ESP32, embedded systems
  - Git, Linux

### 6. Projects
- 3-column card grid (responsive: 3 → 2 → 1 columns)
- **Cards:** Glassmorphism with thin amber top border, hover lift + glow effect
- Each card contains:
  - Icon (matching existing projects: data, window, car, game, joystick, weather)
  - Project name (h3)
  - Description (1-2 sentences, same as current)
  - Tech stack tags (small amber-outline pills)
  - GitHub link button (if available)
  - Want to keep these 6 projects verbatim:
    1. Metadata Analyzer
    2. POS System
    3. Autonomous Racecar
    4. StarBattle (Video Game)
    5. Real Life Mario Kart
    6. Personal Weather Man
- Hover: GSAP `to()` with `scale: 1.02` + box-shadow glow

### 7. Contact
- Centered layout, no form
- Heading: "Get In Touch"
- Text: "Have a question or want to work together? Reach out!"
- Social links row (same as hero):
  - LinkedIn → placeholder
  - Email → mailto link
  - No GitHub link

### 8. Footer
- Minimal: "© 2026 Sheng Huang. Built with Astro."
- Small, muted text
- No extra links

---

## Animations (GSAP + ScrollTrigger Plan)

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero gradient bg | CSS keyframes (continuous) | On load |
| Floating shapes | `gsap.to()` with random paths, `repeat: -1, yoyo: true` | On load |
| Hero text/CTAs | Staggered `gsap.from()`, each 0.15s apart | On load (1s delay) |
| Navbar glass | `ScrollTrigger` class toggle at top 100px | On scroll |
| Section reveals | `gsap.from()` with `ScrollTrigger({ start: "top 85%" })` | On scroll into view |
| Timeline cards | Staggered `gsap.from()`, `stagger: 0.2` | Per ScrollTrigger |
| Project cards | `gsap.to()` on hover: `scale: 1.02, boxShadow` | On hover |
| Skills badges | `gsap.from()`, `stagger: 0.05` | ScrollTrigger |
| Scroll indicator | CSS `animate-bounce`, fades out after first scroll | On load + scroll |
| Section separators | Thin amber divider fades in between sections | ScrollTrigger |

---

## Deployment

### GitHub Actions (`deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Astro Config
```js
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://shengh318.github.io',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
```

---

## Headshot Photo
- File: `public/images/about.webp` (or `.jpg`)
- Currently using `resized about.JPG` — can be converted/optimized
- User can drop in a new professional headshot if desired

---

## Social Links
- **LinkedIn:** `https://linkedin.com/in/your-username` (placeholder)
- **GitHub:** NOT included
- **Email:** `shengh@mit.edu`

---

## Project Data (from current site)
Kept verbatim unless user requests rewrites:
1. **Metadata Analyzer** — Python (70%), SQLite (30%), JSON API (20%)
2. **POS System** — Python (80%), SQLite (20%)
3. **Autonomous Racecar** — Python (40%), ROS (60%)
4. **StarBattle (Video Game)** — TypeScript (100%)
5. **Real Life Mario Kart** — Python (30%), SQLite (20%), C++ (50%)
6. **Personal Weather Man** — Python (20%), JSON API (10%), C++ (70%)

---

## Implementation Order
1. Initialize Astro project with Tailwind
2. Install dependencies (GSAP, typed.js, etc.)
3. Configure Tailwind theme (amber palette, glassmorphism)
4. Setup BaseLayout (fonts, meta, global styles)
5. Create data/projects.ts
6. Build components bottom-up: ScrollReveal → Header → Hero → About → Experience → Skills → Projects → Contact → Footer
7. Wire up index.astro
8. Add all GSAP animations
9. Setup GitHub Actions deploy.yml
10. Clean up old files (css/, js/, unused images)
11. Test build locally
12. Push to main → verify deployment
