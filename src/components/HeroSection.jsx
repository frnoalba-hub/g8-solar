import React, { useState } from "react";
import { Phone, ArrowDown, CreditCard, Shield, Sun, DollarSign, Battery } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { navigateToLeadForm } from "@/utils/navigation";

const tabs = [
  { icon: DollarSign, label: "Incentive Review", content: "California and utility programs change over time. We review current programs and your eligibility before including an incentive in an estimate." },
  { icon: CreditCard, label: "Financing Options", content: "Flexible financing options may be available, including qualified zero-down offers. Approval, pricing, and terms vary by applicant and provider." },
  { icon: Sun, label: "Lower Bills", content: "A system designed around your usage, roof, utility, and rate plan can reduce grid purchases. Actual savings vary by property and energy habits." },
  { icon: Battery, label: "Battery Backup", content: "Keep the lights on during outages with home battery storage. Store your solar energy and use it when you need it most." },
  { icon: Shield, label: "25-Year Warranty", content: "Our solar panels come with a 25-year performance warranty — 25+ years of reliable, clean energy with peace of mind." },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1528]/85 via-[#0b1528]/65 to-[#0b1528]/85" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 pb-16 lg:pt-24">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/c1a382000_Gemini_Generated_Image_5eixi75eixi75eix4.png"
          alt="G8 Solar LLC"
          fetchPriority="high"
          decoding="async"
          className="hidden lg:block w-[90vw] max-w-[52.5rem] -mb-60"
        />

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
          <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
          Serving California
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-3 max-w-4xl px-2">
          Stop Renting <span className="text-[#d4af37]">Your Power</span>
        </h1>
        <p className="text-white/70 text-base sm:text-xl max-w-xl mb-8 px-2">
          Custom solar solutions for California homeowners. Real savings. Zero pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full max-w-sm sm:max-w-none sm:w-auto">
          <button
            onClick={() => navigateToLeadForm("hero_primary", "quote")}
            className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30"
          >
            Get Your Free Estimate
            <ArrowDown className="w-4 h-4" />
          </button>
          <PhoneLink
            phone={PRIMARY_PHONE}
            display={PRIMARY_PHONE_DISPLAY}
            placement="hero_secondary"
            className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-full transition-all"
          >
            <Phone className="w-4 h-4" />
            {PRIMARY_PHONE_DISPLAY}
          </PhoneLink>
        </div>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
