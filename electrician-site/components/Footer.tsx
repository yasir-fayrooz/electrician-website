import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  PHONE,
  EMAIL,
  ADDRESS,
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  CERTIFICATIONS,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-electric/8 px-6">
      {/* ── Main grid ── */}
      <div
        className="max-w-7xl mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12
                      border-b border-white/[0.06]"
      >
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <FooterLogo />
          <p className="mt-4 text-muted text-sm leading-relaxed">
            Licensed, bonded, and insured electrical contractors serving the
            metro area since 1999. Residential, commercial, and emergency
            services 24/7.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <ContactLine
              icon={Phone}
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              label={PHONE}
            />
            <ContactLine icon={Mail} href={`mailto:${EMAIL}`} label={EMAIL} />
            <ContactLine icon={MapPin} label={ADDRESS} />
          </div>
        </div>

        {/* Services */}
        <FooterLinkColumn heading="Services" links={FOOTER_SERVICES} />

        {/* Company */}
        <FooterLinkColumn heading="Company" links={FOOTER_COMPANY} />

        {/* Certifications */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-blue-200">
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-2 text-muted text-sm"
              >
                <CheckCircle size={13} color="#00cfff" className="shrink-0" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center
                      justify-between gap-4 text-muted text-xs"
      >
        <span>© 2026 VoltPro Electric. All rights reserved.</span>

        <div className="flex gap-3">
          <TrustPill icon={Shield} label="Licensed & Insured" />
          <TrustPill icon={Clock} label="24/7 Service" />
        </div>
      </div>
    </footer>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <span className="flex items-center gap-2.5 font-display text-2xl font-black uppercase tracking-wide text-white">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg
                       bg-gradient-to-br from-blue-500 to-electric animate-pulse-glow"
      >
        <Zap size={16} color="white" fill="white" />
      </span>
      VoltPro Electric
    </span>
  );
}

function ContactLine({
  icon: Icon,
  href,
  label,
}: {
  icon: typeof Phone;
  href?: string;
  label: string;
}) {
  const inner = (
    <span className="flex items-center gap-2 text-muted text-sm hover:text-electric transition-colors">
      <Icon size={13} color="#00cfff" className="shrink-0" />
      {label}
    </span>
  );
  return href ? <a href={href}>{inner}</a> : <span>{inner}</span>;
}

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly string[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-blue-200">
        {heading}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-muted text-sm transition-colors hover:text-electric"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustPill({
  icon: Icon,
  label,
}: {
  icon: typeof Shield;
  label: string;
}) {
  return (
    <span
      className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] text-blue-200
                     bg-electric/8 border border-electric/15"
    >
      <Icon size={11} color="#00cfff" />
      {label}
    </span>
  );
}
