import React from "react";
import { ArrowUpRight } from "lucide-react";

const scenarios = [
  {
    label: "Pasadena-area home",
    system: "8.4 kW · ~24 panels",
    monthly: "$150–$250",
    annual: "$1,800–$3,000",
    payback: "~6–8 yrs",
    note: "Typical SCE bill reduction for a mid-size residential system after incentives.",
  },
  {
    label: "Inland Empire home + battery",
    system: "11.2 kW + battery",
    monthly: "$200–$325",
    annual: "$2,400–$3,900",
    payback: "~7–10 yrs",
    note: "Higher production + storage can improve NEM 3.0 value and outage backup.",
  },
  {
    label: "Compact Riverside system",
    system: "6.5 kW · ~18 panels",
    monthly: "$120–$200",
    annual: "$1,400–$2,400",
    payback: "~5–8 yrs",
    note: "Smaller roof or lower usage — still meaningful bill relief with $0-down options.",
  },
];

export default function ResultsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">
              Example Savings
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0b1528] mt-2 leading-[1.05] max-w-2xl">
              What California systems
              <br />
              <em className="text-[#d4af37] not-italic">can look like.</em>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm lg:text-right">
            Illustrative scenarios based on typical California designs. Your savings depend on usage,
            rates, roof, and incentives — get a free estimate for numbers on your home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((s) => (
            <article
              key={s.label}
              className="flex flex-col rounded-2xl border border-gray-100 bg-[#f8f9fb] p-6 sm:p-7"
            >
              <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                Example
              </div>
              <h3 className="text-2xl leading-tight text-[#0b1528] mb-1">{s.label}</h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                {s.system}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5 border-y border-gray-200/80 py-4">
                <div>
                  <div className="text-lg font-black text-[#0b1528] leading-none">{s.monthly}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">
                    Saved/mo
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-[#d4af37] leading-none">{s.annual}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">
                    Saved/yr
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-[#0b1528] leading-none">{s.payback}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">
                    Payback
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-10 border-t border-gray-100">
          <p className="text-gray-500 text-base flex-1">
            Your home is next. Get a personalized savings estimate — no obligation.
          </p>
          <button
            onClick={() =>
              document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-[#0b1528] hover:bg-[#d4af37] text-white hover:text-[#0b1528] font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            See my numbers <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
