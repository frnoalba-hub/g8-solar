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

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Dirty solar panels - Before cleaning"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">BEFORE</span>
              <p className="text-white font-bold text-lg">Dirty, Dusty Panels</p>
              <p className="text-gray-300 text-sm">Up to 25% energy loss from dirt, dust & bird droppings</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
              alt="Clean solar panels - After cleaning"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">AFTER</span>
              <p className="text-white font-bold text-lg">Clean, Optimized Panels</p>
              <p className="text-gray-300 text-sm">Full efficiency restored — maximum savings</p>
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