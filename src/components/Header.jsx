import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);

  const handleQuoteClick = () => {
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
    <header className="absolute top-0 left-0 w-full h-20 flex justify-between items-center px-4 sm:px-[5%] z-50 bg-gradient-to-b from-[#0b1528]/90 to-transparent">
      <div className="flex items-center">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/29e446680_generated_image.png"
          alt="G8 Solar LLC"
          className="h-12 sm:h-16 w-auto"
        />
      </div>

      <nav className="hidden md:flex gap-8">
        <button onClick={() => document.getElementById("services-section")?.scrollIntoView({behavior: "smooth"})} className="text-white no-underline font-semibold text-base flex items-center min-h-[44px] hover:text-[#d4af37] transition-colors">
          Services
        </button>
        <button onClick={() => document.getElementById("problem-section")?.scrollIntoView({behavior: "smooth"})} className="text-white no-underline font-semibold text-base flex items-center min-h-[44px] hover:text-[#d4af37] transition-colors">
          About
        </button>
      </nav>

      <div>
        <button
          onClick={handleQuoteClick}
          disabled={isLoading}
          className="bg-[#d4af37] hover:bg-[#f5cc50] hover:-translate-y-[2px] text-[#0b1528] border-none px-6 min-h-[44px] text-base font-bold rounded cursor-pointer transition-all flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span>Get a Quote</span>
          )}
        </button>
      </div>
    </header>
  );
}