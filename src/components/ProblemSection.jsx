import React from "react";

export default function ProblemSection() {
  const stats = [
    { value: "$0", label: "Down Financing" },
    { value: "30%", label: "Federal Tax Credit" },
    { value: "25+", label: "Year Lifespan" },
    { value: "100%", label: "Custom Designs" },
  ];

  return (
    <section id="problem-section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">About G8 Solar</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] leading-tight mb-6">
              Tired of Unpredictable Energy Bills?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              At G8 Solar, we design high-efficiency solar systems tailored to your exact consumption.
              From initial site assessment to long-term performance, we make the switch to clean energy
              simple, reliable, and cost-effective.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#f8f9fc] rounded-2xl p-5 text-center border border-gray-100">
                  <div className="text-3xl font-bold text-[#d4af37]">{value}</div>
                  <div className="text-sm text-gray-500 font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg"
                alt="Solar installation"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-2xl font-bold text-[#0b1528]">500+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}