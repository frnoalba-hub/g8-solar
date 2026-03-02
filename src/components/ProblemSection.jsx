import React from "react";

const stats = [
  { value: "$0", label: "Down Financing" },
  { value: "30%", label: "Federal Tax Credit" },
  { value: "25+", label: "Year Warranty" },
  { value: "500+", label: "Projects Completed" },
];

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">About G8 Solar</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] leading-tight mb-6">
              Tired of Unpredictable Energy Bills?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              At G8 Solar, we design high-efficiency solar systems tailored to your exact consumption.
              From initial assessment to long-term performance monitoring, we make the switch to clean energy
              simple, reliable, and cost-effective.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#f8f9fc] rounded-2xl p-5 text-center border border-gray-100">
                  <div className="text-3xl font-extrabold text-[#d4af37] mb-1">{value}</div>
                  <div className="text-sm text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg"
                alt="Solar installation"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#0b1528] rounded-2xl shadow-xl p-5 border border-[#d4af37]/30">
              <div className="text-2xl font-bold text-[#d4af37]">A+</div>
              <div className="text-sm text-white/70">Rated by Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}