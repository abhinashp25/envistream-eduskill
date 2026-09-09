const services = [
  "Student internship pipelines",
  "Faculty development workshops",
  "Placement-oriented training",
  "MoU-based long-term partnerships",
];

export default function InstitutionalPartnerships() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-5">
            Built for colleges, universities and placement cells
          </h2>
          <p className="text-ink/70 leading-relaxed mb-6 max-w-xl">
            We partner with institutions on internship pipelines, faculty
            training and placement-oriented programs — with outcomes your
            placement cell can actually report on.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <li key={s} className="text-sm text-ink/80 flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <a
            href="/for-institutions"
            className="inline-block px-6 py-3 rounded-md border border-ink/20 text-ink font-medium hover:border-ink/40 transition-colors"
          >
            Request Institutional Partnership
          </a>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/3] rounded-2xl bg-ink/5 border border-line flex items-center justify-center text-ink/30 text-sm">
            Partner institution imagery
          </div>
        </div>
      </div>
    </section>
  );
}
