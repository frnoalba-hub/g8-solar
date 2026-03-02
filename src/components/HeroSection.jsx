import React, { useState } from "react";
import { Phone, ArrowDown, CreditCard, Shield, Sun, DollarSign, Home, Battery } from "lucide-react";

const tabs = [
  {
    icon: DollarSign,
    label: "30% Tax Credit",
    content: "The federal Investment Tax Credit (ITC) gives you 30% of your total solar system cost back as a tax credit — that's thousands of dollars back in your pocket.",
  },
  {
    icon: CreditCard,
    label: "$0 Down Financing",
    content: "Go solar with zero money down. We offer flexible financing options so you can start saving from day one with no upfront costs.",
  },
  {
    icon: Sun,
    label: "Lower Bills",
    content: "Most homeowners cut their electric bill by 70–100%. Lock in a predictable low rate and stop overpaying the utility company every month.",
  },
  {
    icon: Battery,
    label: "Battery Backup",
    content: "Keep the lights on during outages with home battery storage. Store your solar energy and use it when you need it most.",
  },
  {
    icon: Shield,
    label: "25-Year Warranty",
    content: "Our solar panels come with a 25-year performance warranty. That means 25+ years of reliable, clean energy with peace of mind.",
  },
  {
    icon: Home,
    label: "Increase Home Value",
    content: "Homes with solar sell for an average of 4% more. Solar is one of the few home improvements that pays you back immediately and at resale.",
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-blue-50" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-12009a308569?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')", backgroundSize: "cover", backgroundPosition: "center"}}>
      {/* Nav */}
      <header className="relative z-20 flex justify-between items-center px-5 sm:px-8 lg:px-12 py-5">
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:text-[#d4af37] text-sm font-bold transition-colors drop-shadow-md">Services</button>
          <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:text-[#d4af37] text-sm font-bold transition-colors drop-shadow-md">How It Works</button>
          <button onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:text-[#d4af37] text-sm font-bold transition-colors drop-shadow-md">Calculator</button>
          <button onClick={() => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:text-[#d4af37] text-sm font-bold transition-colors drop-shadow-md">FAQ</button>
        </nav>
        <div className="md:hidden" />
        <button
          onClick={scrollToForm}
          className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
        >
          Get a Quote
        </button>
      </header>

      {/* Logo centered */}
      <div className="relative z-10 flex flex-col items-center pt-6 pb-2 px-5">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/b0baebb9c_Untitleddesign-Picsart-BackgroundRemover.png"
          alt="G8 Solar LLC"
          className="w-56 sm:w-72 md:w-80 h-auto"
        />

        {/* Serving badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mt-2 mb-6">
          <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
          Serving all of California
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-2 drop-shadow-md">
          Stop Renting Your Power
        </h1>
        <p className="text-white/90 text-base sm:text-lg text-center mb-8 max-w-xl drop-shadow-md font-medium">
          Custom solar solutions. Real savings. Zero pressure.
        </p>

        {/* Info Tabs */}
        <div className="w-full max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border backdrop-blur-sm ${
                    activeTab === i
                      ? "bg-[#d4af37] text-[#0b1528] border-[#d4af37] shadow-lg"
                      : "bg-white/20 text-white border-white/30 hover:bg-white/30 drop-shadow-md"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-5 text-center min-h-[80px] shadow-lg">
            <p className="text-white text-sm sm:text-base leading-relaxed drop-shadow-md font-medium">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-10">
          <button
            onClick={scrollToForm}
            className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
          >
            Get Your Free Estimate
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href="tel:6614386350"
            className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-4 rounded-full transition-all"
          >
            <Phone className="w-4 h-4" />
            (661) 438-6350
          </a>
        </div>
      </div>


    </section>
  );
}