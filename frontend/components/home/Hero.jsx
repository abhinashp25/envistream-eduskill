"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { value: "10+", label: "Technology domains covered" },
  { value: "Industry", label: "Mentors from active practice" },
  { value: "Project-based", label: "Learning, not lecture-only" },
];

export default function Hero() {
  return (
    <section className="relative border-b border-line overflow-hidden bg-surface-alt">
      {/* Gradient field the glass panel sits on top of — glass only reads as
          "glass" when there's something with color/contrast behind it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary/25 via-surface-alt to-accent/20"
      />

      <div className="container-content relative py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.p variants={item} className="text-primary font-medium text-sm mb-4">
            Training · Internships · Career Programs
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-semibold leading-[1.1] text-ink mb-6"
          >
            Industry-ready skills for the technology careers of tomorrow
          </motion.h1>

          <motion.p variants={item} className="text-lg text-ink/70 max-w-xl mb-8 leading-relaxed">
            Envistream EduSkill trains students and professionals in AI, software
            development and emerging technology through hands-on projects,
            mentorship, and real internship placements — not just certificates.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="/courses"
              className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
              Explore Courses
            </a>
            <a
              href="/internships"
              className="px-6 py-3 rounded-md border border-ink/20 text-ink font-medium hover:border-ink/40 transition-colors"
            >
              Join an Internship
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <div className="glass-panel-dark rounded-2xl p-8">
            <ul className="space-y-6">
              {stats.map((stat) => (
                <li key={stat.label} className="border-b border-white/15 pb-6 last:border-0 last:pb-0">
                  <p className="font-display text-2xl text-accent-light">{stat.value}</p>
                  <p className="text-sm text-white/75 mt-1">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
