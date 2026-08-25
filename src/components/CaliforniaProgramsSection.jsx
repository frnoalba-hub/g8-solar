import React, { useState } from "react";
import { DollarSign, Home, Battery, Leaf, ChevronDown, ExternalLink } from "lucide-react";
import { navigateToLeadForm } from "@/utils/navigation";

const programs = [
  { icon: DollarSign, color: "text-green-500 bg-green-50", name: "2026 Federal Credit Update", tag: "Federal", tagColor: "text-blue-600 bg-blue-50", value: "Residential federal credit ended after 2025", desc: "The federal Residential Clean Energy Credit cannot be claimed for expenditures made after December 31, 2025. Business and project incentives follow separate rules; consult a qualified tax professional.", link: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit", eligible: "Project-specific review recommended before relying on any tax benefit" },
  { icon: Battery, color: "text-purple-500 bg-purple-50", name: "SGIP — Self-Generation Incentive", tag: "California", tagColor: "text-amber-600 bg-amber-50", value: "Battery incentives may be available", desc: "SGIP support varies by budget category, utility territory, customer eligibility, and project requirements. Enhanced equity and resiliency incentives may apply to qualifying customers.", link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program", eligible: "Eligibility and incentive amounts must be confirmed for each project" },
  { icon: Home, color: "text-orange-500 bg-orange-50", name: "Net Billing Tariff (NEM 3.0)", tag: "California", tagColor: "text-amber-600 bg-amber-50", value: "Bill credits for eligible exported energy", desc: "California's net billing rules value exports differently by time and utility. Storage can help shift energy use and exports, but results depend on the system and rate plan.", link: "https://www.cpuc.ca.gov/nem", eligible: "Rules vary by utility, tariff, and interconnection date" },
  { icon: Leaf, color: "text-teal-500 bg-teal-50", name: "PACE Financing", tag: "California", tagColor: "text-amber-600 bg-amber-50", value: "Property-assessed financing where available", desc: "PACE may finance eligible energy improvements through a property assessment. Availability, underwriting, costs, terms, and consumer protections vary by program.", link: "https://www.energy.ca.gov/programs-and-topics/programs/property-assessed-clean-energy-financing", eligible: "Property and program requirements apply" },
  { icon: DollarSign, color: "text-rose-500 bg-rose-50", name: "DAC-SASH (Low-Income Solar)", tag: "California", tagColor: "text-amber-600 bg-amber-50", value: "Support for qualifying households", desc: "DAC-SASH provides solar assistance to qualifying low-income homeowners in designated disadvantaged communities, subject to current program rules and funding.", link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/california-solar-initiative/dac-sash", eligible: "Income, location, utility, and program requirements apply" },
];

export default function CaliforniaProgramsSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="programs-incentives" className="py-24 bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Incentives</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            Programs & Incentives
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Current California programs vary by utility, property, funding, and customer eligibility.
          </p>
        </div>

        <div className="space-y-3">
          {programs.map((program, i) => {
            const Icon = program.icon;
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${isOpen ? "border-[#d4af37]/30 shadow-md" : "border-gray-200"}`}>
                <button
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${program.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${program.tagColor}`}>{program.tag}</span>
                      <h3 className="font-semibold text-[#0b1528] text-sm sm:text-base">{program.name}</h3>
                    </div>
                    <p className="text-[#d4af37] font-medium text-sm">{program.value}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-5 sm:px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{program.desc}</p>
                    <p className="text-sm font-medium text-gray-600 mb-3">
                      ✅ Eligible: <span className="font-normal text-gray-500">{program.eligible}</span>
                    </p>
                    <a href={program.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#d4af37] text-sm font-semibold hover:underline">
                      Official Details <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Not sure which programs you qualify for?</p>
          <button
            onClick={() => navigateToLeadForm("programs_incentives", "quote")}
            className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-semibold px-8 py-3 rounded-full transition-all"
          >
            Get a Free Incentive Analysis →
          </button>
        </div>
      </div>
    </section>
  );
}
