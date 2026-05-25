import React from "react";
import { ClipboardCheck, Hammer, Wrench, Gauge } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Roof Assessment",
    description: "We inspect your existing roof to determine the best approach — including whether a re-roof is needed before installation.",
    images: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/aed944382_f27e9a66-adda-4ff2-b1a2-9c58b18400b5.jpeg",
        alt: "Roof before solar — assessment",
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/f5d8ae01a_ffc7ab53-0999-42db-9b34-869151856ebc.jpeg",
        alt: "Full roof view before work",
      },
    ],
  },
  {
    step: 2,
    icon: Hammer,
    title: "Prep & Layout",
    description: "Fresh shingles go down, precision chalk lines are snapped, and mounting feet are positioned for optimal panel placement.",
    images: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/f857ea075_4be47bf3-fa8f-4976-b886-2aaa9defc422.jpeg",
        alt: "New roof with chalk lines and mounting feet",
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/5c49a3e8c_4e49148f-121e-4372-97f3-63619051016e.jpeg",
        alt: "Mounting feet installed on new shingles",
      },
    ],
  },
  {
    step: 3,
    icon: Wrench,
    title: "Racking Installation",
    description: "Heavy-duty rails are mounted to the roof structure, creating the framework that securely holds your solar panels.",
    images: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/ec3747649_1693089e-c7ff-49fb-b792-c1e83c3614b5.jpeg",
        alt: "Rails installed on roof",
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/2441d77bc_881e8a6d-c842-424e-8f8e-a3933d8bf690.jpeg",
        alt: "Close-up of racking system",
      },
    ],
  },
  {
    step: 4,
    icon: Gauge,
    title: "Precision & Quality",
    description: "Every angle and measurement is verified with professional-grade tools — ensuring maximum energy output and structural integrity.",
    images: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/913e9f665_203a78c2-232b-4c61-9c2c-95c4f8f01ed3.jpeg",
        alt: "Empire angle finder — precision measurement",
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a537c21eb5bc0a1e508288/c8ef49407_40e5e375-c48c-4355-852d-c05f09507908.jpeg",
        alt: "Completed new roof with all mounts",
      },
    ],
  },
];

export default function InstallationProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f1a2e] to-[#0b1528]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Behind the Scenes</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Installation Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From roof assessment to final panel placement — see how we do it right, every time.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map(({ step, icon: Icon, title, description, images }, i) => (
            <div
              key={step}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <span className="text-[#d4af37] font-bold text-sm uppercase tracking-wider">Step {step}</span>

                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
              </div>

              {/* Images Side */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                {images.map((img, j) => (
                  <div key={j} className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}