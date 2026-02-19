import {
  Zap,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  ChevronDown,
} from "lucide-react";
import {
  HERO_TRUST_BADGES,
  HERO_JOB_STATUSES,
  HERO_STATS,
  PHONE,
} from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16">
      {/* ── Backgrounds ── */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* ── Left: copy ── */}
        <div>
          <EyebrowBadge />

          <h1
            className="font-display text-[clamp(3.5rem,7vw,6.5rem)] font-black leading-[0.95] uppercase
                         tracking-tight mb-6 animate-slide-up-2"
          >
            Power
            <span className="block text-gradient-electric animate-bolt-flicker">
              {" "}
              Your
            </span>
            World.
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-md mb-8 animate-slide-up-3">
            VoltPro delivers expert residential and commercial electrical
            services across the metro area. From panel upgrades to full rewires
            — done right, on time, every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-display text-base font-bold
                         uppercase tracking-wide text-blue-950
                         bg-gradient-to-r from-blue-500 to-electric
                         shadow-[0_0_30px_rgba(0,207,255,0.3)]
                         transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(0,207,255,0.5)]"
            >
              Get Free Estimate
              <ArrowRight size={16} />
            </a>

            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-display text-base font-bold
                         uppercase tracking-wide text-white
                         border border-white/15
                         transition-all hover:border-electric hover:text-electric hover:bg-electric/5"
            >
              <Phone size={16} />
              Emergency Line
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 animate-slide-up-5">
            <TrustBadge icon={CheckCircle} label="Licensed & Bonded" />
            <TrustBadge icon={Star} label="4.9 / 5 Rating" />
            <TrustBadge icon={Clock} label="24/7 Emergency" />
          </div>
        </div>

        {/* ── Right: dashboard card ── */}
        <div className="hidden md:flex justify-center animate-slide-up-5">
          <DashboardCard />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                      text-muted text-xs animate-float"
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <>
      {/* Radial colour blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(20,85,160,0.25)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(0,207,255,0.08)_0%,transparent_60%)]" />
      {/* Dot grid with mask */}
      <div className="hero-grid" />
    </>
  );
}

function EyebrowBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                    bg-electric/10 border border-electric/25
                    text-electric text-xs font-bold uppercase tracking-widest
                    animate-slide-up-1"
    >
      <Zap size={12} />
      Licensed Master Electricians
    </div>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: typeof CheckCircle;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-muted text-xs">
      <Icon size={13} color="#00cfff" />
      {label}
    </span>
  );
}

function DashboardCard() {
  return (
    <div className="relative">
      {/* Main card */}
      <div
        className="relative z-10 w-80 rounded-2xl p-8
                      bg-gradient-to-br from-blue-900 to-blue-800
                      border border-electric/15
                      shadow-[0_40px_80px_rgba(0,0,0,0.4),0_0_40px_rgba(0,207,255,0.1)]
                      hero-card-shine animate-float"
      >
        {/* Icon */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl mb-4
                        bg-gradient-to-br from-blue-600 to-electric
                        shadow-[0_0_20px_rgba(0,207,255,0.4)]"
        >
          <Zap size={28} color="white" fill="white" />
        </div>

        <p className="font-display text-xl font-black uppercase mb-1">
          Today&apos;s Jobs
        </p>
        <p className="text-muted text-sm mb-4">Feb 17, 2026 — Metro Area</p>

        {/* Job list */}
        <ul className="divide-y divide-white/[0.06]">
          {HERO_JOB_STATUSES.map(({ job, status, color }) => (
            <li
              key={job}
              className="flex items-center justify-between py-2.5 text-xs"
            >
              <span className="text-blue-100">{job}</span>
              <span style={{ color }} className="font-semibold">
                ● {status}
              </span>
            </li>
          ))}
        </ul>

        {/* Mini stats */}
        <div className="flex gap-4 mt-5 pt-4 border-t border-white/[0.06]">
          {HERO_STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-black text-electric leading-none">
                {value}
              </p>
              <p className="text-muted text-[10px] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating availability badge */}
      <FloatingBadge
        className="absolute -top-4 -right-10"
        dotColor="#00cfff"
        label="Available Now"
      />

      {/* Floating review badge */}
      <FloatingBadge
        className="absolute bottom-2 -left-12"
        dotColor="#4ade80"
        label="Job Complete — 4.9★"
      />
    </div>
  );
}

function FloatingBadge({
  className,
  dotColor,
  label,
}: {
  className?: string;
  dotColor: string;
  label: string;
}) {
  return (
    <div
      className={[
        "flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold",
        "bg-blue-950/95 border border-electric/20 shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
        className,
      ].join(" ")}
      style={{ color: dotColor }}
    >
      <span
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ background: dotColor, boxShadow: `0 0 8px ${dotColor}` }}
      />
      {label}
    </div>
  );
}
