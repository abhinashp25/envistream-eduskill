import Image from "next/image";
import { companyDetails } from "@/data/homeContent";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/90">
      <div className="container-content py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <a href="/" aria-label="Envistream EduSkill – Home" className="inline-block mb-3">
            <Image
              src="/images/Envistream_logo.jpg"
              alt="Envistream EduSkill Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            {companyDetails.legalName} — Delivering industry-oriented technology training, mandatory academic internships, accredited certifications, and institutional MoUs.
          </p>
          <div className="flex items-center gap-3 text-white/60 text-xs">
            <a href={companyDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={companyDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Facebook
            </a>
            <span>•</span>
            <a href={companyDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <span>•</span>
            <a href={companyDetails.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              YouTube
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3 tracking-wider uppercase text-xs text-accent">We Provide</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/courses/artificial-intelligence" className="hover:text-white transition-colors">Artificial Intelligence &amp; GenAI</a></li>
            <li><a href="/courses/web-development" className="hover:text-white transition-colors">Full Stack Web (React &amp; Node)</a></li>
            <li><a href="/courses/software-testing-cypress" className="hover:text-white transition-colors">Software Testing &amp; Cypress</a></li>
            <li><a href="/courses/erp-sap-training" className="hover:text-white transition-colors">ERP &amp; SAP Training</a></li>
            <li><a href="/courses/data-science-analytics" className="hover:text-white transition-colors">Data Science &amp; Analytics</a></li>
            <li><a href="/courses/digital-marketing-ai-seo" className="hover:text-white transition-colors">Digital Marketing &amp; AI SEO</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3 tracking-wider uppercase text-xs text-accent">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/courses" className="hover:text-white transition-colors">All Courses</a></li>
            <li><a href="/internships" className="hover:text-white transition-colors">Internship Portal (AICTE)</a></li>
            <li><a href="/training" className="hover:text-white transition-colors">Corporate Training</a></li>
            <li><a href="/for-institutions" className="hover:text-white transition-colors">For Institutions &amp; MoUs</a></li>
            <li><a href="/verify-certificate" className="hover:text-white transition-colors">Verify Certificate</a></li>
            <li><a href="/resources" className="hover:text-white transition-colors">Career Guides &amp; Resources</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3 tracking-wider uppercase text-xs text-accent">Headquarters</p>
          <ul className="space-y-2.5 text-xs text-white/70">
            <li className="leading-relaxed">
              <strong>Bhubaneswar Lab:</strong><br />
              DCB-907, 9th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha, 751024
            </li>
            <li>
              <strong>Direct Lines:</strong><br />
              <a href="tel:+919078419012" className="hover:text-white">+91 90784 19012</a> / <a href="tel:+917873489364" className="hover:text-white">+91 78734 89364</a>
            </li>
            <li>
              <strong>Admissions Email:</strong><br />
              <a href="mailto:training@envistream.org" className="hover:text-white">training@envistream.org</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} {companyDetails.legalName} ({companyDetails.name}). All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/verify-certificate" className="hover:text-white transition-colors">Credential Check</a>
            <span>•</span>
            <a href="/contact" className="hover:text-white transition-colors">Campus Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
