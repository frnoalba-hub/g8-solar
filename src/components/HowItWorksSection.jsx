import React from "react";
import { ClipboardList, Cpu, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Property Assessment & Energy Analysis",
    desc: "We evaluate your property, energy usage, and roof to design the perfect system.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Custom System Design & Financing Options",
    desc: "Get a tailored solar plan with flexible $0-down financing options that fit your budget.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Professional Installation & Ongoing Support",
    desc: "Our licensed installer partners handle everything. We monitor performance long-term.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Simple. Transparent. Efficient.
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative text-center">
              {/* connector line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#f5c518]/10 border-2 border-[#f5c518] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#f5c518]" />
                </div>
                <div className="text-[#f5c518] font-black text-4xl opacity-20 absolute top-0 left-1/2 -translate-x-1/2 -mt-2 select-none">
                  {step}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}