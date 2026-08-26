import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ExternalLink,
  Home,
  MapPin,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";
import LeadFormSection from "@/components/LeadFormSection";
import PhoneLink from "@/components/PhoneLink";
import StickyCallBar from "@/components/StickyCallBar";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import {
  getLocationBySlug,
  getRelatedLocations,
  locationPath,
} from "@/data/locations";
import { navigateToLeadForm } from "@/utils/navigation";

const SCHEMA_ID = "g8-location-structured-data";

function getLocationFaqs(location) {
  return [
    {
      q: `How much does solar cost in ${location.city}?`,
      a: `Pricing in ${location.city} depends on electricity usage, roof conditions, electrical work, equipment, battery capacity, and financing. G8 reviews the property and utility account before providing a project-specific estimate.`,
    },
    {
      q: `Can I add battery backup to solar in ${location.city}?`,
      a: `Yes, when the property and project support it. The proposal should identify the loads you want to back up, usable battery capacity, equipment configuration, and operating assumptions. Availability is confirmed for each address.`,
    },
    {
      q: `Which utility rules apply to a ${location.city} solar project?`,
      a: `${location.utility} may apply. G8 confirms the serving utility and current rate plan for the exact address before modeling exports, storage, or estimated bill impact.`,
    },
    {
      q: `Does G8 Solar have an office in ${location.city}?`,
      a: `This page describes G8 Solar service coverage, not a storefront or local office. G8 coordinates eligible California projects with licensed installation partners and confirms coverage for each property.`,
    },
  ];
}

function LocationStructuredData({ location }) {
  useEffect(() => {
    const url = `https://g8solarenergy.com/solar/${location.slug}`;
    const faqs = getLocationFaqs(location);
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: location.title,
          description: location.description,
          isPartOf: { "@id": "https://g8solarenergy.com/#website" },
          about: { "@id": "https://g8solarenergy.com/#organization" },
          inLanguage: "en-US",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://g8solarenergy.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "California Service Areas",
              item: "https://g8solarenergy.com/#areas-served",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${location.city}, ${location.state}`,
              item: url,
            },
          ],
        },
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Solar and Battery Project Coordination in ${location.city}, California`,
          serviceType: "Residential Solar and Battery Project Coordination",
          provider: { "@id": "https://g8solarenergy.com/#organization" },
          areaServed: {
            "@type": "City",
            name: location.city,
            containedInPlace: { "@type": "State", name: "California" },
          },
          url,
          description: location.description,
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        },
      ],
    };

    let script = document.getElementById(SCHEMA_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SCHEMA_ID;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => script?.remove();
  }, [location]);

  return null;
}

function DecisionCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1528] text-[#e4bc2f]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#0b1528]">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

export default function LocationPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  if (!location) return <Navigate to="/" replace />;

  const relatedLocations = getRelatedLocations(location);
  const faqs = getLocationFaqs(location);

  return (
    <div className="font-sans">
      <LocationStructuredData location={location} />

      <main>
        <section className="relative overflow-hidden bg-[#071426] pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(38,111,158,0.35),transparent_42%),radial-gradient(circle_at_15%_90%,rgba(212,175,55,0.17),transparent_38%)]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-9">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/65">
                <li>
                  <Link to="/" className="inline-flex items-center gap-1.5 hover:text-[#e4bc2f]">
                    <Home className="h-3.5 w-3.5" /> Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">/</li>
                <li>
                  <Link to="/#areas-served" className="hover:text-[#e4bc2f]">
                    California Service Areas
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">/</li>
                <li aria-current="page" className="text-white">
                  {location.city}, {location.state}
                </li>
              </ol>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                  <MapPin className="h-4 w-4 text-[#e4bc2f]" />
                  {location.region} · {location.county}
                </div>
                <h1 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                  Solar Installation in <span className="text-[#e4bc2f]">{location.city}, CA</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                  {location.intro}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => navigateToLeadForm(`location_${location.slug}`, "quote")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e4bc2f] px-7 py-4 font-bold text-[#071426] transition hover:bg-[#f0ca3b]"
                  >
                    Get a Property-Specific Estimate <ArrowRight className="h-4 w-4" />
                  </button>
                  <PhoneLink
                    phone={PRIMARY_PHONE}
                    display={PRIMARY_PHONE_DISPLAY}
                    placement={`location_${location.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#e4bc2f] hover:text-[#e4bc2f]"
                  >
                    Call {PRIMARY_PHONE_DISPLAY}
                  </PhoneLink>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4bc2f]">
                  Start with the address
                </p>
                <h2 className="mt-3 text-2xl font-bold">What G8 verifies before recommending a system</h2>
                <ul className="mt-6 space-y-4">
                  {location.decisionFactors.map((factor) => (
                    <li key={factor} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e4bc2f]" />
                      {factor}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/15 pt-5 text-xs leading-5 text-white/60">
                  Coverage and equipment availability are confirmed for each property. This page describes a service area, not a local storefront.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28a08]">
                  Local utility context
                </span>
                <h2 className="mt-3 text-3xl font-black text-[#0b1528] sm:text-4xl">
                  Design around the account—not a statewide average
                </h2>
                <p className="mt-5 leading-7 text-slate-600">{location.utilityCopy}</p>
                <a
                  href={location.utilityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b1528] underline decoration-[#d4af37] decoration-2 underline-offset-4"
                >
                  Check the referenced utility information <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28a08]">
                  Property-specific planning
                </span>
                <h2 className="mt-3 text-3xl font-black text-[#0b1528] sm:text-4xl">
                  Solar, storage, and backup should work together
                </h2>
                <p className="mt-5 leading-7 text-slate-600">{location.localCopy}</p>
                <p className="mt-5 leading-7 text-slate-600">
                  The written proposal should identify the equipment, expected production, battery assumptions, project scope, financing terms, and warranties. Savings and timelines vary by property and are not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28a08]">
                One proposal, four answers
              </span>
              <h2 className="mt-3 text-3xl font-black text-[#0b1528] sm:text-4xl">
                What a useful {location.city} solar comparison should show
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <DecisionCard icon={Sun} title="Production fit">
                How roof exposure, system size, and equipment translate into a property-specific production estimate.
              </DecisionCard>
              <DecisionCard icon={Zap} title="Utility fit">
                How the current rate plan, load timing, and export assumptions affect the comparison.
              </DecisionCard>
              <DecisionCard icon={BatteryCharging} title="Storage fit">
                Whether storage is for self-consumption, outage backup, or both—and which loads it is designed to support.
              </DecisionCard>
              <DecisionCard icon={ShieldCheck} title="Contract fit">
                Equipment models, project scope, financing details, warranties, and installation responsibilities in writing.
              </DecisionCard>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28a08]">
                Nearby coverage
              </span>
              <h2 className="mt-3 text-3xl font-black text-[#0b1528]">Around {location.city}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                G8 may also coordinate eligible projects in nearby communities. Coverage is confirmed for the exact property before scheduling a site review.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.nearbyAreas.map((area) => (
                  <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                    {area}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-lg font-bold text-[#0b1528]">Other California guides</h3>
              <div className="mt-4 space-y-2">
                {relatedLocations.map((related) => (
                  <Link
                    key={related.city}
                    to={locationPath(related)}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#0b1528] transition hover:border-[#d4af37]"
                  >
                    Solar in {related.city}, CA <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28a08]">
                Local solar questions
              </span>
              <h2 className="mt-3 text-3xl font-black text-[#0b1528]">{location.city} solar FAQ</h2>
              <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0b1528]">
                      {faq.q}
                      <span className="text-xl text-[#b28a08] transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LeadFormSection />
      </main>

      <FooterSection />
      <StickyCallBar />
    </div>
  );
}
