import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotButton from "@/components/layout/ChatbotButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Envistream EduSkill | Industry-Ready Training, Internships & Career Programs",
  description:
    "Envistream EduSkill offers industry-oriented training, internships, certifications and career development programs in AI, software development, and emerging technology.",
  metadataBase: new URL("https://envistream.org"),
  // Browser tab icon (favicon) — square icon-only image, readable at 16×16px
  icons: {
    icon: "/images/favicon_icon.jpg",
    shortcut: "/images/favicon_icon.jpg",
    apple: "/images/favicon_icon.jpg",
  },
  openGraph: {
    title: "Envistream EduSkill | Industry-Ready Training, Internships & Career Programs",
    description:
      "Industry-oriented training, internships, certifications and career development programs in AI and emerging technology.",
    url: "https://envistream.org",
    siteName: "Envistream EduSkill",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotButton />

        {/*
          ── Google Translate (real-time full-page translation) ──────────────
          The hidden div below is the mount point for the widget.
          CSS in globals.css hides the ugly default toolbar Google injects.
          Our custom language selector in Header.jsx controls it via
          the .goog-te-combo select element that Google renders inside.
        */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Step 1: define the callback BEFORE Google's script loads */}
        <Script id="google-translate-init" strategy="afterInteractive">{`
          window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                // Odia is "or" — plus Indian & International languages
                includedLanguages: "en,or,hi,bn,ta,te,kn,ml,gu,mr,es,fr,de,ja,zh-CN,ar,pt",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          };
        `}</Script>

        {/* Step 2: load Google Translate — calls the callback above when ready */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
