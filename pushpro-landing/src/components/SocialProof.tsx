"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BACKGROUND_VIDEOS = [
  "/extra-vids/12382055_1920_1080_25fps.mp4",
  "/extra-vids/6389055-uhd_3840_2160_25fps.mp4",
  "/extra-vids/9481582-hd_1920_1080_30fps.mp4",
  "/extra-vids/16237120_2560_1440_30fps.mp4",
  "/extra-vids/9778000-hd_1920_1080_25fps.mp4",
] as const;

const CROSSFADE_SECONDS = 1.2;

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        videoWrapperRef.current,
        { yPercent: -2, scale: 1.08 },
        {
          yPercent: 2,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    let active = videoA;
    let standby = videoB;
    let nextIndex = 1;
    let fadeTween: gsap.core.Tween | null = null;

    active.src = BACKGROUND_VIDEOS[0];
    standby.src = BACKGROUND_VIDEOS[nextIndex];
    gsap.set(active, { opacity: 1 });
    gsap.set(standby, { opacity: 0 });
    void active.play().catch(() => undefined);
    standby.load();

    const crossfade = () => {
      standby.currentTime = 0;
      void standby.play().catch(() => undefined);

      gsap.to(active, {
        opacity: 0,
        duration: CROSSFADE_SECONDS,
        ease: "power2.out",
      });
      fadeTween = gsap.to(standby, {
        opacity: 1,
        duration: CROSSFADE_SECONDS,
        ease: "power2.out",
        onComplete: () => {
          active.pause();
          [active, standby] = [standby, active];
          nextIndex = (nextIndex + 1) % BACKGROUND_VIDEOS.length;
          standby.src = BACKGROUND_VIDEOS[nextIndex];
          standby.currentTime = 0;
          standby.load();
        },
      });
    };

    const handleEnded = (event: Event) => {
      if (event.target === active) crossfade();
    };

    videoA.addEventListener("ended", handleEnded);
    videoB.addEventListener("ended", handleEnded);

    return () => {
      videoA.removeEventListener("ended", handleEnded);
      videoB.removeEventListener("ended", handleEnded);
      fadeTween?.kill();
      gsap.killTweensOf([videoA, videoB]);
      videoA.pause();
      videoB.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-900 py-16"
    >
      <div
        ref={videoWrapperRef}
        aria-hidden="true"
        className="absolute inset-0"
      >
        <video
          ref={videoARef}
          src={BACKGROUND_VIDEOS[0]}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          className="absolute inset-0 size-full object-cover"
        />
        <video
          ref={videoBRef}
          src={BACKGROUND_VIDEOS[1]}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          className="absolute inset-0 size-full object-cover opacity-0"
        />
      </div>

      <div ref={contentRef} className="relative z-10 w-full">
        {/* === Mobile layout === */}
        <div className="mx-4 flex flex-col items-center rounded-[36px] border border-black/10 bg-white p-4 shadow-2xl md:hidden">
          <div className="grid w-full grid-cols-2 gap-3">
            <div className="relative h-[180px] overflow-hidden rounded-[32px] bg-neutral-100">
              <Image src="/care3.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] overflow-hidden rounded-[32px] bg-neutral-100">
              <Image src="/care8.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] overflow-hidden rounded-[32px] bg-neutral-100">
              <Image src="/caree7.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] overflow-hidden rounded-[32px] bg-neutral-100">
              <Image src="/care9.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-6 text-center text-[#0F111A]">
            <h2 className="text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em]">
              Crafted with Care <br /> Loved Everywhere
            </h2>
            <p className="mt-3 text-base leading-[1.5] text-[#0F111A]/65">
              Don&apos;t take our words for it. See why PushupPro is trusted and
              loved by people around the world who want to feel better,
              perform better, and train smarter.
            </p>
          </div>
        </div>

        {/* === Desktop layout === */}
        <div className="mx-6 hidden max-w-[1420px] rounded-[56px] border border-black/10 bg-white p-8 shadow-2xl md:block lg:mx-auto">
          <div className="flex items-start justify-center gap-3">
            {/* === Left group === */}
            <div className="flex shrink-0 gap-3">
              {/* Col A */}
              <div className="mt-[20%] flex w-[134px] flex-col gap-3">
                <div className="relative h-[188px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care1.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[188px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care2.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
              {/* Col B */}
              <div className="flex w-[152px] flex-col gap-3">
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care3.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care4.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care5.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
              {/* Col C */}
              <div className="mt-[20%] flex w-[148px] flex-col gap-3">
                <div className="relative h-[360px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care8.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* === Center group === */}
            <div className="flex w-[320px] shrink-0">
              <div className="flex w-full gap-3">
                <div className="relative h-[360px] flex-1 overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care6.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[360px] flex-1 overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree7.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* === Right group === */}
            <div className="flex shrink-0 gap-3">
              {/* Col F */}
              <div className="mt-[19%] flex w-[160px] flex-col gap-3">
                <div className="relative h-[360px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/care9.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
              {/* Col G */}
              <div className="flex w-[168px] flex-col gap-3">
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree1.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree2.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree3.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
              {/* Col H */}
              <div className="mt-[13%] flex w-[146px] flex-col gap-3">
                <div className="relative h-[204px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree6.avif" alt="athlete" fill className="object-cover" />
                </div>
                <div className="relative h-[204px] overflow-hidden rounded-[40px] bg-neutral-100">
                  <Image src="/caree9.avif" alt="athlete" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-[#0F111A]">
            <h2 className="text-[3.25rem] font-normal leading-[1.05] tracking-[-0.02em]">
              Crafted with Care <br /> Loved Everywhere
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg leading-[1.5] text-[#0F111A]/65">
              Don&apos;t take our words for it. See why PushupPro is trusted and
              loved by people around the world who want to feel better,
              perform better, and train smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
