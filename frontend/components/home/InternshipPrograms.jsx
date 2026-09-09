const points = [
  { label: "Who can apply", value: "B.Tech, BCA, MCA, BBA/MBA students and recent graduates" },
  { label: "Duration", value: "4 to 12 weeks, flexible around academic schedules" },
  { label: "Format", value: "Project-based learning with an assigned mentor" },
  { label: "Outcome", value: "Certification, portfolio project, and a completion letter" },
];

export default function InternshipPrograms() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-5">
            Internships that build a real portfolio, not just a certificate
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Every internship domain is mentored and project-based — you leave
            with something to show a recruiter, not just a completion letter.
          </p>
          <a
            href="/internships"
            className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Explore Internships
          </a>
        </div>

        <div className="md:col-span-6">
          <dl className="divide-y divide-line border-y border-line">
            {points.map((p) => (
              <div key={p.label} className="grid grid-cols-3 gap-4 py-5">
                <dt className="text-sm text-ink/50">{p.label}</dt>
                <dd className="col-span-2 text-sm text-ink font-medium">{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
