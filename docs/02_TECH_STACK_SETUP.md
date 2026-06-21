# Tech Stack & Implementation Setup

## Framework & Styling
- **Next.js (App Router):** Static export is perfectly fine for this single page.
- **Tailwind CSS:** Use utility classes extensively for the spacing and type tokens defined in the design.
- **Shadcn/UI:** Use for strictly functional components (Navigation menu, Buttons) but heavily customize the styling to match the eco.com aesthetic.

## Animation Engine (Crucial)
- **GSAP 3.13+** (`gsap`, `gsap/ScrollTrigger`, `gsap/CustomEase`, `gsap/SplitText`). 
  - *Note:* Since GSAP 3.13, `ScrollTrigger`, `SplitText`, and `CustomEase` are entirely free for commercial use. We do not need a Club GreenSock license.
- **Lenis 1.1+** (`@studio-freight/react-lenis` or `lenis` directly).

## Integration Pattern (Paste this into `app/layout.tsx` or a custom `AnimationProvider`)
Do not treat Lenis and GSAP as separate tools. They must share the same render loop.

```typescript
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export const useLenisGSAP = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP's ticker
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
};