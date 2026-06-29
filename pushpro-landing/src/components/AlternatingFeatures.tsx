"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  ScanFace,
  Scan,
  Share2,
  Target,
  Dumbbell,
  Trophy,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  imageClass?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Target,
    eyebrow: "Personalized Plans",
    heading: "A weekly plan built around you.",
    body: "Tell PushupPro your goals, fitness level, and available equipment. It builds a plan tailored to you and keeps it updated as you progress.",
    image: "/cardimg1.jpg",
    imageClass: "object-cover",
  },
  {
    icon: Trophy,
    eyebrow: "PR Tracking",
    heading: "Your personal records, always in sight.",
    body: "PushupPro automatically detects and saves every personal record by exercise, rep range, and weight so you always know where you stand.",
    image: "/test.mp4",
    imageClass: "object-cover",
  },
  {
    icon: TrendingUp,
    eyebrow: "Progressive Overload",
    heading: "Built to keep you climbing.",
    body: "PushupPro watches your progress and tells you exactly when to add weight or reps, so you never stall or guess.",
    image: "/prg-ovld.jpg",
    imageClass: "object-cover",
  },
  {
    icon: Dumbbell,
    eyebrow: "Exercise Library",
    heading: "900+ exercises. Every variation, covered.",
    body: "From barbell squats to bodyweight alternatives, PushupPro has every exercise with weighted and equipment-free swaps, so no gym or no gear ever stops your session.",
    image: "/test2.mp4",
    imageClass: "object-cover",
  },
  {
    icon: Share2,
    eyebrow: "Social Posters",
    heading: "Turn your workout into a moment.",
    body: "Every completed session can become a poster. PushupPro auto-fills your stats — exercises, sets, volume, PRs hit into a clean, branded graphic. Pick a style, tweak the layout, and share straight to Instagram, X, or anywhere else.",
    image: "/poster-untitled.png",
    imageClass: "object-contain",
  },
  {
    icon: Scan,
    eyebrow: "Body Scan",
    heading: "Know your body before you train it.",
    body: "Upload front and back photos and PushupPro's AI maps your muscle balance pinpointing which groups are lagging and where to focus next.",
    image: "/gym.jpg",
    imageClass: "object-cover",
  },
  {
    icon: MessageSquare,
    eyebrow: "AI Coach",
    heading: "A helpful hand mid-workout.",
    body: "Ask quick questions about rest times, form, or exercise swaps. Still being improved but already useful for the basics.",
    image: "/progressive-ovld.jpg",
    imageClass: "object-cover",
  },
  {
    icon: ScanFace,
    eyebrow: "Pose Detection & Challenges",
    heading: "Compete. Rep by rep with form feedback.",
    body: "Point your camera and PushupPro counts every rep, scores your form, and flags bad reps in real time no spotter, no guesswork. Then take it further in Challenges: compete in pushup and plank events against anyone, anywhere.",
    image: "/posed.jpg",
    imageClass: "object-cover",
  },
];

function Media({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (/\.(mp4|webm|mov)$/i.test(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={cn("absolute inset-0 h-full w-full object-contain", className)}
      />
    );
  }
  return <Image src={src} alt={alt} fill className={cn("object-contain", className)} />;
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;
  const imageRight = index % 2 === 0;

  useEffect(() => {
    if (!rowRef.current) return;
    gsap.set(rowRef.current, { opacity: 0, y: 48 });
    const trigger = ScrollTrigger.create({
      trigger: rowRef.current,
      start: "top 85%",
      onEnter: () =>
        gsap.to(rowRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }),
      onLeaveBack: () =>
        gsap.to(rowRef.current, { opacity: 0, y: 48, duration: 0.5, ease: "power2.in" }),
    });
    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={rowRef}
      className={cn(
        "flex flex-col gap-10 md:items-center md:gap-16",
        imageRight ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-[#0f0f0f] md:w-1/2">
        <Media src={feature.image} alt={feature.heading} className={feature.imageClass} />
      </div>

      <div className="flex flex-col gap-4 md:w-1/2">
        <div className="flex items-center gap-2 text-[#0F111A]/40">
          <Icon className="size-4" />
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.05em]">{feature.eyebrow}</p>
        </div>
        <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0F111A]">
          {feature.heading}
        </h3>
        <p className="max-w-md text-base leading-[1.6] text-[#0F111A]/50">{feature.body}</p>
      </div>
    </div>
  );
}

export default function AlternatingFeatures() {
  return (
    <section id="features" className="bg-[#EFEFEF] pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.02em] text-[#0F111A]">
          Built to keep you progressing
        </h2>

        <div className="mt-16 flex flex-col gap-20 md:gap-32">
          {FEATURES.map((feature, i) => (
            <FeatureRow key={feature.heading} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// OLD BENTO GRID VERSION (rollback)
// ============================================================

// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   MessageSquare,
//   ScanFace,
//   Scan,
//   Share2,
//   Target,
//   Dumbbell,
//   Trophy,
//   TrendingUp,
//   type LucideIcon,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// gsap.registerPlugin(ScrollTrigger);

// type Layout = "hero" | "wide" | "tall";

// type Feature = {
//   icon: LucideIcon;
//   eyebrow: string;
//   heading: string;
//   body: string;
//   image: string;
//   imageClass?: string;
//   layout: Layout;
//   gridClass: string;
// };

// const FEATURES: Feature[] = [
//   {
//     icon: Target,
//     eyebrow: "Personalized Plans",
//     heading: "A weekly plan built around you.",
//     body: "Tell PushupPro your goals, fitness level, and available equipment. It builds a plan tailored to you and keeps it updated as you progress.",
//     image: "/cardimg1.jpg",
//     layout: "hero",
//     gridClass: "md:col-span-3",
//   },
//   {
//     icon: Trophy,
//     eyebrow: "PR Tracking",
//     heading: "Your personal records, always in sight.",
//     body: "PushupPro automatically detects and saves every personal record — by exercise, rep range, and weight — so you always know where you stand.",
//     image: "/test.mp4",
//     imageClass: "object-cover",
//     layout: "tall",
//     gridClass: "md:col-span-1",
//   },
//   {
//     icon: TrendingUp,
//     eyebrow: "Progressive Overload",
//     heading: "Built to keep you climbing.",
//     body: "PushupPro watches your progress and tells you exactly when to add weight or reps, so you never stall or guess.",
//     image: "/prg-ovld.jpg",
//     imageClass: "object-cover",
//     layout: "tall",
//     gridClass: "md:col-span-1",
//   },
//   {
//     icon: Dumbbell,
//     eyebrow: "Exercise Library",
//     heading: "900+ exercises. Every variation, covered.",
//     body: "From barbell squats to bodyweight alternatives — PushupPro has every exercise with weighted and equipment-free swaps, so no gym or no gear ever stops your session.",
//     image: "/test2.mp4",
//     imageClass: "object-cover",
//     layout: "tall",
//     gridClass: "md:col-span-1",
//   },
//   {
//     icon: Share2,
//     eyebrow: "Social Posters",
//     heading: "Turn your workout into a moment.",
//     body: "Every completed session can become a poster. PushupPro auto-fills your stats — exercises, sets, volume, PRs hit — into a clean, branded graphic. Pick a style, tweak the layout, and share straight to Instagram, X, or anywhere else. Your hard work deserves more than a number in a log.",
//     image: "/poster-untitled.png",
//     layout: "wide",
//     gridClass: "md:col-span-2",
//   },
//   {
//     icon: Scan,
//     eyebrow: "Body Scan",
//     heading: "Know your body before you train it.",
//     body: "Upload front and back photos and PushupPro's AI maps your muscle balance — pinpointing which groups are lagging and where to focus next.",
//     image: "/gym.jpg",
//     imageClass: "object-cover",
//     layout: "tall",
//     gridClass: "md:col-span-1",
//   },
//   {
//     icon: MessageSquare,
//     eyebrow: "AI Coach",
//     heading: "A helpful hand mid-workout.",
//     body: "Ask quick questions about rest times, form, or exercise swaps. Still being improved — but already useful for the basics.",
//     image: "/progressive-ovld.jpg",
//     imageClass: "object-cover",
//     layout: "tall",
//     gridClass: "md:col-span-1",
//   },
//   {
//     icon: ScanFace,
//     eyebrow: "Pose Detection & Challenges",
//     heading: "Compete. Rep by rep with Form feedback.",
//     body: "Point your camera and PushupPro counts every rep, scores your form, and flags bad reps in real time — no spotter, no guesswork. Then take it further in Challenges: compete in pushup and plank events against anyone, anywhere. Every clean rep moves you up the global leaderboard. Show up, lock in, and see exactly where you rank.",
//     image: "/posed.jpg",
//     imageClass: "object-cover",
//     layout: "wide",
//     gridClass: "md:col-span-2",
//   },
// ];

// function Media({ src, alt, className }: { src: string; alt: string; className?: string }) {
//   if (/\.(mp4|webm|mov)$/i.test(src)) {
//     return (
//       <video
//         src={src}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className={cn("absolute inset-0 h-full w-full object-contain", className)}
//       />
//     );
//   }
//   return <Image src={src} alt={alt} fill className={className} />;
// }

// function BentoCard({ feature }: { feature: Feature }) {
//   const Icon = feature.icon;
//   const cardRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);
//   const xTo = useRef<((v: number) => void) | null>(null);
//   const yTo = useRef<((v: number) => void) | null>(null);

//   useEffect(() => {
//     if (!cardRef.current) return;
//     gsap.set(cardRef.current, { transformPerspective: 900, rotateX: 0, rotateY: 0, force3D: true });
//     xTo.current = gsap.quickTo(cardRef.current, "rotateY", {
//       duration: 0.5,
//       ease: "power3.out",
//     });
//     yTo.current = gsap.quickTo(cardRef.current, "rotateX", {
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = cardRef.current;
//     if (!el || !xTo.current || !yTo.current) return;
//     const rect = el.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     xTo.current(x * 22);
//     yTo.current(-y * 16);
//     if (glowRef.current) {
//       const xPct = ((e.clientX - rect.left) / rect.width) * 100;
//       const yPct = ((e.clientY - rect.top) / rect.height) * 100;
//       glowRef.current.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
//     }
//   };

//   const handleMouseLeave = () => {
//     if (xTo.current) xTo.current(0);
//     if (yTo.current) yTo.current(0);
//     if (glowRef.current) glowRef.current.style.background = "";
//   };

//   if (feature.layout === "hero") {
//     return (
//       <div className={cn("", feature.gridClass)}>
//         <div
//           ref={cardRef}
//           data-bento-card
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="relative flex h-[300px] w-full cursor-default overflow-hidden rounded-xl bg-[#0f0f0f] md:h-[360px]"
//           style={{ willChange: "transform" }}
//         >
//           <div className="relative z-10 flex w-full flex-col justify-end gap-3 p-8 md:w-1/2 md:justify-center">
//             <div className="flex items-center gap-2 text-white/50">
//               <Icon className="size-4" />
//               <p className="font-mono text-[0.75rem] uppercase tracking-[0.05em]">
//                 {feature.eyebrow}
//               </p>
//             </div>
//             <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
//               {feature.heading}
//             </h3>
//             <p className="max-w-sm text-sm leading-[1.5] text-white/50">
//               {feature.body}
//             </p>
//           </div>
//           <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
//             <Media
//               src={feature.image}
//               alt={feature.heading}
//               className="object-cover opacity-60 md:opacity-100"
//             />
//             <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent md:block" />
//           </div>
//           <div ref={glowRef} className="pointer-events-none absolute inset-0 z-20 rounded-xl transition-all duration-100" />
//         </div>
//       </div>
//     );
//   }

//   if (feature.layout === "wide") {
//     return (
//       <div className={cn("", feature.gridClass)}>
//         <div
//           ref={cardRef}
//           data-bento-card
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="flex h-full w-full cursor-default flex-col overflow-hidden rounded-xl bg-[#0f0f0f]"
//           style={{ willChange: "transform" }}
//         >
//           <div className="relative aspect-[16/9] w-full shrink-0">
//             <Media
//               src={feature.image}
//               alt={feature.heading}
//               className={feature.imageClass ?? "object-contain"}
//             />
//           </div>
//           <div className="relative z-10 flex flex-col gap-3 p-6">
//             <div className="flex items-center gap-2 text-white/50">
//               <Icon className="size-4" />
//               <p className="font-mono text-[0.75rem] uppercase tracking-[0.05em]">
//                 {feature.eyebrow}
//               </p>
//             </div>
//             <h3 className="text-[1.25rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
//               {feature.heading}
//             </h3>
//             <p className="text-sm leading-[1.5] text-white/50">{feature.body}</p>
//           </div>
//           <div ref={glowRef} className="pointer-events-none absolute inset-0 z-20 rounded-xl transition-all duration-100" />
//         </div>
//       </div>
//     );
//   }

//   // tall
//   return (
//     <div className={cn("", feature.gridClass)}>
//       <div
//         ref={cardRef}
//         data-bento-card
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="flex h-full w-full cursor-default flex-col overflow-hidden rounded-xl  bg-[#0f0f0f]"
//         style={{ willChange: "transform" }}
//       >
//         <div className="relative aspect-[3/4] w-full shrink-0">
//           <Media
//             src={feature.image}
//             alt={feature.heading}
//             className={feature.imageClass ?? "object-contain"}
//           />
//         </div>
//         <div className="relative z-10 flex flex-col gap-3 p-5">
//           <div className="flex items-center gap-2 text-white/50">
//             <Icon className="size-4" />
//             <p className="font-mono text-[0.75rem] uppercase tracking-[0.05em]">
//               {feature.eyebrow}
//             </p>
//           </div>
//           <h3 className="text-[1.1rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
//             {feature.heading}
//           </h3>
//           <p className="text-sm leading-[1.5] text-white/50">{feature.body}</p>
//         </div>
//         <div ref={glowRef} className="pointer-events-none absolute inset-0 z-20 rounded-xl transition-all duration-100" />
//       </div>
//     </div>
//   );
// }

// export default function AlternatingFeatures() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set("[data-bento-card]", { opacity: 0, y: 36 });

//       ScrollTrigger.batch("[data-bento-card]", {
//         onEnter: (batch) => {
//           gsap.to(batch, {
//             opacity: 1,
//             y: 0,
//             duration: 1.1,
//             ease: "power2.out",
//             stagger: 0.15,
//           });
//         },
//         onLeaveBack: (batch) => {
//           gsap.to(batch, {
//             opacity: 0,
//             y: 36,
//             duration: 0.6,
//             ease: "power2.in",
//             stagger: 0.08,
//           });
//         },
//         start: "top 90%",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} id="features" className="bg-[#EFEFEF] py-20 md:py-28">
//       <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
//         <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.02em] text-[#0F111A]">
//           Built to keep you progressing
//         </h2>

//         <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
//           {FEATURES.map((feature) => (
//             <BentoCard key={feature.heading} feature={feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
