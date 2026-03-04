# CLAUDE.md — Universal Design Principles

This repository follows a strict design system rooted in Dieter Rams' 10 principles of good design, the Golden Ratio (φ = 1.618), Fibonacci-based spacing, and organic geometry inspired by natural petal forms. Every page, component, and layout decision must conform to this system.

## Core Philosophy

**Dieter Rams is the operating system.** Every design decision runs through his 10 principles:

1. **Innovative** — Each project pushes at least one boundary. Innovation solves a real problem in a new way.
2. **Useful** — Every visual element communicates meaning, guides attention, or provides feedback. If it does none, remove it.
3. **Aesthetic** — Beauty is not optional. The aesthetic emerges from the project's nature, not from trends.
4. **Understandable** — Clear typographic hierarchy + consistent spatial patterns. The user never thinks about how to use the interface.
5. **Unobtrusive** — The design is a stage, not a performer. Background recedes, content leads.
6. **Honest** — No faux materials, artificial shadows, or decorative gradients masking empty content.
7. **Long-lasting** — Mathematical proportions have no expiration date. If a choice is "trendy right now," that's a red flag.
8. **Thorough** — Every detail is designed. No browser defaults survive. Every pixel is intentional.
9. **Environmentally friendly** — Lightweight CSS over heavy JS. Minimal dependencies. Optimized assets. Performance is a design decision.
10. **As little design as possible** — Weniger, aber besser. Every element earns its place. After completing a design, do a subtraction pass.

---

## Golden Ratio — Structural Law

φ (phi) = 1.618033988749. This governs ALL proportional relationships.

### Layout Splits
- **Two-column:** 61.8% primary / 38.2% secondary
- **Three-column:** 61.8% / 23.6% / 14.6% (subdivide minor zone by φ)
- **Vertical golden point:** Content starts at 38.2vh from top
- **Max content width:** 61.8% of viewport for text-heavy sections

```css
.layout-golden   { display: grid; grid-template-columns: 61.8% 38.2%; }
.layout-golden-3 { display: grid; grid-template-columns: 61.8% 23.6% 14.6%; }
```

### Eye Flow
Place the most important element at the golden spiral's tightest curve. Secondary elements follow the expanding path. The golden spiral should guide hero section composition.

---

## Fibonacci Spacing Scale (FIXED — never modify)

All spacing uses this scale. No arbitrary pixel values. Every gap is a deliberate harmonic step.

```css
:root {
  --space-xs:  4px;
  --space-sm:  7px;
  --space-md:  11px;
  --space-lg:  18px;
  --space-xl:  29px;
  --space-2xl: 47px;
  --space-3xl: 76px;
  --space-4xl: 123px;
  --space-5xl: 199px;
}
```

### Spacing Usage Guide
| Token | Use For | Examples |
|-------|---------|----------|
| --space-xs | Micro gaps | Icon-to-label, border offsets, inline spacing |
| --space-sm | Tight relationships | Label-to-input, list item gap, tag padding |
| --space-md | Default inner padding | Button padding, table cells, compact cards |
| --space-lg | Related groups | Paragraph gap, form fields, card inner padding |
| --space-xl | Section sub-groups | Group-to-group within sections, card grid gap |
| --space-2xl | Section padding | Container padding, large cards, modal padding |
| --space-3xl | Major sections | Section gaps, hero padding, footer spacing |
| --space-4xl | Page-level rhythm | Major page divisions, above-fold spacing |
| --space-5xl | Dramatic separation | Full section breaks, chapter-level divisions |

**RULE: Never use an arbitrary pixel value. Always pick the nearest Fibonacci token.**

---

## Golden Ratio Type Scale (FIXED — never modify)

Each step multiplies/divides by φ (1.618).

```css
:root {
  --text-xs:   0.694rem;
  --text-sm:   0.833rem;
  --text-base: 1rem;
  --text-lg:   1.200rem;
  --text-xl:   1.618rem;
  --text-2xl:  2.618rem;
  --text-3xl:  4.236rem;
  --text-4xl:  6.854rem;
  --text-5xl:  11.09rem;
}
```

### Font Role Framework (3 fonts per project, always)

| Role | Purpose | Scale Range | Guidance |
|------|---------|-------------|----------|
| Display | Headlines, hero text, navigation | text-xl → text-5xl | The personality font. Distinctive and memorable. Sets the visual tone. |
| Body | Paragraphs, UI labels, descriptions | text-sm → text-lg | Highly legible at 16px. Carries the reading experience. |
| Accent | Captions, metadata, data, code | text-xs → text-base | Functional and precise. Often geometric or monospaced. |

```css
:root {
  --font-display: [PROJECT SPECIFIC], serif;
  --font-body:    [PROJECT SPECIFIC], sans-serif;
  --font-accent:  [PROJECT SPECIFIC], monospace;
}
```

### Line Height
- **Body text:** line-height: 1.618 (golden ratio — always)
- **Headlines:** line-height: 1.05–1.15 (tight)
- **Captions/metadata:** line-height: 1.4 (dense)

**RULE: Three fonts per project, never more. Every text element maps to exactly one role.**

---

## Organic Geometry — Border Radii (FIXED — never modify)

Asymmetric border radii inspired by natural petal forms.

```css
:root {
  --radius-petal-sm: 2px 12px 2px 12px;
  --radius-petal-md: 4px 24px 4px 24px;
  --radius-petal-lg: 8px 48px 8px 48px;
  --radius-bloom:    50%;
  --radius-soft:     8px;
}
```

### When to Use Which
| Radius | Elements | Why |
|--------|----------|-----|
| --radius-petal-sm | Buttons, tags, badges, chips, inputs | Subtle organic feel for small interactive elements |
| --radius-petal-md | Cards, image containers, form groups, tooltips | Visible asymmetry on medium containers |
| --radius-petal-lg | Hero cards, featured sections, modals | Dramatic curves on large surfaces |
| --radius-bloom | Avatars, status indicators, FABs | Perfect circles for circular content |
| --radius-soft | Code blocks, tables, panels | Symmetric for structural/technical elements |
| 0 (none) | Full-width sections, dividers, nav, footer | Edge-to-edge = structural and grounded |

**RULE: Organic curves on things you touch. Clean edges on things that structure.**

---

## 7-Group Color Architecture (structure is FIXED — values change per project)

Every project palette must include all seven groups.

```css
:root {
  --primary:         [PROJECT SPECIFIC];
  --primary-dark:    [PROJECT SPECIFIC];
  --secondary:       [PROJECT SPECIFIC];
  --secondary-dark:  [PROJECT SPECIFIC];
  --accent:          [PROJECT SPECIFIC];
  --signature:       [PROJECT SPECIFIC];
  --signature-dark:  [PROJECT SPECIFIC];
  --signature-deep:  [PROJECT SPECIFIC];
  --warm:            [PROJECT SPECIFIC];
  --warm-dark:       [PROJECT SPECIFIC];
  --dark-canvas:     [PROJECT SPECIFIC];
  --dark-surface:    [PROJECT SPECIFIC];
  --dark-border:     [PROJECT SPECIFIC];
  --light-primary:   [PROJECT SPECIFIC];
  --light-muted:     [PROJECT SPECIFIC];
}
```

### Color Rules (ALL projects)
- 2–3 palette groups per section maximum
- Warm = Interactive (reserve for clickable elements)
- Dark-first surfaces (darkest = canvas, medium = elevated, lightest = borders)
- No pure white (#FFF) or pure black (#000) — always tint extremes
- No drop shadows — elevation through background value shifts only

---

## Surface & Elevation

| Level | Token | Use |
|-------|-------|-----|
| Level 0 — Canvas | --dark-canvas | Page background, base layer |
| Level 1 — Surface | --dark-surface | Cards, modals, sidebars, navbars |
| Level 2 — Border | --dark-border | Dividers, input borders, table rules |

---

## Interaction & Motion

```css
:root {
  --transition-fast:    0.2s ease;
  --transition-default: 0.3s ease;
  --transition-slow:    0.5s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Motion Rules
- CSS transitions before JS animation libraries
- One hero animation per page (usually page load)
- Hover = confirmation of interactivity (subtle, never dramatic)
- Always respect prefers-reduced-motion

---

## Build Preferences

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** CSS custom properties for tokens; Tailwind for utility classes
- **No unnecessary dependencies.** Every package must earn its place (Rams #10)
- **Performance first.** Optimize images, lazy load below-fold, minimize JS bundle
- **Semantic HTML.** Proper heading hierarchy, landmark regions, ARIA where needed
- **Mobile-first responsive.** Design for mobile, enhance for desktop
- **Dark theme default.** Light theme optional, never the primary experience
