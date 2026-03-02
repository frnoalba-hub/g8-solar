import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        html { scroll-behavior: smooth; overflow-x: hidden; }
      `}</style>

      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Left Nav */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 3).map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-base font-semibold transition-colors hover:text-[#d4af37] ${
                  scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Brand name on mobile */}
          <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <span className={`md:hidden text-base font-bold tracking-wide ${scrolled ? "text-[#0b1528]" : "text-white"}`}>G8 Solar</span>
          </div>

          {/* Right Nav + CTA */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(3).map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-base font-semibold transition-colors hover:text-[#d4af37] ${
                    scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a
              href="tel:6614386350"
              className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                scrolled ? "text-[#0b1528]" : "text-white drop-shadow"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              (661) 438-6350
            </a>
            <button
              onClick={() => scrollTo("savings-form")}
              className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
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
            <a href="tel:6614386350" className="flex items-center gap-2 text-[#0b1528] font-medium py-2">
              <Phone className="w-4 h-4" /> (661) 438-6350
            </a>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
}