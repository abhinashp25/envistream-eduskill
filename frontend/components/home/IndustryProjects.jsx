"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/homeContent";

export default function IndustryProjects() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-line">
      <div className="container-content">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Live Projects &amp; Capstones
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Projects That Mirror Real Enterprise Demands
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Recruiters don&apos;t look at generic to-do lists. Every Envistream student builds and deploys production-grade projects that address actual operational problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-surface-alt border border-line rounded-xl p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div>
                <span className="text-[11px] font-bold text-primary tracking-wider uppercase block mb-2">
                  {p.domain}
                </span>
                <h3 className="font-bold text-ink text-base mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed mb-4">
                  {p.outcome}
                </p>
              </div>

              <div className="pt-3 border-t border-line/70">
                <div className="flex flex-wrap gap-1">
                  {p.tech?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white text-ink/70 border border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
