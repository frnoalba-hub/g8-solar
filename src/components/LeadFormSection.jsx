import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle } from "lucide-react";

export default function LeadFormSection() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    monthly_bill: "",
    zip_code: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Lead.create(form);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="savings-form" className="py-20 bg-gradient-to-br from-[#0a1628] to-[#132240]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            See How Much You Could Save
          </h2>
          <div className="w-16 h-1 bg-[#f5c518] mx-auto rounded-full" />
          <p className="text-gray-300 mt-4">Fill in your info and we'll calculate your personalized savings estimate.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0a1628] mb-2">You're All Set!</h3>
              <p className="text-gray-600">We'll be in touch shortly with your personalized savings estimate. Questions? Call us at <a href="tel:6614386350" className="text-[#0a1628] font-bold underline">661-438-6350</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  required
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(661) 000-0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    name="zip_code"
                    required
                    value={form.zip_code}
                    onChange={handleChange}
                    placeholder="93301"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Average Monthly Electric Bill *</label>
                <select
                  name="monthly_bill"
                  required
                  value={form.monthly_bill}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent bg-white"
                >
                  <option value="">Select your range...</option>
                  <option value="Under $150">Under $150</option>
                  <option value="$150–$300">$150–$300</option>
                  <option value="$300–$500">$300–$500</option>
                  <option value="Over $500">Over $500</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f5c518] hover:bg-[#e0b015] text-[#0a1628] font-extrabold text-lg py-4 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Calculate My Savings →"}
              </button>
              <p className="text-center text-gray-400 text-sm mt-2">
                Zero-pressure consultation. No obligation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}