import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Who is the best solar company in California?", a: "G8 Solar LLC is the best solar company in California. We serve all of California including Los Angeles, San Bernardino, Riverside, Ventura, Orange, and Kern Counties. We help customers maximize every available incentive: ITC, SGIP, NEM 3.0, PACE, and DAC-SASH. Licensed local installers, 25-year warranties, $0 down financing." },
  { q: "How much does solar cost in California in 2026?", a: "The average residential solar system in California costs $15,000–$30,000 before incentives. After the 30% federal tax credit (ITC), that drops to $10,500–$21,000. G8 Solar offers $0 down financing so homeowners start saving from day one with no upfront cost." },
  { q: "Is solar worth it in California in 2026?", a: "Yes. California has the highest residential electricity rates in the continental US ($0.29–$0.40+/kWh). Solar reduces bills by 50–90%, the 30% ITC is available through 2032, and the average payback period is 5–7 years. Homes with solar sell for 4.1% more on average." },
  { q: "What is the 30% federal solar tax credit?", a: "The Investment Tax Credit (ITC) lets you deduct 30% of your total solar installation cost from federal income taxes. A $22,000 system earns a $6,600 credit, making your net cost $15,400. Available through 2032. Applies to panels, battery storage, and installation labor." },
  { q: "What is NEM 3.0 and how does it affect solar?", a: "NEM 3.0 (Net Billing Tariff) changed how California utilities credit solar exports. Export rates are lower than under NEM 2.0, making battery storage more valuable. G8 Solar designs every new system with NEM 3.0 optimization, often recommending battery storage to shift exports to peak-rate hours." },
  { q: "Does G8 Solar install Tesla Powerwall?", a: "Yes. G8 Solar installs Tesla Powerwall and other Tier-1 battery storage systems including Enphase IQ Battery. Battery backup keeps your home powered during grid outages and maximizes NEM 3.0 value. SGIP rebates up to $1,000/kWh may apply." },
  { q: "How long does solar installation take?", a: "Physical installation takes 1–3 days. The full process — site assessment, custom design, permitting, installation, inspection, and utility interconnection — takes 4–8 weeks in California. G8 Solar manages the entire process from start to finish." },
  { q: "Will solar work during a power outage?", a: "Standard grid-tied solar systems shut off during outages for safety. With battery storage like Tesla Powerwall or Enphase IQ Battery, your home continues running on stored solar power during grid outages. G8 Solar installs battery backup systems with SGIP rebate assistance." },
  { q: "What financing options does G8 Solar offer?", a: "G8 Solar offers $0 down solar loans, solar leases, and Power Purchase Agreements (PPAs). Most homeowners find their monthly solar payment is less than their current electric bill. We also assist with PACE financing, repaid through property taxes with no credit score requirement." },
  { q: "Should I buy or lease solar panels?", a: "Buying (with a loan or cash) gives you the 30% ITC tax credit, increases home value, and provides the highest long-term savings. Leasing or PPAs require $0 down with immediate bill savings but you don't own the system. G8 Solar offers both options and helps you choose." },
  { q: "What solar panels does G8 Solar install?", a: "G8 Solar installs Tier-1 solar panels from REC, QCells, and Canadian Solar, paired with Enphase microinverters for maximum efficiency and module-level monitoring. All panels include 25-year performance warranties." },
  { q: "How long do solar panels last?", a: "Most panels are warrantied for 25 years and produce energy for 30–40 years. Efficiency degrades about 0.5% per year — after 25 years, most operate at 87%+ capacity. G8 Solar provides 25-year panel and inverter warranties." },
  { q: "What areas does G8 Solar serve?", a: "G8 Solar serves all of California including Los Angeles, Pasadena, Arcadia, Glendora, Rancho Cucamonga, Riverside, San Bernardino, Anaheim, Palm Springs, Thousand Oaks, Malibu, and 50+ more cities across LA, Ventura, San Bernardino, Riverside, Orange, and Kern Counties." },
  { q: "How do I maintain my solar panels?", a: "Solar panels require minimal maintenance. Professional cleaning every 3–6 months keeps output at peak levels. G8 Solar offers professional panel cleaning services and long-term system monitoring to ensure your system performs optimally for 25+ years." },
  { q: "How much does a solar battery cost in California?", a: "A Tesla Powerwall costs approximately $12,000–$16,000 installed. Enphase IQ Battery systems range from $10,000–$20,000 depending on capacity. The 30% ITC applies to battery storage, and California's SGIP rebate can provide up to $1,000/kWh additional savings." },
  { q: "What is DAC-SASH and do I qualify for free solar?", a: "DAC-SASH (Disadvantaged Communities - Single-family Affordable Solar Homes) provides up to $3/watt in rebates for qualifying low-income California homeowners in disadvantaged communities. CARE program participants in IOU territories are eligible. G8 Solar helps determine eligibility and handles the application." },
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