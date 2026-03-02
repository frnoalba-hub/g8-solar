import React, { useState } from "react";
import { Shield, Zap, CreditCard, Loader2 } from "lucide-react";
import Header from "./Header";
import { toast } from "sonner";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleEstimateClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Redirecting to secure quote form...", {
        style: {
          borderLeft: '6px solid #d4af37',
          padding: '16px 24px',
        }
      });
      document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  };

  return (
    <section className="relative min-h-[600px] h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <Header />
      
      {/* Static background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          alt="Solar panels on home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1528]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-10 md:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.1] mb-6">
          Stop Renting Your Power.<br />
          <span className="text-[#d4af37]">Lock in Lower Rates</span><br className="hidden sm:block" /> with Smart Solar.
        </h1>

        <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional installations, custom designs, and immediate savings for homes and businesses.
          Schedule a no-pressure assessment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
          <button
            onClick={handleEstimateClick}
            disabled={isLoading}
            className="bg-[#d4af37] hover:bg-[#f5cc50] text-[#0b1528] font-bold text-base md:text-lg px-6 md:px-8 min-h-[44px] py-3 rounded transition-all hover:-translate-y-[2px] flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span>Get Your Free Savings Estimate</span>
            )}
          </button>
          <a
            href="tel:6614386350"
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0b1528] font-bold text-base md:text-lg px-6 md:px-8 min-h-[44px] py-3 rounded transition-all flex items-center justify-center w-full sm:w-auto"
          >
            Call 661-438-6350
          </a>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 border-t border-white/20 pt-5">
          {[
            { icon: Zap, text: "Custom Energy Modeling" },
            { icon: CreditCard, text: "Flexible Financing Options" },
            { icon: Shield, text: "Licensed Install Partners" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm font-semibold">
              <Icon className="w-4 h-4 text-[#d4af37]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}