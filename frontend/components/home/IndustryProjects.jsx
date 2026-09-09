import { projects } from "@/data/homeContent";

export default function IndustryProjects() {
  return (
    <section className="py-20 md:py-28 border-b border-line">
      <div className="container-content">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Projects that mirror real work
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Every track includes projects modeled on actual industry problems,
            reviewed by mentors before they go into your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.title}>
              <p className="text-xs text-primary font-medium mb-2">{p.domain}</p>
              <h3 className="font-semibold text-ink mb-1">{p.title}</h3>
              <p className="text-sm text-ink/60">{p.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
