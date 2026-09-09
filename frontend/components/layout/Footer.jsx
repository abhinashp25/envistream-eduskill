import Image from "next/image";

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
          <p className="text-sm text-white/60 leading-relaxed">
            Industry-oriented training, internships, certifications and career
            development programs for students, professionals and institutions.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">We Provide</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="/courses/artificial-intelligence" className="hover:text-white">Artificial Intelligence</a></li>
            <li><a href="/courses/web-development" className="hover:text-white">Web Development</a></li>
            <li><a href="/courses/data-science" className="hover:text-white">Data Science</a></li>
            <li><a href="/courses/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
            <li><a href="/courses/digital-marketing" className="hover:text-white">Digital Marketing</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/internships" className="hover:text-white">Internships</a></li>
            <li><a href="/for-institutions" className="hover:text-white">For Institutions</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>DCB-907, 9th Floor, DLF Cyber City, Patia, Bhubaneswar, Odisha</li>
            <li><a href="tel:+917873489364" className="hover:text-white">+91 7873489364</a></li>
            <li><a href="mailto:training@envistream.org" className="hover:text-white">training@envistream.org</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Envistream EduSkill. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
