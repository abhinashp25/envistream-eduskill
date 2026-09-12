"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Certifications() {
  const router = useRouter();
  const [certCode, setCertCode] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certCode.trim()) return;
    router.push(`/verify-certificate?code=${encodeURIComponent(certCode.trim())}`);
  };

  return (
    <section className="relative py-20 md:py-28 border-y border-line overflow-hidden bg-gradient-to-tr from-primary/5 via-surface-alt to-accent/5">
      <div className="container-content relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Accredited Certifications
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Industry-Recognized, Verifiable Credentials
          </h2>
          <p className="text-base text-ink/70 leading-relaxed mb-6 max-w-xl">
            Every course, internship, and institutional workshop completion is registered with a tamper-proof certificate ID and QR code. Employers and university verification cells can validate authentic candidate records 24x7.
          </p>

          <div className="space-y-3 mb-8 text-xs md:text-sm text-ink/80">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
              <span>Unique Alpha-Numeric Verification Hash (e.g. EVS-2026-AI-000123)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
              <span>Direct shareable link for LinkedIn Certifications and CV attachments</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
              <span>Includes detailed domain competencies, project title, and performance score</span>
            </div>
          </div>

          <form onSubmit={handleVerify} className="max-w-md flex gap-2">
            <input
              type="text"
              value={certCode}
              onChange={(e) => setCertCode(e.target.value)}
              placeholder="Try sample: EVS-2026-AI-000123"
              className="flex-1 px-4 py-2.5 rounded-lg border border-line bg-white text-sm text-ink focus:outline-none focus:border-primary shadow-sm"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Verify
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-line/80 rounded-2xl p-6 md:p-8 shadow-xl relative font-sans">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Envistream EduSkill</p>
                <p className="text-sm font-bold text-ink">Certificate of Professional Excellence</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                Verified ✓
              </span>
            </div>

            <div className="space-y-3 text-xs mb-6">
              <div>
                <p className="text-ink/50 text-[11px]">Recipient Name</p>
                <p className="text-sm font-bold text-ink">Tanmay Kumar Sahoo</p>
              </div>
              <div>
                <p className="text-ink/50 text-[11px]">Domain Track</p>
                <p className="font-semibold text-ink">Full Stack Web &amp; Node/React Internship</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line/60">
                <div>
                  <p className="text-ink/50 text-[11px]">Certificate ID</p>
                  <p className="font-mono text-ink font-semibold">EVS-2026-AI-000123</p>
                </div>
                <div>
                  <p className="text-ink/50 text-[11px]">Status</p>
                  <p className="text-primary font-semibold">AICTE / BPUT Aligned</p>
                </div>
              </div>
            </div>

            <a
              href="/verify-certificate?code=EVS-2026-AI-000123"
              className="block w-full text-center py-2.5 rounded-lg border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Open Live Verification Portal →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
