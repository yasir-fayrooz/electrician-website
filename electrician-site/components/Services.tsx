import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Do"
          title={
            <>
              Full-Spectrum
              <br />
              Electrical Services
            </>
          }
          description="Whether it's a single outlet or a full commercial build-out, our
            licensed electricians handle every scope with precision."
        />

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  service: { icon: Icon, title, description, tag },
}: {
  service: Service;
}) {
  return (
    <li
      className="service-card group relative flex flex-col p-8 rounded-2xl overflow-hidden
                   bg-gradient-to-br from-blue-900/80 to-blue-950/80
                   border border-electric/10
                   transition-all duration-300
                   hover:border-electric/30 hover:-translate-y-1
                   hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(0,207,255,0.08)]"
    >
      {/* Optional tag pill */}
      {tag && (
        <span
          className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md text-[10px] font-bold
                         uppercase tracking-widest text-electric
                         bg-electric/10 border border-electric/25"
        >
          {tag}
        </span>
      )}

      {/* Icon */}
      <div
        className="flex h-13 w-13 items-center justify-center rounded-xl mb-5
                      bg-electric/10 border border-electric/20 text-electric
                      transition-all duration-300
                      group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-electric
                      group-hover:border-transparent group-hover:text-white
                      group-hover:shadow-[0_0_20px_rgba(0,207,255,0.4)]"
      >
        <Icon size={22} />
      </div>

      {/* Text */}
      <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-1">{description}</p>

      {/* Link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1 mt-5 text-electric text-sm font-semibold
                   transition-all group-hover:gap-2"
      >
        Learn more <ArrowRight size={14} />
      </a>
    </li>
  );
}
