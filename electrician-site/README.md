# VoltPro Electric — Homepage

A production-ready Next.js 15 + Tailwind v4 electrician homepage.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4** (`@theme` tokens, utility-first styling)
- **Lucide React** (icons)
- Raw CSS used **only** for:
  - `@font-face` / Google Fonts import
  - Keyframe animations (`pulse-glow`, `bolt-flicker`, `slide-up`, `float`)
  - Noise texture (`body::before` with SVG data URI)
  - Pseudo-element effects (`.hero-card-shine::before`, `.service-card::before`)
  - `-webkit-background-clip: text` gradient text (`.text-gradient-*`)
  - CSS grid background mask (`.hero-grid`)

## File structure

```
voltpro/
├── app/
│   ├── globals.css          # Fonts, keyframes, @theme tokens, pseudo-element rules
│   ├── layout.tsx           # Root layout (add font meta here)
│   └── page.tsx             # Composes all sections
│
├── components/
│   ├── Navbar.tsx           # Fixed nav, scroll-aware, mobile overlay
│   ├── Hero.tsx             # Full-height hero with dashboard card
│   ├── StatsBar.tsx         # 4-column metrics strip
│   ├── Services.tsx         # 6-card service grid
│   ├── SectionHeader.tsx    # Reusable eyebrow + title + description
│   ├── WhyUs.tsx            # Features list + review card
│   ├── CtaBanner.tsx        # Callback CTA with form
│   └── Footer.tsx           # 4-column footer
│
├── lib/
│   └── data.ts              # All static content (strings, arrays, types)
│
└── tailwind.config.ts       # Theme extensions + IDE autocomplete
```

## Setup

```bash
npx create-next-app@latest voltpro --typescript --tailwind --app
cd voltpro

# Install deps
npm install lucide-react

# Copy the files from this repo into place, then:
npm run dev
```

## Customising content

All text, services, features, reviews, and contact details live in **`lib/data.ts`**.
Edit that single file to rebrand the site without touching any component logic.
