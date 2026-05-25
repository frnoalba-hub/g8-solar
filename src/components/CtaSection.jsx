import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CtaSection() {
  const scrollToForm = () => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#0b1528]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1528] via-[#0b1528]/85 to-[#0b1528]/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 sm:py-36">

        {/* Top decorative line + label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">The next step</span>
        </div>

        {/* Editorial headline — extra large, mixed weight */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.95] max-w-4xl">
          Stop renting<br />
          your electricity.<br />
          <em className="text-[#d4af37] not-italic">Start owning it.</em>
        </h2>

        {/* Sub copy */}
        <p className="text-white/50 text-lg sm:text-xl max-w-xl mt-10 leading-relaxed">
          One free assessment. Custom design. $0 down. The savings start the day your system turns on.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-[#d4af37] hover:bg-white text-[#0b1528] font-bold text-base px-8 py-4 rounded-full transition-all"
          >
            Request my free assessment
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="tel:6264049357"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#d4af37] font-medium text-base px-2 py-4 transition-colors"
          >
            <Phone className="w-4 h-4" />
            or call (626) 404-9357
          </a>
        </div>

        {/* Bottom proof strip */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-4 text-sm text-white/40">
          <span><span className="text-white font-semibold">500+</span> California installs</span>
          <span><span className="text-white font-semibold">4.9★</span> customer rating</span>
          <span><span className="text-white font-semibold">$0</span> down financing</span>
          <span><span className="text-white font-semibold">10-year</span> warranty</span>
        </div>
      </div>
    </section>
  );
}