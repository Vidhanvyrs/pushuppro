import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PushupPro",
  description:
    "Learn how PushupPro and Neymo AI collect, use, store, and safeguard your information.",
};

const tableOfContents = [
  ["introduction", "Introduction"],
  ["information-we-collect", "Information We Collect"],
  ["how-we-use-information", "How We Use Your Information"],
  ["third-party-services", "Third-Party Services"],
  ["data-storage-security", "Data Storage and Security"],
  ["data-retention-deletion", "Data Retention and Deletion"],
  ["your-rights", "Your Rights"],
  ["childrens-privacy", "Children’s Privacy"],
  ["international-transfers", "International Data Transfers"],
  ["cookies-local-storage", "Cookies and Local Storage"],
  ["changes", "Changes to This Policy"],
] as const;

const emailLink = (
  <a
    href="mailto:support@neymo.ai"
    className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4 transition-colors hover:text-[#094a43]"
  >
    support@neymo.ai
  </a>
);

function PolicySection({
  number,
  id,
  title,
  children,
}: {
  number: string;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-8 border-b border-[#0F111A]/10 py-10 first:pt-0 last:border-b-0 last:pb-0 sm:py-14"
    >
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0F111A]/60">
        Section {number}
      </p>
      <h2
        id={`${id}-title`}
        className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F111A]"
      >
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[0.98rem] leading-7 text-[#344049] sm:text-base">
        {children}
      </div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111820]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function PolicyList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2.5 pl-5 marker:text-[#16a596] [&>li]:pl-1">
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#EEF1EE] text-[#0F111A]">
      <header className="relative overflow-hidden bg-[#0F111A] px-5 pb-24 pt-5 text-white sm:px-8 sm:pb-28 sm:pt-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(40,208,187,0.22),transparent_34%),radial-gradient(circle_at_18%_90%,rgba(255,100,55,0.16),transparent_32%)]"
        />

        <nav
          aria-label="Privacy page navigation"
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
            Legal · Privacy
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,9vw,7rem)] font-normal leading-[0.88] tracking-[-0.065em]">
            Privacy,
            <br />
            made clear.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            How PushUp Pro and Neymo AI collect, use, store, and safeguard
            information when you use our services.
          </p>
        </div>
      </header>

      <main className="relative mx-auto -mt-10 grid max-w-6xl items-start gap-6 px-4 pb-24 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <nav
          aria-labelledby="privacy-contents-title"
          className="rounded-[1.75rem] border border-[#0F111A]/8 bg-white p-5 shadow-[0_18px_60px_rgba(15,17,26,0.06)] lg:sticky lg:top-6"
        >
          <h2
            id="privacy-contents-title"
            className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#0F111A]/60"
          >
            On this page
          </h2>
          <ol className="mt-4 grid gap-x-5 gap-y-1 sm:grid-cols-2 lg:grid-cols-1">
            {tableOfContents.map(([id, label], index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm leading-5 text-[#43505a] transition-colors hover:bg-[#EAF4F1] hover:text-[#0F6B61]"
                >
                  <span className="mt-px font-mono text-[0.62rem] text-[#0F111A]/55 group-hover:text-[#0F6B61]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0 rounded-[2rem] border border-[#0F111A]/8 bg-white px-6 py-10 shadow-[0_22px_80px_rgba(15,17,26,0.07)] sm:px-10 sm:py-14 lg:px-14">
          <PolicySection number="01" id="introduction" title="Introduction">
            <p>
              Welcome to PushUp Pro, operated by Neymo AI. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our fitness application at{" "}
              <a
                href="https://pushup.neymo.ai"
                className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
              >
                pushup.neymo.ai
              </a>{" "}
              and any associated apps (the “Service”).
            </p>
            <p>
              By using the Service, you agree to this policy. If you do not
              agree, please discontinue use.
            </p>
          </PolicySection>

          <PolicySection
            number="02"
            id="information-we-collect"
            title="Information We Collect"
          >
            <Subsection title="2.1 Account Information">
              <p>When you create an account, we collect:</p>
              <PolicyList>
                <li>
                  <strong>Email address</strong> — authentication, account
                  recovery, and service communications.
                </li>
                <li>
                  <strong>Name</strong> — to personalize your experience.
                </li>
                <li>
                  <strong>Authentication credentials</strong> — passwords are
                  bcrypt-hashed. Google OAuth users: we receive only your name
                  and email from Google; we never store your Google password.
                </li>
              </PolicyList>
            </Subsection>

            <Subsection title="2.2 Workout and Fitness Data">
              <PolicyList>
                <li>Exercise types, sets, reps, and weights.</li>
                <li>Workout session history, duration, and progress.</li>
                <li>Challenge scores (pushups, squats, planks).</li>
                <li>AI-generated workout plans and coaching interactions.</li>
              </PolicyList>
            </Subsection>

            <Subsection title="2.3 Camera and Pose Detection Data">
              <p>
                Camera frames may be transmitted via WebSocket for real-time
                pose detection and rep counting. Pose landmarks are extracted
                server-side and frames are not permanently stored after your
                session ends. No camera data is shared with third parties.
              </p>
            </Subsection>

            <Subsection title="2.4 Video Uploads (MoveMatch)">
              <p>
                Uploaded videos are processed on our AWS servers and archived
                in your session history. They are not shared with other users.
                You may request deletion by contacting {emailLink}.
              </p>
            </Subsection>

            <Subsection title="2.5 Voice and Audio Data">
              <p>
                Voice input audio is sent to OpenAI&apos;s Whisper API for
                transcription, then not permanently stored. Transcribed text is
                used only to process your commands.
              </p>
            </Subsection>

            <Subsection title="2.6 Usage and Technical Data">
              <PolicyList>
                <li>Browser type, device type, and operating system.</li>
                <li>Pages visited, features used, and session duration.</li>
                <li>IP address (security and approximate geolocation).</li>
                <li>Performance metrics and error logs (via Datadog APM).</li>
              </PolicyList>
            </Subsection>
          </PolicySection>

          <PolicySection
            number="03"
            id="how-we-use-information"
            title="How We Use Your Information"
          >
            <PolicyList>
              <li>Provide, maintain, and improve the Service.</li>
              <li>Authenticate your identity and manage your account.</li>
              <li>
                Track fitness progress and generate personalized workout plans.
              </li>
              <li>
                Process video comparisons and deliver analysis results.
              </li>
              <li>
                Monitor performance, diagnose issues, and improve reliability.
              </li>
              <li>
                Communicate about your account, updates, and support.
              </li>
              <li>Ensure security and prevent fraud or abuse.</li>
              <li>Comply with legal obligations.</li>
            </PolicyList>
            <p className="rounded-2xl border border-[#16a596]/18 bg-[#EAF4F1] px-5 py-4 font-medium text-[#174c46]">
              We do not sell your personal information and contain no ads.
            </p>
          </PolicySection>

          <PolicySection
            number="04"
            id="third-party-services"
            title="Third-Party Services"
          >
            <Subsection title="4.1 Google (OAuth)">
              <p>
                Sign-in via Google shares your name and email with us. Governed
                by{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </p>
            </Subsection>
            <Subsection title="4.2 Amazon Web Services">
              <p>
                Infrastructure and storage hosted on AWS in the India (Mumbai)
                region. See{" "}
                <a
                  href="https://aws.amazon.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
                >
                  AWS&apos;s Privacy Policy
                </a>
                .
              </p>
            </Subsection>
            <Subsection title="4.3 Google MediaPipe">
              <p>
                Used for local pose detection. No camera data is sent to Google
                through this integration.
              </p>
            </Subsection>
            <Subsection title="4.4 OpenAI (AI Features)">
              <p>
                Powers workout plans, coaching feedback, TTS (coach audio), and
                STT (voice input). OpenAI does not use API inputs to train their
                models. See{" "}
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
                >
                  OpenAI&apos;s Privacy Policy
                </a>
                .
              </p>
            </Subsection>
            <Subsection title="4.5 Datadog (Monitoring)">
              <p>
                Used for APM, error tracking, and operational analytics. Does
                not include camera feeds or workout content. See{" "}
                <a
                  href="https://www.datadoghq.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0F6B61] underline decoration-[#0F6B61]/30 underline-offset-4"
                >
                  Datadog&apos;s Privacy Policy
                </a>
                .
              </p>
            </Subsection>
          </PolicySection>

          <PolicySection
            number="05"
            id="data-storage-security"
            title="Data Storage and Security"
          >
            <p>
              Data is stored on AWS Mumbai. Security measures include:
            </p>
            <PolicyList>
              <li>TLS/HTTPS for all data transmission.</li>
              <li>Bcrypt password hashing.</li>
              <li>JWT session tokens with expiration.</li>
              <li>
                Access controls and secrets management via AWS Secrets Manager.
              </li>
            </PolicyList>
            <p>
              No method of internet transmission is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection
            number="06"
            id="data-retention-deletion"
            title="Data Retention and Deletion"
          >
            <PolicyList>
              <li>
                <strong>Account data</strong> — retained until you request
                deletion.
              </li>
              <li>
                <strong>Workout history</strong> — retained while your account
                is active.
              </li>
              <li>
                <strong>Uploaded videos</strong> — archived; deletable on
                request.
              </li>
              <li>
                <strong>Camera/pose data</strong> — not persisted after the
                session ends.
              </li>
              <li>
                <strong>Technical logs</strong> — retained up to 90 days.
              </li>
            </PolicyList>
            <p>
              To delete your account and all data, contact {emailLink} or use
              the “Delete Account” option in profile settings. We process
              requests within 30 days.
            </p>
          </PolicySection>

          <PolicySection
            number="07"
            id="your-rights"
            title="Your Rights (including GDPR)"
          >
            <PolicyList>
              <li>
                <strong>Access</strong> — request a copy of your data.
              </li>
              <li>
                <strong>Rectification</strong> — correct inaccurate data.
              </li>
              <li>
                <strong>Erasure</strong> — request deletion (“right to be
                forgotten”).
              </li>
              <li>
                <strong>Restriction</strong> — limit processing of your data.
              </li>
              <li>
                <strong>Portability</strong> — receive data in a
                machine-readable format.
              </li>
              <li>
                <strong>Object</strong> — object to processing for certain
                purposes.
              </li>
              <li>
                <strong>Withdraw Consent</strong> — withdraw consent at any
                time.
              </li>
            </PolicyList>
            <p>
              Contact {emailLink} to exercise any right. We respond within 30
              days.
            </p>
          </PolicySection>

          <PolicySection
            number="08"
            id="childrens-privacy"
            title="Children’s Privacy"
          >
            <p>
              PushUp Pro is not intended for children under 13. We do not
              knowingly collect data from children under 13. Contact{" "}
              {emailLink} if you believe your child has provided personal
              information.
            </p>
          </PolicySection>

          <PolicySection
            number="09"
            id="international-transfers"
            title="International Data Transfers"
          >
            <p>
              Data is primarily stored in India (AWS Mumbai). Accessing from
              outside India constitutes consent to this transfer. Appropriate
              safeguards are in place per applicable data protection laws.
            </p>
          </PolicySection>

          <PolicySection
            number="10"
            id="cookies-local-storage"
            title="Cookies and Local Storage"
          >
            <p>
              We use browser local storage for JWT session tokens and app
              preferences. No third-party advertising cookies. Datadog may set
              limited performance-monitoring cookies.
            </p>
          </PolicySection>

          <PolicySection
            number="11"
            id="changes"
            title="Changes to This Policy"
          >
            <p>
              We may update this policy periodically. Material changes will be
              communicated by updating the “Last updated” date and, where
              appropriate, via email or in-app notification. Continued use
              after changes constitutes acceptance.
            </p>
          </PolicySection>
        </article>
      </main>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
