import React from "react";

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-6">
            Tired of Unpredictable Energy Bills?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At G8 Solar, we design high-efficiency solar systems tailored to your exact consumption.
            From initial site assessment to long-term performance, we make the switch to clean energy
            simple, reliable, and profitable.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "$0", label: "Down Financing Available" },
              { value: "30%", label: "Federal Tax Credit" },
              { value: "25+", label: "Year Panel Lifespan" },
              { value: "100%", label: "Custom-Designed Systems" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#f0f6ff] rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-[#f5c518]">{value}</div>
                <div className="text-sm text-[#0a1628] font-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg"
            alt="Solar installation on home"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}