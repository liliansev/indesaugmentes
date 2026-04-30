---
name: Indés Augmentés
description: Dark operator-console aesthetic for a premium freelance bootcamp landing.
colors:
  dash-slate: "#0a1628"
  dash-surface: "#000000"
  dash-border: "#1e293b"
  accent-violet: "#6d28d9"
  accent-violet-text: "#c4b5fd"
  accent-lime: "#bef264"
  accent-lime-deep: "#a3e635"
  accent-amber: "#f59e0b"
  text-bright: "#e9eef5"
  text-main: "#f1f5f9"
  text-dim: "#cbd5e1"
  text-mute: "#a8b3c2"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 0.8rem + 4vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(17px, 1rem + 0.5vw, 20px)"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  pill: "999px"
spacing:
  card-sm: "20px"
  card-md: "32px"
  card-lg: "48px"
  card-xl: "64px"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.dash-slate}"
    typography: "label"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-lime-deep}"
    textColor: "{colors.dash-slate}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-lime}"
    typography: "label"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.dash-slate}"
  panel:
    backgroundColor: "{colors.dash-border}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-md}"
  chip-terminal:
    backgroundColor: "{colors.dash-surface}"
    textColor: "{colors.accent-lime}"
    typography: "label"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  label-mono:
    textColor: "{colors.text-dim}"
    typography: "label"
  input-text:
    backgroundColor: "{colors.dash-surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
---

# Design System: Indés Augmentés

## 1. Overview

**Creative North Star: "The Operator Console"**

Indés Augmentés sells the promise of a freelance who pilots their business like a senior ops engineer pilots a stack — instrumented, augmented, in control. The interface borrows the visual language of that world: a dark slate canvas dotted on a 24px grid like a graph-paper terminal, monospace labels stamped above every section like log tags, a status dot that pulses lime to say *system online*, an ambient cursor aura that follows the reader like a focus reticle. The page reads like a control room first, a marketing site second.

Two accents carry the meaning. **Violet** is identity, wordmarks, branding, lavender text that reads as premium / high-end. **Lime** is action, every primary CTA, every confirmation, every status signal. The two never compete: violet describes, lime commands. Amber appears as a third, sparing voice for warnings and FAQ heat (alert-state, not decorative). White and the slate-blue neutral text rungs sit underneath as the readable layer.

The system rejects the soft pastel SaaS landing template (rounded white cards, gradient hero text, generic "icon + heading + paragraph" 3-up grids) and the agency-portfolio dark template (chrome accents, hairline gold rules, glass everywhere). It also rejects the "AI bootcamp" reflex of neon purple gradients on flat black with chrome-y monospace headings. This system is darker, more deliberate, more terminal-tinged than any of those, and it earns each accent.

**Key Characteristics:**
- Dark slate canvas (`#0a1628`) with a 24px dot-grid texture
- Geist for prose, Geist Mono for *every* label, KPI, chip, code-style line
- Violet = identity / atmosphere. Lime = action / confirmation. Amber = alert / heat.
- Tonal layering with selective ambient glows around active state, almost never structural drop-shadows
- Animated micro-instrumentation: scroll progress bar, cursor aura, scanline overlay on photos, animated logo bars, blinking carets, type-on quote
- 1280px max content width, generous vertical rhythm (96px between sections)

## 2. Colors

A two-accent palette on slate, with one alert color held in reserve. The slate canvas does the work of separating sections, color is reserved for meaning.

### Primary
- **Operator Lime** (`#bef264`): the action color. Every primary CTA fill, every "system online" pulse, every checkmark, every active KPI, every typewriter caret. It is the only color allowed inside a primary button.
- **Lime Deep** (`#a3e635`): the swept hover fill for primary buttons. Darker, more saturated, closes the click loop.

### Secondary
- **Lavender Violet** (`#c4b5fd`): identity color for text accents, brand wordmark italics, timeline node glows, navigation hover. Never used as a fill for buttons or panels.
- **Deep Violet** (`#6d28d9`): focus rings, selection background, ambient cursor aura, pricing card border at full saturation. The "weight" version of lavender.

### Tertiary
- **Signal Amber** (`#f59e0b`): warnings, FAQ headings, struck-through prices, edge-case spotlight. Strictly non-decorative, if amber appears, it means *attention required*.

### Neutral (Slate Stack)
- **Dash Slate** (`#0a1628`): the page canvas. Every section sits on this. Footer is the same color (continuity).
- **Dash Surface** (`#000000`): the deepest layer, input field background, timeline node interior, mentor stat backplate.
- **Dash Border** (`#1e293b`): the subtle structural line, section dividers, footer rule, panel borders.
- **Text Bright** (`#e9eef5`): h1, h2, h3, KPI values.
- **Text Main** (`#f1f5f9`): default body text and headings.
- **Text Dim** (`#cbd5e1`): secondary prose, intros, taglines, captions.
- **Text Mute** (`#a8b3c2`): meta labels, struck prices, fine print. Tuned to clear WCAG AA (≥4.5:1) on dash-slate for the small Geist Mono labels.

### Named Rules
**The Two-Voice Rule.** Violet describes, Lime commands. Violet for identity, atmosphere, brand text. Lime for every action, every status, every confirmation. They do not blend, do not gradient into each other across a CTA, and never both appear inside the same button. The only acceptable gradient mixing the two is the scroll-progress bar (a literal tracking line) and the timeline outcome node (a final climax marker).

**The Lime Means Done Rule.** If lime appears on a piece of UI, it should mean: this is the action, or the action succeeded, or the system is live. It should never decorate.

**The Amber Means Heat Rule.** Amber is reserved for: stop-and-read FAQ items, struck-through old prices, "limited" / "soon" / "ending" cues. Anywhere amber is decorative, replace with text-dim or a violet text accent.

## 3. Typography

**Display Font:** Geist (system-ui fallback)
**Body Font:** Geist (same family, lighter weights)
**Label / Mono Font:** Geist Mono (ui-monospace fallback)

**Character:** A single-family system that looks technical without looking austere. Geist's geometric clarity carries headlines without needing a serif counterweight; Geist Mono shows up wherever the system is *speaking as a system*: labels, KPIs, log lines, button text, chip text. The mono is doing the heavy lifting of the operator-console personality. Treat it as load-bearing, not decorative.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 0.8rem + 4vw, 4.25rem)`, line-height 1.05, tracking -0.025em): hero h1 only. Centred, with a hand-drawn lavender marker underline that animates in 400ms after load.
- **Headline** (700, 32px, line-height 1.1, tracking -0.025em): section h2 (Programme, Mentor, FAQ). Always paired with a label-mono eyebrow.
- **Sub-headline** (700, `clamp(1.75rem, 1rem + 2.5vw, 3rem)`): the "Desired" section h2, the one place where ambition language is allowed to breathe larger than a normal section header.
- **Title** (600, 16.5px → 22px, line-height 1.3, tracking -0.015em): card titles (timeline cards, bonus cards, KPI labels).
- **Body Large** (500, `clamp(17px, 1rem + 0.5vw, 20px)`, line-height 1.6): hero tagline, intro paragraphs.
- **Body** (400, 15px, line-height 1.7): default prose, FAQ answers, mentor intro.
- **Body Small** (400, 13–14px, line-height 1.55): card descriptions, timeline cards, fine print.
- **Label Mono** (500, 10px, uppercase, tracking 0.08em, Geist Mono): every section eyebrow, every chip, every status row, every meta tag. Color-tinted by context (`.violet`, `.lime`, `.amber`, `.white`).

### Named Rules
**The Mono Earns Its Keep Rule.** Geist Mono is reserved for type that *speaks as the system*: labels, KPIs, chip text, button text, log-style quotes, fine print. Never set body prose in mono. Never set h1/h2 in mono, the hero remains a sans display.

**The Bright-on-Bright Rule.** Headings use `text-bright` (`#e9eef5`), not pure white. Pure white on `dash-slate` looks acidic; the eased-down bright reads as a film print, not a screen.

**The 65–75ch Rule.** Long body paragraphs (Mentor intro, FAQ answers, Desired prose) cap at ~48rem max-width. Tight columns are part of the operator-console feel.

## 4. Elevation

The system is **flat-by-default with surgical ambient glow**. Drop shadows are near-absent; depth is built from three layered moves: tonal shifts (slate over slate over surface), 1px ghost borders (rgba(241,245,249,0.06–0.16), the "glint" rather than a structural line), and saturated *colored* ambient halos around active elements (timeline nodes, pricing card, primary button). Glow is always tied to meaning, an element glows because it is *active*, *primary*, or *the destination*.

### Shadow Vocabulary
- **Primary CTA glow** (`box-shadow: 0 6px 18px rgba(190, 242, 100, 0.22)`): a soft lime halo under the primary button. Reads as the button being plugged in.
- **Pricing aura** (`box-shadow: 0 20px 40px rgba(109, 40, 217, 0.15), 0 0 0 4px rgba(109, 40, 217, 0.08)`): the pricing card's double-ring violet halo, the only piece of UI on the page allowed to have an outer ring border.
- **Panel ambient** (`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35)`): the only "true" black drop shadow, used on `.dashboard-panel` only, and even then it's heavy-blur, not crisp.
- **Active node ring** (`box-shadow: 0 0 0 5px #0a1628, 0 0 0 6px rgba(<color>, 0.5), 0 0 28px -2px rgba(<color>, 0.55)`): the timeline node's "punched-through-the-canvas" effect, slate disc cuts the spine, then a colored halo blooms outward.

### Named Rules
**The Glow Means On Rule.** A colored halo means a piece of UI is in an active or primary state. Resting elements do not glow. Glow without a meaning is glitter.

**The Ghost Border Fallback.** When a container needs definition against `dash-slate`, use a 1px border in `rgba(241, 245, 249, 0.06)` to `rgba(241, 245, 249, 0.16)`. Never a `dash-border` solid line on top of `dash-slate`, too structural.

## 5. Components

### Buttons
- **Shape:** Compact pill-rectangle (`rounded.sm` = 8px). Geist Mono 13px, weight 500, padding `0.75rem 1.25rem`. White-space nowrap.
- **Primary:** Lime fill (`#bef264`), slate text (`#0a1628`), 22% opacity lime glow underneath. On hover: `lime-deep` (`#a3e635`) sweeps in left-to-right via a `::before` pseudo-element transform (600ms, ease-sweep). The arrow `.arr` translates +4px.
- **Secondary:** Transparent fill, `rgba(190, 242, 100, 0.5)` border, lime text. Same sweep on hover, but the inbound color is *full lime* (`#bef264`) and the text flips to `dash-slate` mid-sweep.
- **States:** `:active` scales to 0.97. `:hover` scales nothing, the sweep is the entire feedback. `:focus-visible` gets a 2px lavender outline at 2px offset.

### Chips
- **Terminal chip:** A pill with a 6px lime status dot, Geist Mono 11px lime text, 25% opacity lime border on a 5% opacity lime ground. Carries a blinking `.cur` caret (1.1s blink). This is the signature chip, used at the hero, used to signal "system status".
- **Mentor tags:** Squared-off (4px radius), Geist Mono 12px, two variants, violet (default) and orange-amber (accent). Background is the chip color at 8% opacity, border at 35%.
- **Phase chips (timeline):** Tiny rounded-pill mono labels, all-caps, 10.5px, near-transparent ghost border.

### Cards / Containers
- **Dashboard panel:** The base reusable container. `rgba(30, 41, 59, 0.42)` background, 1px `dash-border` outline, `rounded.md` (12px), `backdrop-filter: blur(8px)`. Hover: violet at 50% opacity replaces the border. **Used sparingly, most sections are bare slate, not panels.**
- **Timeline card (`.tl-card`):** A flat panel with a violet/lime/amber/white tint indicator that fades in on hover (`::before` 2px stripe, opacity 0 → 0.85). Linear gradient from `rgba(241, 245, 249, 0.015)` to `rgba(30, 41, 59, 0.42)` background. The "outcome" variant is wider, with a lime aura and a 28% opacity lime border.
- **Bonus card:** 12px radius, `rgba(0, 0, 0, 0.25)` background, `dash-border` outline. Hover: border-color shifts to 16% opacity bright, `translateY(-2px)`. Holds a 44px tinted icon block on top.
- **Mentor stat:** 10px radius, the same dark-transparent background, hover lifts and switches border to lime at 40%.

### Inputs / Fields
- **Waitlist input:** `dash-surface` (`#000`) background, 1px `dash-border` outline, 10px radius, 16px/18px padding, body-size font.
- **Focus:** Border shifts to `accent-lime`, plus a 3px 25%-opacity lime ring (`box-shadow: 0 0 0 3px rgba(190, 242, 100, 0.25)`).
- **Status text:** Geist Mono 12px, color shifts: dim at rest, lime on success, red (`#dc2626`) on error.

### Navigation
- **Default:** Fixed top nav, 14px padding, `rgba(10, 22, 40, 0.55)` background, 16px backdrop-blur, transparent border-bottom.
- **Scrolled:** Padding tightens to 10px, background goes to 88% opacity, border-bottom to `rgba(30, 41, 59, 0.9)`. 300ms transition.
- **Wordmark:** Geist 15px, weight 500. The "augmentés" half is `font-weight: 700` and `accent-violet-text` color, that's the brand mark.
- **Links:** Label-mono (10px Geist Mono uppercase), 28px gap. Hover shifts to `accent-violet-text`.
- **Mobile:** Below 900px, links collapse to a hamburger; mobile menu opens a 96% opacity slate slab with stacked all-caps mono links.

### Signature: Animated Logo Mark
Two vertical bars (5px wide, 22px tall), lavender and lime, that breathe in counter-rhythm on a 5.2s cycle. The tall lavender bar collapses to 58%, the short lime bar inflates to 172%, then both return. Instead of a static logomark, a literal heartbeat. Repeats forever; respects `prefers-reduced-motion`.

### Signature: Scrolling Timeline
Eight nodes vertically stacked along a dotted slate spine. The spine "fills" with a lavender → lime → amber gradient as the reader scrolls (driven by an offset 42% above viewport center, so it leads the focus point). Each node activates as the fill head crosses its center: scale +6%, the icon's variation-axis fills + bumps weight to 600, a colored halo blooms. The final "outcome" node is larger, gradient-filled, and has a permanent ambient lime ring.

### Signature: Cursor Aura + Scanlines
A 600px violet radial blur tracks the cursor with 8% lerp on every frame (`mix-blend-mode: screen`). Disabled on touch devices and `prefers-reduced-motion`. Photos in the project carry a CRT scanline overlay (3px / 1px alternating violet at 4% opacity) that drifts vertically on an 8s loop.

## 6. Do's and Don'ts

### Do:
- **Do** use `text-bright` (`#e9eef5`) for headings and `text-main` for body. Never pure white on `dash-slate`.
- **Do** stamp every section with a Geist Mono label-mono eyebrow, color-tinted to the section's intent (violet for diagnosis, lime for outcome, amber for warning).
- **Do** double the padding when a section feels crowded, 96px between sections, 32–64px inside cards. Breathing room is part of the premium feel.
- **Do** earn every accent: lime means action, violet means identity, amber means heat. If a color is decorative, recolor it to text-dim.
- **Do** layer with tonal shifts and ambient glows, never with crisp black drop shadows.
- **Do** keep Geist Mono for labels, KPIs, chips, button text, log-style lines. Body prose stays in Geist sans.
- **Do** respect `prefers-reduced-motion`. Every blink, sweep, drift, and scanline must shut down.

### Don't:
- **Don't** introduce a third decorative accent. The palette is locked at violet + lime + amber-as-warning. Adding teal, pink, gold, or a second purple breaks the two-voice rule.
- **Don't** use side-stripe borders thicker than 2px as decorative accents on cards. The timeline `.tl-card::before` 2px stripe is intentional UI signal (matches the active node color); copying that pattern elsewhere as decoration is prohibited.
- **Don't** apply `background-clip: text` gradients to headings. The hero's underline marker carries the visual emphasis. Headings stay solid `text-bright`.
- **Don't** use glassmorphism (`backdrop-filter: blur`) outside the four sanctioned places: the nav, the mobile menu, the `.dashboard-panel` reusable, the sticky mobile CTA bar. Anywhere else, use a tonal tint instead.
- **Don't** put an italic anywhere. The brand wordmark uses `font-style: normal` with `font-weight: 700` to mark the "augmentés" half, never italic. No italic on body, headings, or quotes.
- **Don't** drop in icon + heading + paragraph 3-up grids ("the SaaS-template reflex"). Cards on this site are signal-bearing (timeline / bonus / KPI), not generic feature lists.
- **Don't** add em dashes. Use commas, colons, parentheses, or periods.
- **Don't** use a second drop-shadow vocabulary. The four shadows above (CTA glow, pricing aura, panel ambient, active node ring) are the entire shadow library.
- **Don't** glow elements at rest. Glow is reserved for active / primary / destination states.
- **Don't** use `dash-border` (`#1e293b`) as a thick visible line, it reads as a structural seam. For container definition, prefer the 1px ghost-border at 6–16% opacity bright.
