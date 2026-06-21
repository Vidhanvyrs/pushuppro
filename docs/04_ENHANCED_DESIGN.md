# Enhanced Landing Page Design Reference — PushupPro (Based on Eco.com)

## Visual Enhancements from the Provided Screenshots

### 1. Hero Transition
Eco.com uses a beautiful, smooth fade from the dark hero video into the bright white content section below. **PushupPro Implementation:** The bottom of the Hero `<div>` must have a linear gradient overlay (from `bg-transparent` to `bg-white` over the last 100px). This ensures the transition between the dark workout video and the white section below isn't harsh.

### 2. Feature Block Images
Looking at Image 4 (Build with Eco), the images inside the dark cards have **soft rounded corners (`rounded-2xl`)** and are displayed with a slight shadow depth. **PushupPro Implementation:** When Claude places the video clips or stills into the alternating feature blocks, ensure they have `rounded-2xl` and `overflow-hidden`.

### 3. Footer & Newsletter
The Eco footer (Image 5) uses a dark glassmorphism panel for the email capture. **PushupPro Implementation:** **CUT THIS.** Do not include the newsletter box. The PushupPro footer should simply be a dark, solid color (or transparent if it sits on top of the dark section) with the legal links and social icons.

## Full Typography & Color Guide (Revised)

### Typography
- **Headings (H1, H2):** Weight 400 (Regular), `letter-spacing: -0.02em`, `line-height: 1.02`.
- **Body:** Weight 400, `letter-spacing: -0.01em`, `line-height: 1.2`.
- **Eyebrow Labels:** Size `0.8125rem`, Uppercase, Weight 400, `letter-spacing: 0em`. Use a Monospace font (e.g., `Aeonik Mono`, `JetBrains Mono`, `Roboto Mono`) for these.

### Color System (Swapped for PushupPro)
- **Page Background:** `#EFEFEF` (Off-white, not pure white, to keep it soft).
- **Ink / Headings:** `#0F111A` (Near-black).
- **Hero Overlay:** `rgba(0,0,0, 0.5)` (50% flat black, NOT a gradient).
- **Feature Cards:** `#111111` (Dark gray, almost black) for alternating feature blocks.
- **Accent:** `#1C53BD` (PushupPro brand blue). Use this only for small highlight elements (e.g., hover states, small links).

## Motion Mechanics (Keys to Success)
- **Lenis:** Provides the smooth inertia scroll.
- **GSAP ScrollTrigger with `scrub`:** When the user scrolls past the Hero, the background video should blur slightly to push focus to the text.
- **SplitText:** Only use `SplitText` on the **Hero Headline** and the **Closing CTA Headline**. If every subheading gets split into letters, the page becomes frantic. Reserve it for the impact moments.
- **CustomEase:** Define one custom curve (`ease: "power2.out"` or a hand-tuned `CustomEase`) and reuse it on *every* tween. This makes the motion feel like one continuous material.