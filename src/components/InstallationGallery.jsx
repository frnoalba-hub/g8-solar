import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/2dc7b5e1f_520290366_122097521804956477_3876412543612886338_n.jpg",
    label: "Residential Solar",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/f39514e73_522671481_122097526730956477_7905363760210299423_n.jpg",
    label: "Commercial Solar",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/94e8537cb_521175899_122097525410956477_3050851786154508164_n.jpg",
    label: "Energy Modeling",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/c098e7ef5_522219909_122097524990956477_4978393624519453083_n.jpg",
    label: "Maintenance & Cleaning",
  },
];

export default function InstallationGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="installation-portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            Our Installations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Professional-grade work on every job. Browse our completed projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-square"
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0b1528]/0 group-hover:bg-[#0b1528]/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-medium">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-[#d4af37] transition-colors" onClick={() => setSelected(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.label} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <p className="text-center text-white mt-4 font-medium">{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}