import React from "react";
import { Home, Building2, BarChart3, Activity, ArrowRight } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Solar", desc: "Turn your roof into an asset and reduce or eliminate your electric bill with a custom-designed system." },
  { icon: Building2, title: "Commercial Solar", desc: "Lower operating costs and take advantage of available tax incentives for your business." },
  { icon: BarChart3, title: "Energy Modeling", desc: "We analyze your usage patterns to maximize ROI and system efficiency before installation." },
  { icon: Activity, title: "Maintenance", desc: "Keep your system performing at peak output year-round with monitoring and panel cleaning." },
];

export default function ServicesSection() {
  const scrollToForm = () => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528]">Our Solar Solutions</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              onClick={scrollToForm}
              className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer p-6"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-[#0b1528] font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="inline-flex items-center gap-1 text-[#d4af37] text-sm font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}