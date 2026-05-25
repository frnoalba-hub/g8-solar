import React from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "The Martinez Family",
    location: "Pasadena, CA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    system: "8.4 kW · 24 panels",
    monthly: "$312",
    annual: "$3,744",
    payback: "5.8 yrs",
    quote: "Our SCE bill went from $380 a month to under $20. Wish we'd done it five years ago.",
  },
  {
    name: "Chen Residence",
    location: "Rancho Cucamonga, CA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    system: "11.2 kW + Powerwall",
    monthly: "$418",
    annual: "$5,016",
    payback: "6.2 yrs",
    quote: "Battery kept us running through the last grid outage. The whole neighborhood was dark — we weren't.",
  },
  {
    name: "Kumar Property",
    location: "Riverside, CA",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    system: "6.5 kW · 18 panels",
    monthly: "$248",
    annual: "$2,976",
    payback: "5.3 yrs",
    quote: "G8 handled everything — permits, install, the rebate paperwork. We just signed and saved.",
  },
];

export default function ResultsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">Real Results</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0b1528] mt-2 leading-[1.05] max-w-2xl">
              The savings aren't<br />
              <em className="text-[#d4af37] not-italic">hypothetical.</em>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm lg:text-right">
            Three California families. Three different systems. Three very different electric bills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <article key={c.name} className="group flex flex-col">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">{c.location}</div>
                  <h3 className="text-2xl leading-tight">{c.name}</h3>
                </div>
              </div>

              {/* Numbers row */}
              <div className="grid grid-cols-3 gap-2 mb-5 border-y border-gray-100 py-4">
                <div>
                  <div className="text-xl font-black text-[#0b1528] leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>{c.monthly}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">Saved/mo</div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#d4af37] leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>{c.annual}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">Saved/yr</div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#0b1528] leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>{c.payback}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1.5 font-semibold">Payback</div>
                </div>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{c.system}</div>

              <blockquote
                className="text-[#0b1528] text-lg leading-snug italic flex-1"
                style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
              >
                "{c.quote}"
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-10 border-t border-gray-100">
          <p className="text-gray-500 text-base flex-1">Your home is next. Get a personalized savings estimate in under 60 seconds.</p>
          <button
            onClick={() => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#0b1528] hover:bg-[#d4af37] text-white hover:text-[#0b1528] font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            See my numbers <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}