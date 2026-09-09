const outcomes = [
  { title: "Skills gained", desc: "Practical, tool-specific skills mapped to real job descriptions." },
  { title: "Career paths", desc: "Clear next-step guidance based on your track and interests." },
  { title: "Job-ready roles", desc: "Prepared for roles like developer, analyst, tester and marketer." },
  { title: "Placement support", desc: "Mock interviews, resume review and employer connections." },
];

export default function CareerOutcomes() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-14 max-w-2xl">
          Where our programs actually take you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {outcomes.map((o) => (
            <div key={o.title}>
              <h3 className="font-semibold text-ink mb-2">{o.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
