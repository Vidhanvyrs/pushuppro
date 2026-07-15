import { readFileSync } from "fs";
import { join } from "path";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import SectionFade from "@/components/SectionFade";
import SocialProof from "@/components/SocialProof";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import { HorizontalRail } from "@/components/feature-prototype/HorizontalRail";

export default function Home() {
  const asciiArt = readFileSync(
    join(process.cwd(), "public", "ascii3.txt"),
    "utf-8"
  );

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <HorizontalRail />
        <SocialProof />
        <SectionFade from="#ffffff" to="#000000" />
        <div className="relative overflow-hidden bg-black">
          <div
            className="pointer-events-none absolute inset-x-0 top-100 hidden h-full md:block"
            style={{
              background:
                "radial-gradient(ellipse 140% 110% at 50% 72%, rgba(255,110,60,0.48) 0%, rgba(255,150,100,0.22) 28%, rgba(190,75,45,0.1) 46%, rgba(120,40,25,0.05) 68%, transparent 100%)",
            }}
          />
          <ClosingCTA asciiArt={asciiArt} />
          <Footer />
        </div>
      </main>
    </>
  );
}
