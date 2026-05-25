import React from "react";
import { Droplets, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const tips = [
  { icon: AlertTriangle, color: "text-red-400", title: "Dust & Pollen", desc: "California's dry climate means panels accumulate dust fast. Clean every 3–6 months." },
  { icon: TrendingDown, color: "text-orange-400", title: "25% Output Loss", desc: "Soiled panels can lose over a quarter of their generating capacity during peak summer." },
  { icon: Droplets, color: "text-blue-400", title: "Simple Care", desc: "A soft brush and garden hose is all it takes. No harsh chemicals needed." },
  { icon: CheckCircle, color: "text-green-400", title: "Pro Cleaning", desc: "G8 Solar offers professional cleaning to keep your system at peak performance." },
];

export default function PanelCleaningSection() {
  return (
    <section className="py-24 bg-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">Maintenance</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-[1.05]">
              Dirty panels lose<br />
              <em className="text-[#d4af37] not-italic">25% of their output.</em>
            </h2>
            <p className="text-white/50 mt-6 text-lg leading-relaxed max-w-lg">
              Regular cleaning protects your investment. We handle it for you, or show you how to do it yourself in 20 minutes.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Clean solar panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-[#d4af37] text-[#0b1528] text-xs font-bold px-3 py-1 rounded-full mb-3">PEAK PERFORMANCE</div>
                <p className="text-white text-2xl leading-tight" style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}>
                  Clean panels = full savings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {tips.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-[#0b1528] p-6 hover:bg-[#0f1a2e] transition-colors">
              <Icon className={`w-6 h-6 ${color} mb-4`} />
              <h3 className="font-semibold text-white mb-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}