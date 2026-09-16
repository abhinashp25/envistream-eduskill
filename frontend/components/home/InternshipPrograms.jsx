"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { internshipDomains } from "@/data/homeContent";
import EnquiryModal from "@/components/common/EnquiryModal";

export default function InternshipPrograms() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleApply = (domainTitle) => {
    setSelectedDomain(domainTitle);
    setModalOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-content">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Industry Internships
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Mentored Internships Built on Real Industry Sprints
          </h2>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            As per the latest AICTE and university mandates, every tech graduate needs verifiable hands-on project experience.
            Envistream EduSkill internships combine live company assignments, daily mentor check-ins, and accredited completion letters.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {internshipDomains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="bg-surface-alt border border-line rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/15 text-accent-dark">
                    {domain.badge}
                  </span>
                  <span className="text-xs text-ink/50 font-medium">
                    {domain.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink mb-2">{domain.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-4">
                  {domain.description}
                </p>

                <div className="bg-white border border-line/60 rounded-xl p-3.5 mb-4 text-xs">
                  <p className="font-semibold text-ink mb-1">Sample Live Projects:</p>
                  <p className="text-ink/65 leading-normal">{domain.projects}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleApply(domain.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Apply for {domain.title.split(" ")[0]} Track</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Banner */}
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-wider block mb-1">
              AICTE & BPUT Standard Alignment
            </span>
            <h4 className="text-2xl font-bold mb-2">Need Mandatory University Internship Credits?</h4>
            <p className="text-white/70 text-sm max-w-xl">
              We provide official evaluation sheets, supervisor log approvals, and verifiable credentials accepted by college placement cells.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/internships"
              className="px-6 py-3 rounded-lg bg-white text-ink font-semibold text-sm hover:bg-surface-alt transition-colors"
            >
              Explore All Domains
            </a>
            <button
              onClick={() => handleApply("Mandatory Academic Internship")}
              className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Apply Online Now
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack={selectedDomain || "Internship Program"}
        title={`Apply for ${selectedDomain || "Internship Program"}`}
      />
    </section>
  );
}
