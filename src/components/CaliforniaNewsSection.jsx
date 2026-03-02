import React from "react";
import { ExternalLink, Sun, TrendingUp, Award } from "lucide-react";

const news = [
  {
    icon: TrendingUp,
    tag: "Policy Win",
    title: "California Extends Solar Incentives Through 2025",
    summary: "SGIP battery incentive program and net metering continue to offer generous compensation for solar energy exported to the grid.",
    color: "text-blue-400 bg-blue-500/10",
    link: "https://www.cpuc.ca.gov/sgip",
  },
  {
    icon: Sun,
    tag: "Solar Growth",
    title: "California Leads the U.S. in Solar Installations",
    summary: "Over 1.5 million residential solar systems installed — producing enough power for millions of homes.",
    color: "text-amber-400 bg-amber-500/10",
    link: "https://www.seia.org/state-solar-policy/california-solar",
  },
  {
    icon: Award,
    tag: "Tax Credit",
    title: "30% Federal Solar Tax Credit Through 2032",
    summary: "The Inflation Reduction Act locked in the 30% ITC, saving California homeowners thousands on installations.",
    color: "text-emerald-400 bg-emerald-500/10",
    link: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
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