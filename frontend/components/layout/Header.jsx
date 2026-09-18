"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import { navSections } from "@/data/navigationData";
import EnquiryModal from "@/components/common/EnquiryModal";

// ─── Nav links ───────────────────────────────────────────────────────────────
const navLinks = [
  { label: "About Us",           id: "about",       href: "/about" },
  { label: "Courses",            id: "courses",     href: "/courses" },
  { label: "Internships",        id: "internships", href: "/internships" },
  { label: "Corporate Training", id: "training",    href: "/training" },
  { label: "Career",             id: "career",      href: "/training#placement" },
  { label: "Resources",          id: "resources",   href: "/resources" },
  { label: "Contact",            id: "contact",     href: "/contact" },
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

  const [open,           setOpen]           = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [navVisible,     setNavVisible]     = useState(true);
  const [hoveredLink,    setHoveredLink]    = useState(null);
  const [langOpen,       setLangOpen]       = useState(false);
  const [currentLang,    setCurrentLang]    = useState("en");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [enquiryOpen,    setEnquiryOpen]    = useState(false);
  const menuContainerRef = useRef(null);
  const dropdownTimerRef = useRef(null);
  const navRefs          = useRef([]);  // refs to each nav <a> for keyboard focus

  const handleNavEnter = (id) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setHoveredLink(id);
    setActiveDropdown(id);
  };

  const handleNavLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredLink(null);
    }, 200);
  };

  // ── Keyboard navigation: ←→ move between items, ↓ open, ↑/Esc close ──────
  const handleKeyDown = (e, idx, section, id) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        navRefs.current[Math.min(idx + 1, navLinks.length - 1)]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        navRefs.current[Math.max(idx - 1, 0)]?.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (section) { setActiveDropdown(id); setHoveredLink(id); }
        break;
      case "ArrowUp":
      case "Escape":
        e.preventDefault();
        setActiveDropdown(null);
        setHoveredLink(null);
        navRefs.current[idx]?.focus();
        break;
      default:
        break;
    }
  };

  // On the home page before scrolling → dark hero. Everywhere else → light bg.
  const isDarkHero = isHome && !scrolled;

  const lastScrollY  = useRef(0);
  const hideTimerRef = useRef(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const startHideTimer = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      if (window.scrollY > 60) setNavVisible(false);
    }, 10000);
  }, [clearHideTimer]);

  // ── Scroll handling ────────────────────────────────────────────────────────
  useEffect(() => {
    const THRESHOLD = 60;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= THRESHOLD) {
        setScrolled(false);
        setNavVisible(true);
        clearHideTimer();
      } else {
        setScrolled(true);
        if (y > lastScrollY.current + 8) {
          setNavVisible(false);
          clearHideTimer();
        } else if (y < lastScrollY.current - 8) {
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

  // ── Close menus on route change ────────────────────────────────────────
  useEffect(() => { setActiveDropdown(null); }, [pathname]);

  useEffect(() => {
    if (!activeDropdown) return;
    const handleClickOutside = (e) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  function handleLangSelect(code) {
    setCurrentLang(code);
    setLangOpen(false);
    applyLanguage(code);
  }

  return (
    <header
      onMouseEnter={clearHideTimer}
      onMouseLeave={() => { if (scrolled) startHideTimer(); }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "px-4 sm:px-6 pt-2.5 pb-2" : "px-5 sm:px-8 pt-5 pb-0"
      } ${
        navVisible || open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP ≥ 1280px — Infosys exact TWO-STATE layout

          NOT scrolled (on hero)
            • transparent wrapper — no background on the outer div
            • Logo floats LEFT (no container)
            • Nav links in their own frosted CENTER pill
            • Language + Enquire float RIGHT (no container)

          Scrolled
            • Entire row becomes one white frosted pill (glass bar)
            • Logo left · nav center · CTA right — same positions, now inside pill
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        ref={menuContainerRef}
        className={`hidden xl:flex items-center justify-between max-w-[1280px] mx-auto relative transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "rounded-full px-5 py-2"      // scrolled: one pill bar
            : "rounded-none px-0 py-0"      // hero: transparent row
        }`}
        style={
          scrolled
            ? {
                // ── SCROLLED STATE: white frosted glass pill ──────────────
                background:        "rgba(255, 255, 255, 0.93)",
                backdropFilter:    "blur(28px) saturate(200%)",
                WebkitBackdropFilter: "blur(28px) saturate(200%)",
                border:            "1px solid rgba(0, 24, 48, 0.09)",
                boxShadow:
                  "0 8px 30px -6px rgba(0, 24, 48, 0.12), 0 2px 8px -2px rgba(0,0,0,0.05), inset 0 1.5px 1px rgba(255,255,255,0.98)",
              }
            : undefined   // ── HERO STATE: transparent wrapper, no bg ──────
        }
      >

        {/* ── Logo — always LEFT ─────────────────────────────────────────── */}
        <a href="/" aria-label="Envistream EduSkill – Home" className="flex-shrink-0">
          <Image
            src={isDarkHero ? "/images/Envistream_logo_white.png" : "/images/Envistream_logo_svg.png"}
            alt="Envistream EduSkill Logo"
            width={140}
            height={48}
            priority
            className="h-8 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* ── Nav links — CENTER ─────────────────────────────────────────── */}
        {/*
            HERO:    own frosted glass pill (Infosys center floating pill)
            Scrolled: plain row of links inside the outer white bar
        */}
        <nav
          className="flex items-center gap-0.5 transition-all duration-300"
          style={
            isDarkHero
              ? {
                  background:           "rgba(255, 255, 255, 0.74)",
                  backdropFilter:       "blur(20px) saturate(175%)",
                  WebkitBackdropFilter: "blur(20px) saturate(175%)",
                  border:               "1px solid rgba(255, 255, 255, 0.72)",
                  boxShadow:            "0 4px 20px rgba(0,0,0,0.07), inset 0 1px 1.5px rgba(255,255,255,0.80)",
                  borderRadius:         "9999px",
                  padding:              "4px 8px",
                }
              : {
                  borderRadius: "9999px",
                  padding:      "2px 4px",
                }
          }
          onMouseLeave={handleNavLeave}
        >
          {navLinks.map((link, idx) => {
            const section    = navSections[link.id];
            const isOpen     = activeDropdown === link.id;
            const alignRight = idx >= 4;

            return (
              <div
                key={link.id || link.href}
                className="relative"
                onMouseEnter={() => handleNavEnter(link.id)}
                onMouseLeave={handleNavLeave}
              >
                {/* Antigravity sliding pill — sibling to Link, renders behind text */}
                {hoveredLink === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full pointer-events-none ${
                      isDarkHero ? "bg-white/30" : "bg-black/[0.08]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <Link
                  ref={(el) => { navRefs.current[idx] = el; }}
                  href={link.href}
                  onClick={() => setActiveDropdown(null)}
                  onKeyDown={(e) => handleKeyDown(e, idx, section, link.id)}
                  className={`relative px-3 py-1.5 rounded-full text-[13px] font-semibold tracking-tight transition-colors duration-150 flex items-center gap-1 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isOpen
                      ? isDarkHero ? "text-ink" : "text-primary"
                      : isDarkHero
                      ? "text-ink/80 hover:text-ink"
                      : "text-ink/75 hover:text-ink"
                  }`}
                >
                  <span>{link.label}</span>
                  {section && (
                    <svg
                      className={`w-3 h-3 transition-transform duration-150 opacity-60 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Transparent bridge: covers the 14px gap between nav and dropdown panel
                    so moving the cursor into the dropdown does NOT trigger onMouseLeave */}
                {isOpen && section && (
                  <div className="absolute left-0 right-0 top-full h-5" />
                )}

                {/* Dropdown panel */}
                <AnimatePresence>
                  {isOpen && section && (
                    <NavDropdown
                      section={section}
                      align={alignRight ? "right" : "left"}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            );

          })}
        </nav>

        {/* ── Right side: Language + Enquire Now ─────────────────────────── */}
        <div className="flex items-center gap-1.5 flex-shrink-0">

          {/* Language globe */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              suppressHydrationWarning
              aria-label="Select language"
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[12px] font-medium transition-colors duration-150 ${
                isDarkHero
                  ? "text-white/90 hover:text-white"
                  : "text-ink/65 hover:text-ink"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-wide">{currentLang}</span>
            </button>

            {/* Language dropdown — liquid glass panel */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-64 rounded-2xl overflow-hidden z-50 shadow-2xl"
                  style={{
                    background:           "rgba(255,255,255,0.97)",
                    backdropFilter:       "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border:               "1px solid rgba(0,0,0,0.08)",
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

          {/* Enquire Now — always orange accent on both states */}
          <button
            type="button"
            onClick={() => setEnquiryOpen(true)}
            className="text-[12px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm active:scale-95 cursor-pointer bg-accent text-white hover:bg-accent-dark border border-accent-light/30"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE / TABLET (< 1280px)
          [ ≡ hamburger ]   [ Logo ]   [ Enquire ]
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
                background:           "rgba(255, 255, 255, 0.90)",
                backdropFilter:       "blur(24px) saturate(190%)",
                WebkitBackdropFilter: "blur(24px) saturate(190%)",
                border:               "1px solid rgba(0, 24, 48, 0.12)",
                boxShadow:            "0 10px 30px -8px rgba(0, 24, 48, 0.12), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)",
              }
            : undefined
        }
      >
        {/* Hamburger */}
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
                  background:           "rgba(255, 255, 255, 0.55)",
                  backdropFilter:       "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border:               "1px solid rgba(255, 255, 255, 0.70)",
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

        {/* Enquire — accent orange on mobile */}
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
              background:           "rgba(255,255,255,0.95)",
              backdropFilter:       "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border:               "1px solid rgba(0,0,0,0.10)",
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

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultTrack="Academic & Tech Consultation"
        title="Talk to an Academic Counsellor"
      />
    </header>
  );
}
