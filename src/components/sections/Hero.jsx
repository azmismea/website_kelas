import Image from "next/image";
import { classProfile } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-selenium-blue/15 blur-3xl" />
        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-premium-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-premium-gold/35 bg-premium-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-premium-gold">
            Official Class Website
          </p>

          <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {classProfile.className}
          </h1>

          <p className="mt-5 text-xl font-semibold uppercase tracking-[0.2em] text-selenium-blue-light sm:text-2xl">
            {classProfile.majorName}
          </p>

          <p className="mt-1 text-sm font-bold uppercase tracking-[0.35em] text-elegant-silver/70 sm:text-base">
            {classProfile.generation}
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-elegant-silver/85 sm:text-lg">
            {classProfile.tagline}. Halaman resmi siswa untuk berbagi cerita, momen kelas, dan semangat
            belajar bersama.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
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

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-tr from-premium-gold/20 via-transparent to-selenium-blue/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/50 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/hero.jpeg"
                alt={`Siswa kelas ${classProfile.className}`}
                fill
                priority
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
            </div>

            <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-sm sm:left-5 sm:right-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-premium-gold/90">
                Class Identity
              </p>
              <p className="mt-1 text-base font-extrabold text-white sm:text-lg">{classProfile.className}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
