import React from "react";

const stats = [
  { number: "90%", label: "Average bill reduction for CA homeowners", sup: "up to" },
  { number: "$10k+", label: "Added home resale value with solar", sup: "avg." },
  { number: "30%", label: "Federal tax credit — available through 2032", sup: "ITC" },
  { number: "10yr", label: "Panel performance warranty, guaranteed", sup: "" },
];

const secondaryPoints = [
  { label: "Rate Protection", desc: "Utility rates rise 5%+ yearly. Solar locks in your cost." },
  { label: "Energy Independence", desc: "Battery backup keeps you running during outages." },
  { label: "Go Green", desc: "Offset 3–4 tons of CO₂ per year — like 100 trees." },
  { label: "$0 Down", desc: "Start saving from day one with no upfront costs." },
];

export default function WhySolarSection() {
  return (
    <section className="py-24 bg-[#0b1528] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Editorial header */}
        <div className="mb-16">
          <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">Why Solar</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-tight max-w-xl">
            The smartest investment<br />
            <em className="text-[#d4af37] not-italic">you'll ever make.</em>
          </h2>
        </div>

        {/* Big stat row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {stats.map(({ number, label, sup }) => (
            <div key={number} className="bg-[#0b1528] p-8 group hover:bg-[#0f1a2e] transition-colors">
              {sup && <span className="text-[#d4af37]/60 text-xs font-semibold uppercase tracking-wider block mb-1">{sup}</span>}
              <div className="text-4xl sm:text-5xl font-black text-[#d4af37] mb-3 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>{number}</div>
              <p className="text-white/50 text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Secondary row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryPoints.map(({ label, desc }) => (
            <div key={label} className="border-t border-white/10 pt-5">
              <h3 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}