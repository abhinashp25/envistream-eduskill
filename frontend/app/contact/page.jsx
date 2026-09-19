"use client";

import { useState } from "react";
import { companyDetails } from "@/data/homeContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Student Training / Internship Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-surface-alt py-12 md:py-20">
      <div className="container-content">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-ink mb-4">
            Contact Envistream EduSkill
          </h1>
          <p className="text-base text-ink/70 leading-relaxed">
            Reach out for course admissions, college internship batches, corporate upskilling proposals, or visit our Bhubaneswar technology facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect */}
            <div className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                  Call / WhatsApp
                </span>
                <div className="space-y-1">
                  {companyDetails.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="block text-base font-bold text-ink hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                  Official Email Desks
                </span>
                <div className="space-y-1">
                  {companyDetails.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm font-semibold text-ink hover:text-primary transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                  Academic Hours
                </span>
                <p className="text-xs text-ink/70 font-medium">
                  {companyDetails.hours}
                </p>
              </div>
            </div>

            {/* Physical Center Locations */}
            <div className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-ink mb-3">Our Bhubaneswar Centers</h2>

              <div className="p-4 bg-surface-alt rounded-xl border border-line text-xs">
                <span className="font-bold text-primary block mb-1">🏢 Corporate Tech &amp; Training Lab:</span>
                <p className="text-ink/75 leading-relaxed">{companyDetails.headquarters}</p>
              </div>

              <div className="p-4 bg-surface-alt rounded-xl border border-line text-xs">
                <span className="font-bold text-primary block mb-1">🏛️ Registered Office:</span>
                <p className="text-ink/75 leading-relaxed">{companyDetails.registeredOffice}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-ink">Send Us an Inquiry</h2>
                <p className="text-xs text-ink/60 mt-1">
                  Our academic advisors respond within 2 hours during active business hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Mohanty"
                        className="w-full px-4 py-2.5 text-xs rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary text-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90784 19012"
                        className="w-full px-4 py-2.5 text-xs rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary text-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 text-xs rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary text-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Inquiry Category
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-xs rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary text-ink"
                      >
                        <option value="Student Training / Internship Enquiry">Student Training / Internship Enquiry</option>
                        <option value="College / University MoU Collaboration">College / University MoU Collaboration</option>
                        <option value="Corporate Training / Upskilling">Corporate Training / Upskilling</option>
                        <option value="Certificate Verification Assistance">Certificate Verification Assistance</option>
                        <option value="Other / General Query">Other / General Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                      Your Message / Specific Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your preferred track, batch size, or timing..."
                      className="w-full px-4 py-2.5 text-xs rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary text-ink"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    {loading ? "Sending Inquiry..." : "Submit Inquiry Now"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Message Dispatched!</h3>
                  <p className="text-xs text-ink/70 max-w-sm mx-auto mb-6">
                    Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Our academic coordinator will contact you at <span className="font-semibold text-ink">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-ink text-white text-xs font-semibold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
