# Design System Document: High-End Tech Editorial

## 1. Overview & Creative North Star: "The Neon Architect"
The "Indés Augmentés" brand is not just a bootcamp; it is a gateway to a superior professional tier. Our Creative North Star, **"The Neon Architect,"** rejects the generic "SaaS template" in favor of a sophisticated, editorial aesthetic.

We break the standard grid through **intentional asymmetry**—offsetting headings and utilizing generous negative space to create a "gallery" feel. The layout should feel like a physical space: deep, layered, and illuminated by digital light. We move away from rigid boxes toward "zones of influence," where content is grouped by light and shadow rather than lines.

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, atmospheric `surface` (`#060e20`), providing a canvas for high-energy accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Sectional distinction is achieved through tonal shifts.
* **Transitioning:** A Hero section on `surface` flows into a "Curriculum" section using `surface-container-low`. The change in depth is felt, not outlined.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of tinted glass.
* **The Base:** `surface` (`#060e20`) for the primary background.
* **The Elevated Layer:** `surface-container` (`#0f1930`) for primary content blocks.
* **The Focused Layer:** `surface-container-high` (`#141f38`) for interactive elements or sub-cards within a section.

### The "Glass & Gradient" Rule
To achieve the "Augmented" feel, use **Glassmorphism** for floating UI elements (like floating stats or testimonials).
* **Technique:** Use `surface-variant` at 40% opacity with a `backdrop-filter: blur(12px)`.
* **Signature Textures:** Main CTAs should not be flat. Use a linear gradient from `primary` (`#97a9ff`) to `secondary` (`#ac8aff`) at a 135-degree angle to create a sense of kinetic energy.

## 3. Typography: Editorial Authority
We utilize a high-contrast typographic scale to separate "The Message" from "The Detail."

* **Display & Headlines (Space Grotesk):** This is our "Architectural" font. Use `display-lg` for the Hero to command attention. Wide tracking and bold weights convey tech-forward authority.
* **Body (Inter):** Our "Functional" font. Used for high-readability curriculum details. Ensure `body-lg` is used for introductory paragraphs to maintain an upscale feel.
* **Labels (Manrope):** Our "Utility" font. Small, often all-caps with increased letter spacing (`0.05em`) for category tags and eyebrow headlines.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this aesthetic. We use **Tonal Layering** and **Ambient Light**.

* **The Layering Principle:** To lift a card, place a `surface-container-highest` element on top of a `surface-container-low` background. The color difference creates a soft, natural "lift."
* **Ambient Shadows:** For floating elements (like the 'Ce qui est inclus' cards), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of darkness, not a hard edge.
* **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a 1px border with `outline-variant` (`#40485d`) set to **15% opacity**. This creates a "glint" on the edge rather than a structural wall.

## 5. Components

### Buttons (The "Core Action")
* **Primary:** Gradient of `primary` to `secondary`. Text in `on-primary-fixed`. Roundedness: `md` (0.375rem).
* **Secondary:** Ghost style. Transparent background with a `Ghost Border`. Text in `primary`.
* **Interaction:** On hover, the primary button should increase its "glow" (shadow opacity) and slightly scale (1.02x).

### Glassmorphism Cards ('Ce qui est inclus')
* **Background:** `surface-variant` at 30% opacity.
* **Blur:** 16px backdrop-blur.
* **Edge:** Top-left "Glint" using a 1px stroke of `primary` at 20% opacity.
* **Content:** No dividers. Use `title-lg` for the header and `body-md` for the description, separated by 24px of vertical space.

### Input Fields
* **Style:** Minimalist. `surface-container-highest` background. No border, only a 2px `primary` bottom-bar that activates on focus.
* **Error State:** Use `error` (`#ff6e84`) for helper text and `error_container` for a subtle background wash within the field.

### Feature Chips
* **Visual:** `surface-bright` background with `on-surface-variant` text.
* **Shape:** `full` (9999px) for a sleek, pill-shaped tech look.

## 6. Do's and Don'ts

### Do:
* **Do** use asymmetrical margins. For example, have a headline left-aligned at 10% width and the body text at 40% width to create a dynamic reading path.
* **Do** use `tertiary` (`#ffa3e9`) sparingly as a "spotlight" color for micro-interactions or "New" badges.
* **Do** prioritize "Breathing Room." If a section feels crowded, double the padding.

### Don't:
* **Don't** use 100% white text. Use `on-surface` (`#dee5ff`) to reduce eye strain and maintain the premium dark-mode feel.
* **Don't** use standard "Drop Shadows." They muddy the deep navy background. Stick to tonal shifts.
* **Don't** use divider lines. If content needs to be separated, use a 48px or 64px gap from the spacing scale.