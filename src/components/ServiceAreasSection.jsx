import React from "react";
import { MapPin } from "lucide-react";

const serviceAreas = [
  "Los Angeles",
  "Pasadena",
  "Arcadia",
  "Glendora",
  "Rancho Cucamonga",
  "Riverside",
  "San Bernardino",
  "Ontario",
  "Anaheim",
  "Irvine",
  "Long Beach",
  "Ventura",
  "Thousand Oaks",
  "Santa Clarita",
  "Lancaster",
  "Palmdale",
  "Bakersfield",
  "Palm Springs",
];

export default function ServiceAreasSection() {
  return (
    <section id="areas-served" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">Local Coverage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            Areas We Serve in California
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            G8 Solar serves homeowners and businesses across Southern and Central California with
            residential solar, commercial solar, and battery storage installations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {serviceAreas.map((city) => (
            <div
              key={city}
              className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#0b1528] bg-[#f9fafb] flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>{city}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don&apos;t see your city listed? Call{" "}
          <a href="tel:6264049357" className="text-[#0b1528] font-semibold underline">
            (626) 404-9357
          </a>{" "}
          and we&apos;ll confirm coverage.
        </p>
      </div>
    </section>
  );
}
