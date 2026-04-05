"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { teacherData, classProfile } from "@/lib/data";

export function Teacher() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoX = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const infoX = useTransform(scrollYProgress, [0.1, 0.6], [40, 0]);
  const infoOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="teacher"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background: large "Class of 2026" text marquee */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
        {[classProfile.className, "Wali Kelas", classProfile.generation].map((text, i) => (
          <p
            key={i}
            className="text-[80px] sm:text-[120px] lg:text-[160px] font-black text-white/[0.025] whitespace-nowrap tracking-tight leading-none"
            style={{
              transform: `translateX(${i % 2 === 0 ? "-5%" : "-15%"})`,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-premium-gold/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-premium-gold mb-4">
            Homeroom Teacher
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Pembimbing Kelas {classProfile.className}
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-premium-gold to-transparent" />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo column */}
          <motion.div
            style={{ x: photoX, opacity: photoOpacity }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]"
          >
            {/* Floating card effect */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative"
            >
              {/* Decorative stack cards */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-premium-gold/10 border border-premium-gold/15" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-premium-gold/5 border border-premium-gold/10" />

              {/* Main photo */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-premium-gold/15 group">
                <Image
                  src={teacherData.image}
                  alt={teacherData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 ring-1 ring-white/10">
                    <span className="w-2 h-2 rounded-full bg-premium-gold animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">
                      Wali Kelas
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info column */}
          <motion.div
            style={{ x: infoX, opacity: infoOpacity }}
            className="text-center md:text-left"
          >
            {/* Lead Mentor label */}
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-premium-gold/70 mb-6">
              Lead Mentor Selenium
            </p>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-1 md:-left-6 size-8 sm:size-10 text-premium-gold/15" />
              <blockquote className="relative text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white/85 italic pl-4 md:pl-0">
                &ldquo;{teacherData.quote}&rdquo;
              </blockquote>
            </div>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-premium-gold/40 mb-6 mx-auto md:mx-0" />

            {/* Name & title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {teacherData.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-premium-gold/70 mb-1">
                {teacherData.title}
              </p>
              <p className="text-sm text-elegant-silver/40">
                {teacherData.subject}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
