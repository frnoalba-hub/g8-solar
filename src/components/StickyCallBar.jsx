import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628] border-t border-[#f5c518]/30 shadow-2xl py-3 px-4 flex justify-center gap-3 sm:hidden">
      <a
        href="tel:6614386350"
        className="flex items-center gap-2 bg-white text-[#0a1628] font-bold text-sm px-5 py-3 rounded-lg flex-1 justify-center"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <button
        onClick={scrollToForm}
        className="flex-1 bg-[#f5c518] text-[#0a1628] font-bold text-sm px-5 py-3 rounded-lg"
      >
        Free Estimate
      </button>
    </div>
  );
}