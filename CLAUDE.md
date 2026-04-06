# CLAUDE.md — Indés Augmentés

## Projet
Landing page de vente pour le bootcamp "Indés Augmentés" — 3 mois pour devenir freelance en IA & automation.

## Stack
- **Framework** : Astro 5 (static)
- **CSS** : Tailwind CSS v4 avec @theme tokens dans `src/styles/global.css`
- **Fonts** : Geist Mono (headings), Inter (body) — 2 polices max, Google Fonts
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
- **Thème** : Light editorial (fond #fafaff)
- **Palette** : primary #7c3aed (violet), secondary #6d28d9, on-surface #191b23, on-surface-variant #44474e
- **Contraste** : minimum #44474e sur fond clair (8:1). Pas d'opacité <80% sur du texte lisible
- **Typo fluide** : clamp() dans @theme (pas de breakpoints pour la typo)
- **Pas d'italic** : jamais d'italic sur les titres ni le body
- **Bold keywords** : les mots importants dans les paragraphes sont en `<strong>`
- **6 places max** par cohorte (positionnement premium)
- **Effets** : scroll reveal (IntersectionObserver), cyber-scanline overlay sur images
- **Ton** : Pro-ambitieux, effet waouh, transformation claire, envie de passer à l'action

## Commandes
```bash
pnpm dev      # Dev server
pnpm build    # Build (avec astro check)
pnpm preview  # Preview du build
```
