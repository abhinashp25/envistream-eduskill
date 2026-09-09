export default function Certifications() {
  return (
    <section className="relative py-20 md:py-28 border-y border-line overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-surface-alt to-accent/15"
      />
      <div className="container-content relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-5">
            Certification you can verify, not just claim
          </h2>
          <p className="text-ink/70 leading-relaxed mb-6 max-w-xl">
            Every course, internship and workshop completion is logged against
            a unique certificate ID. Employers and institutions can verify it
            directly on our site.
          </p>
          <a
            href="/certificate-verification"
            className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Verify a Certificate
          </a>
        </div>
        <div className="md:col-span-5 glass-panel rounded-xl p-6 font-mono text-sm">
          <p className="text-ink/60 mb-1">Certificate ID</p>
          <p className="text-ink font-semibold mb-4">EVS-2026-AI-000123</p>
          <p className="text-ink/60 mb-1">Status</p>
          <p className="text-primary font-semibold">Verified</p>
        </div>
      </div>
    </section>
  );
}
