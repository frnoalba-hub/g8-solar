import React from "react";
import { Droplets, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export default function PanelCleaningSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            Keep Your Panels Clean — <span className="text-[#f5c518]">Maximize Your Output</span>
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Dirty panels can lose 15–25% of efficiency. Regular cleaning is the simplest way to protect your investment.
          </p>
        </div>

        {/* Before / After - Real G8 Solar Image */}
        <div className="mb-14">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/6f1c6feb9_520953491_122097479000956477_4681214345456843616_n.jpg"
              alt="Solar panel before and after cleaning - G8 Solar"
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 w-1/2 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-bl-2xl">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">BEFORE</span>
              <p className="text-white text-sm font-semibold">Dirty, dusty panels — up to 25% energy loss</p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-br-2xl text-right">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">AFTER</span>
              <p className="text-white text-sm font-semibold">Clean panels — full efficiency restored</p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: AlertTriangle, color: "text-red-500", title: "Dust & Pollen", desc: "California's dry climate means panels accumulate dust fast. Clean every 3–6 months." },
            { icon: TrendingDown, color: "text-orange-500", title: "25% Output Loss", desc: "Soiled panels can lose over a quarter of their generating capacity during peak summer." },
            { icon: Droplets, color: "text-blue-500", title: "Simple Maintenance", desc: "A soft brush and garden hose is all it takes. No harsh chemicals needed." },
            { icon: CheckCircle, color: "text-green-500", title: "Pro Cleaning Available", desc: "G8 Solar offers professional cleaning services to keep your system at peak performance." },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Icon className={`w-8 h-8 ${color} mb-3`} />
              <h3 className="font-bold text-[#0a1628] dark:text-white mb-2">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}