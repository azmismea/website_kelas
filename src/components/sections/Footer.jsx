"use client";

import dynamic from "next/dynamic";
import {
  AtSign,
  Heart,
  MapPin,
} from "lucide-react";
import { classProfile, schoolLocation, siteContact } from "@/lib/data";

const SchoolMap = dynamic(
  () => import("./SchoolMap").then((module) => module.SchoolMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[280px] w-full rounded-2xl border border-[#2b4b72]/50 bg-[#071325]/90" />
    ),
  }
);

export function Footer() {
  return (
    <footer className="relative border-t border-[#28486f]/40 bg-[#020914]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(34,166,242,0.12),transparent_34%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_90%_12%,rgba(248,155,28,0.1),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-black tracking-tight text-white">
            {classProfile.className.toUpperCase()}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-elegant-silver/78">
            Kenangan sederhana, tetap hangat, dan selalu dekat untuk diingat.
          </p>

          <div className="mx-auto mt-6 max-w-[560px]">
            <SchoolMap />
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href={siteContact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 transition-colors hover:border-premium-gold/50 hover:text-premium-gold"
            >
              <AtSign className="size-5" />
            </a>
          </div>

          <p className="mt-5 inline-flex max-w-3xl items-start gap-2 text-sm leading-relaxed text-elegant-silver/72">
            <MapPin className="mt-0.5 size-4 shrink-0 text-premium-gold" />
            {schoolLocation.address}
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-elegant-silver/45">
              &copy; 2026 {classProfile.className.toUpperCase()} - Made with{" "}
              <Heart className="mx-1 inline size-3.5 fill-premium-gold/70 text-premium-gold/70" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
