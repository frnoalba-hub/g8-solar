import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const SEO_TITLE =
  "G8 Solar LLC | California Solar Installation & Battery Storage";
const SEO_DESCRIPTION =
  "G8 Solar LLC designs and installs residential and commercial solar systems across California, including battery storage and incentive guidance.";

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = SEO_TITLE;
    setMetaContent('meta[name="description"]', SEO_DESCRIPTION);
    setMetaContent('meta[property="og:title"]', "G8 Solar LLC | California Solar Installation & Battery Storage");
    setMetaContent('meta[property="og:description"]', SEO_DESCRIPTION);
    setMetaContent('meta[name="twitter:title"]', "G8 Solar LLC | California Solar Installation & Battery Storage");
    setMetaContent('meta[name="twitter:description"]', SEO_DESCRIPTION);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
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
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; scrollbar-width: none; -ms-overflow-style: none; }
        body::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; overflow-x: hidden; scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37] flex items-center justify-center flex-shrink-0">
                <span className="text-[#0b1528] font-black text-sm leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>G8</span>
              </div>
              <span className={`text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-[#0b1528]' : 'text-white'
              }`} style={{ fontFamily: 'Inter, sans-serif' }}>Solar</span>
            </button>
          </div>

          {/* Nav Links - centered */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-semibold transition-colors hover:text-[#d4af37] whitespace-nowrap ${
                  scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:6264049357"
              className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#d4af37] whitespace-nowrap ${
                scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
              }`}
            >
              <Phone className="w-4 h-4" />
              (626) 404-9357
            </a>
            <button
              onClick={() => scrollTo("savings-form")}
              className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-sm px-7 py-3 rounded-full transition-all whitespace-nowrap"
            >
              Get a Quote
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen
                ? <X className={`w-5 h-5 ${scrolled ? "text-[#0b1528]" : "text-white"}`} />
                : <Menu className={`w-5 h-5 ${scrolled ? "text-[#0b1528]" : "text-white"}`} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-4 space-y-3">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-[#0b1528] font-medium py-2 border-b border-gray-50 hover:text-[#d4af37] transition-colors"
              >
                {label}
              </button>
            ))}
            <a href="tel:6264049357" className="flex items-center gap-2 text-[#0b1528] font-medium py-2">
              <Phone className="w-4 h-4" /> (626) 404-9357
            </a>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
}