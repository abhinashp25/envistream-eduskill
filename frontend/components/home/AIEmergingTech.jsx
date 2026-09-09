const domains = [
  "Generative AI",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
];

export default function AIEmergingTech() {
  return (
    <section className="py-20 md:py-28 bg-ink text-white">
      <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Built around where the industry is actually moving
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            AI and automation are changing what employers hire for. Our
            technology tracks are updated against current industry tooling,
            not a syllabus written five years ago.
          </p>
          <a
            href="/courses/artificial-intelligence"
            className="inline-block px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            View AI Programs
          </a>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {domains.map((d) => (
            <div
              key={d}
              className="border border-white/15 rounded-lg px-5 py-6 text-sm font-medium"
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
