"use client";

import { useState } from "react";
import { PHONE } from "@/lib/data";

export function CtaBanner() {
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire up to your backend / CRM here
    alert(`We'll call ${phone} back within 15 minutes!`);
    setPhone("");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-6
                 bg-gradient-to-br from-blue-900 to-blue-800
                 border-y border-electric/10"
    >
      {/* Decorative glow blob */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96
                      rounded-full bg-electric/10 blur-3xl"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold
                         uppercase tracking-widest text-electric
                         bg-electric/10 border border-electric/25"
        >
          Free Estimates
        </span>

        <h2 className="font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none mb-4">
          Ready to <span className="text-gradient-electric">Power Up?</span>
        </h2>

        <p className="text-muted text-base mb-8">
          Enter your number and we&apos;ll call you back within 15 minutes.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
            className="flex-1 rounded-xl px-4 py-3.5 text-white text-sm
                       bg-white/6 border border-electric/20 outline-none
                       placeholder:text-muted
                       focus:border-electric transition-colors"
          />
          <button
            type="submit"
            className="shrink-0 px-6 py-3.5 rounded-xl font-display text-base font-bold
                       uppercase tracking-wide text-blue-950
                       bg-gradient-to-r from-blue-500 to-electric
                       shadow-[0_0_30px_rgba(0,207,255,0.3)]
                       transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(0,207,255,0.5)]"
          >
            Call Me Back
          </button>
        </form>

        <p className="mt-4 text-muted text-xs">
          Or call us directly:{" "}
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="text-electric font-semibold hover:underline"
          >
            {PHONE}
          </a>
        </p>
      </div>
    </section>
  );
}
