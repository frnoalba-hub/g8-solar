import React from "react";
import { TrendingUp, Zap, Shield, Leaf, Battery, CreditCard } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Increase Home Value", desc: "Homes with solar can sell for around 4.1% more — often adding $10,000–$30,000+ in value.", color: "bg-blue-50 text-blue-600" },
  { icon: Zap, title: "Lower Bills", desc: "Many California homeowners reduce electric bills by 50–90% after going solar.", color: "bg-amber-50 text-amber-600" },
  { icon: Shield, title: "Rate Protection", desc: "Utility rates have risen 5%+ annually. Solar locks in your energy cost for 25+ years.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Leaf, title: "Go Green", desc: "A typical system offsets ~3–4 tons of CO₂ per year — like planting 100 trees annually.", color: "bg-teal-50 text-teal-600" },
  { icon: Battery, title: "Energy Independence", desc: "Pair with battery storage to keep your lights on during grid outages.", color: "bg-purple-50 text-purple-600" },
  { icon: CreditCard, title: "$0 Down Financing", desc: "Start saving from day one. Many homeowners pay less monthly than their current bill.", color: "bg-rose-50 text-rose-600" },
];

export default function WhySolarSection() {
  return (
    <section className="py-24 bg-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">Benefits</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Why Go Solar?</h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">One of the smartest financial and environmental decisions you can make.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, desc, color }) => {
            const [bg, text] = color.split(" ");
            return (
              <div key={title} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${bg}`}>
                  <Icon className={`w-5 h-5 ${text}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}