import React from "react";
import { Link } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <Link
          to="/"
          className="text-sm font-semibold text-[#d4af37] hover:text-[#c4a030] mb-8 inline-block"
        >
          ← Back to G8 Solar
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b1528] mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: August 24, 2026 · G8 Solar LLC
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0b1528] mb-3">Overview</h2>
            <p>
              G8 Solar LLC ("G8 Solar," "we," "us") operates the website at g8solarenergy.com. This
              page describes how we handle information submitted through our website forms and
              contact features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1528] mb-3">Information We Collect</h2>
            <p>
              When you request a savings estimate or contact us, we may collect information you
              provide directly, such as your name, phone number, email address, ZIP code, monthly
              electric bill range, optional message, and any file you choose to upload (for example,
              a utility bill or site photo).
            </p>
            <p className="mt-3">
              We may also collect technical and marketing attribution data such as the page you
              landed on, referring URL, and campaign parameters (for example UTM tags or ad click
              identifiers) to understand how visitors found our site.
            </p>
            <p className="mt-3">
              We use Google advertising measurement to record confirmed form submissions and may
              use Google forwarding numbers to measure calls connected after an ad or website
              visit, including call timing and duration. These signals help us evaluate advertising
              performance and are not treated as proof that a caller became a customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1528] mb-3">How We Use Information</h2>
            <p>
              We use submitted information to respond to your request, provide estimates,
              schedule consultations, and follow up about solar services you asked about.
            </p>
            <p className="mt-3">
              We retain information for as long as reasonably needed to respond to your request,
              maintain business records, and meet applicable legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1528] mb-3">Sharing</h2>
            <p>
              Information may be processed through service providers that help us deliver email
              notifications and store lead records. We do not sell personal information.
            </p>
            <p className="mt-3">
              We may also share request details with service providers and licensed project
              partners when needed to respond, prepare an estimate, or coordinate requested work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1528] mb-3">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:info@g8solar.com" className="text-[#0b1528] font-semibold underline">
                info@g8solar.com
              </a>
              {" · "}
              <PhoneLink
                phone={PRIMARY_PHONE}
                display={PRIMARY_PHONE_DISPLAY}
                placement="privacy_policy"
                className="text-[#0b1528] font-semibold underline"
              />
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
