"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const VIDEO_COUNT = 10;
const CROSSFADE_SECONDS = 1.2;
const videoSrc = (n: number) => `/hero-video-${n}.mp4`;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(eyebrowRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        headlineRef.current,
        { opacity: 0, y: 24, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .from(
        subheadRef.current,
        { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      )
      .from(
        ctaRef.current,
        { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

    const blurTween = gsap.to(videoWrapperRef.current, {
      filter: "blur(8px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    const fadeTween = gsap.fromTo(
      fadeOverlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    // Text dissolves away early in the scroll — gone well before the white
    // reveal finishes — so the bare video is what's left peeking through.
    const contentFadeTween = gsap.to(contentRef.current, {
      opacity: 0,
      y: -40,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=55%",
        scrub: 1,
      },
    });

    return () => {
      tl.kill();
      blurTween.kill();
      fadeTween.kill();
      contentFadeTween.kill();
    };
  }, []);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    let active = videoA;
    let standby = videoB;

    let currentIndex = 1;
    let nextIndex = 2;
    let fadeTween: gsap.core.Tween | null = null;

    active.src = videoSrc(currentIndex);
    standby.src = videoSrc(nextIndex);
    gsap.set(active, { opacity: 1 });
    gsap.set(standby, { opacity: 0 });
    active.play().catch(() => { });
    standby.load();

    const crossfade = () => {
      if (!active || !standby) return;
      standby.currentTime = 0;
      standby.play().catch(() => { });

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
          active?.pause();
          [active, standby] = [standby, active];
          currentIndex = nextIndex;
          nextIndex = nextIndex === VIDEO_COUNT ? 1 : nextIndex + 1;
          if (standby) {
            standby.src = videoSrc(nextIndex);
            standby.currentTime = 0;
            standby.load();
          }
        },
      });
    };

    const handleEnded = (e: Event) => {
      if (e.target === active) crossfade();
    };

    videoA.addEventListener("ended", handleEnded);
    videoB.addEventListener("ended", handleEnded);

    return () => {
      videoA.removeEventListener("ended", handleEnded);
      videoB.removeEventListener("ended", handleEnded);
      fadeTween?.kill();
      gsap.killTweensOf([videoA, videoB]);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-black"
    >
      <div ref={videoWrapperRef} className="absolute inset-0 h-full w-full">
        <video
          ref={videoARef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
        />
        <video
          ref={videoBRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
        />
      </div>

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <p
          ref={eyebrowRef}
          className="font-mono text-[0.8125rem] uppercase tracking-[0em] text-white/70"
        >
          Plan. Coach. Track. Build!
        </p>
        <h1
          ref={headlineRef}
          className="mt-6 max-w-4xl text-[clamp(2.75rem,7vw,6rem)] font-normal leading-none tracking-[-0.02em] text-white"
        >
          Train Smarter. Progress Faster.
        </h1>
        <p
          ref={subheadRef}
          className="mt-6 max-w-xl text-lg leading-[1.2] tracking-[-0.01em] text-white/80"
        >
          The AI coach that plans, guides, and tracks every workout without the cost of a personal trainer.
        </p>

        <div ref={ctaRef} className="mt-5 md:mt-10 flex items-center gap-4">
          <a href="https://apps.apple.com/in/app/pushup-pro-ai-workout/id6761613723" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-50 w-auto"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ai.neymo.pushup" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
            <img
              src="/play-store-badge.svg"
              alt="Get it on Google Play"
              className="h-50 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar — brand line + social icons */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-10 md:px-10">
        <p className="font-mono text-[0.5rem] md:text-[0.7rem] uppercase tracking-[0.05em] text-white/50">
          A Personal Trainer in Your Pocket.
        </p>
        <div className="flex items-center gap-1 md:gap-2">
          <a
            href="#"
            aria-label="X (Twitter)"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.36 3.608 1.336.975.975 1.274 2.242 1.336 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.36 2.633-1.336 3.608-.975.975-2.242 1.274-3.608 1.336-1.266.058-1.646.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.36-3.608-1.336-.975-.975-1.274-2.242-1.336-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.36-2.633 1.336-3.608.975-.975 2.242-1.274 3.608-1.336 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.685.077-3.181.453-4.395 1.667-1.214 1.214-1.59 2.71-1.667 4.395-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.077 1.685.453 3.181 1.667 4.395 1.214 1.214 2.71 1.59 4.395 1.667 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.685-.077 3.181-.453 4.395-1.667 1.214-1.214 1.59-2.71 1.667-4.395.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.077-1.685-.453-3.181-1.667-4.395-1.214-1.214-2.71-1.59-4.395-1.667-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <div
        ref={fadeOverlayRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] opacity-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, #EFEFEF 0%, #EFEFEF 40%, transparent 100%)",
        }}
      />
    </section>
  );
}
