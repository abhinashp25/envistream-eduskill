"use client";

import { companyDetails, programBenefits } from "@/data/homeContent";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-content">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider mb-3">
            About Envistream EduSkill
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-ink mb-6">
            Pioneering Industry-Ready Education &amp; Career Development
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed">
            Envistream EduSkill (a venture of Envistream Smartech Pvt. Ltd.) was founded with a singular mission: bridging the gap between traditional academic curricula and modern software engineering requirements.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-line rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Our Mission</span>
            <h2 className="text-2xl font-bold text-ink mb-3">Empower Through Practical Mastery</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              To provide accessible, high-impact technical training, mentored internships, and accredited certifications that transform college students and fresh graduates into productive, confident software engineers.
            </p>
          </div>

          <div className="bg-white border border-line rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-bold text-accent-dark uppercase tracking-wider block mb-2">Our Vision</span>
            <h2 className="text-2xl font-bold text-ink mb-3">The Leading Tech Bridge in Eastern India</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              To be the most trusted technology talent incubator for university partnerships, institutional MoUs, and corporate talent acquisition across Bhubaneswar, Odisha, and nationwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white border border-line rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-ink mb-2">70% Hands-on Practice</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                We believe programming cannot be learned from lecture slides. Every concept is reinforced through terminal commands, IDE development, and live code testing.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-ink mb-2">Real MNC Mentor Experience</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Our faculty members have built and scaled systems at enterprise IT consultancies. They teach production architecture, code review etiquette, and bug tracking.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-ink mb-2">Verifiable Credibility</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Every certificate and completion letter is digitally registered on our verification portal, protecting our students&apos; authentic achievements against duplicate claims.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities & Location */}
        <div className="bg-ink text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider block mb-2">
                Tech Hub Infrastructure
              </span>
              <h2 className="text-3xl font-bold mb-4">Located in Bhubaneswar&apos;s Premier IT Corridor</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our primary corporate training and development center is situated at DLF Cyber City, Patia — surrounded by leading IT powerhouses, research institutes, and university campuses.
              </p>
              <div className="space-y-2 text-xs text-white/80">
                <p>📍 <strong>Primary Center:</strong> {companyDetails.headquarters}</p>
                <p>📍 <strong>Registered Office:</strong> {companyDetails.registeredOffice}</p>
                <p>📞 <strong>Direct Phones:</strong> {companyDetails.phones.join(" / ")}</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 rounded-xl p-6 border border-white/15 text-center">
              <h3 className="text-lg font-bold mb-2">Visit Our Tech Labs</h3>
              <p className="text-xs text-white/70 mb-4">
                Students, faculty, and company HR teams are welcome for lab tours and curriculum discussions.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Schedule an In-Person Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
