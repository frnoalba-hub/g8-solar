import React from "react";

const partners = [
  { name: "TESLA", subtitle: "Powerwall Options", style: { letterSpacing: "0.25em", fontWeight: 700 } },
  { name: "Enphase", subtitle: "Energy Systems", style: { letterSpacing: "0.02em", fontWeight: 600 } },
  { name: "REC", subtitle: "Solar Panels", style: { letterSpacing: "0.15em", fontWeight: 800 } },
  { name: "Q CELLS", subtitle: "Premium Panels", style: { letterSpacing: "0.12em", fontWeight: 700 } },
];

export default function PartnersStrip() {
  return (
    <section className="bg-white py-20 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">Equipment Options</span>
            <h2 className="text-2xl sm:text-3xl text-[#0b1528] mt-2 max-w-xl leading-tight">
              Built on the industry's<br />
              <em className="text-[#d4af37] not-italic">most trusted hardware.</em>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs sm:text-right">
            Equipment and warranty terms are confirmed in each written proposal.
          </p>
        </div>

        {/* Partner wordmark grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {partners.map(({ name, subtitle, style }) => (
            <div
              key={name}
              className="bg-white px-4 py-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors min-h-[120px]"
            >
              <div
                className="text-[#0b1528] text-lg sm:text-xl uppercase mb-2"
                style={{ fontFamily: 'Inter, sans-serif', ...style }}
              >
                {name}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                {subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
