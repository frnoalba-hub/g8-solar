import React from "react";
import { Shield, Zap, CreditCard, ArrowDown, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          alt="Solar panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1528]/80 via-[#0b1528]/70 to-[#0b1528]/90" />
      </div>

      {/* Top bar */}
      <header className="relative z-20 flex justify-between items-center px-5 sm:px-8 lg:px-12 py-5">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/29e446680_generated_image.png"
          alt="G8 Solar LLC"
          className="h-12 sm:h-14 w-auto"
        />
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById("services-section")?.scrollIntoView({behavior:"smooth"})} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</button>
          <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({behavior:"smooth"})} className="text-white/80 hover:text-white text-sm font-medium transition-colors">How It Works</button>
          <button onClick={() => document.getElementById("calculator")?.scrollIntoView({behavior:"smooth"})} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Calculator</button>
          <button onClick={() => document.getElementById("faq-section")?.scrollIntoView({behavior:"smooth"})} className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQ</button>
        </nav>
        <button
          onClick={scrollToForm}
          className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#d4af37]/20"
        >
          Get a Quote
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            Serving Southern California
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Stop Renting <br className="hidden sm:block" />
            Your Power
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Professional installations, custom designs, and immediate savings.
            <br className="hidden sm:block" />
            Get your free no-obligation assessment today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              onClick={scrollToForm}
              className="group bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-base px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-[#d4af37]/25 flex items-center justify-center gap-2"
            >
              Get Your Free Estimate
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="tel:6614386350"
              className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-4 rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              (661) 438-6350
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: Zap, text: "Custom Energy Modeling" },
              { icon: CreditCard, text: "Flexible Financing" },
              { icon: Shield, text: "Licensed Partners" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                <Icon className="w-4 h-4 text-[#d4af37]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}