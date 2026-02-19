import {
  Home,
  Building2,
  Zap,
  Lightbulb,
  Shield,
  Wrench,
  Clock,
  Award,
  Users,
  type LucideIcon,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  "Services",
  "About",
  "Projects",
  "Reviews",
  "Contact",
] as const;

export const PHONE = "(555) 240-1890";
export const EMAIL = "hello@voltpro.electric";
export const ADDRESS = "1208 Industrial Blvd, Metro City";

// ── Hero ────────────────────────────────────────────────────────────────────
export const HERO_TRUST_BADGES = [
  { label: "Licensed & Bonded" },
  { label: "4.9 / 5 Rating" },
  { label: "24/7 Emergency" },
] as const;

export const HERO_JOB_STATUSES = [
  { job: "Panel Upgrade — Oak St", status: "Complete", color: "#4ade80" },
  { job: "New EV Charger Install", status: "In Progress", color: "#00cfff" },
  { job: "Safety Inspection — 5th", status: "Scheduled", color: "#f5a623" },
] as const;

export const HERO_STATS = [
  { value: "12", label: "Jobs Today" },
  { value: "4.9", label: "Rating" },
  { value: "25yr", label: "Experience" },
] as const;

// ── Stats bar ───────────────────────────────────────────────────────────────
export const STATS_BAR = [
  { value: "5,000+", label: "Projects Completed" },
  { value: "25", label: "Years in Business" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "24/7", label: "Emergency Service" },
] as const;

// ── Services ────────────────────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Complete home electrical solutions — panel upgrades, wiring, outlets, lighting, and safety inspections.",
    tag: "Most Popular",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "End-to-end commercial electrical systems for offices, retail, and industrial facilities built to code.",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description:
      "24/7 emergency repairs. Power outages, tripped breakers, sparking wires — we respond fast.",
    tag: "24/7",
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    description:
      "Energy-efficient LED retrofits, smart controls, and landscape lighting for modern living.",
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description:
      "Comprehensive electrical safety audits for older homes, new purchases, or peace of mind.",
  },
  {
    icon: Wrench,
    title: "Panel & Upgrades",
    description:
      "100A to 400A service upgrades, EV charger installs, generator hookups, and subpanel additions.",
    tag: "EV Ready",
  },
];

// ── Why Us ──────────────────────────────────────────────────────────────────
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed Master Electricians with $2M liability insurance on every job.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We show up on time, every time — or your first hour is free.",
  },
  {
    icon: Award,
    title: "25-Year Experience",
    description:
      "Over two decades serving the metro area with 5,000+ completed projects.",
  },
  {
    icon: Users,
    title: "Local & Trusted",
    description:
      "Family-owned and operated. We know the neighbourhoods we work in.",
  },
];

export const REVIEW = {
  text: `"VoltPro completely rewired our 1940s home. The team was incredibly professional,
showed up on time every day, and left the place spotless. Our panel upgrade and
whole-house rewire were done in 3 days. Absolute pros."`,
  author: "Michael R.",
  location: "Elmwood Park — Whole House Rewire",
  initials: "MR",
  stats: [
    { label: "Jobs Done", value: "5,000+" },
    { label: "Avg Rating", value: "4.9" },
    { label: "Response", value: "<1hr" },
  ],
} as const;

// ── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER_SERVICES = [
  "Residential",
  "Commercial",
  "Emergency",
  "Smart Lighting",
  "Panel Upgrades",
  "EV Chargers",
] as const;

export const FOOTER_COMPANY = [
  "About Us",
  "Our Team",
  "Projects",
  "Reviews",
  "Careers",
  "Contact",
] as const;

export const CERTIFICATIONS = [
  "Master Electrician License",
  "NECA Member",
  "IBEW Affiliated",
  "BBB Accredited",
  "Energy Star Partner",
] as const;
