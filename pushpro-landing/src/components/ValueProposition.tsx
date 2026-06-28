"use client";

import { useEffect, useRef } from "react";
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

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const lines = textContainerRef.current?.querySelectorAll("[data-line]");
    if (!section || !lines?.length) return;

    // Set all lines to invisible initially
    gsap.set(lines, { opacity: 0.15, y: 12 });

    // Create a timeline pinned to the section.
    // As the user scrolls through the pinned distance, lines fade in one by one.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // Pin for enough scroll distance to reveal all lines comfortably
        end: `+=${window.innerHeight * 1.5}`,
        pin: true,
        scrub: 0.8,
        // Prevent layout shift from pinning
        pinSpacing: true,
      },
    });

    // Stagger each line fading in
    lines.forEach((line, i) => {
      tl.to(
        line,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        i * 0.5 // stagger offset in the timeline
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="flex min-h-screen items-center justify-center bg-[#EFEFEF] px-6"
    >
      <div
        ref={textContainerRef}
        className="mx-auto flex max-w-4xl flex-col items-center gap-1 text-center"
      >
        {LINES.map((line) => (
          <p
            key={line}
            data-line
            className="text-[clamp(1.75rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0F111A]"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
