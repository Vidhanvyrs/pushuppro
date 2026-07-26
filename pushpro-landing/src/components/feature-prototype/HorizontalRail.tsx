"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURES } from "./data";
import { FeatureMedia } from "./PrototypeMedia";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollableActiveCard = useCallback(() => {
    const track = trackRef.current;
    const usesScrollDrivenAnimation = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!track || usesScrollDrivenAnimation) return;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-feature-card]"));
    const nextIndex = cards.reduce((closestIndex, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const closestCard = cards[closestIndex];
      const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;

      return Math.abs(cardCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
        ? index
        : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!section || !stage || !track) return;

    const responsiveAnimation = gsap.matchMedia();

    responsiveAnimation.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const context = gsap.context(() => {
          const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + 64);
          gsap.to(track, {
            x: () => -travel(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${travel()}`,
              pin: stage,
              scrub: 0.65,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                setActiveIndex(
                  Math.min(FEATURES.length - 1, Math.round(self.progress * (FEATURES.length - 1))),
                );
              },
            },
          });
        }, section);

        return () => context.revert();
      },
    );

    return () => responsiveAnimation.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="overflow-hidden bg-[#EFEFEF] text-[#0F111A]">
      <div ref={stageRef} className="flex min-h-svh flex-col justify-center py-20 md:h-svh md:py-10">
        <header className="mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 md:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#0F111A]/42">The PushupPro toolkit</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(2.6rem,5.4vw,5.4rem)] font-normal leading-[0.94] tracking-[-0.045em]">
              Built to keep you progressing.
            </h2>
          </div>
          <p className="hidden font-mono text-xs text-[#0F111A]/45 md:block">
            {String(activeIndex + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}
          </p>
        </header>

        <div
          ref={trackRef}
          onScroll={updateScrollableActiveCard}
          role="region"
          aria-label="PushupPro features"
          tabIndex={0}
          className="mt-10 flex touch-auto snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto overscroll-x-contain px-6 pb-5 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0F111A]/30 md:mt-12 md:w-max md:gap-6 md:overflow-visible md:px-12 md:pb-0 motion-reduce:md:w-auto motion-reduce:md:overflow-x-auto motion-reduce:md:pb-5"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const active = index === activeIndex;
            return (
              <article
                key={feature.id}
                data-feature-card
                className={cn(
                  "group grid h-[66svh] min-h-[560px] w-[84vw] max-w-[22rem] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-[#0F111A]/8 bg-[#F8F8F5] shadow-[0_28px_90px_rgba(15,17,26,0.08)] md:h-[62vh] md:min-h-[520px] md:w-[76vw] md:max-w-[1120px] md:grid-cols-[0.9fr_1.35fr] md:transition-[opacity,transform] md:duration-500",
                  active ? "md:scale-100 md:opacity-100" : "md:scale-[0.975] md:opacity-65",
                )}
              >
                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#0F111A]/48">
                      <Icon className="size-4" />
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">{feature.eyebrow}</span>
                    </div>
                    <span className="font-mono text-[0.68rem] text-[#0F111A]/35">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="max-w-xl text-[clamp(2rem,3.2vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.04em]">{feature.heading}</h3>
                    <p className="mt-5 max-w-lg text-sm leading-6 text-[#0F111A]/52 md:text-base">{feature.body}</p>
                    <div className="mt-7 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#0F111A]/40">
                      Explore feature <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full min-h-0 self-center overflow-hidden bg-[#DDE3DC] md:my-3 md:mr-3 md:w-auto md:rounded-[1.4rem]">
                  <FeatureMedia feature={feature} active={active} priority={index === 0} />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-6 mt-4 h-px overflow-hidden bg-[#0F111A]/10 md:mx-12">
          <div
            className="h-full bg-[#0F111A] transition-[width] duration-300"
            style={{ width: `${((activeIndex + 1) / FEATURES.length) * 100}%` }}
          />
        </div>
        <p className="mx-6 mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#0F111A]/35 md:hidden">
          Swipe to explore · {String(activeIndex + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}
        </p>
        <p className="mx-12 mt-3 hidden font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#0F111A]/35 motion-reduce:md:block">
          Scroll horizontally to explore
        </p>
      </div>
    </section>
  );
}
