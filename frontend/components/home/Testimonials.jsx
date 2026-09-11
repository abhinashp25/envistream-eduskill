import { testimonials } from "@/data/homeContent";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-14 max-w-2xl">
          What our students say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.role} className="border-l-2 border-primary pl-5">
              <p className="text-ink/80 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="text-ink/50"> — {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
