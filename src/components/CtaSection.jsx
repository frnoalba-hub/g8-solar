import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { navigateToLeadForm } from "@/utils/navigation";

export default function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0b1528]">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-4 block">
          Take Action
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Take Control of
          <br className="hidden sm:block" /> Your Energy Costs?
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Join homeowners across California already saving with G8 Solar. Get your free assessment
          today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigateToLeadForm("cta_section", "quote")}
            className="group bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
          >
            Request Free Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <PhoneLink
            phone={PRIMARY_PHONE}
            display={PRIMARY_PHONE_DISPLAY}
            placement="cta_section"
            className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-base px-8 py-4 rounded-full transition-all"
          >
            <Phone className="w-4 h-4" />
            {PRIMARY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
