import Image from "next/image";
import {
  Activity,
  Check,
  HeartPulse,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const compactFeatures = [
  {
    eyebrow: "Personalized plans",
    title: "Made for your goals.",
    description:
      "Your schedule, equipment, and experience shape every week.",
    image: "/output/imagegen/more-features/personalized-plans-transparent.png",
    imageAlt:
      "PushUp Pro personalized weekly plan with goal and equipment controls",
    imageClassName:
      "bottom-[-10%] left-1/2 w-[112%] -translate-x-1/2 sm:w-[120%] lg:w-[132%]",
  },
  {
    eyebrow: "AI coaching",
    title: "Guidance, set by set.",
    description:
      "Get useful feedback while you train, rest, and progress.",
    image: "/output/imagegen/more-features/ai-coach-transparent.png",
    imageAlt:
      "PushUp Pro workout screen with live AI coaching feedback",
    imageClassName:
      "bottom-[-11%] left-1/2 w-[114%] -translate-x-1/2 sm:w-[122%] lg:w-[134%]",
  },
  {
    eyebrow: "Progressive overload",
    title: "Know what's next.",
    description:
      "Turn workout history into clear, achievable next targets.",
    image:
      "/output/imagegen/more-features/progressive-overload-transparent.png",
    imageAlt:
      "PushUp Pro progression chart and recommended next strength target",
    imageClassName:
      "bottom-[-10%] left-1/2 w-[112%] -translate-x-1/2 sm:w-[120%] lg:w-[132%]",
  },
] as const;

const integrations = [
  {
    name: "Strava",
    detail: "Activities",
    icon: <Activity aria-hidden="true" className="size-5" />,
    className:
      "left-[2%] top-[16%] rotate-[-7deg] text-[#fc4c02] md:left-[1%] md:top-[18%]",
  },
  {
    name: "Apple Health",
    detail: "Health data",
    icon: <HeartPulse aria-hidden="true" className="size-5" />,
    className:
      "left-[3%] top-[49%] rotate-[5deg] text-[#ff375f] md:left-[8%] md:top-[52%]",
  },
  {
    name: "Google Fit",
    detail: "Daily movement",
    icon: <RefreshCw aria-hidden="true" className="size-5" />,
    className:
      "right-[1%] top-[10%] rotate-[6deg] text-[#13a8a8] md:right-[3%] md:top-[14%]",
  },
] as const;

export default function MoreFeatures() {
  return (
    <section
      id="more-features"
      aria-labelledby="more-features-title"
      className="relative bg-white px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#182129]/48">
            More features
          </p>
          <h2
            id="more-features-title"
            className="mt-5 text-[clamp(2.8rem,5.4vw,5.7rem)] font-normal leading-[0.92] tracking-[-0.06em] text-[#111820]"
          >
            More ways to move forward.
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {compactFeatures.map((feature) => (
            <article
              key={feature.eyebrow}
              className="relative min-h-[490px] overflow-hidden rounded-[2rem] bg-[#e7f1f6] sm:min-h-[560px] lg:min-h-[610px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_74%,rgba(46,204,190,0.2),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.78),transparent_55%)]"
              />

              <div className="relative z-10 p-7 sm:p-9">
                <p className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#182129]/45">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.4vw,2.35rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#151b20]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[19rem] text-sm leading-5 text-[#33414b]/65 sm:text-[0.95rem]">
                  {feature.description}
                </p>
              </div>

              <Image
                src={feature.image}
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 33vw"
                alt={feature.imageAlt}
                className={`absolute max-w-none object-contain ${feature.imageClassName}`}
              />
            </article>
          ))}

          <article className="relative min-h-[600px] overflow-hidden rounded-[2rem] bg-[#e7f1f6] lg:col-span-3 lg:min-h-[650px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_58%,rgba(46,204,190,0.2),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.82),transparent_52%)]"
            />

            <div className="relative z-10 max-w-xl p-8 sm:p-12 lg:p-16">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#182129]/48">
                Live form tracking
              </p>
              <h3 className="mt-5 text-[clamp(2.6rem,5vw,5rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#111820]">
                Every rep,
                <br />
                seen clearly.
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-[#33414b]/68 sm:text-lg">
                Your camera counts reps, checks your form, and turns the work
                into challenges worth showing up for.
              </p>
              <div className="mt-8 flex w-fit items-center gap-2.5 rounded-full border border-[#17212a]/10 bg-white/64 px-4 py-2.5 text-sm text-[#26323a] backdrop-blur-sm">
                <Sparkles
                  aria-hidden="true"
                  className="size-4 text-[#ef6b2e]"
                />
                Real-time cues. No wearable required.
              </div>
            </div>

            <Image
              src="/output/imagegen/more-features/form-tracking-challenge-transparent.png"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 120vw, 72vw"
              alt="PushUp Pro live camera tracking a push-up with rep count, form score, and challenge progress"
              className="absolute bottom-[-1%] left-[3%] w-[144%] max-w-none object-contain sm:left-[13%] sm:w-[118%] lg:bottom-[-18%] lg:left-[35%] lg:w-[84%]"
            />
          </article>

          <article
            aria-labelledby="connected-apps-title"
            className="relative grid min-h-[670px] overflow-hidden rounded-[2rem] bg-[#e7f1f6] lg:col-span-3 lg:min-h-[650px] lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 35% 72%, rgba(46,204,190,0.24), transparent 34%), linear-gradient(135deg, rgba(255,255,255,0.82), transparent 55%)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <span className="absolute -bottom-[76%] left-[6%] aspect-square w-[78%] rounded-full border border-white/70" />
              <span className="absolute -bottom-[64%] left-[15%] aspect-square w-[66%] rounded-full border border-white/70" />
              <span className="absolute -bottom-[51%] left-[24%] aspect-square w-[54%] rounded-full border border-white/70" />
            </div>

            <div className="relative order-2 min-h-[390px] lg:order-1 lg:min-h-0">
              <Image
                src="/pushuppro-connected-apps-phone.png"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 92vw, 56vw"
                alt="PushUp Pro connected apps screen showing Strava, Apple Health, and Google Fit"
                className="absolute bottom-[-4%] left-1/2 z-10 w-[118%] max-w-none -translate-x-1/2 object-contain sm:bottom-[-8%] sm:w-[104%] lg:bottom-[-2%] lg:left-[45%] lg:w-[118%]"
              />

              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-3 shadow-[0_18px_45px_rgba(30,55,70,0.13)] backdrop-blur-md sm:px-4 ${integration.className}`}
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-white shadow-sm">
                    {integration.icon}
                  </span>
                  <span className="hidden leading-tight sm:block">
                    <strong className="block text-xs font-semibold text-[#182129]">
                      {integration.name}
                    </strong>
                    <span className="text-[0.65rem] text-[#66727b]">
                      {integration.detail}
                    </span>
                  </span>
                  <span className="ml-1 hidden size-5 items-center justify-center rounded-full bg-[#1bc6b5] text-white sm:flex">
                    <Check
                      aria-hidden="true"
                      className="size-3"
                      strokeWidth={3}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div className="relative z-20 order-1 flex flex-col justify-center px-7 pb-3 pt-12 sm:px-10 sm:pt-16 lg:order-2 lg:px-12 lg:py-20 xl:px-16">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#182129]/48">
                Connected training
              </p>
              <h3
                id="connected-apps-title"
                className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,5rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#111820]"
              >
                Your workouts, everywhere.
              </h3>
              <p className="mt-7 max-w-md text-base leading-7 text-[#33414b]/70 sm:text-lg">
                Connect PushUp Pro with Strava, Apple Health, and Google Fit.
                Keep every session and milestone moving with you.
              </p>

              <div className="mt-9 flex w-fit items-center gap-3 rounded-full border border-[#17212a]/10 bg-white/62 px-4 py-2.5 text-sm text-[#26323a] backdrop-blur-sm">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1bc6b5] opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#1bc6b5]" />
                </span>
                Sync once. Keep progressing.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
