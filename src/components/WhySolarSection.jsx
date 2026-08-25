import React from "react";

const stats = [
  { number: "Custom", label: "System design based on your usage and property", sup: "fit" },
  { number: "Current", label: "Utility-rate and incentive review", sup: "2026" },
  { number: "Local", label: "California project coordination", sup: "focus" },
  { number: "25yr", label: "Panel performance warranties may be available; terms vary", sup: "up to" },
];

const secondaryPoints = [
  { label: "Rate Exposure", desc: "Solar can reduce the amount of electricity you purchase from the grid." },
  { label: "Energy Independence", desc: "Battery backup keeps you running during outages." },
  { label: "Go Green", desc: "Generate clean energy at your property and reduce grid dependence." },
  { label: "Flexible Options", desc: "Compare cash and financing paths based on qualified terms." },
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
