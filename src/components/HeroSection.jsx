import React from "react";
import { Phone, ArrowRight, Star } from "lucide-react";

const trustStats = [
  { value: "5,000+", label: "Panels installed" },
  { value: "4.9★", label: "Customer rating" },
  { value: "10yr", label: "Warranty" },
  { value: "$0", label: "Down financing" },
];

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Dramatic cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1528]/95 via-[#0b1528]/55 to-[#0b1528]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1528]/70 via-transparent to-transparent" />

      {/* Main content — left-aligned, editorial */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-white/70 text-xs tracking-[0.2em] uppercase font-semibold mb-8">
              <span className="w-8 h-px bg-[#d4af37]" />
              California's Trusted Solar Installer
            </div>

            {/* Headline */}
            <h1
              className="text-white text-5xl sm:text-7xl lg:text-[110px] leading-[0.95] mb-6 tracking-tight"
              style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontWeight: 400 }}
            >
              Stop renting<br />
              your power.
            </h1>

            {/* Italic accent line */}
            <p
              className="text-[#d4af37] text-xl sm:text-2xl mb-8 italic"
              style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
            >
              Own the sunlight on your roof.
            </p>

            {/* Subhead */}
            <p className="text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              Custom-designed solar systems for California homeowners. Cut your bill up to 90%, lock in your rate for 25+ years, and start with $0 down.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button
                onClick={scrollToForm}
                className="group bg-[#d4af37] hover:bg-white text-[#0b1528] font-bold text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
              >
                Get my free estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:6264049357"
                className="flex items-center justify-center gap-2 text-white font-semibold text-base px-2 py-4 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (626) 404-9357
              </a>
            </div>

            {/* Inline review proof */}
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <span><strong className="text-white">4.9/5</strong> from 500+ California homeowners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip at bottom */}
      <div className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-[#0b1528]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-3">
                <span
                  className="text-2xl sm:text-3xl text-[#d4af37] font-black leading-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {value}
                </span>
                <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}