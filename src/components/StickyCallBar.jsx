import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE } from "@/constants/brand";
import { navigateToLeadForm } from "@/utils/navigation";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b1528]/95 backdrop-blur-md border-t border-white/10 py-3 px-4 flex justify-center gap-3 sm:hidden">
      <PhoneLink
        phone={PRIMARY_PHONE}
        placement="sticky_call_bar"
        className="flex items-center gap-2 bg-white text-[#0b1528] font-semibold text-sm px-5 py-3 rounded-full flex-1 justify-center"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </PhoneLink>
      <button
        onClick={() => navigateToLeadForm("sticky_call_bar", "quote")}
        className="flex-1 bg-[#d4af37] text-[#0b1528] font-semibold text-sm px-5 py-3 rounded-full"
      >
        Free Estimate
      </button>
    </div>
  );
}
