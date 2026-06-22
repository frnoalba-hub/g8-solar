import React from "react";
import { ExternalLink, Sun, TrendingUp, Award } from "lucide-react";

const news = [
  {
    icon: TrendingUp,
    tag: "Federal Incentive",
    title: "30% Federal Solar Tax Credit Active Through 2032",
    summary: "The Residential Clean Energy Credit remains one of the biggest savings levers for California homeowners going solar.",
    color: "text-emerald-400 bg-emerald-500/10",
    link: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    icon: Sun,
    tag: "Grid Policy",
    title: "NEM 3.0 Makes Battery Pairing More Important",
    summary: "California's net billing structure rewards systems that store and shift power, especially during peak-rate windows.",
    color: "text-blue-400 bg-blue-500/10",
    link: "https://www.cpuc.ca.gov/nem",
  },
  {
    icon: Award,
    tag: "Battery Rebates",
    title: "SGIP Still Supports Home Battery Rebates",
    summary: "California's SGIP continues to provide incentives for qualifying battery storage projects and resiliency-focused homes.",
    color: "text-amber-400 bg-amber-500/10",
    link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program",
  },
];

export default function CaliforniaNewsSection() {
  return (
    <section className="py-24 bg-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">News</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            California Solar News
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Programs and policies making solar smarter in the Golden State.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map(({ icon: Icon, tag, title, summary, color, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${color}`}>
                <Icon className="w-3.5 h-3.5" />
                {tag}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">{summary}</p>
              <span className="inline-flex items-center gap-1 text-[#d4af37] text-sm font-semibold group-hover:gap-2 transition-all">
                Read More <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}