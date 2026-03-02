import React from "react";
import { Shield, Zap, CreditCard } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Solar panels on home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/78" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/242b28e93_generated_image.png"
            alt="G8 Solar LLC"
            className="h-20 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Renting Your Power.<br />
          <span className="text-[#f5c518]">Lock in Lower Rates</span> with Smart Solar.
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Professional installations, custom designs, and immediate savings for homes and businesses.
          Schedule a no-pressure assessment and get your free savings estimate.
        </p>

        {/* Trust bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
          {[
            { icon: Zap, text: "Custom Energy Modeling" },
            { icon: CreditCard, text: "Flexible Financing Options" },
            { icon: Shield, text: "Licensed & Insured Install Partners" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <Icon className="w-4 h-4 text-[#f5c518]" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Your Free Savings Estimate
          </button>
          <a
            href="tel:6614386350"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg transition-all"
          >
            Call 661-438-6350
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}