"use client";

import { useState } from "react";
import EnquiryModal from "@/components/common/EnquiryModal";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Start Your Learning Journey");

  const openModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-content text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 text-accent-dark text-xs font-semibold uppercase tracking-wider mb-4">
          Admissions Open For Upcoming Batches
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6 leading-tight">
          Start Your Learning Journey With Envistream EduSkill
        </h2>
        <p className="text-base md:text-lg text-ink/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you need university internship credits, high-demand full stack skills, or an institutional MoU for your college batch, our academic team is ready to assist you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => openModal("Apply for Upcoming Batch")}
            className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Apply Now
          </button>
          <button
            onClick={() => openModal("Request Counsellor Callback")}
            className="px-8 py-3.5 rounded-xl border border-line bg-surface-alt hover:bg-white text-ink font-semibold text-sm transition-all shadow-sm cursor-pointer"
          >
            Talk to a Counsellor
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-wrap justify-center items-center gap-8 text-xs text-ink/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Batches Starting Every Monday</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Virtual &amp; DLF Cyber City Lab Options</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Verified AICTE &amp; University Aligned</span>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack="General Fast-Track Admission"
        title={modalTitle}
      />
    </section>
  );
}
