import React, { useState } from "react";
import { DollarSign, Home, Battery, Leaf, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const programs = [
  {
    icon: DollarSign,
    color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    name: "Federal Investment Tax Credit (ITC)",
    tag: "Federal",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    value: "Save 30% off total system cost",
    desc: "Claim 30% of your total solar installation cost as a federal tax credit. Available through 2032, it drops to 26% in 2033. A $20,000 system becomes $14,000 after the credit.",
    link: "https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics",
    eligible: "Homeowners who owe federal income taxes",
  },
  {
    icon: Battery,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    name: "SGIP — Self-Generation Incentive Program",
    tag: "California",
    tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    value: "Up to $1,000/kWh for battery storage",
    desc: "California's SGIP program provides rebates for pairing solar with battery storage. Equity resiliency customers (low-income or in high wildfire zones) get enhanced rebates.",
    link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program",
    eligible: "PG&E, SCE, SoCalGas & SDG&E customers",
  },
  {
    icon: Home,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    name: "Net Energy Metering (NEM 3.0)",
    tag: "California",
    tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    value: "Get paid for excess solar power",
    desc: "Send your extra solar energy back to the grid and receive credits on your utility bill. Pairing with battery storage maximizes value under NEM 3.0 by shifting solar exports to peak evening rates.",
    link: "https://www.cpuc.ca.gov/nem",
    eligible: "All California IOUs (PG&E, SCE, SDG&E)",
  },
  {
    icon: Leaf,
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    name: "PACE Financing (Property Assessed Clean Energy)",
    tag: "California",
    tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    value: "$0 upfront, repaid via property tax",
    desc: "California's PACE program lets you finance solar and battery storage with no money down, repaying the loan through your property tax bill over 5–25 years.",
    link: "https://www.energy.ca.gov/programs-and-topics/programs/property-assessed-clean-energy-financing",
    eligible: "California homeowners with sufficient equity",
  },
  {
    icon: DollarSign,
    color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    name: "MASH & DAC-SASH (Low-Income Solar)",
    tag: "California",
    tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    value: "Up to $3/watt for qualifying households",
    desc: "The DAC-SASH program offers substantial upfront rebates for low-income customers in disadvantaged communities, making solar accessible regardless of income level.",
    link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/california-solar-initiative/dac-sash",
    eligible: "CARE program participants in IOU territories",
  },
];

export default function CaliforniaProgramsSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            California Solar Programs & Incentives
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            California homeowners have access to some of the best solar incentives in the nation. Here's how to take advantage of them.
          </p>
        </div>

        <div className="space-y-4">
          {programs.map((program, i) => {
            const Icon = program.icon;
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${program.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${program.tagColor}`}>{program.tag}</span>
                      <h3 className="font-bold text-[#0a1628] dark:text-white text-sm sm:text-base">{program.name}</h3>
                    </div>
                    <p className="text-[#f5c518] font-semibold text-sm">{program.value}</p>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{program.desc}</p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      ✅ Eligible: <span className="font-normal text-gray-500 dark:text-gray-400">{program.eligible}</span>
                    </p>
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#0a1628] dark:text-[#f5c518] text-sm font-bold underline hover:no-underline"
                    >
                      Official Program Details <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Not sure which programs you qualify for?</p>
          <button
            onClick={() => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
          >
            Get a Free Incentive Analysis →
          </button>
        </div>
      </div>
    </section>
  );
}