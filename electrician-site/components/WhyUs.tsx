import { Star } from "lucide-react";
import { FEATURES, REVIEW, type Feature } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function WhyUs() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[linear-gradient(180deg,transparent,rgba(10,37,64,0.4),transparent)]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ── Left: copy + features ── */}
        <div>
          <SectionHeader
            eyebrow="Why VoltPro"
            title={
              <>
                Experience
                <br />
                You Can Trust
              </>
            }
            description="For 25 years, homeowners and businesses in the metro have relied
              on VoltPro for safe, code-compliant, and beautifully executed
              electrical work."
          />

          <ul className="mt-8 flex flex-col gap-4">
            {FEATURES.map((feature) => (
              <FeatureRow key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>

        {/* ── Right: stacked review card ── */}
        <div className="hidden md:flex justify-center">
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function FeatureRow({
  feature: { icon: Icon, title, description },
}: {
  feature: Feature;
}) {
  return (
    <li
      className="group flex gap-4 p-4 rounded-xl border border-transparent
                   transition-all hover:bg-electric/[0.04] hover:border-electric/10"
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                      bg-electric/10 border border-electric/20 text-electric"
      >
        <Icon size={18} />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-0.5">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

function ReviewCard() {
  return (
    <div className="relative w-[340px]">
      {/* Shadow card behind */}
      <div
        className="absolute inset-3 -right-3 -bottom-3 rounded-2xl bg-blue-800
                      border border-electric/8 opacity-50"
      />

      {/* Main card */}
      <div
        className="relative z-10 rounded-2xl p-8
                      bg-gradient-to-br from-blue-800 to-blue-900
                      border border-electric/15
                      shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
      >
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="#f5a623" color="#f5a623" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-blue-100 text-sm leading-relaxed italic mb-5">
          {REVIEW.text}
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full shrink-0
                          bg-gradient-to-br from-blue-600 to-electric
                          font-display font-black text-lg"
          >
            {REVIEW.initials}
          </div>
          <div>
            <p className="font-semibold text-sm">{REVIEW.author}</p>
            <p className="text-muted text-xs">{REVIEW.location}</p>
          </div>
        </div>

        {/* Mini stat row */}
        <div className="mt-6 pt-6 border-t border-white/[0.07] flex justify-between">
          {REVIEW.stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl font-black text-electric leading-none">
                {value}
              </p>
              <p className="text-muted text-[11px] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
