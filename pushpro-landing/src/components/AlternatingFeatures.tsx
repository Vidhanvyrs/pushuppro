"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    eyebrow: "Personalized Plans",
    heading: "A weekly plan built around you.",
    body: "Tell PushupPro your goals, fitness level, and equipment. It builds a plan tailored to you, and keeps it updated as you progress.",
    image: "/cardimg1.jpg",
    placeholder: "Personalized Plan Video Placeholder",
    reverse: false,
  },
  {
    eyebrow: "AI Coaching",
    heading: "A coach in every session.",
    body: "Get real-time guidance through every workout. PushupPro answers your questions, suggests weight adjustments, and keeps you on track between sets.",
    image: "/cardimg2.jpg",
    placeholder: "AI Coaching Video Placeholder",
    reverse: true,
  },
  {
    eyebrow: "Every Rep, Logged",
    heading: "Every set, every PR, tracked.",
    body: "Log sets, reps, and weights with a tap. PushupPro tracks your personal records and shows your strength progression over time.",
    image: "/cardimg3.jpg",
    placeholder: "Tracking Video Placeholder",
    reverse: false,
  },
  {
    eyebrow: "Progressive Overload",
    heading: "Built to keep you climbing.",
    body: "PushupPro monitors your progress and nudges you to add weight or reps the moment you're ready, so you never plateau.",
    image: "/cardimg4.jpg",
    placeholder: "Progressive Overload Video Placeholder",
    reverse: true,
  },
  {
    eyebrow: "Pose Detection",
    heading: "Form feedback, no spotter needed.",
    body: "Use your camera for real-time feedback on pushups, squats, and planks. Get rep counts and form scores without anyone watching.",
    image: "/gymhandshake.webp",
    placeholder: "Pose Detection Video Placeholder",
    reverse: false,
  },
];

export default function AlternatingFeatures() {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const stack = stackRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!stack || cards.length === 0) return;

    const vh = window.innerHeight;
    // Card 0 is already in place, so we only need scroll distance for the
    // (N-1) hand-offs: card1 covering card0, card2 covering card1, etc.
    const totalScroll = (cards.length - 1) * vh;

    cards.slice(1).forEach((card) => gsap.set(card, { yPercent: 100 }));

    // Drive every hand-off from ONE timeline tied to ONE ScrollTrigger
    // (the pin itself), instead of separate triggers per card computing
    // their own offsets against the same pinned element. Each .to() below
    // occupies its own equal slice of the timeline, which GSAP maps
    // proportionally onto the scrubbed pin range automatically — so there's
    // no cross-trigger math that can drift out of sync. A card's position
    // "sticks" once its slice finishes scrubbing (progress clamps at the
    // end) and only un-clamps if the user scrolls back up into its slice.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stack,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    cards.slice(1).forEach((card, i) => {
      tl.to(card, { yPercent: 0, ease: "none", duration: 1 }, i);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="features" className="relative bg-[#EFEFEF]">
      <div
        ref={stackRef}
        className="relative flex h-screen w-full flex-col overflow-hidden"
      >
        {/* Persistent header — lives inside the pinned box so it stays on
            screen the whole time the cards stack underneath it. */}
        <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-8 md:pt-20 md:pb-0">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.02em] text-[#0F111A]">
            Built to keep you progressing
          </h2>
        </div>

        <div className="relative flex-1">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.heading}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center px-6"
              style={{ zIndex: index + 1 }}
            >
              <div
                className={cn(
                  "mx-auto flex w-full max-h-full flex-col items-center gap-8 overflow-hidden rounded-2xl bg-[#1A1A1A] p-8 md:gap-12 md:p-12 lg:p-16",
                  feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
                )}
                style={{
                  // Each card is slightly wider → stacking depth effect
                  maxWidth: `${1060 + index * 46}px`,
                }}
              >
                {/* Text side */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <p className="font-mono text-[0.8125rem] uppercase tracking-[0em] text-[#FF5A36]">
                    {feature.eyebrow}
                  </p>
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
                    {feature.heading}
                  </h3>
                  <p className="max-w-md text-base leading-[1.4] tracking-[-0.01em] text-white/60">
                    {feature.body}
                  </p>
                </div>

                {/* Image/video side */}
                <div className="w-full overflow-hidden rounded-2xl md:w-1/2">
                  {feature.image ? (
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={feature.image}
                        alt={feature.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-white/5 text-sm text-white/40">
                      {feature.placeholder}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
