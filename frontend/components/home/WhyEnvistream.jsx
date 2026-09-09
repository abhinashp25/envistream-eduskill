const features = [
  { title: "Industry-oriented learning", desc: "Curriculum built around what employers actually ask for, not academic theory alone." },
  { title: "Expert trainers", desc: "Mentors with real MNC and industry project experience, not just teaching credentials." },
  { title: "Practical projects", desc: "Every program includes hands-on, portfolio-worthy project work." },
  { title: "Internship opportunities", desc: "Structured internships with mentorship, not unpaid busywork." },
  { title: "Certification", desc: "Verifiable certificates recognized by our partner institutions and employers." },
  { title: "Career support", desc: "Mock interviews, HR prep and placement assistance built into every track." },
];

export default function WhyEnvistream() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Why students and institutions choose Envistream
          </h2>
          <p className="text-ink/70 leading-relaxed">
            We built our programs around one question: what actually gets a
            student hired, or a college placement cell results they can point to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((f) => (
            <div key={f.title} className="border-t-2 border-primary pt-5">
              <h3 className="text-lg font-semibold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
