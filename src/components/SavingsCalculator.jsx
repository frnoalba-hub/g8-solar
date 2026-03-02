import React, { useState } from "react";
import { Calculator, Sun, DollarSign, Leaf, TrendingDown } from "lucide-react";

const STATE_RATES = {
  CA: { name: "California", rate: 0.29, sun: 5.5 },
  TX: { name: "Texas", rate: 0.14, sun: 5.2 },
  FL: { name: "Florida", rate: 0.13, sun: 5.7 },
  AZ: { name: "Arizona", rate: 0.13, sun: 6.5 },
  NY: { name: "New York", rate: 0.22, sun: 4.2 },
  NV: { name: "Nevada", rate: 0.12, sun: 6.4 },
  CO: { name: "Colorado", rate: 0.14, sun: 5.4 },
  WA: { name: "Washington", rate: 0.10, sun: 3.8 },
  OR: { name: "Oregon", rate: 0.11, sun: 4.0 },
  NJ: { name: "New Jersey", rate: 0.18, sun: 4.3 },
  MA: { name: "Massachusetts", rate: 0.25, sun: 4.0 },
  HI: { name: "Hawaii", rate: 0.38, sun: 5.8 },
  GA: { name: "Georgia", rate: 0.12, sun: 5.2 },
  IL: { name: "Illinois", rate: 0.14, sun: 4.4 },
  PA: { name: "Pennsylvania", rate: 0.14, sun: 4.2 },
  OH: { name: "Ohio", rate: 0.13, sun: 4.2 },
  NC: { name: "North Carolina", rate: 0.12, sun: 5.0 },
  VA: { name: "Virginia", rate: 0.12, sun: 4.7 },
  SC: { name: "South Carolina", rate: 0.13, sun: 5.2 },
  MN: { name: "Minnesota", rate: 0.14, sun: 4.5 },
};

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(250);
  const [state, setState] = useState("CA");
  const [showResults, setShowResults] = useState(false);

  const calculate = () => {
    const { rate, sun } = STATE_RATES[state];
    const annualBill = monthlyBill * 12;
    const monthlyKwh = monthlyBill / rate;
    const systemSizeKw = monthlyKwh / (sun * 30);
    const systemCostRaw = systemSizeKw * 3000;
    const federalCredit = systemCostRaw * 0.30;
    const netCost = systemCostRaw - federalCredit;
    const annualSavings = annualBill * 0.85;
    const paybackYears = (netCost / annualSavings).toFixed(1);
    const lifetime25 = (annualSavings * 25 - netCost).toFixed(0);
    const co2Annual = (monthlyKwh * 12 * 0.000386).toFixed(1);

    return {
      annualBill: annualBill.toFixed(0),
      systemSizeKw: systemSizeKw.toFixed(2),
      systemCost: systemCostRaw.toFixed(0),
      federalCredit: federalCredit.toFixed(0),
      netCost: netCost.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      paybackYears,
      lifetime25,
      co2Annual,
      monthlySavings: (annualSavings / 12).toFixed(0),
    };
  };

  const results = showResults ? calculate() : null;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-[#f0f6ff] to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f5c518]/20 text-[#0a1628] dark:text-[#f5c518] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Free Savings Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Get an instant estimate based on your location and current electric bill. Based on real EIA utility rate data.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Your State
              </label>
              <select
                value={state}
                onChange={(e) => { setState(e.target.value); setShowResults(false); }}
                className="w-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518]"
              >
                {Object.entries(STATE_RATES).map(([code, { name }]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-400 mt-1">
                Avg rate: ${STATE_RATES[state].rate}/kWh · {STATE_RATES[state].sun} peak sun hrs/day
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Monthly Electric Bill: <span className="text-[#f5c518]">${monthlyBill}</span>
              </label>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={monthlyBill}
                onChange={(e) => { setMonthlyBill(Number(e.target.value)); setShowResults(false); }}
                className="w-full accent-[#f5c518] mt-3"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$50</span><span>$500</span><span>$1,000</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="w-full bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-extrabold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Calculate My Solar Savings →
          </button>
        </div>

        {showResults && results && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: DollarSign, label: "Monthly Savings", value: `$${results.monthlySavings}`, sub: "Est. after solar", color: "text-green-500" },
              { icon: TrendingDown, label: "Annual Savings", value: `$${Number(results.annualSavings).toLocaleString()}`, sub: "Per year", color: "text-blue-500" },
              { icon: Sun, label: "25-Year Net Gain", value: `$${Number(results.lifetime25).toLocaleString()}`, sub: "After system cost", color: "text-[#f5c518]" },
              { icon: Leaf, label: "CO₂ Offset", value: `${results.co2Annual} tons`, sub: "Per year", color: "text-emerald-500" },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div key={label} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center border border-gray-100 dark:border-gray-700">
                <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
                <div className="text-2xl font-extrabold text-[#0a1628] dark:text-white">{value}</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        )}

        {showResults && results && (
          <div className="bg-[#0a1628] dark:bg-gray-900 rounded-2xl p-6 text-white">
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-gray-400 text-sm mb-1">Est. System Size</div>
                <div className="text-2xl font-extrabold text-[#f5c518]">{results.systemSizeKw} kW</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Federal Tax Credit (30%)</div>
                <div className="text-2xl font-extrabold text-green-400">-${Number(results.federalCredit).toLocaleString()}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Payback Period</div>
                <div className="text-2xl font-extrabold text-white">{results.paybackYears} years</div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs">
              *Estimates based on EIA average rates, 30% ITC federal credit, and 85% bill offset. Actual savings vary. Schedule a free assessment for an exact quote.
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-bold px-8 py-3 rounded-xl transition-all"
              >
                Get My Personalized Quote →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}