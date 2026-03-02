import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function CtaSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0a1628]/85" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Take Control of Your Energy Costs?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Follow our latest projects and customer results on Instagram and Facebook:{" "}
          <span className="text-[#f5c518] font-semibold">@G8.solar</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={scrollToForm}
            className="bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg transition-all shadow-lg hover:scale-105"
          >
            Request My Free Property Assessment
          </button>
          <a
            href="tel:6614386350"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg transition-all"
          >
            Call 661-438-6350
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/G8.solar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-[#f5c518] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">@G8.solar</span>
          </a>
          <a
            href="https://www.facebook.com/G8.solar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-[#f5c518] transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span className="text-sm font-medium">@G8.solar</span>
          </a>
        </div>
      </div>
    </section>
  );
}