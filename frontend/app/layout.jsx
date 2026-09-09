import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
