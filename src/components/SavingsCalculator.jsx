import React, { useState } from "react";
import { Calculator, Sun, DollarSign, Leaf, TrendingDown } from "lucide-react";
import {
  trackCalculatorCompleted,
  trackCalculatorStarted,
} from "@/utils/analytics";
import { navigateToLeadForm } from "@/utils/navigation";

const CALIFORNIA_UTILITIES = {
  SCE: { name: "Southern California Edison (SCE)", rate: 0.31, sun: 5.7 },
  PGE: { name: "PG&E", rate: 0.34, sun: 5.5 },
  SDGE: { name: "San Diego Gas & Electric (SDG&E)", rate: 0.41, sun: 5.8 },
  LADWP: { name: "Los Angeles DWP", rate: 0.26, sun: 5.6 },
  SMUD: { name: "SMUD", rate: 0.19, sun: 5.5 },
};

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(250);
  const [utility, setUtility] = useState("SCE");
  const [showResults, setShowResults] = useState(false);

  const handleInteraction = () => {
    trackCalculatorStarted();
  };

  const calculate = () => {
    const { rate, sun } = CALIFORNIA_UTILITIES[utility];
    const annualBill = monthlyBill * 12;
    const monthlyKwh = monthlyBill / rate;
    const systemSizeKw = monthlyKwh / (sun * 30);
    const systemCostRaw = systemSizeKw * 3000;
    const estimatedSystemCost = systemCostRaw;
    const annualSavings = annualBill * 0.70;
    const paybackYears = (estimatedSystemCost / annualSavings).toFixed(1);
    const lifetime25 = (annualSavings * 25 - estimatedSystemCost).toFixed(0);
    const co2Annual = (monthlyKwh * 12 * 0.000386).toFixed(1);

    return {
      systemSizeKw: systemSizeKw.toFixed(2),
      estimatedSystemCost: estimatedSystemCost.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      paybackYears,
      lifetime25,
      co2Annual,
      monthlySavings: (annualSavings / 12).toFixed(0),
    };
  };

  const handleCalculate = () => {
    trackCalculatorStarted();
    setShowResults(true);
    trackCalculatorCompleted();
  };

  const results = showResults ? calculate() : null;

  return (
    <section id="calculator" className="py-24 bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Savings Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Get an instant estimate based on your California utility and current electric bill.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-[#0b1528] mb-2">
                Your Utility Provider
              </label>
              <select
                value={utility}
                onChange={(e) => {
                  handleInteraction();
                  setUtility(e.target.value);
                  setShowResults(false);
                }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] bg-white"
              >
                {Object.entries(CALIFORNIA_UTILITIES).map(([code, { name }]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-400 mt-1.5">
                Est. rate: ${CALIFORNIA_UTILITIES[utility].rate}/kWh ·{" "}
                {CALIFORNIA_UTILITIES[utility].sun} peak sun hrs/day
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0b1528] mb-2">
                Monthly Bill: <span className="text-[#d4af37]">${monthlyBill}</span>
              </label>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={monthlyBill}
                onChange={(e) => {
                  handleInteraction();
                  setMonthlyBill(Number(e.target.value));
                  setShowResults(false);
                }}
                className="w-full accent-[#d4af37] mt-3"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$50</span><span>$500</span><span>$1,000</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-lg py-4 rounded-xl transition-all"
          >
            Calculate My Savings →
          </button>
        </div>

        {showResults && results && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: DollarSign, label: "Monthly Savings", value: `$${results.monthlySavings}`, sub: "Est. after solar", color: "text-green-500" },
                { icon: TrendingDown, label: "Annual Savings", value: `$${Number(results.annualSavings).toLocaleString()}`, sub: "Per year", color: "text-blue-500" },
                { icon: Sun, label: "25-Year Estimate", value: `$${Number(results.lifetime25).toLocaleString()}`, sub: "Illustrative net", color: "text-[#d4af37]" },
                { icon: Leaf, label: "CO₂ Offset", value: `${results.co2Annual} tons`, sub: "Per year", color: "text-emerald-500" },
              ].map(({ icon: Icon, label, value, sub, color }) => (
                <div key={label} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                  <Icon className={`w-7 h-7 ${color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-[#0b1528]">{value}</div>
                  <div className="text-sm font-medium text-gray-600 mt-1">{label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#0b1528] rounded-3xl p-8 text-white">
              <div className="grid sm:grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <div className="text-white/50 text-sm mb-1">System Size</div>
                  <div className="text-2xl font-bold text-[#d4af37]">{results.systemSizeKw} kW</div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Estimated System Cost</div>
                  <div className="text-2xl font-bold text-green-400">
                    ${Number(results.estimatedSystemCost).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Payback Period</div>
                  <div className="text-2xl font-bold">{results.paybackYears} years</div>
                </div>
              </div>
              <p className="text-center text-white/40 text-xs mb-4">
                *Illustration uses the selected rate, estimated production, a 70% bill offset, and a $3.00/W system-cost assumption. It excludes incentives, financing costs, rate escalation, maintenance, and taxes. Actual proposals and savings vary.
              </p>
              <div className="text-center">
                <button
                  onClick={() => navigateToLeadForm("calculator_results", "calculator_to_form")}
                  className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold px-8 py-3 rounded-full transition-all"
                >
                  Get My Personalized Quote →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
