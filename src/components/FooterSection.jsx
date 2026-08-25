import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import {
  G8_LOGO_URL,
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE,
  SECONDARY_PHONE_DISPLAY,
} from "@/constants/brand";
import { trackCtaClick } from "@/utils/analytics";

export default function FooterSection() {
  const scrollTo = (id, label) => {
    trackCtaClick({ ctaType: "nav", placement: `footer_${label.toLowerCase()}` });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060e1c] pt-16 pb-8">
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mb-16" />

      <div className="max-w-full mx-auto px-5 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-20">
          <div className="flex-1 md:max-w-xs">
            <img
              src={G8_LOGO_URL}
              alt="G8 Solar LLC"
              loading="lazy"
              decoding="async"
              className="h-32 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Smart solar solutions for homes and businesses across California. Powered by G8 Solar
              LLC.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12 flex-1">
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
                Contact
              </h4>
              <div className="space-y-3">
                <PhoneLink
                  phone={SECONDARY_PHONE}
                  display={SECONDARY_PHONE_DISPLAY}
                  placement="footer_secondary"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" /> {SECONDARY_PHONE_DISPLAY}
                </PhoneLink>
                <PhoneLink
                  phone={PRIMARY_PHONE}
                  display={PRIMARY_PHONE_DISPLAY}
                  placement="footer_primary"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" /> {PRIMARY_PHONE_DISPLAY}
                </PhoneLink>
                <a
                  href="mailto:info@g8solar.com"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" /> info@g8solar.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
                Follow Us
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/G8.solar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" /> @G8.solar
                </a>
                <a
                  href="https://www.facebook.com/G8SolarEnergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Facebook className="w-4 h-4" /> G8 Solar Energy
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {[
                  ["About", "problem-section"],
                  ["Services", "services-section"],
                  ["Areas", "areas-served"],
                  ["Programs", "programs-incentives"],
                  ["FAQ", "faq-section"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id, label)}
                    className="block text-white/40 hover:text-[#d4af37] text-sm transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <Link
                  to="/PrivacyPolicy"
                  className="block text-white/40 hover:text-[#d4af37] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/25 text-xs leading-relaxed max-w-3xl mx-auto">
            © {new Date().getFullYear()} G8 Solar LLC. We partner with licensed, bonded, and
            insured local installers. Savings estimates vary by property. Actual results depend on
            usage, roof conditions, utility rates, and available incentives.
          </p>
        </div>
      </div>
    </footer>
  );
}
