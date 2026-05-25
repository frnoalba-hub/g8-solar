import React from "react";
import { Quote } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: editorial copy */}
          <div className="lg:col-span-7">
            <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">About G8 Solar</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0b1528] mt-2 leading-[1.05] mb-8">
              We design solar<br />
              <em className="text-[#d4af37] not-italic">that actually pays off.</em>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most solar companies sell you a generic system and disappear. We don't.
              Every G8 Solar install is custom-engineered to your home's exact usage —
              so you maximize savings, not just panels on a roof.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              From the first assessment to 10 years of monitoring, we treat your roof
              like our own investment. That's how we've earned a 4.9-star rating from
              hundreds of California homeowners.
            </p>

            {/* Founder quote */}
            <div className="border-l-2 border-[#d4af37] pl-6 py-2">
              <Quote className="w-6 h-6 text-[#d4af37]/40 mb-3" />
              <p
                className="text-[#0b1528] text-xl leading-relaxed mb-3 italic"
                style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
              >
                "We don't sell panels. We deliver decades of energy independence — engineered, installed, and guaranteed."
              </p>
              <p className="text-gray-500 text-sm font-semibold tracking-wider uppercase">— The G8 Solar Team</p>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Solar installation by G8 Solar"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating credibility card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#0b1528] text-white rounded-2xl p-6 shadow-2xl max-w-[240px]">
                <div className="text-4xl text-[#d4af37] font-black leading-none mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  500+
                </div>
                <p className="text-white/70 text-sm leading-snug">
                  California homes powered by G8 Solar since launch.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}