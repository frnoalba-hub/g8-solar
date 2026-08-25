import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle, Shield, UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneLink from "@/components/PhoneLink";
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/constants/brand";
import { getAttributionFields, getLeadSourceLabel } from "@/utils/attribution";
import { trackLeadConversion } from "@/utils/analytics";

const formSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  zip_code: z.string().min(5, "Valid ZIP code is required"),
  email: z.string().email("Valid email is required"),
  monthly_bill: z.string().min(1, "Please select your monthly bill range"),
  message: z.string().optional(),
});

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function getServiceInterestFromUrl() {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("service") || "";
}

async function sendLeadEmail(data, document_url, attribution) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      "Form email delivery is not configured. Please call us at " + PRIMARY_PHONE_DISPLAY + ".",
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Solar Lead – ${data.full_name}`,
      from_name: "G8 Solar Website",
      name: data.full_name,
      phone: data.phone,
      email: data.email,
      zip_code: data.zip_code,
      monthly_bill: data.monthly_bill,
      message: data.message || "No message provided",
      document_url: document_url || "None uploaded",
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_term: attribution.utm_term,
      utm_content: attribution.utm_content,
      gclid: attribution.gclid,
      gbraid: attribution.gbraid,
      wbraid: attribution.wbraid,
      landing_page_url: attribution.landing_page_url,
      referrer_url: attribution.referrer_url,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Email delivery failed. Please call us at " + PRIMARY_PHONE_DISPLAY + ".",
    );
  }
}

async function saveLeadToBase44(data, document_url, attribution) {
  await base44.entities.Lead.create({
    ...data,
    document_url,
    ...attribution,
  });
}

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setUploadError("File size must be less than 10MB");
        setFile(null);
      } else {
        setUploadError("");
        setFile(selectedFile);
      }
    }
  };

  const onSubmit = async (data) => {
    if (loading || submitted) return;

    setSubmitError("");
    setLoading(true);

    try {
      const attribution = getAttributionFields();
      let document_url;

      if (file) {
        try {
          const res = await base44.integrations.Core.UploadFile({ file });
          document_url = res.file_url;
        } catch (uploadErr) {
          console.warn("File upload failed; submitting lead without attachment:", uploadErr);
        }
      }

      let emailDelivered = false;
      let base44Saved = false;

      try {
        await sendLeadEmail(data, document_url, attribution);
        emailDelivered = true;
      } catch (emailError) {
        console.error("Web3Forms submission failed:", emailError);
      }

      try {
        await saveLeadToBase44(data, document_url, attribution);
        base44Saved = true;
      } catch (base44Error) {
        console.warn("Base44 lead save failed:", base44Error);
      }

      if (!emailDelivered && !base44Saved) {
        throw new Error(
          "We could not save your request. Please try again or call " + PRIMARY_PHONE_DISPLAY + ".",
        );
      }

      trackLeadConversion({
        formName: "savings_estimate",
        language: document.documentElement.lang || "en",
        serviceInterest: getServiceInterestFromUrl(),
        leadSource: getLeadSourceLabel(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error?.message ||
          "An error occurred while submitting. Please try again or call " + PRIMARY_PHONE_DISPLAY + ".",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="savings-form"
      className="py-24 bg-gradient-to-br from-[#0b1528] to-[#0f1a2e] relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#d4af37] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Free Quote
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your Savings Estimate
          </h2>
          <p className="text-gray-300">
            Fill in your info and we'll calculate your personalized estimate.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0b1528] mb-2">You're All Set!</h3>
              <p className="text-gray-500">
                We'll be in touch shortly. Call us at{" "}
                <PhoneLink
                  phone={PRIMARY_PHONE}
                  display={PRIMARY_PHONE_DISPLAY}
                  placement="lead_form_success"
                  className="text-[#0b1528] font-bold underline"
                />
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {submitError}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("full_name")}
                  placeholder="John Smith"
                  className={`w-full border rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${errors.full_name ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="(661) 000-0000"
                    className={`w-full border rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    {...register("zip_code")}
                    placeholder="93301"
                    className={`w-full border rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${errors.zip_code ? "border-red-500" : "border-gray-200"}`}
                  />
                  {errors.zip_code && (
                    <p className="text-red-500 text-xs mt-1">{errors.zip_code.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="john@email.com"
                  className={`w-full border rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                  Monthly Electric Bill *
                </label>
                <select
                  {...register("monthly_bill")}
                  className={`w-full border rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white transition-all ${errors.monthly_bill ? "border-red-500" : "border-gray-200"}`}
                >
                  <option value="">Select your range...</option>
                  <option value="Under $150">Under $150</option>
                  <option value="$150–$300">$150–$300</option>
                  <option value="$300–$500">$300–$500</option>
                  <option value="Over $500">Over $500</option>
                </select>
                {errors.monthly_bill && (
                  <p className="text-red-500 text-xs mt-1">{errors.monthly_bill.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                  Message / Additional Notes (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us anything else about your home, questions you have, or the best time to reach you..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">
                  Upload Site Photo or Bill (Optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-colors w-full">
                    <UploadCloud className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 truncate">
                      {file ? file.name : "Choose a file..."}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {uploadError && <p className="text-red-500 text-xs mt-1">{uploadError}</p>}
                <p className="text-xs text-gray-400 mt-1.5">Max size 10MB. Images or PDF.</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-lg py-4 rounded-xl transition-all disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0b1528] border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  "Get My Free Estimate →"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree that G8 Solar LLC may use your information to
                respond to your request. See our{" "}
                <a href="/PrivacyPolicy" className="text-[#0b1528] font-semibold underline">
                  Privacy Policy
                </a>
                .
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4" />
                Zero-pressure consultation. No obligation.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
