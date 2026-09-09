"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Internships", href: "/internships" },
  { label: "Training", href: "/training" },
  { label: "For Institutions", href: "/for-institutions" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-header sticky top-0 z-50 border-b border-white/40">
      <div className="container-content flex items-center justify-between h-18 py-3">
        <a href="/" className="flex items-center" aria-label="Envistream EduSkill – Home">
          <Image
            src="/images/Envistream_logo.jpg"
            alt="Envistream EduSkill Logo"
            width={160}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/courses"
            className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Enquire Now
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/80 text-sm">
              {link.label}
            </a>
          ))}
          <a href="/contact" className="text-primary text-sm font-medium">
            Contact Us
          </a>
          <a
            href="/courses"
            className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-white text-center"
          >
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
}
