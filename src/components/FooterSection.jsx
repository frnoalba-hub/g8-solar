import React from "react";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function FooterSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#060e1c] pt-16 pb-8">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mb-16" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-12">
          {/* Brand */}
          <div className="flex-1">
            <img
             src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/c1a382000_Gemini_Generated_Image_5eixi75eixi75eix4.png"
             alt="G8 Solar LLC"
             className="h-32 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Smart solar solutions for homes and businesses across California.
              Powered by G8 Solar LLC.
            </p>
          </div>

          {/* Contact, Follow & Links */}
          <div className="grid grid-cols-3 gap-12 flex-1">
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:6614386350" className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Phone className="w-4 h-4" /> (661) 438-6350
              </a>
              <a href="tel:6264049357" className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Phone className="w-4 h-4" /> (626) 404-9357
              </a>
              <a href="mailto:info@g8solar.com" className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Mail className="w-4 h-4" /> info@g8solar.com
              </a>
            </div>
          </div>

          {/* Social & Quick Nav */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Follow Us</h4>
            <div className="space-y-3">
              <a href="https://www.instagram.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Instagram className="w-4 h-4" /> @G8.solar
              </a>
              <a href="https://www.facebook.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Facebook className="w-4 h-4" /> @G8.solar
              </a>
            </div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mt-6 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[["About", "problem-section"], ["Services", "services-section"], ["FAQ", "faq-section"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block text-white/40 hover:text-[#d4af37] text-sm transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>
          </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/25 text-xs leading-relaxed max-w-3xl mx-auto">
            © {new Date().getFullYear()} G8 Solar LLC. We partner with licensed, bonded, and insured local installers. Savings estimates vary by property. Actual results depend on usage, roof conditions, utility rates, and available incentives.
          </p>
        </div>
      </div>
    </footer>
  );
}