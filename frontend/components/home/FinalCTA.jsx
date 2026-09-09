export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-ink mb-6">
          Start your learning journey with Envistream EduSkill
        </h2>
        <p className="text-ink/70 mb-8">
          Talk to a counsellor about the right track for your goals, or apply
          directly to a course or internship.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/apply"
            className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            Apply Now
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-ink/20 text-ink font-medium hover:border-ink/40 transition-colors"
          >
            Talk to a Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}
