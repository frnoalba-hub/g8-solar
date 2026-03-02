import React from "react";
import { ClipboardList, Cpu, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Assessment",
    desc: "We evaluate your property, energy usage, and roof to design the perfect system.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Custom Design",
    desc: "Get a tailored solar plan with flexible $0-down financing options that fit your budget.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Installation",
    desc: "Our licensed installer partners handle everything. We monitor performance long-term.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0b1528]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">The Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Three Simple Steps
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center text-[#0b1528] text-xs font-bold">{i + 1}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}