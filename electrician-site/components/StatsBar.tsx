import { STATS_BAR } from "@/lib/data";

export function StatsBar() {
  return (
    <div
      className="bg-gradient-to-r from-blue-900 to-blue-800
                    border-y border-electric/10 py-8 px-6"
    >
      <ul className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS_BAR.map(({ value, label }) => (
          <li key={label} className="text-center">
            <p className="font-display text-5xl font-black text-gradient-white leading-none">
              {value}
            </p>
            <p className="text-muted text-sm mt-1.5">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
