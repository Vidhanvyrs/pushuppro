"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ClosingCTA({ asciiArt }: { asciiArt: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
      toast.success("Thanks — you're on the list.");
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.from(eyebrowRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        headlineRef.current,
        { opacity: 0, y: 24, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .from(
        ctaRef.current,
        { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      )
      .from(
        boxRef.current,
        { opacity: 0, y: 24, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="relative px-6 pt-32 pb-10 text-center md:pt-40 md:pb-12"
    >
      {/* Eyebrow */}
      <p
        ref={eyebrowRef}
        className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-white/40"
      >
        Unlock your full potential
      </p>

      {/* Headline */}
      <h2
        ref={headlineRef}
        className="mx-auto mt-6 max-w-3xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-white"
      >
        Your AI coach is waiting.
      </h2>

      {/* CTA buttons — pill style with blue arrow */}
      <div ref={ctaRef} className="mt-10 flex items-center justify-center gap-4">
        <a
          href="https://apps.apple.com/in/app/pushup-pro-ai-workout/id6761613723"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-sm border border-white/15 bg-white/10 px-5 py-2.5 text-[0.8125rem] text-white/90 transition-colors hover:bg-white/5"
        >
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=ai.neymo.pushup"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-sm border border-white/15 bg-white/10 px-5 py-2.5 text-[0.8125rem] text-white/90 transition-colors hover:bg-white/5"
        >
          Google Play
        </a>
      </div>

      {/* Newsletter card */}
      <div
        ref={boxRef}
        className="relative mx-auto mt-24 max-w-5xl overflow-hidden rounded-2xl text-left"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Content side */}
        <div className="relative z-10 max-w-lg px-6 py-12 md:px-14 md:py-26">
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
            Stay connected with us
          </h3>

          {/* Email input with submit button */}
          <form onSubmit={handleSubmit} className="mt-8 flex items-center">
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                placeholder="Email address"
                className="w-full rounded-sm border border-white/10 bg-white/5 px-5 py-3.5 pr-14 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/25 disabled:opacity-60"
              />
              <button
                type="submit"
                aria-label="Submit email"
                disabled={status === "loading"}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-12 items-center justify-center rounded-sm bg-[#FF5A36] text-white transition-transform hover:scale-105 disabled:opacity-60 hover:cursor-pointer"
              >
                {status === "loading" ? "..." : "Go"}
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-white/30">
            By submitting your email you agree to the <span className="underline hover:cursor-pointer">privacy policy</span>
          </p>
        </div>

        {/* ASCII art — positioned to the right, vertically centered */}
        <pre
          aria-hidden
          className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 select-none whitespace-pre font-mono text-[7px] leading-[7px] text-white/20 md:block"
        >
          {asciiArt}
        </pre>
      </div>
    </section>
  );
}
