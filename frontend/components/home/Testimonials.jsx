"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/homeContent";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container-content">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Hear From Graduates Working Across the Tech Industry
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Real stories from students and engineering freshers who translated their Envistream training and internship into full-time IT and developer careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-surface-alt border border-line rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-bold text-ink/70 ml-1.5">5.0</span>
                </div>

                <p className="text-sm text-ink/80 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-line/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink leading-tight">{t.name}</h4>
                  <p className="text-xs text-primary font-medium">{t.role}</p>
                  <p className="text-[11px] text-ink/50">{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
