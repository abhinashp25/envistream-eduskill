"use client";

import { motion } from "framer-motion";

// ─── Highlight Programs Data (numbers 1,2,3,4 removed) ────────────────────────
const highlightCards = [
  {
    icon: (
      <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & Generative Tech",
    subtitle: "Hands-on LLMs, PyTorch & real-world computer vision and NLP models.",
    link: "/courses",
    linkText: "Explore Track",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Full Stack & Cloud",
    subtitle: "Production-grade Next.js, Node.js, microservices and cloud deployment.",
    link: "/courses",
    linkText: "Explore Track",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Industry Internships",
    subtitle: "Mentored corporate projects with verifiable certificates and placement prep.",
    link: "/internships",
    linkText: "Join Internship",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Institutional Programs",
    subtitle: "Upskilling college batches with modern tech labs & placement results.",
    link: "/for-institutions",
    linkText: "Partner With Us",
  },
];

// ─── Typewriter Text Writing Animation (Antigravity start-to-end style) ───────
const titleContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.038, // Smooth writing pace letter by letter
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.22,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

function TypewriterWords({ text, className }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

// ─── Scroll-Triggered Stagger for the 4 Liquid Glass Cards ─────────────────────
const scrollCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16, // Stagger 1 -> 2 -> 3 -> 4
      delayChildren: 0.1,
    },
  },
};

const scrollCardVariants = {
  hidden: { opacity: 0, y: 55, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1], // Smooth Apple-style fluid cubic bezier
    },
  },
};

export default function Hero() {
  return (
    <section className="relative px-2 sm:px-2 md:px-2 pt-2 pb-2">
      <div className="relative w-full min-h-[110vh] lg:min-h-[1050px] rounded-xl md:rounded-2xl overflow-hidden bg-ink shadow-2xl flex flex-col justify-between">
        
        {/* Background fallback & tech glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(11,110,110,0.35), transparent 60%), " +
              "radial-gradient(circle at 85% 85%, rgba(229,138,46,0.18), transparent 50%), " +
              "#0D2B3E",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Video covering the entire extended stage */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/envi_video.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for accessibility and high text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink/90"
        />

        {/* 
          Hero Center Content:
          - Pushed down with pt-36 sm:pt-44 md:pt-52
          - Text writes from start to end (Antigravity typewriter effect) on refresh
        */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-36 sm:pt-44 md:pt-52 pb-12">
          {/* Kicker badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-light text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm"
          >
            <span>✦</span>
            <span>Next-Gen Tech Education & Careers</span>
          </motion.div>

          {/* Grand Headline with letter-by-letter writing animation */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-5 font-display"
          >
            <TypewriterWords text="Navigate Your Next" className="text-white" />
            <br className="hidden sm:inline" />
            <span> </span>
            <TypewriterWords
              text="Tech Career"
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-accent-light"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-normal mb-9"
          >
            Industry-led training, verified internships, and 1-on-1 mentorship in AI,
            software development, and emerging technologies.
          </motion.p>

          {/* Interactive Search & Discovery Bar */}
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl mx-auto"
          >
            <form
              action="/courses"
              method="GET"
              className="relative flex items-center bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all focus-within:border-white focus-within:bg-white/25"
            >
              <svg
                className="w-5 h-5 text-white/75 ml-3 mr-2 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                name="q"
                placeholder="What skill do you want to learn? (AI, Full Stack, Cloud...)"
                className="w-full bg-transparent text-white placeholder-white/60 text-sm md:text-base outline-none pr-3"
              />
              <button
                type="submit"
                className="shrink-0 px-5 py-2.5 rounded-full bg-accent text-white text-xs sm:text-sm font-bold hover:bg-accent-dark transition-all shadow-md active:scale-95"
              >
                Explore
              </button>
            </form>

            {/* Trending skill tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-white/65 font-medium">Trending:</span>
              {[
                { label: "Artificial Intelligence", href: "/courses" },
                { label: "Full Stack Web", href: "/courses" },
                { label: "Cybersecurity", href: "/courses" },
                { label: "Cloud & DevOps", href: "/courses" },
              ].map((tag) => (
                <a
                  key={tag.label}
                  href={tag.href}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/90 transition-all active:scale-95"
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 
          4 Liquid Glass Cards:
          - No 1,2,3,4 numbers written on them
          - Does NOT animate on refresh
          - Animates on scroll into view with fluid 1, 2, 3, 4 stagger (like Antigravity scroll)
        */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 pt-4">
          <motion.div
            variants={scrollCardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {highlightCards.map((card) => (
              <motion.a
                key={card.title}
                href={card.link}
                variants={scrollCardVariants}
                className="group relative p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.95)",
                  boxShadow:
                    "0 12px 35px -6px rgba(0, 24, 48, 0.15), 0 4px 12px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div>
                  <div className="flex items-center mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/80 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-ink mb-1.5 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary group-hover:text-primary-dark flex items-center gap-1.5 transition-all">
                    <span>{card.linkText}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
