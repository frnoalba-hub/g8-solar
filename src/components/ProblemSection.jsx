import React from "react";

const stats = [
  { value: "$0", label: "Down Financing Options" },
  { value: "30%", label: "Federal ITC Support" },
  { value: "25", label: "Year Equipment Warranties" },
  { value: "CA", label: "Focused Service Area" },
];

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-24 bg-gradient-to-br from-[#0f1a2e] to-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">About G8 Solar</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Built for California Energy Costs
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              G8 Solar helps homeowners and businesses cut utility bills with custom solar and battery systems.
              From system design and permitting to installation and support, we handle the full project so you
              can switch with confidence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#1a2847] rounded-2xl p-5 text-center border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold text-[#d4af37] mb-1">{value}</div>
                  <div className="text-sm text-gray-300 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/72e39f92c_522219909_122097524990956477_4978393624519453083_n.jpg"
                alt="G8 Solar installation team working on a California rooftop"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">
              Real installation work from recent G8 Solar projects in California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
