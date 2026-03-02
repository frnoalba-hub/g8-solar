import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How much does a solar system cost in California?",
    a: "The average residential solar system in California costs between $15,000 and $30,000 before incentives. After the 30% Federal Tax Credit, that drops to $10,500–$21,000. Many homeowners also qualify for additional state rebates through SGIP or utility programs, further reducing the cost.",
  },
  {
    q: "How long does installation take?",
    a: "The physical installation typically takes 1–3 days. However, the full process — including permits, utility interconnection approval, and final inspection — usually takes 4–8 weeks. G8 Solar manages the entire permitting process for you.",
  },
  {
    q: "Will solar work during a power outage?",
    a: "Standard solar systems automatically shut off during an outage for safety reasons. However, if you add a battery storage system (like Tesla Powerwall or Enphase IQ Battery), your home can continue to run on solar power even when the grid is down.",
  },
  {
    q: "What happens if I produce more electricity than I use?",
    a: "Under California's Net Energy Metering (NEM 3.0) program, excess electricity you produce is sent back to the grid and you receive credits on your utility bill. Pairing solar with battery storage maximizes your financial benefit under NEM 3.0.",
  },
  {
    q: "What is the 30% Federal Tax Credit?",
    a: "The Federal Investment Tax Credit (ITC) allows you to deduct 30% of your total solar installation cost from your federal income taxes. For example, a $20,000 system would earn you a $6,000 tax credit. This credit is available through 2032.",
  },
  {
    q: "How long do solar panels last?",
    a: "Most modern solar panels are warrantied for 25 years and continue producing energy for 30–40 years. Panel efficiency degrades very slowly — typically about 0.5% per year — so even after 25 years, most panels are still operating at over 87% of their original capacity.",
  },
  {
    q: "Does my roof need to be in good condition before going solar?",
    a: "Yes — we always recommend ensuring your roof has at least 10–15 years of life remaining before installing solar. If your roof needs work, it's better to address it before installation. G8 Solar will assess your roof's condition during the free site assessment.",
  },
  {
    q: "Can I go solar if I rent my home?",
    a: "Unfortunately, renters can't install solar on a property they don't own. However, many California renters can enroll in community solar programs, which allow you to subscribe to a shared solar installation and receive credits on your utility bill.",
  },
  {
    q: "What financing options are available?",
    a: "G8 Solar offers multiple financing options including $0 down solar loans, solar leases, and Power Purchase Agreements (PPAs). Many homeowners find that their monthly loan payment is less than their current electric bill, resulting in immediate savings.",
  },
  {
    q: "How do I maintain my solar panels?",
    a: "Solar panels require minimal maintenance. We recommend cleaning them every 3–6 months, especially in California's dry climate where dust and pollen accumulate quickly. Regular cleaning can restore 10–25% of efficiency lost to soiling. G8 Solar offers professional cleaning services.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Everything you need to know about going solar with G8 Solar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#f5c518] bg-[#f5c518]/5 dark:bg-[#f5c518]/10"
                    : "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
                }`}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-[#0a1628] dark:text-white text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#f5c518] flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Still have questions?</p>
          <a
            href="tel:6614386350"
            className="inline-block bg-[#0a1628] dark:bg-[#f5c518] hover:bg-[#f5c518] dark:hover:bg-[#e0b015] text-white dark:text-[#0a1628] hover:text-[#0a1628] font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
          >
            Call 661-438-6350
          </a>
        </div>
      </div>
    </section>
  );
}