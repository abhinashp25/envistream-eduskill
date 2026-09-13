"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ─── Nav links ───────────────────────────────────────────────────────────────
const navLinks = [
  { label: "About Us",         href: "/about" },
  { label: "Courses",          href: "/courses" },
  { label: "Internships",      href: "/internships" },
  { label: "Training",         href: "/training" },
  { label: "For Institutions", href: "/for-institutions" },
  { label: "Verify",           href: "/verify-certificate" },
  { label: "Resources",        href: "/resources" },
];

// ─── Languages — Indian (Odia, Hindi, English compulsory) + International ────
const languages = [
  { code: "en",    label: "English",    native: "English",   flag: "🇬🇧" },
  { code: "or",    label: "Odia",       native: "ଓଡ଼ିଆ",     flag: "🇮🇳" },
  { code: "hi",    label: "Hindi",      native: "हिन्दी",     flag: "🇮🇳" },
  { code: "bn",    label: "Bengali",    native: "বাংলা",      flag: "🇧🇩" },
  { code: "ta",    label: "Tamil",      native: "தமிழ்",     flag: "🇮🇳" },
  { code: "te",    label: "Telugu",     native: "తెలుగు",     flag: "🇮🇳" },
  { code: "kn",    label: "Kannada",    native: "ಕನ್ನಡ",      flag: "🇮🇳" },
  { code: "ml",    label: "Malayalam",  native: "മലയാളം",     flag: "🇮🇳" },
  { code: "gu",    label: "Gujarati",   native: "ગુજરાતી",    flag: "🇮🇳" },
  { code: "mr",    label: "Marathi",    native: "मराठी",      flag: "🇮🇳" },
  { code: "es",    label: "Spanish",    native: "Español",   flag: "🇪🇸" },
  { code: "fr",    label: "French",     native: "Français",  flag: "🇫🇷" },
  { code: "de",    label: "German",     native: "Deutsch",   flag: "🇩🇪" },
  { code: "ja",    label: "Japanese",   native: "日本語",      flag: "🇯🇵" },
  { code: "zh-CN", label: "Chinese",    native: "中文",       flag: "🇨🇳" },
  { code: "ar",    label: "Arabic",     native: "العربية",    flag: "🇸🇦" },
  { code: "pt",    label: "Portuguese", native: "Português", flag: "🇧🇷" },
];

// ─── Google Translate trigger ─────────────────────────────────────────────────
function applyLanguage(langCode) {
  if (typeof window === "undefined") return;
  if (langCode === "en") {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" +
      window.location.hostname;
    window.location.reload();
    return;
  }
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    window.location.reload();
  }
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open,        setOpen]        = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [navVisible,  setNavVisible]  = useState(true);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [langOpen,    setLangOpen]    = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // On the home page before scrolling, we have the dark hero section.
  // Everywhere else (about, courses, internships, verify, etc.) we have a light background.
  const isDarkHero = isHome && !scrolled;

  const lastScrollY = useRef(0);
  const hideTimerRef = useRef(null);

  // Clear 10s timer helper
  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  // 10-second auto-hide timer after scrolling UP
  const startHideTimer = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      if (window.scrollY > 60) {
        setNavVisible(false);
      }
    }, 10000); // 10 seconds
  }, [clearHideTimer]);

  // ── Scroll handling ────────────────────────────────────────────────────────
  useEffect(() => {
    const THRESHOLD = 60;

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= THRESHOLD) {
        // At top: always visible, not scrolled, clear hide timer
        setScrolled(false);
        setNavVisible(true);
        clearHideTimer();
      } else {
        setScrolled(true);

        if (y > lastScrollY.current + 8) {
          // Scrolling DOWN → hide immediately
          setNavVisible(false);
          clearHideTimer();
        } else if (y < lastScrollY.current - 8) {
          // Scrolling UP → show immediately, stay for 10 sec
          setNavVisible(true);
          startHideTimer();
        }
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearHideTimer();
    };
  }, [clearHideTimer, startHideTimer]);

  // ── Close language dropdown on outside click ─────────────────────────────
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  function handleLangSelect(code) {
    setCurrentLang(code);
    setLangOpen(false);
    applyLanguage(code);
  }

  return (
    <header
      onMouseEnter={clearHideTimer}
      onMouseLeave={() => {
        if (scrolled) startHideTimer();
      }}
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 transition-all duration-300 ${
        scrolled ? "pt-3 pb-2" : "pt-5 pb-3"
      } ${
        navVisible || open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP WINDOW VIEW ONLY (≥ 1280px / xl:flex)
          Full nav bar is displayed only in full window view!

          NOT scrolled → transparent header, white logo, nav links in glass pill
          Scrolled     → full liquid glass pill across bar, colored logo, dark text
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        className={`hidden xl:flex items-center justify-between gap-3 max-w-content mx-auto transition-all duration-300 ${
          !isDarkHero
            ? "rounded-full px-5 py-2.5"
            : "px-4 py-1"
        }`}
        style={
          !isDarkHero
            ? {
                background: "rgba(255, 255, 255, 0.90)",
                backdropFilter: "blur(24px) saturate(190%)",
                WebkitBackdropFilter: "blur(24px) saturate(190%)",
                border: "1px solid rgba(0, 24, 48, 0.12)",
                boxShadow:
                  "0 10px 30px -8px rgba(0, 24, 48, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.04), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)",
              }
            : undefined
        }
      >
        {/* Dynamic Logo */}
        <a href="/" aria-label="Envistream EduSkill – Home" className="flex-shrink-0">
          <Image
            src={isDarkHero ? "/images/Envistream_logo_white.png" : "/images/Envistream_logo_svg.png"}
            alt="Envistream EduSkill Logo"
            width={140}
            height={48}
            priority
            className="h-9 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* Nav links — Infosys exact compact frosted glass pill */}
        <nav
          className="flex items-center gap-0.5 rounded-full px-2 py-0.5 transition-all duration-300"
          style={
            isDarkHero
              ? {
                  background: "rgba(255, 255, 255, 0.50)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.55)",
                  boxShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px rgba(255, 255, 255, 0.70)",
                }
              : {
                  background: "rgba(0, 0, 0, 0.03)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                }
          }
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              className={`relative px-3 py-1 rounded-full text-[13px] font-medium tracking-tight transition-colors duration-200 z-10 ${
                isDarkHero
                  ? "text-[#0e273c] hover:text-primary font-semibold"
                  : "text-ink hover:text-primary font-semibold"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Language + Contact Us + Enquire Now (search button deleted) */}
        <div className="flex items-center gap-2">

          {/* Language globe */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              suppressHydrationWarning
              aria-label="Select language"
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                isDarkHero
                  ? "text-white/90 hover:bg-white/15"
                  : "text-ink hover:bg-black/5 font-medium"
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wide">{currentLang}</span>
            </button>

            {/* Dropdown — liquid glass panel with flags */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-64 rounded-2xl overflow-hidden z-50 shadow-2xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Language</p>
                  </div>
                  <div className="max-h-72 overflow-y-auto pb-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => handleLangSelect(lang.code)}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
                          currentLang === lang.code
                            ? "text-primary font-bold bg-primary/10"
                            : "text-ink/80 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-xl leading-none w-7 flex-shrink-0">{lang.flag}</span>
                        <span className="font-semibold">{lang.native}</span>
                        <span className="text-xs text-gray-500 ml-auto flex-shrink-0">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Separator */}
          <div
            className="w-px h-4"
            style={{
              background: isDarkHero ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)",
            }}
          />

          {/* Contact Us */}
          <a
            href="/contact"
            className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
              isDarkHero
                ? "border border-white/40 text-white hover:bg-white/15"
                : "border border-ink/25 text-ink hover:bg-black/5"
            }`}
          >
            Contact Us
          </a>

          {/* Enquire Now — original brand orange color */}
          <a
            href="/courses"
            className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent text-white hover:bg-accent-dark transition-colors whitespace-nowrap shadow-sm border border-accent-light/30"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ANY OTHER VIEWPORT (< 1280px / xl:hidden)
          Tablet, iPad, mobile, folding devices, and split-screen all show
          the 3-button / 3-dot type layout!

          [ ≡ (hamburger) ]      [ Logo ]      [ Enquire (before color) ]
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        className={`flex xl:hidden items-center justify-between transition-all duration-300 ${
          !isDarkHero
            ? "rounded-full px-4 py-2"
            : "px-2 py-1"
        }`}
        style={
          !isDarkHero
            ? {
                background: "rgba(255, 255, 255, 0.90)",
                backdropFilter: "blur(24px) saturate(190%)",
                WebkitBackdropFilter: "blur(24px) saturate(190%)",
                border: "1px solid rgba(0, 24, 48, 0.12)",
                boxShadow:
                  "0 10px 30px -8px rgba(0, 24, 48, 0.12), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)",
              }
            : undefined
        }
      >
        {/* Hamburger / 3-dot circular button with border */}
        <button
          type="button"
          suppressHydrationWarning
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`p-2.5 rounded-full transition-all active:scale-95 ${
            !isDarkHero
              ? "bg-black/5 border border-black/10 text-ink hover:bg-black/10"
              : "text-[#0e273c] shadow-sm hover:bg-white/40"
          }`}
          style={
            isDarkHero
              ? {
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.70)",
                }
              : undefined
          }
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            }
          </svg>
        </button>

        {/* Logo */}
        <a href="/" aria-label="Envistream EduSkill – Home" className="flex items-center">
          <Image
            src={isDarkHero ? "/images/Envistream_logo_white.png" : "/images/Envistream_logo_svg.png"}
            alt="Envistream EduSkill"
            width={120}
            height={38}
            priority
            className="h-8 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* Enquire — with BEFORE COLOR (accent orange) on mobile & tablet */}
        <a
          href="/courses"
          className="text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap bg-accent text-white hover:bg-accent-dark shadow-sm active:scale-95 transition-all"
        >
          Enquire
        </a>
      </div>

      {/* ── Mobile dropdown — liquid glass panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden mt-2 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(0,0,0,0.10)",
            }}
          >
            {/* Search */}
            <div className="px-4 pt-4 pb-2">
              <input
                type="search"
                placeholder="Search courses…"
                className="w-full text-sm px-4 py-2.5 rounded-full border border-gray-200 bg-white text-ink placeholder-ink/40 outline-none focus:border-primary"
              />
            </div>

            {/* Nav links */}
            <div className="px-2 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 text-sm font-semibold text-ink/85 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language */}
            <div className="px-4 py-3 border-t border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Language</p>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => { handleLangSelect(lang.code); setOpen(false); }}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      currentLang === lang.code
                        ? "bg-primary text-white border-primary font-bold"
                        : "border-gray-200 text-ink/80 bg-white hover:border-primary hover:text-primary"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.native}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="px-4 pb-4 pt-3 flex gap-2 border-t border-gray-100">
              <a
                href="/contact"
                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/courses"
                className="flex-1 text-center text-sm font-bold py-2.5 rounded-full bg-accent text-white hover:bg-accent-dark transition-colors shadow-sm"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
