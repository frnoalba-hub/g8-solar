import React, { useState } from "react";
import { Phone, ArrowDown, CreditCard, Shield, Sun, DollarSign, Battery } from "lucide-react";

const tabs = [
  { icon: DollarSign, label: "30% Tax Credit", content: "The federal Investment Tax Credit (ITC) gives you 30% of your total solar system cost back as a tax credit — thousands of dollars back in your pocket." },
  { icon: CreditCard, label: "$0 Down", content: "Go solar with zero money down. Flexible financing so you start saving from day one with no upfront costs." },
  { icon: Sun, label: "Lower Bills", content: "Most homeowners cut their electric bill by 70–100%. Lock in a predictable low rate and stop overpaying the utility company." },
  { icon: Battery, label: "Battery Backup", content: "Keep the lights on during outages with home battery storage. Store your solar energy and use it when you need it most." },
  { icon: Shield, label: "25-Year Warranty", content: "Our solar panels come with a 25-year performance warranty — 25+ years of reliable, clean energy with peace of mind." },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-12009a308569?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1528]/80 via-[#0b1528]/60 to-[#0b1528]/80" />

      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
          Serving All of California
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 max-w-4xl">
          Stop Renting <span className="text-[#d4af37]">Your Power</span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10">
          Custom solar solutions for California homeowners. Real savings. Zero pressure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button
            onClick={scrollToForm}
            className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30"
          >
            Get Your Free Estimate
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href="tel:6614386350"
            className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-full transition-all"
          >
            <Phone className="w-4 h-4" />
            (661) 438-6350
          </a>
        </div>

        {/* Feature Tabs */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeTab === i
                      ? "bg-[#d4af37] text-[#0b1528] border-[#d4af37]"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-4 min-h-[64px]">
            <p className="text-white/90 text-sm leading-relaxed">{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}