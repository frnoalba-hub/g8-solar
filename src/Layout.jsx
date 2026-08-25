import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import StructuredDataFAQ from "@/components/StructuredDataFAQ";
import { G8_LOGO_URL, PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { navigateToLeadForm } from "@/utils/navigation";
import { trackCtaClick } from "@/utils/analytics";

const SEO_TITLE =
  "G8 Solar LLC | California Solar Installation & Battery Storage";
const SEO_DESCRIPTION =
  "G8 Solar LLC coordinates residential and commercial solar and battery projects with licensed California installation partners.";

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

function NavLogo({ scrolled, compact = false }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`flex items-center group transition-all duration-300 ${
        scrolled ? "rounded-lg bg-[#0b1528] px-2 py-1 shadow-sm" : ""
      }`}
      aria-label="G8 Solar home"
    >
      <img
        src={G8_LOGO_URL}
        alt="G8 Solar LLC"
        fetchPriority="high"
        decoding="async"
        className={`w-auto object-contain transition-all duration-500 ease-out origin-left ${
          scrolled
            ? compact
              ? "h-11 max-w-[9rem]"
              : "h-[4.375rem] max-w-[13.75rem] sm:max-w-[15rem]"
            : "h-[5.9375rem] sm:h-[6.25rem] max-w-[18.75rem] sm:max-w-[21.25rem] drop-shadow-md brightness-110"
        }`}
      />
    </button>
  );
}

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = SEO_TITLE;
    setMetaContent('meta[name="description"]', SEO_DESCRIPTION);
    setMetaContent('meta[property="og:title"]', SEO_TITLE);
    setMetaContent('meta[property="og:description"]', SEO_DESCRIPTION);
    setMetaContent('meta[name="twitter:title"]', SEO_TITLE);
    setMetaContent('meta[name="twitter:description"]', SEO_DESCRIPTION);
    const canonical = document.querySelector('link[rel="canonical"]');
    const robots = document.querySelector('meta[name="robots"]');
    if (currentPageName === "PrivacyPolicy") {
      document.title = "Privacy Policy | G8 Solar LLC";
      setMetaContent('meta[name="description"]', "How G8 Solar LLC handles information submitted through its website.");
      canonical?.setAttribute("href", "https://g8solarenergy.com/PrivacyPolicy");
      robots?.setAttribute("content", "noindex,follow");
    } else {
      canonical?.setAttribute("href", "https://g8solarenergy.com/");
      robots?.setAttribute("content", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    }
  }, [currentPageName]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id, label) => {
    setMobileOpen(false);
    trackCtaClick({ ctaType: "nav", placement: `nav_${label.toLowerCase().replace(/\s+/g, "_")}` });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "problem-section" },
    { label: "Services", id: "services-section" },
    { label: "Areas", id: "areas-served" },
    { label: "Installations", id: "installation-portfolio" },
    { label: "Programs", id: "programs-incentives" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Calculator", id: "calculator" },
    { label: "FAQ", id: "faq-section" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredDataFAQ />
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; scrollbar-width: none; -ms-overflow-style: none; }
        body::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; overflow-x: hidden; scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar { display: none; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between lg:justify-center relative gap-3">
          <div className="flex-shrink-0 lg:hidden min-w-0">
            <NavLogo scrolled={scrolled} />
          </div>

          {scrolled && (
            <div className="hidden lg:flex absolute left-5 xl:left-8 flex-shrink-0">
              <NavLogo scrolled compact />
            </div>
          )}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id, label)}
                className={`text-sm font-semibold transition-colors hover:text-[#d4af37] whitespace-nowrap ${
                  scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4 lg:absolute lg:right-5 xl:right-8 transition-all duration-300">
            <PhoneLink
              phone={PRIMARY_PHONE}
              display={PRIMARY_PHONE_DISPLAY}
              placement="navbar_desktop"
              className={`hidden 2xl:flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#d4af37] whitespace-nowrap ${
                scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
              }`}
            >
              <Phone className="w-4 h-4" />
              {PRIMARY_PHONE_DISPLAY}
            </PhoneLink>
            <button
              onClick={() => navigateToLeadForm("navbar_quote", "quote")}
              className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all whitespace-nowrap"
            >
              Get a Quote
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${scrolled ? "text-[#0b1528]" : "text-white"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled ? "text-[#0b1528]" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-4 space-y-3">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id, label)}
                className="block w-full text-left text-[#0b1528] font-medium py-2 border-b border-gray-50 hover:text-[#d4af37] transition-colors"
              >
                {label}
              </button>
            ))}
            <PhoneLink
              phone={PRIMARY_PHONE}
              display={PRIMARY_PHONE_DISPLAY}
              placement="navbar_mobile_menu"
              className="flex items-center gap-2 text-[#0b1528] font-medium py-2"
            >
              <Phone className="w-4 h-4" /> {PRIMARY_PHONE_DISPLAY}
            </PhoneLink>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
}
