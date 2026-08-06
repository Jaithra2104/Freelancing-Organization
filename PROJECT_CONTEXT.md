# SoftNexus Solutions: Project Context

This document tracks the technical requirements, design language, and architecture for the SoftNexus Solutions portfolio. 
**SoftNexus is a Software Development Agency serving local/small businesses (Restaurants, Medical Shops, etc.). It is NOT a SaaS, AI research, or enterprise cloud company.**
**Always refer to this document before building new sections or components.**

## 🎨 Design Language (Luxury SaaS)
- **Theme:** Dark Mode Only. Background color is strictly `#0B0C10`.
- **Aesthetic:** Minimalist, Glassmorphism, Soft Lighting, Premium Motion.
- **Typography:** `Space Grotesk` for headings. `Inter` for body.
- **Gradients:** Use `#A78BFA` (Purple) to `#EC4899` (Pink) for primary text gradients and highlights.
- **Buttons:** Implement "Magnetic" effects with ripple using `framer-motion` springs.
- **Cards (Glassmorphism):**
  - Background: `rgba(255, 255, 255, 0.02)` to `0.05`
  - Border: `1px solid rgba(255, 255, 255, 0.05)`
  - Backdrop Filter: `blur(12px)` to `blur(16px)`
  - Hover states should slightly increase opacity, border brightness, and translate Y/X.

## ⚙️ Core Stack & Animation Rules
- **React (Vite)** + **CSS Modules/Scoped CSS** (No Tailwind unless explicitly allowed).
- **Framer Motion:** Used for ALL scroll reveals, layout animations, and micro-interactions.
  - *Rule:* Use `viewport={{ once: true }}` to prevent repetitive animations on scroll up, saving GPU.
  - *Rule:* Use `staggerChildren` or `delay: i * 0.1` for list items.
- **GSAP:** Reserved for heavy SVGs or specialized text drawing effects (e.g., `StrokeText`).
- **Icons:** `react-icons/fa` (FontAwesome) and `react-icons/si` (SimpleIcons).
- **Performance:** Do not animate layout properties (`width`, `height`, `margin`). Animate ONLY `transform` (scale, translate) and `opacity`.

## 📁 Architecture (Modular Pages)
Never build huge monolithic components in `App.jsx`.
- Each page belongs in `src/pages/[PageName]/`.
- The page wrapper is `[PageName]Page.jsx` (e.g., `HomePage.jsx`, `AboutPage.jsx`).
- Styles are scoped in `[PageName]Page.css`.
- Sub-sections are broken down in `src/pages/[PageName]/components/`.

## 🧱 Reusable Patterns Created
1. **`MagneticButton`:** Wraps standard buttons with a spring-based mouse follow.
2. **`CountUp`:** Statistics animation component.
3. **`FloatingElements`:** Pattern of using absolute divs with slow, infinite repeating `y` and `rotate` transforms for ambient background motion.
4. **`BusinessSelector`:** A pattern for vertical selection tabs driving a complex right-side UI (Live Browser Mockup).
5. **Legal Center (`src/pages/Legal/`)**: Comprehensive legal pages sharing a common design pattern with reusable components (`LegalHero`, `SummaryCard`, `PolicyAccordion`). Includes a global `Footer`.

*Last Updated: Legal Center Delivery*
