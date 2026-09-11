"use client";

import { motion } from "framer-motion";

const pathways = [
  {
    role: "Full Stack Software Developer",
    skills: "React, Next.js, Node.js, Express, PostgreSQL, REST APIs, Git Sprints",
    hiringDomains: "Product Companies, SaaS Startups, IT Services",
  },
  {
    role: "AI & Machine Learning Engineer",
    skills: "Python, PyTorch, LangChain, LLM Prompt Engineering, Vector Databases",
    hiringDomains: "AI Labs, Enterprise Automation, Analytics Consultancies",
  },
  {
    role: "QA & Automation Test Specialist",
    skills: "Manual QA, Test Cases, Cypress, Postman, JIRA Agile, CI Pipelines",
    hiringDomains: "FinTech, Healthcare IT, E-commerce Platforms",
  },
  {
    role: "Data Analyst & Business Intelligence",
    skills: "SQL Queries, PowerBI / Tableau Dashboards, Pandas, Statistical EDA",
    hiringDomains: "Banking & Financial Services, Retail, Operations",
  },
];

export default function CareerOutcomes() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container-content">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Section 10</span>
            <span>•</span>
            <span>Career Pathways &amp; Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Where Our Practical Programs Actually Lead
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            We map each curriculum directly to real job descriptions. You gain the exact technical stack, portfolio projects, and behavioral interview fluency that hiring managers test for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pathways.map((p, idx) => (
            <motion.div
              key={p.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-line bg-surface-alt/60 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-ink mb-3">{p.role}</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-ink/60 block">Core Competencies Developed:</span>
                  <span className="text-ink font-medium">{p.skills}</span>
                </div>
                <div>
                  <span className="font-semibold text-ink/60 block">Target Hiring Sectors:</span>
                  <span className="text-primary font-medium">{p.hiringDomains}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars of Placement Prep */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-surface-alt rounded-2xl border border-line text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">1-on-1</p>
            <p className="text-xs font-medium text-ink/70">Resume &amp; GitHub Audit</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">Live</p>
            <p className="text-xs font-medium text-ink/70">External Technical Panels</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">Real-time</p>
            <p className="text-xs font-medium text-ink/70">HR Etiquette &amp; Pitch Prep</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">Direct</p>
            <p className="text-xs font-medium text-ink/70">Hiring Partner Referrals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
