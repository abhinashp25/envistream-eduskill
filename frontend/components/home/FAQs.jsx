import { faqs } from "@/data/homeContent";

export default function FAQs() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt border-y border-line">
      <div className="container-content max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-10">
          Common questions
        </h2>
        <div className="divide-y divide-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-ink font-medium">
                {faq.q}
                <span className="text-ink/40 group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-sm text-ink/65 leading-relaxed mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
