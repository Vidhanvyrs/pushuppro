import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { termsSections } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | PushupPro",
  description:
    "Read the terms that govern your access to and use of PushUp Pro.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#EEF1EE] text-[#0F111A]">
      <header className="relative overflow-hidden bg-[#0F111A] px-5 pb-24 pt-5 text-white sm:px-8 sm:pb-28 sm:pt-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(40,208,187,0.22),transparent_34%),radial-gradient(circle_at_18%_90%,rgba(255,100,55,0.16),transparent_32%)]"
        />
        <nav
          aria-label="Terms page navigation"
          className="relative mx-auto flex max-w-6xl items-center justify-between"
        >
          <Link
            href="/"
            aria-label="PushupPro home"
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-md"
          >
            <Image
              src="/logopushupuppro.webp"
              alt=""
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-base tracking-tight sm:text-lg">
              pushuppro
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/15 px-4 py-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/75 transition-colors hover:border-white/30 hover:text-white"
          >
            Back home
          </Link>
        </nav>

        <div className="relative mx-auto mt-20 max-w-6xl sm:mt-28">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#61d7c9]">
            Legal · Terms
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,9vw,7rem)] font-normal leading-[0.88] tracking-[-0.065em]">
            Clear terms.
            <br />
            Stronger trust.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            The rules and responsibilities that apply when you access or use
            PushUp Pro and its related services.
          </p>
        </div>
      </header>

      <main className="relative mx-auto -mt-10 grid max-w-6xl items-start gap-6 px-4 pb-24 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <nav
          aria-labelledby="terms-contents-title"
          className="rounded-[1.75rem] border border-[#0F111A]/8 bg-white p-5 shadow-[0_18px_60px_rgba(15,17,26,0.06)] lg:sticky lg:top-6"
        >
          <h2
            id="terms-contents-title"
            className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#0F111A]/60"
          >
            On this page
          </h2>
          <ol className="mt-4 grid gap-x-5 gap-y-1 sm:grid-cols-2 lg:grid-cols-1">
            {termsSections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm leading-5 text-[#43505a] transition-colors hover:bg-[#EAF4F1] hover:text-[#0F6B61]"
                >
                  <span className="mt-px font-mono text-[0.62rem] text-[#0F111A]/55 group-hover:text-[#0F6B61]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0 rounded-[2rem] border border-[#0F111A]/8 bg-white px-6 py-10 shadow-[0_22px_80px_rgba(15,17,26,0.07)] sm:px-10 sm:py-14 lg:px-14">
          {termsSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-8 border-b border-[#0F111A]/10 py-10 first:pt-0 last:border-b-0 last:pb-0 sm:py-14"
            >
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0F111A]/60">
                Section {String(index + 1).padStart(2, "0")}
              </p>
              <h2
                id={`${section.id}-title`}
                className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em]"
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-[0.98rem] leading-7 text-[#344049] sm:text-base">
                {section.notice && (
                  <p className="rounded-2xl border border-[#ef6b2e]/20 bg-[#fff1ea] px-5 py-4 font-semibold text-[#71321d]">
                    {section.notice}
                  </p>
                )}
                {section.intro?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2.5 pl-5 marker:text-[#16a596] [&>li]:pl-1">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.outro?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.privacyLink && (
                  <Link
                    href="/privacy"
                    className="inline-flex font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
                  >
                    Read our Privacy Policy
                  </Link>
                )}
                {section.contactActions && (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/917022771245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit rounded-xl bg-[#0F6B61] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#094a43]"
                    >
                      WhatsApp +91 70227 71245
                    </a>
                    <a
                      href="mailto:support@neymo.ai"
                      className="inline-flex w-fit rounded-xl border border-[#0F111A]/12 px-5 py-3 font-semibold text-[#344049] transition-colors hover:bg-[#EEF1EE]"
                    >
                      support@neymo.ai
                    </a>
                  </div>
                )}
              </div>
            </section>
          ))}
        </article>
      </main>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
