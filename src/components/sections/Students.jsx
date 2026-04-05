"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AtSign, Search } from "lucide-react";
import { studentsData, classProfile, siteContact } from "@/lib/data";

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const CARD_VARIANT = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export function Students() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return studentsData;
    const q = query.toLowerCase();
    return studentsData.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="students" className="relative py-24 sm:py-32 lg:py-40">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-selenium-blue/[0.14] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-premium-gold/[0.14] rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-premium-gold mb-4">
            Our {classProfile.className} Classmates
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            {classProfile.className} Squad
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-premium-gold to-transparent" />
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 sm:mb-12 max-w-xs sm:max-w-sm mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-elegant-silver/30 pointer-events-none" />
            <input
              type="text"
              placeholder="Find a classmate..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.04] border border-white/[0.08] rounded-full text-white/80 placeholder-white/20 focus:outline-none focus:border-premium-gold/40 focus:bg-white/[0.06] transition-all duration-300"
            />
            <AnimatePresence>
              {query && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-premium-gold/60 font-medium"
                >
                  {filtered.length} found
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((student) => (
              <motion.div
                key={student.id}
                layout
                variants={CARD_VARIANT}
                exit="exit"
                className="group relative rounded-xl overflow-hidden"
              >
                <a
                  href={siteContact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Instagram ${student.name}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100" />

                    <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-white/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <AtSign className="size-3" />
                      Connect IG
                    </div>
                  </div>

                  {/* Name + role — always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
                      {student.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-elegant-silver/50 tracking-widest uppercase mt-0.5">
                      {classProfile.majorName}
                    </p>
                  </div>

                  {/* Gold ring on hover */}
                  <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-1 ring-premium-gold/30 transition-all duration-300 pointer-events-none" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm text-elegant-silver/30 mt-8 tracking-wider"
            >
              No classmates found for &ldquo;{query}&rdquo;
            </motion.p>
          )}
        </AnimatePresence>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] text-elegant-silver/20 tracking-[0.3em] uppercase mt-10"
        >
          {studentsData.length} students · {classProfile.generation}
        </motion.p>
      </div>
    </section>
  );
}
