"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Clean, minimalist outline icons matching Google Antigravity
function InternshipIcon({ type, className = "w-4 h-4 text-slate-700 group-hover:text-accent transition-colors" }) {
  switch (type) {
    case "ai":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "web":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "data":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "security":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <path d="M11 18h2" strokeLinecap="round" />
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

const trendingInternships = [
  {
    title: "AI Internship",
    subtitle: "RAG + agents",
    icon: "ai",
    href: "/internships#ai-ml",
  },
  {
    title: "Full Stack Internship",
    subtitle: "MERN capstone",
    icon: "web",
    href: "/internships#web-dev",
  },
  {
    title: "Data Internship",
    subtitle: "Dashboards + SQL",
    icon: "data",
    href: "/internships#data-analytics",
  },
  {
    title: "Cybersecurity Internship",
    subtitle: "SOC + CTF labs",
    icon: "security",
    href: "/internships#cybersecurity",
  },
  {
    title: "Cloud & DevOps Internship",
    subtitle: "AWS + Kubernetes",
    icon: "cloud",
    href: "/internships#cloud-devops",
  },
  {
    title: "Mobile App Internship",
    subtitle: "Flutter & React Native",
    icon: "mobile",
    href: "/internships#mobile-dev",
  },
  {
    title: "Java Enterprise Internship",
    subtitle: "Spring Boot + APIs",
    icon: "code",
    href: "/internships#java-enterprise",
  },
  {
    title: "Digital Growth Internship",
    subtitle: "AEO + Performance",
    icon: "marketing",
    href: "/internships#digital-growth",
  },
];

export default function InternshipsMegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.99 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 top-[calc(100%+14px)] w-[640px] max-w-[92vw] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/80 p-6 z-50 text-ink"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-12 gap-5 divide-x divide-slate-100 items-start">
        {/* ── LEFT COLUMN: Antigravity Brand Overview ── */}
        <div className="col-span-4 flex flex-col justify-between pr-3 h-full min-h-[200px]">
          <div>
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
              Learn by building
            </span>
            <h3 className="text-lg font-bold text-ink tracking-tight leading-snug mb-1.5 font-display">
              Mentor-led internships
            </h3>
            <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
              4–12 week projects with reviews and certification.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/internships"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-ink hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 active:scale-95"
            >
              <span>View all internships</span>
              <span className="text-slate-400">→</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Trending Internships (2 Columns) ── */}
        <div className="col-span-8 pl-4">
          <div className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mb-2">
            Trending Internships
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
            {trendingInternships.map((internship) => (
              <Link
                key={internship.title}
                href={internship.href}
                onClick={onClose}
                className="flex items-start gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors duration-100 group"
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <InternshipIcon type={internship.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-semibold text-slate-800 group-hover:text-accent transition-colors truncate">
                    {internship.title}
                  </div>
                  <div className="text-[10.5px] text-slate-400 font-normal truncate">
                    {internship.subtitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
