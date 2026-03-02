import React from "react";
import { Home, TrendingUp, Leaf, Zap, Shield, Battery } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Increase Home Value", desc: "Homes with solar can sell for around 4.1% more — often adding $10,000–$30,000+ in value.", color: "text-blue-500 bg-blue-50" },
  { icon: Zap, title: "Lower Bills", desc: "Many California homeowners typically reduce electric bills by 50–90% after going solar.", color: "text-amber-500 bg-amber-50" },
  { icon: Shield, title: "Rate Protection", desc: "Utility rates have risen by over 5% annually in recent years. Solar helps lock in your energy cost for 25+ years.", color: "text-emerald-500 bg-emerald-50" },
  { icon: Leaf, title: "Go Green", desc: "A typical solar system can offset around 3–4 tons of CO₂ per year — roughly equivalent to planting 100 trees annually.", color: "text-teal-500 bg-teal-50" },
  { icon: Battery, title: "Energy Independence", desc: "Pair with battery storage to keep your lights on during outages.", color: "text-purple-500 bg-purple-50" },
  { icon: Home, title: "$0 Down Financing", desc: "Start saving from day one. Many homeowners may pay less monthly than their current electric bill.", color: "text-rose-500 bg-rose-50" },
];

export default function WhySolarSection() {
  return (
    <section className="py-24 bg-[#f4f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Benefits</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            Why Go Solar?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            One of the smartest financial and environmental decisions you can make.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc, color }) => {
            const [textColor, bgColor] = color.split(" ");
            return (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bgColor}`}>
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#0b1528] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}