import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/476057763_520953491_122097479000956477_4681214345456843616_n.jpg",
    label: "Residential Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    label: "Rooftop Solar Array",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    label: "Commercial Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=800&q=80",
    label: "Ground Mount System",
  },

];

export default function InstallationGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mb-4">
            Our Installations
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Professional-grade work on every job. Browse our portfolio of completed residential and commercial solar projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-square"
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-semibold">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#f5c518] transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.src}
              alt={selected.label}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white mt-4 font-semibold">{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}