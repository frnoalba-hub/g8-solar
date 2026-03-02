import React from "react";

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-4">
            Real Results. Real Installations.
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 text-lg">Professional-grade work on every job.</p>
        </div>

        {/* Before/After */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/f2d9c5d53_523821052_122097473264956477_801889587701304817_n.jpg"
            alt="Before and After Solar Panel Cleaning"
            className="w-full object-cover"
          />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/8f4f1a847_519699786_122097527300956477_3580930224089726525_n.jpg",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/5fb12bc7c_522492020_122097528488956477_8209884894321676853_n.jpg",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/c098e7ef5_522219909_122097524990956477_4978393624519453083_n.jpg",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={src} alt={`G8 Solar Installation ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}