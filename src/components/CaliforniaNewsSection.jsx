import React from "react";
import { ExternalLink, Sun, TrendingUp, Award } from "lucide-react";

const news = [
  {
    icon: TrendingUp,
    tag: "Policy Win",
    title: "California Extends Solar Incentives Through 2025",
    summary: "California's SGIP battery incentive program and net metering 3.0 continue to offer generous compensation for solar energy exported to the grid.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    link: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program",
  },
  {
    icon: Sun,
    tag: "Solar Growth",
    title: "California Now Leads the U.S. in Solar Installations",
    summary: "California has installed more solar capacity than any other state, with over 1.5 million residential solar systems producing enough power for millions of homes.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    link: "https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/california-solar-statistics",
  },
  {
    icon: Award,
    tag: "Federal Tax Credit",
    title: "Federal 30% Solar Tax Credit Confirmed Through 2032",
    summary: "The Inflation Reduction Act locked in the 30% federal Investment Tax Credit (ITC) through 2032, saving California homeowners thousands on solar installations.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    link: "https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics",
  },
];

export default function CaliforniaNewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#132240] dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f5c518]/20 text-[#f5c518] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sun className="w-4 h-4" />
            California Solar News
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Great News for California Solar
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Stay up to date on the programs and policies making solar an even smarter choice in the Golden State.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map(({ icon: Icon, tag, title, summary, color, link }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all group"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${color}`}>
                <Icon className="w-3 h-3" />
                {tag}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{summary}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#f5c518] text-sm font-semibold hover:underline"
              >
                Learn More <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}