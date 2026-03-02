import React from "react";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#060e1c] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/29e446680_generated_image.png"
              alt="G8 Solar LLC"
              className="h-14 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Smart solar solutions for homes and businesses. Proudly serving all of California.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:6614386350" className="flex items-center gap-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                <Phone className="w-4 h-4" /> (661) 438-6350
              </a>
              <a href="tel:6264049357" className="flex items-center gap-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                <Phone className="w-4 h-4" /> (626) 404-9357
              </a>
              <a href="mailto:info@g8solar.com" className="flex items-center gap-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                <Mail className="w-4 h-4" /> info@g8solar.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Follow Us</h4>
            <div className="space-y-3">
              <a href="https://www.instagram.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                <Instagram className="w-4 h-4" /> @G8.solar
              </a>
              <a href="https://www.facebook.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                <Facebook className="w-4 h-4" /> @G8.solar
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} G8 Solar LLC. We partner with licensed, bonded, and insured local installers. Savings estimates vary by property and actual results depend on usage, roof conditions, utility rates, and incentives.
          </p>
        </div>
      </div>
    </footer>
  );
}