import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle, Shield } from "lucide-react";

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
    <section id="savings-form" className="py-24 bg-[#f4f5f7] relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase mb-4 block">Free Quote</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your Savings Estimate
          </h2>
          <p className="text-white/50">Fill in your info and we'll calculate your personalized estimate.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0b1528] mb-2">You're All Set!</h3>
              <p className="text-gray-500">We'll be in touch shortly. Call us at <a href="tel:6614386350" className="text-[#0b1528] font-bold underline">661-438-6350</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">Full Name *</label>
                <input
                  type="text" name="full_name" required value={form.full_name} onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">Phone *</label>
                  <input
                    type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="(661) 000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">ZIP Code *</label>
                  <input
                    type="text" name="zip_code" required value={form.zip_code} onChange={handleChange}
                    placeholder="93301"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">Email *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0b1528] mb-1.5">Monthly Electric Bill *</label>
                <select
                  name="monthly_bill" required value={form.monthly_bill} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white transition-all"
                >
                  <option value="">Select your range...</option>
                  <option value="Under $150">Under $150</option>
                  <option value="$150–$300">$150–$300</option>
                  <option value="$300–$500">$300–$500</option>
                  <option value="Over $500">Over $500</option>
                </select>
              </div>
              <button
                type="submit" disabled={loading}
                className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#0b1528] font-bold text-lg py-4 rounded-xl transition-all disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Get My Free Estimate →"}
              </button>
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