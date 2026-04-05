"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { galleryMoments } from "@/lib/data";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const galleryPhotos = useMemo(
    () =>
      galleryMoments
        .flatMap((moment) =>
          moment.photos.map((photo, index) => ({
            id: `${moment.id}-${index + 1}`,
            src: photo.src,
            alt: photo.alt,
            location: moment.location,
          }))
        )
        .slice(0, 12),
    []
  );

  const activePhoto =
    activeIndex === null ? null : (galleryPhotos[activeIndex] ?? null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? galleryPhotos.length - 1 : prev - 1;
    });
  }, [galleryPhotos.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === galleryPhotos.length - 1 ? 0 : prev + 1;
    });
  }, [galleryPhotos.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const onEscape = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeIndex, closeModal, goNext, goPrev]);

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[#020711]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_20%,rgba(34,166,242,0.14),transparent_38%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_82%_10%,rgba(248,155,28,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-selenium-blue-light">
            Our Memories
          </p>
          <h2 className="text-3xl font-black italic text-white sm:text-4xl md:text-5xl">
            GALERI SELENIUM
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-elegant-silver/70">
            Tampilan galeri dibuat simpel dan ringan agar foto terlihat rapi di semua ukuran layar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 24vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white/90">
                  <MapPin className="size-3" />
                  {photo.location}
                </div>
              </div>

              <p className="line-clamp-2 px-3 py-2 text-xs text-white/85">{photo.alt}</p>
            </button>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-elegant-silver/45">
          {galleryPhotos.length} photos
        </p>
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/82 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#081223]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <p className="line-clamp-1 text-sm font-semibold text-white">{activePhoto.alt}</p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-premium-gold/60 hover:text-premium-gold"
                  aria-label="Tutup galeri"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="relative h-[50vh] sm:h-[62vh]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="(max-width: 640px) 95vw, (max-width: 1280px) 85vw, 1100px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-selenium-blue/15 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-selenium-blue-light ring-1 ring-selenium-blue/35">
                  <MapPin className="size-3.5" />
                  {activePhoto.location}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-premium-gold/60 hover:text-premium-gold"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 ring-1 ring-white/20">
                    {(activeIndex ?? 0) + 1} / {galleryPhotos.length}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-premium-gold/60 hover:text-premium-gold"
                    aria-label="Foto selanjutnya"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
