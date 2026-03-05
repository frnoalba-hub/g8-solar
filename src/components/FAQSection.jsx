import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How much does a solar system cost in California?", a: "The average residential solar system in California costs between $15,000 and $30,000 before incentives. After the 30% Federal Tax Credit, that drops to $10,500–$21,000. Many homeowners also qualify for additional state rebates." },
  { q: "How long does installation take?", a: "The physical installation typically takes 1–3 days. The full process — including permits, utility interconnection, and inspection — usually takes 4–8 weeks. G8 Solar manages the entire permitting process." },
  { q: "Will solar work during a power outage?", a: "Standard solar systems shut off during outages for safety. With battery storage (like Tesla Powerwall), your home can continue running on solar power during grid outages." },
  { q: "What happens with excess electricity?", a: "Under California's NEM 3.0 program, excess electricity is sent to the grid and you receive bill credits. Pairing with battery storage maximizes your financial benefit." },
  { q: "What is the 30% Federal Tax Credit?", a: "The ITC allows you to deduct 30% of your solar installation cost from federal income taxes. A $20,000 system earns a $6,000 credit. Available through 2032." },
  { q: "How long do solar panels last?", a: "Most panels are warrantied for 25 years and produce energy for 30–40 years. Efficiency degrades about 0.5% per year — after 25 years, most operate at 87%+ capacity." },
  { q: "What financing options are available?", a: "G8 Solar offers $0 down solar loans, leases, and PPAs. Many homeowners find their monthly payment is less than their current electric bill." },
  { q: "How do I maintain my solar panels?", a: "Panels require minimal maintenance. Clean every 3–6 months. G8 Solar offers professional cleaning services to keep your system at peak performance." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq-section" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">Common Questions</h2>
          <p className="text-gray-500">Everything you need to know about going solar.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-[#d4af37]/40 shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-[#0b1528] text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#d4af37]" : "text-gray-400"}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <div className="bg-white px-5 sm:px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="tel:6264049357" className="inline-block bg-[#0b1528] hover:bg-[#d4af37] text-white hover:text-[#0b1528] font-semibold px-8 py-3 rounded-full transition-all">
            Call (626) 404-9357
          </a>
        </div>
      </div>
    </section>
  );
}