# CLAUDE.md — Indés Augmentés

## Projet
Landing page de vente pour le bootcamp "Indés Augmentés" — 3 mois pour devenir freelance en IA & automation.

## Stack
- **Framework** : Astro 5 (static)
- **CSS** : Tailwind CSS v4 avec @theme tokens dans `src/styles/global.css`
- **Fonts** : Space Grotesk (display), Inter (body), Manrope (labels) — Google Fonts
- **Hébergement** : Vercel (static)
- **Package manager** : pnpm

## Structure
```
src/
├── styles/global.css          ← Design tokens + classes composants
├── layouts/Layout.astro       ← Shell HTML, nav, footer, scripts JS
├── pages/index.astro          ← Composition des sections
└── components/sections/       ← 10 sections (hero, problem, programme, arsenal, cible, mentor, format, pricing, faq, final-cta)
```

## Design System
- **Thème** : Light (glacial/blanc)
- **Palette** : glacial-bg #F8FAFC, glacial-surface #E2E8F0, cyan #00F0FF (décoratif uniquement), indigo #4F46E5 (CTA + accent texte)
- **Contraste** : cyan interdit pour le texte (ratio 1.5:1 sur blanc). Texte = clinical-dark / on-surface / on-surface-muted
- **Typo fluide** : clamp() dans @theme (pas de breakpoints pour la typo)
- **Effets** : glassmorphism, deconstructed borders, skew sections, scroll reveal (IntersectionObserver)
- **Ton** : Pro-ambitieux, pas agressif/dystopique

## Commandes
```bash
pnpm dev      # Dev server
pnpm build    # Build (avec astro check)
pnpm preview  # Preview du build
```
