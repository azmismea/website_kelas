import { classProfile } from "@/lib/data";
import seleniumBackground from "@/app/seleniumbg.png";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="hero-banner-enter relative mx-auto overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/80 shadow-[0_22px_58px_rgba(0,0,0,0.42)] sm:rounded-[2rem]">
          <div
            className="hero-banner-bg absolute inset-0"
            style={{ backgroundImage: `url(${seleniumBackground.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-blue/55" />
          <div className="relative aspect-[16/11] min-h-[190px] w-full sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7]" />
        </div>

        <h1 className="sr-only">{classProfile.className}</h1>

        <div className="hero-banner-enter hero-banner-enter-delay mx-auto mt-7 max-w-4xl text-center sm:mt-10">
          <p className="text-base font-black uppercase tracking-[0.2em] text-selenium-blue-light sm:text-2xl sm:tracking-[0.24em]">
            {classProfile.majorName}
          </p>

          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-elegant-silver/70 sm:text-sm sm:tracking-[0.34em]">
            {classProfile.generation}
          </p>

          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-elegant-silver/78 sm:mt-6 sm:max-w-2xl sm:px-0 sm:text-base">
            {classProfile.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
