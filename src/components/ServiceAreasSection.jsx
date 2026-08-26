import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { locations } from "@/data/locations";

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
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Local Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1528] mb-4">
            Areas We Serve in California
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore property-specific solar and battery guidance for California markets where G8
            can coordinate eligible projects with licensed installation partners.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`/solar/${location.slug}`}
              className="group rounded-2xl border border-gray-200 bg-[#f9fafb] p-4 transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                <ArrowRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#d4af37]" />
              </div>
              <span className="mt-3 block font-bold text-[#0b1528]">
                {location.city}, {location.state}
              </span>
              <span className="mt-1 block text-xs text-gray-500">Solar & battery guide</span>
            </Link>
          ))}
        </div>

        <h3 className="mb-4 mt-12 text-center text-sm font-bold uppercase tracking-widest text-[#0b1528]">
          Additional California coverage
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
          <PhoneLink
            phone={PRIMARY_PHONE}
            display={PRIMARY_PHONE_DISPLAY}
            placement="service_areas"
            className="text-[#0b1528] font-semibold underline"
          />{" "}
          and we&apos;ll confirm coverage.
        </p>
      </div>
    </section>
  );
}
