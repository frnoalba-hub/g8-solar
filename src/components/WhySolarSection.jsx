import React from "react";
import { Home, TrendingUp, Leaf, Zap, Shield, Battery } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Home Value",
    desc: "Homes with solar sell for an average of 4.1% more, adding $10,000–$30,000+ in property value.",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Dramatically Lower Bills",
    desc: "Most California homeowners cut their electric bill by 70–100% after going solar.",
    color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-[#f5c518]",
  },
  {
    icon: Shield,
    title: "Protection from Rate Hikes",
    desc: "PG&E, SCE & SDG&E rates have risen over 5% annually. Solar locks in your energy cost for 25+ years.",
    color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: Leaf,
    title: "Reduce Carbon Footprint",
    desc: "An average solar system offsets 3–4 tons of CO₂ per year — equivalent to planting 100 trees annually.",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    icon: Battery,
    title: "Energy Independence",
    desc: "Pair with battery storage to keep your lights on during outages and grid fluctuations.",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: Home,
    title: "$0 Down Financing",
    desc: "Start saving from day one. Many homeowners pay less monthly than their current electric bill.",
    color: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
];

export default function WhySolarSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            Why You Should Consider Solar
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Going solar is one of the smartest financial and environmental decisions a homeowner can make.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] dark:text-white mb-2">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}