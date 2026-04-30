# CLAUDE.md — Indés Augmentés

## Projet
Landing page de vente pour le bootcamp "Indés Augmentés" — 3 mois pour devenir freelance en IA & automation.

## Stack
- **Framework** : Astro 5 (static)
- **CSS** : Tailwind CSS v4 avec @theme tokens dans `src/styles/global.css`
- **Fonts** : Geist (sans + headings), Geist Mono (mono labels) — 2 polices max, Google Fonts
- **Icons** : Material Symbols Outlined (Google Fonts)
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
- **Thème** : Dark Dashboard (fond `#0a1628` slate + dot grid 24px violet/slate)
- **Palette** : violet `#6d28d9` / text `#c4b5fd`, lime `#bef264` / `#a3e635`, amber `#f59e0b`, text `#f1f5f9` (main) / `#cbd5e1` (dim)
- **Contraste** : viser AA WCAG. `text-dim` `#cbd5e1` minimum sur le fond slate
- **Pas d'italic** : jamais d'italic sur les titres ni le body
- **Bold keywords** : les mots importants dans les paragraphes sont en `<strong>`
- **7 places max** par cohorte (positionnement premium, cohorte 1 mi-mai 2026)
- **Effets signature** : scroll reveal (IntersectionObserver), `.hero-seq` choreography au DOMContentLoaded, ambient cursor aura, cyber-scanline overlay sur images, logo bars animation
- **Motion tokens** dans `@theme` : `--dur-fast/base/slow/reveal/hero` + `--ease-out-expo/quart/sweep`
- **Ton** : Pro-ambitieux, effet waouh, transformation claire, envie de passer à l'action

## Commandes
```bash
pnpm dev      # Dev server
pnpm build    # Build (avec astro check)
pnpm preview  # Preview du build
```
