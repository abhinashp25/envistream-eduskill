"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Clean, minimalist outline icons inspired by Google Antigravity
function TrackIcon({ type, className = "w-4 h-4 text-slate-700 group-hover:text-accent transition-colors" }) {
  switch (type) {
    case "ai":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      );
    case "genai":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.536-6.464l-2.121 2.121m-6.464 6.464l-2.121 2.121m0-10.707l2.121 2.121m6.464 6.464l2.121 2.121" />
        </svg>
      );
    case "web":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case "security":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "data":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "code":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3-3 3m4.5 0h3m-9-9h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H4.5A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5z" />
        </svg>
      );
    case "marketing":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
  }
}

const primaryTracks = [
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    icon: "ai",
  },
  {
    name: "Generative AI & LLMs",
    slug: "generative-ai",
    icon: "genai",
  },
  {
    name: "Full Stack Web Development",
    slug: "web-development",
    icon: "web",
  },
  {
    name: "Cloud & DevOps",
    slug: "devops-kubernetes-cloud",
    icon: "cloud",
  },
  {
    name: "Data Science & Analytics",
    slug: "data-science-analytics",
    icon: "data",
  },
  {
    name: "Cybersecurity & Defense",
    slug: "ethical-hacking-cyber-defense",
    icon: "security",
  },
  {
    name: "Programming & DSA",
    slug: "dsa-problem-solving-masterclass",
    icon: "code",
  },
  {
    name: "Digital Marketing & AI SEO",
    slug: "digital-marketing-ai-seo",
    icon: "marketing",
  },
];

export default function CoursesMegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.99 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 top-[calc(100%+14px)] w-[620px] max-w-[92vw] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/80 p-6 z-50 text-ink"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-12 gap-5 divide-x divide-slate-100 items-start">
        {/* ── LEFT COLUMN: Brand Callout (Google Antigravity style) ── */}
        <div className="col-span-4 flex flex-col justify-between pr-3 h-full min-h-[190px]">
          <div>
            <h3 className="text-lg font-bold text-ink tracking-tight leading-snug mb-1.5 font-display">
              Explore our next generation courses
            </h3>
            <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
              Industry-aligned technical tracks & live mentorship.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/courses"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-ink hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 active:scale-95"
            >
              <span>See overview</span>
              <span className="text-slate-400">→</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: 2 Clean Columns with Antigravity-like Icons ── */}
        <div className="col-span-8 pl-4">
          <div className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mb-2">
            Courses
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {primaryTracks.map((track) => (
              <Link
                key={track.slug}
                href={`/courses/${track.slug}`}
                onClick={onClose}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[12.5px] font-medium text-slate-700 hover:text-ink hover:bg-slate-50 transition-colors duration-100 group"
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <TrackIcon type={track.icon} />
                </div>
                <span className="truncate group-hover:translate-x-0.5 transition-transform duration-100">
                  {track.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
