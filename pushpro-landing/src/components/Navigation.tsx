"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Values", href: "#values" },
  { label: "Features", href: "#features" },
  { label: "Connect", href: "#download" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch style once scrolled past ~80% of viewport (end of hero)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-2 py-2 transition-all duration-500 md:px-10",
        scrolled
          ? "border border-white/10 backdrop-blur-md"
          : "border border-transparent backdrop-blur-none bg-transparent"
      )}
    >
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logopushupuppro.webp"
            alt="PushupPro logo"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-lg font-normal tracking-tight text-white">
            pushuppro
          </span>
        </a>
      </div>

      <div className="flex items-center gap-6 md:rounded-sm md:border md:border-white/10 md:bg-black/30 md:px-6 md:py-4 md:backdrop-blur-xs">
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-bold uppercase tracking-[0em] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://neymo.ai/"
          className="hidden rounded-sm font-semibold bg-white px-4 py-2 font-mono text-sm uppercase tracking-[0em] text-black transition-colors hover:bg-white/90 md:inline-block"
          target="_blank"
        >
          Know Us
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex items-center justify-center text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "absolute inset-x-2 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-sm border border-white/10 bg-black/80 p-4 backdrop-blur-md transition-all duration-200 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-sm px-3 py-3 font-mono text-sm uppercase tracking-[0em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#download"
          onClick={() => setMenuOpen(false)}
          className="mt-2 rounded-sm bg-white px-4 py-3 text-center font-mono text-sm uppercase tracking-[0em] text-black transition-colors hover:bg-white/90"
        >
          Get The App
        </a>
      </div>
    </header>
  );
}
