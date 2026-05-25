import React from "react";

const steps = [
  {
    num: "1",
    title: "Free Assessment",
    desc: "We evaluate your property, energy usage, and roof. No pressure, no commitment — just clarity on what's possible.",
    detail: "~30 min call or site visit",
  },
  {
    num: "2",
    title: "Custom Design & Financing",
    desc: "Get a tailored system design with a full financial breakdown. $0 down options so your savings start immediately.",
    detail: "Approval in 24–48 hrs",
  },
  {
    num: "3",
    title: "Installation & Monitoring",
    desc: "Our licensed installers handle permits, installation, and utility interconnection. We then monitor your system long-term.",
    detail: "Live in 4–8 weeks",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f4f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">The Process</span>
          <h2 className="text-4xl sm:text-5xl text-[#0b1528] mt-2">
            From first call<br />to full savings.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-[#0b1528]/10" />

          {steps.map(({ num, title, desc, detail }, i) => (
            <div key={num} className="relative flex flex-col md:items-start pl-0 md:pl-0 mb-12 md:mb-0 md:pr-10">
              {/* number circle */}
              <div className="w-20 h-20 rounded-full bg-[#0b1528] flex items-center justify-center mb-6 relative z-10">
                <span className="text-[#d4af37] font-black text-3xl leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>{num}</span>
              </div>
              <div className="inline-block bg-[#0b1528]/5 text-[#0b1528]/50 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">{detail}</div>
              <h3 className="text-[#0b1528] text-xl mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-10 border-t border-[#0b1528]/10">
          <p className="text-gray-400 text-sm">Ready to see your numbers?</p>
          <button
            onClick={() => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#0b1528] hover:bg-[#d4af37] text-white hover:text-[#0b1528] font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
          >
            Get a Free Estimate →
          </button>
        </div>
      </div>
    </section>
  );
}