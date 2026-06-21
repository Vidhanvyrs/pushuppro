export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-6 md:pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:pt-10">
          <span className="text-lg font-normal tracking-tight text-white">
            pushuppro - AI workout
          </span>

          <nav className="flex items-center gap-6 text-sm text-white/60">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="/contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <p className="text-center text-sm text-white/40 md:text-left">
          © {new Date().getFullYear()} neymo tech pvt ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
