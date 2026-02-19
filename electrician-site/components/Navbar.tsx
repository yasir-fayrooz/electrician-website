"use client";

import { useState, useEffect } from "react";
import { Zap, Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, PHONE } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop / tablet nav ── */}
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-lg border-b",
          scrolled
            ? "bg-blue-950/90 border-electric/20"
            : "bg-blue-950/70 border-electric/8",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Links — hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-muted text-sm font-medium transition-colors hover:text-electric"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white
                         bg-gradient-to-br from-blue-500 to-blue-600 border border-electric/30
                         transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,207,255,0.25)]"
            >
              <Phone size={14} />
              {PHONE}
            </a>

            {/* Hamburger — mobile only */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay menu ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8
                        bg-blue-950/97 backdrop-blur-xl"
        >
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="font-display text-4xl font-black uppercase tracking-wide text-white
                         transition-colors hover:text-electric"
            >
              {link}
            </a>
          ))}

          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl font-display text-lg font-bold
                       uppercase tracking-wide text-blue-950
                       bg-gradient-to-r from-blue-500 to-electric"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </div>
      )}
    </>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-display text-2xl font-black uppercase tracking-wide text-white">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg
                       bg-gradient-to-br from-blue-500 to-electric animate-pulse-glow"
      >
        <Zap size={18} color="white" fill="white" />
      </span>
      VoltPro
    </span>
  );
}
