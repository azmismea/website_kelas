"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Teacher", href: "#teacher" },
  { label: "Students", href: "#students" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    // Determine active section
    const sections = ["hero", "teacher", "students", "gallery"];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled
          ? "bg-slate-950/72 backdrop-blur-md py-3"
          : "bg-gradient-to-b from-slate-900/55 to-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-2xl px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300",
                    isActive
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-2xl border border-white/15 bg-white/8"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute right-0 z-[120] rounded-2xl p-3 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="fixed inset-0 z-[105] h-screen w-full bg-white md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-7 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-black uppercase tracking-tight text-slate-900 transition-colors hover:text-blue-600 sm:text-4xl"
                >
                  {link.label}
                </motion.a>
              ))}

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                Class of 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
