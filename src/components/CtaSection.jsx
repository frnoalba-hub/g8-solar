import React from "react";
import { Instagram, Facebook, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0b1528] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Take Control?
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Join hundreds of homeowners already saving with G8 Solar. Get your free assessment today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={scrollToForm}
            className="group bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
          >
            Request Free Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:6614386350"
            className="border border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 py-4 rounded-full transition-all"
          >
            Call (661) 438-6350
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
            <Instagram className="w-5 h-5" /> @G8.solar
          </a>
          <a href="https://www.facebook.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
            <Facebook className="w-5 h-5" /> @G8.solar
          </a>
        </div>
      </div>
    </section>
  );
}