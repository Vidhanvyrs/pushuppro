"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "Forget the $80-an-hour trainer",
  "PushupPro does everything they do,",
  "and it's always available.",
  "It builds your plan,",
  "watches every rep through your camera,",
  "grows the challenge as you get stronger,",
  "and logs every set, every PR, automatically.",
];

const FLOATING_SCREENS = [
  {
    src: "/care1.avif",
    alt: "PushupPro weekly workout dashboard",
    className:
      "left-[-2rem] top-[18%] w-[6.75rem] -rotate-[6deg] sm:left-[6%] sm:top-[14%] sm:w-[clamp(8rem,14vw,12rem)] sm:-rotate-[8deg] lg:left-[10%]",
    driftClassName: "value-card-drift-slow",
    fromX: -80,
    fromY: -35,
    revealAt: 0,
    mobileOpacity: 0.88,
  },
  {
    src: "/care2.avif",
    alt: "PushupPro workout quick actions",
    className:
      "right-[-2rem] top-[20%] w-[6.75rem] rotate-[6deg] sm:right-[6%] sm:top-[15%] sm:w-[clamp(8rem,14vw,12rem)] sm:rotate-[8deg] lg:right-[10%]",
    driftClassName: "value-card-drift-reverse",
    fromX: 80,
    fromY: -30,
    revealAt: 0.08,
    mobileOpacity: 0.88,
  },
  {
    src: "/care3.avif",
    alt: "PushupPro completed workout summary",
    className:
      "left-[-2rem] top-[66%] w-[6.75rem] rotate-[5deg] sm:bottom-[12%] sm:left-[7%] sm:top-auto sm:w-[clamp(8rem,13vw,11rem)] sm:rotate-[7deg] lg:left-[13%]",
    driftClassName: "value-card-drift-reverse",
    fromX: -70,
    fromY: 35,
    revealAt: 0.9,
    mobileOpacity: 0.8,
  },
  {
    src: "/care4.avif",
    alt: "PushupPro exercise library",
    className:
      "right-[-2rem] top-[69%] w-[6.75rem] -rotate-[5deg] sm:bottom-[11%] sm:right-[7%] sm:top-auto sm:w-[clamp(8rem,13vw,11rem)] sm:-rotate-[7deg] lg:right-[13%]",
    driftClassName: "value-card-drift-slow",
    fromX: 70,
    fromY: 40,
    revealAt: 1,
    mobileOpacity: 0.8,
  },
] as const;

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const lines = textContainerRef.current?.querySelectorAll("[data-line]");
    if (!section || !lines?.length) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-floating-screen]");
      const isMobile = window.matchMedia("(max-width: 639px)").matches;

      gsap.set(lines, { opacity: 0.15, y: 12 });
      cards.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          x: Number(card.dataset.fromX),
          y: Number(card.dataset.fromY),
          scale: 0.86,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * 1.5}`,
          pin: true,
          scrub: 0.8,
          pinSpacing: true,
        },
      });

      cards.forEach((card) => {
        tl.to(
          card,
          {
            opacity: isMobile ? Number(card.dataset.mobileOpacity) : 0.92,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          Number(card.dataset.revealAt),
        );
      });

      lines.forEach((line, i) => {
        tl.to(
          line,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          0.35 + i * 0.5,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#EFEFEF] px-6"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,239,239,0.2)_0%,rgba(239,239,239,0.88)_42%,rgba(239,239,239,0)_72%)]" />

        {FLOATING_SCREENS.map((screen) => (
          <div
            key={screen.src}
            data-floating-screen
            data-from-x={screen.fromX}
            data-from-y={screen.fromY}
            data-reveal-at={screen.revealAt}
            data-mobile-opacity={screen.mobileOpacity}
            className={`absolute aspect-square ${screen.className}`}
          >
            <div
              className={`relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#171614] shadow-[0_24px_55px_rgba(15,17,26,0.2)] sm:rounded-[2rem] ${screen.driftClassName}`}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                sizes="(max-width: 639px) 108px, (max-width: 1024px) 14vw, 192px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/20" />
            </div>
          </div>
        ))}
      </div>

      <div
        ref={textContainerRef}
        className="relative z-10 mx-auto flex max-w-[13.75rem] flex-col items-center gap-1 text-center sm:max-w-4xl"
      >
        {LINES.map((line) => (
          <p
            key={line}
            data-line
            className="text-[1.45rem] font-normal leading-[1.15] tracking-[-0.02em] text-[#0F111A] sm:text-[clamp(1.75rem,4vw,3rem)]"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
