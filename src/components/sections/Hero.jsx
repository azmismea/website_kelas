import { classProfile } from "@/lib/data";
import seleniumBackground from "@/app/seleniumbg.png";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="hero-banner-enter relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_22px_58px_rgba(0,0,0,0.42)]">
          <div
            className="hero-banner-bg absolute inset-0"
            style={{ backgroundImage: `url(${seleniumBackground.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-blue/55" />
          <div className="relative h-[270px] sm:h-[330px] md:h-[410px] lg:h-[500px]" />
        </div>

        <h1 className="sr-only">{classProfile.className}</h1>

        <div className="hero-banner-enter hero-banner-enter-delay mx-auto mt-8 max-w-4xl text-center sm:mt-10">
          <p className="text-lg font-black uppercase tracking-[0.24em] text-selenium-blue-light sm:text-2xl">
            {classProfile.majorName}
          </p>

          <p className="mt-1 text-xs font-bold uppercase tracking-[0.34em] text-elegant-silver/70 sm:text-sm">
            {classProfile.generation}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-elegant-silver/78 sm:text-base">
            {classProfile.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
