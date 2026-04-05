import Image from "next/image";
import { classProfile } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-6 h-72 w-72 rounded-full bg-selenium-blue/14 blur-3xl" />
        <div className="absolute right-0 top-2 h-72 w-72 rounded-full bg-premium-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="hero-reveal relative mx-auto max-w-5xl">
          <Image
            src="/seleniumbg.png"
            alt="Branding Selenium"
            width={1400}
            height={700}
            priority
            className="hero-float h-auto w-full rounded-3xl border border-white/10 bg-black/20 object-cover shadow-[0_22px_60px_rgba(0,0,0,0.38)]"
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
          <h1 className="hero-reveal hero-reveal-delay-1 text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            {classProfile.className}
          </h1>

          <p className="hero-reveal hero-reveal-delay-2 mt-5 text-lg font-bold uppercase tracking-[0.22em] text-selenium-blue-light sm:text-2xl">
            {classProfile.majorName}
          </p>

          <p className="hero-reveal hero-reveal-delay-3 mt-1 text-xs font-bold uppercase tracking-[0.34em] text-elegant-silver/70 sm:text-sm">
            {classProfile.generation}
          </p>

          <p className="hero-reveal hero-reveal-delay-3 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-elegant-silver/84 sm:text-lg">
            {classProfile.tagline}. Halaman resmi siswa untuk berbagi cerita kelas dengan tampilan yang ringan,
            bersih, dan nyaman dilihat.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#students"
              className="rounded-xl bg-premium-gold px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-deep-blue transition hover:bg-premium-gold-light"
            >
              Lihat Siswa
            </a>
            <a
              href="#gallery"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
            >
              Buka Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
