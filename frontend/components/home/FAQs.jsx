"use client";

import { useState } from "react";
import { faqs } from "@/data/homeContent";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-surface-alt border-y border-line">
      <div className="container-content max-w-3xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base text-ink/70">
            Answers for students, working professionals, and partner institutions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white border border-line rounded-xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-ink text-base hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-surface-alt flex items-center justify-center text-ink/60 transition-transform duration-300 flex-shrink-0 text-sm font-bold ${
                      isOpen ? "rotate-45 bg-primary/10 text-primary" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-ink/70 leading-relaxed border-t border-line/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-ink/60">
          Have another question? Contact our academic team at{" "}
          <a href="mailto:training@envistream.org" className="text-primary font-semibold underline">
            training@envistream.org
          </a>{" "}
          or call{" "}
          <a href="tel:+919078419012" className="text-primary font-semibold underline">
            +91 90784 19012
          </a>
        </div>
      </div>
    </section>
  );
}
