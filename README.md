# Site Template

A universal design system template for building websites with Next.js. Rooted in Dieter Rams' 10 principles, the Golden Ratio, Fibonacci spacing, and organic geometry.

## Quick Start

```bash
npm install
npm run dev
```

## How to Use This Template

1. **Clone from template** (GitHub "Use this template" or `gh repo create --template`)
2. **Edit `src/styles/project-tokens.css`** — define your project's colors and fonts
3. **Build your pages** in `src/app/`
4. **Tell Claude Code** your project's aesthetic and it will apply the full design system automatically (it reads `CLAUDE.md`)

## What Changes Per Project

| File | Changes? |
|------|----------|
| `CLAUDE.md` | Never |
| `src/styles/design-tokens.css` | Never |
| `src/styles/project-tokens.css` | Every project (colors + fonts) |
| `src/app/` | Every project (content + pages) |

## Design System Overview

- **Spacing:** Fibonacci sequence (4, 7, 11, 18, 29, 47, 76, 123, 199)
- **Type scale:** Golden ratio steps (each size = previous x 1.618)
- **Border radii:** Asymmetric petal-inspired curves
- **Colors:** 7-group architecture (primary, secondary, accent, signature, warm, dark, light)
- **Layouts:** Golden ratio splits (61.8% / 38.2%)
- **Fonts:** Exactly 3 per project (display, body, accent)

See `docs/universal-design-principles.html` for an interactive visual reference.

See `docs/examples/victorian-dahlia-tokens.css` for an example project expression.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + CSS custom properties
- Dark theme default
