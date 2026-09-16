"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from "@/components/common/EnquiryModal";

const collaborationAreas = [
  {
    title: "Student Internship MoUs",
    desc: "Seamless fulfillment of AICTE and university mandatory 4-8-12 week internship credits for batch students with structured logs.",
  },
  {
    title: "Faculty Development Programs (FDP)",
    desc: "Hands-on upskilling for engineering and MCA faculty on emerging AI tools, LLM deployment, and modern cloud stacks.",
  },
  {
    title: "Campus Center of Excellence",
    desc: "Co-branded emerging tech labs and workshop series hosted directly on your college premises or in our Bhubaneswar facilities.",
  },
  {
    title: "Placement Drives & Referrals",
    desc: "Connecting your final-year students with our hiring partner network across IT hubs in Bhubaneswar, Bengaluru, and Hyderabad.",
  },
];

export default function InstitutionalPartnerships() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-surface-alt border-b border-line relative">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Campus &amp; MoU Programs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Partnering with Colleges, Universities &amp; Placement Cells
          </h2>
          <p className="text-base text-ink/70 leading-relaxed mb-8">
            Colleges across Odisha and eastern India collaborate with Envistream EduSkill to elevate their placement statistics, train faculty in modern industry standards, and fulfill mandatory AICTE internship compliances.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {collaborationAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="bg-white border border-line rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <h3 className="font-bold text-ink text-sm">{area.title}</h3>
                </div>
                <p className="text-xs text-ink/65 leading-relaxed pl-4">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              Request Institutional Partnership MoU
            </button>
            <a
              href="/for-institutions"
              className="px-6 py-3 rounded-lg border border-line bg-white hover:bg-surface text-ink font-semibold text-sm transition-all"
            >
              Explore Campus Programs →
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-line rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
              Corporate &amp; Academic Network
            </span>
            <h3 className="text-xl font-bold text-ink mb-4">
              Trusted Academic Partner in Bhubaneswar
            </h3>
            <div className="space-y-4 text-xs text-ink/75">
              <div className="p-3 bg-surface-alt rounded-lg border border-line">
                <span className="font-semibold text-ink block">📍 DLF Cyber City Presence:</span>
                Located at DCB-907, 9th Floor, DLF Cyber City, Patia, right in the heart of Odisha&apos;s leading technology corridor.
              </div>
              <div className="p-3 bg-surface-alt rounded-lg border border-line">
                <span className="font-semibold text-ink block">📜 AICTE Model Curriculum:</span>
                Evaluated and signed-off internship logbooks with supervisor grading sheets for university credit submission.
              </div>
              <div className="p-3 bg-surface-alt rounded-lg border border-line">
                <span className="font-semibold text-ink block">🤝 Flexible MoU Formats:</span>
                Customizable agreements for 1-month summer batches, 6-month final-semester internships, and on-campus bootcamps.
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack="Institutional MoU Partnership"
        title="College & University Collaboration Request"
      />
    </section>
  );
}
