import React from "react";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#060e1c] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/29e446680_generated_image.png"
              alt="G8 Solar LLC"
              className="h-16 md:h-20 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm max-w-xs">
              Smart solar solutions for homes and businesses. Proudly serving Southern California.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Contact Us</h4>
            <a href="tel:6614386350" className="flex items-center gap-2 text-gray-300 hover:text-[#f5c518] transition-colors text-sm">
              <Phone className="w-4 h-4" />
              661-438-6350
            </a>
            <a href="tel:6264049357" className="flex items-center gap-2 text-gray-300 hover:text-[#f5c518] transition-colors text-sm">
              <Phone className="w-4 h-4" />
              626-404-9357
            </a>
            <a href="mailto:info@g8solar.com" className="flex items-center gap-2 text-gray-300 hover:text-[#f5c518] transition-colors text-sm">
              <Mail className="w-4 h-4" />
              info@g8solar.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Follow Us</h4>
            <a href="https://www.instagram.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#f5c518] transition-colors text-sm">
              <Instagram className="w-4 h-4" />
              @G8.solar
            </a>
            <a href="https://www.facebook.com/G8.solar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#f5c518] transition-colors text-sm">
              <Facebook className="w-4 h-4" />
              @G8.solar
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} G8 Solar LLC. We partner with fully licensed, bonded, and insured local installers. Financing and savings estimates vary by property.
          </p>
        </div>
      </div>
    </footer>
  );
}