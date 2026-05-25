import React from "react";
import { Droplets, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export default function PanelCleaningSection() {
  const tips = [
    { icon: AlertTriangle, color: "text-red-500", title: "Dust & Pollen", desc: "California's dry climate means panels accumulate dust fast. Clean every 3–6 months." },
    { icon: TrendingDown, color: "text-orange-500", title: "25% Output Loss", desc: "Soiled panels can lose over a quarter of their generating capacity during peak summer." },
    { icon: Droplets, color: "text-blue-500", title: "Simple Care", desc: "A soft brush and garden hose is all it takes. No harsh chemicals needed." },
    { icon: CheckCircle, color: "text-green-500", title: "Pro Cleaning", desc: "G8 Solar offers professional cleaning to keep your system at peak performance." },
  ];

  return (
    <section className="py-24 bg-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Maintenance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Keep Your Panels <span className="text-[#d4af37]">Clean</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Dirty panels can lose 15–25% efficiency. Regular cleaning protects your investment.
          </p>
        </div>

        {/* Before / After */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/6f1c6feb9_520953491_122097479000956477_4681214345456843616_n.jpg"
                  alt="Before"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "left center", transform: "scaleX(2)", transformOrigin: "left center" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">BEFORE</span>
                <p className="text-white font-bold">Dirty Panels</p>
                <p className="text-white/60 text-sm">Up to 25% energy loss</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/6f1c6feb9_520953491_122097479000956477_4681214345456843616_n.jpg"
                  alt="After"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "right center", transform: "scaleX(2)", transformOrigin: "right center" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">AFTER</span>
                <p className="text-white font-bold">Clean Panels</p>
                <p className="text-white/60 text-sm">Full efficiency restored</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tips.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <Icon className={`w-7 h-7 ${color} mb-4`} />
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}