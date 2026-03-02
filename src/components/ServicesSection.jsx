import React from "react";
import { Home, Building2, BarChart3, Activity } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Turn your roof into an asset and reduce or eliminate your electric bill.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/2dc7b5e1f_520290366_122097521804956477_3876412543612886338_n.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Lower operating costs and take advantage of available tax incentives.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/f39514e73_522671481_122097526730956477_7905363760210299423_n.jpg",
  },
  {
    icon: BarChart3,
    title: "Custom Energy Modeling",
    desc: "We analyze your usage to maximize ROI and system efficiency.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/94e8537cb_521175899_122097525410956477_3050851786154508164_n.jpg",
  },
  {
    icon: Activity,
    title: "Maintenance & Monitoring",
    desc: "Keep your system performing at peak output year-round.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/c098e7ef5_522219909_122097524990956477_4978393624519453083_n.jpg",
  },
];

export default function ServicesSection() {
  const scrollToForm = () => {
    document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-4">Our Solar Solutions</h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, img }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              onClick={scrollToForm}
            >
              <div className="h-44 overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-gray-300 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                </div>
              </div>
              <div className="p-5">
                <div className="w-10 h-10 bg-[#f5c518]/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#f5c518]" />
                </div>
                <h3 className="text-[#0a1628] font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}