"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal({ isOpen, onClose, defaultTrack = "General Enquiry", title = "Get in Touch with an Academic Counsellor" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: defaultTrack,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultTrack) {
      setFormData((prev) => ({ ...prev, program: defaultTrack }));
    }
  }, [defaultTrack]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead submission with short delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-line overflow-hidden p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-ink/40 hover:text-ink transition-colors p-1 rounded-full hover:bg-surface-alt"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                  Envistream Academic Advisory
                </span>
                <h3 className="text-2xl font-bold text-ink">{title}</h3>
                <p className="text-sm text-ink/60 mt-1">
                  Have questions about courses, internships, or fees? Our counsellors will guide you within 2 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="e.g. Priyanshu Das"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary transition-all text-ink"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 90784 19012"
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary transition-all text-ink"
                    />
                  </div>
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
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary transition-all text-ink"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary transition-all text-ink"
                  >
                    <option value="AI & Generative AI">AI & Generative AI</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Software Testing & Cypress Automation">Software Testing & Cypress Automation</option>
                    <option value="Data Science & Business Analytics">Data Science & Business Analytics</option>
                    <option value="ERP & SAP Training">ERP & SAP Training</option>
                    <option value="Digital Marketing & AI SEO">Digital Marketing & AI SEO</option>
                    <option value="College Mandatory Internship Track">College Mandatory Internship Track (AICTE / BPUT)</option>
                    <option value="Institutional MoU / Campus Program">Institutional MoU / Campus Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Questions or College / Current Status (Optional)
                  </label>
                  <textarea
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. 6th sem B.Tech student looking for 2-month summer internship"
                    className="w-full px-4 py-2 text-sm rounded-lg border border-line bg-surface-alt/50 focus:bg-white focus:outline-none focus:border-primary transition-all text-ink"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending details...</span>
                    ) : (
                      <span>Request Instant Callback & Syllabus</span>
                    )}
                  </button>
                  <p className="text-center text-xs text-ink/40 mt-2">
                    🔒 No spam guarantee. Direct connection with Envistream counsellors.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-ink mb-2">Enquiry Received!</h4>
              <p className="text-sm text-ink/70 max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Our admissions coordinator will reach out to you at <span className="font-semibold text-ink">{formData.phone}</span> with the program curriculum and batch schedule.
              </p>
              <button
                onClick={handleReset}
                className="py-2.5 px-6 bg-ink text-white text-sm font-medium rounded-lg hover:bg-ink/90 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
