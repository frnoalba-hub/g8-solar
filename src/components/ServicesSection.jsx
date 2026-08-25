import React from "react";
import { ArrowUpRight } from "lucide-react";
import { navigateToLeadForm } from "@/utils/navigation";

const services = [
  {
    num: "01",
    title: "Residential Solar",
    desc: "Turn your roof into an asset. We design custom systems sized for your exact usage — so you stop overpaying the utility company.",
    tag: "Most Popular",
  },
  {
    num: "02",
    title: "Commercial Solar",
    desc: "Lower operating costs and maximize tax incentives — ITC, MACRS depreciation, and more — for your business or property.",
    tag: null,
  },
  {
    num: "03",
    title: "Battery Storage",
    desc: "Keep the lights on during outages. Pair solar with Tesla Powerwall or Enphase IQ Battery and qualify for SGIP rebates.",
    tag: null,
  },
  {
    num: "04",
    title: "Maintenance & Cleaning",
    desc: "Dirty panels lose 15–25% efficiency. Our cleaning and monitoring service keeps your system producing at peak output year-round.",
    tag: null,
  },
];

export default function ServicesSection() {
  const scrollToForm = () => navigateToLeadForm("services_section", "quote");

  return (
    <section id="services-section" className="py-24 bg-[#0f1a2e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">What We Do</span>
            <h2 className="text-4xl sm:text-5xl text-white mt-2">Our Solar Solutions</h2>
          </div>
          <button
            onClick={scrollToForm}
            className="self-start lg:self-auto inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold px-6 py-3 rounded-full transition-all text-sm"
          >
            Get a Free Estimate <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="divide-y divide-white/10">
          {services.map(({ num, title, desc, tag }, i) => (
            <div
              key={num}
              onClick={scrollToForm}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 py-8 cursor-pointer hover:pl-3 transition-all duration-300"
            >
              <span className="text-white/20 font-black text-4xl w-16 flex-shrink-0 group-hover:text-[#d4af37]/40 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{num}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white text-xl group-hover:text-[#d4af37] transition-colors">{title}</h3>
                  {tag && <span className="text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/15 text-[#d4af37] px-2 py-0.5 rounded-full">{tag}</span>}
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">{desc}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#d4af37] transition-colors flex-shrink-0 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}