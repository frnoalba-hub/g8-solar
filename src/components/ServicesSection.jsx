import React from "react";
import { Home, Building2, BarChart3, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Turn your roof into an asset and reduce or eliminate your electric bill with a custom-designed system.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/2dc7b5e1f_520290366_122097521804956477_3876412543612886338_n.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Lower operating costs and take advantage of available tax incentives for your business.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/f39514e73_522671481_122097526730956477_7905363760210299423_n.jpg",
  },
  {
    icon: BarChart3,
    title: "Energy Modeling",
    desc: "We analyze your usage patterns to maximize ROI and system efficiency before installation.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/94e8537cb_521175899_122097525410956477_3050851786154508164_n.jpg",
  },
  {
    icon: Activity,
    title: "Maintenance",
    desc: "Keep your system performing at peak output year-round with monitoring and cleaning.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/c098e7ef5_522219909_122097524990956477_4978393624519453083_n.jpg",
  },
];

export default function ServicesSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services-section" className="py-24 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528]">
            Our Solar Solutions
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, img }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={scrollToForm}
            >
              <div className="h-48 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-[#0b1528] font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-[#d4af37] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}