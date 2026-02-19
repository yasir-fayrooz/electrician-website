import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Centre-align everything (default: left) */
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  const align = centered ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${align}`}>
      {/* Eyebrow */}
      <p
        className="flex items-center gap-2 mb-3 text-electric text-xs font-bold uppercase tracking-[0.15em]
                    before:block before:w-6 before:h-0.5 before:bg-electric"
      >
        {eyebrow}
      </p>

      {/* Title */}
      <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[1.05] mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`text-muted text-base leading-relaxed ${centered ? "max-w-xl" : "max-w-lg"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
