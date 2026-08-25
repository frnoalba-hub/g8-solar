import React, { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq-section" className="py-24 bg-[#f4f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase font-semibold">
                FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0b1528] mt-2 leading-[1.05]">
                Questions,
                <br />
                <em className="text-[#d4af37] not-italic">answered.</em>
              </h2>
              <p className="text-gray-500 mt-6 text-base leading-relaxed max-w-sm">
                Everything you might want to know — from federal tax credits to NEM 3.0, batteries,
                and what a typical system looks like.
              </p>

              <div className="mt-10 pt-8 border-t border-[#0b1528]/10">
                <p className="text-sm text-gray-400 mb-3">Need a human answer?</p>
                <PhoneLink
                  phone={PRIMARY_PHONE}
                  display={PRIMARY_PHONE_DISPLAY}
                  placement="faq_section"
                  className="inline-flex items-center gap-2 text-[#0b1528] font-semibold hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PRIMARY_PHONE_DISPLAY}
                </PhoneLink>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#0b1528]/10 border-t border-b border-[#0b1528]/10">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    >
                      <span
                        className={`text-base sm:text-lg leading-snug transition-colors ${
                          isOpen
                            ? "text-[#0b1528] font-semibold"
                            : "text-[#0b1528]/80 group-hover:text-[#0b1528]"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#d4af37]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#0b1528]/40 group-hover:text-[#0b1528]" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-6 pr-12" : "max-h-0"}`}
                    >
                      <p className="text-gray-500 text-[15px] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
