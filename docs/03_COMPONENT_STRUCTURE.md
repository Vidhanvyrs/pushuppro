
---

### File 3: `03_COMPONENT_STRUCTURE.md`
*This maps out the React component tree so Claude knows exactly what to build instead of guessing how to divide the DOM.*

```markdown
# PushupPro Landing Page: Component Structure

The entire page lives in `app/page.tsx`. Break it into the following atomic components under `/app/components/`:

1. **`<Navigation />`**
   - **State:** `isScrolled` (to switch the nav bar to the frosted glass state seen in the eco screenshots).
   - **Layout:** Flexbox. Logo left, simple text links (Features, How it works, FAQ) center, App/Play Store badge CTAs on the far right.
   - **Style:** `position: sticky`, `z-index: 50`, uses `backdrop-filter: blur(6px)` and `bg-black/10` when scrolled.

2. **`<Hero />`** (The most vital component)
   - **Background:** The 4-5 gym workout videos. Claude must implement them as a looping `<video>` tag with a flat black 50% opacity overlay (`bg-black/50`) for text readability.
   - **Content:** 
     - Eyebrow label ("Plan. Coach. Track. Build")
     - H1 Headline (e.g., "Train Smarter. Progress Faster.")
     - Subhead (e.g., "The AI coach that plans, guides, and tracks every workout without the cost of a personal trainer.")
     - **Primary CTA:** Two official `<img>` store badges (Apple/Google) side-by-side.

3. **`<ValueProposition />`** (Corresponds to Image 3 of the eco site)
   - **Style:** Full-width white background, massive vertical padding (`py-32`).
   - **Content:** A single, centered block of large text.
   - **Animation:** Staggered fade-in for the text block using `SplitText` and `ScrollTrigger`.

4. **`<AlternatingFeatures />`** (Corresponds to Image 4 of the eco site)
   - **Layout:** 3 blocks. 
   - Block 1: Text Left (50%), Image Right (50%) in a dark rounded card (`bg-[#111]`, `rounded-2xl`).
   - Block 2: Image Left (50%), Text Right (50%).
   - Block 3: Text Left, Image Right.
   - **Motion:** Use `ScrollTrigger` with `scrub: 1` so the text and image parallax slightly as the user scrolls past them.

5. **`<Stats />`** 
   - Optional, but used to break up the page. A simple horizontal strip showing "10,000+ Reps Analyzed", "4.9 Star Rating", etc.

6. **`<ClosingCTA />`**
   - Dark background. Large H2 centered.
   - Repeat the two App/Play Store badges. No secondary buttons here—only one clear ask.

7. **`<Footer />`**
   - Minimalist: Logo, 3 text links (Privacy, Terms, Contact), Copyright. No newsletter form. Light or dark background based on the page transition.