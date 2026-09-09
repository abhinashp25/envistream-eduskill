// Temporary static content for the homepage.
// This file exists so the homepage can be built and reviewed before the
// backend + CMS (course/internship database) is connected.
// Replace with live API calls via lib/api.js once the backend is ready.

export const courses = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    level: "Beginner to Advanced",
    description:
      "Core AI concepts, machine learning fundamentals, and applied generative AI projects.",
    duration: "8 weeks",
    format: "Hybrid",
  },
  {
    slug: "web-development",
    name: "Full Stack Web Development",
    level: "Beginner to Intermediate",
    description:
      "HTML, CSS, JavaScript, React and Node.js — build and deploy real applications.",
    duration: "10 weeks",
    format: "Classroom / Virtual",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity Fundamentals",
    level: "Beginner",
    description:
      "Network security, ethical hacking basics, and industry-standard security practices.",
    duration: "6 weeks",
    format: "Virtual",
  },
];

export const projects = [
  { domain: "AI", title: "Resume Screening Assistant", outcome: "Deployed ML classification pipeline" },
  { domain: "Web Dev", title: "Campus Event Portal", outcome: "Full-stack app with auth and booking" },
  { domain: "Data Science", title: "Placement Trend Dashboard", outcome: "Data pipeline + visual analytics" },
  { domain: "Cybersecurity", title: "Network Vulnerability Audit", outcome: "Simulated pen-test report" },
];

// PLACEHOLDER — replace with verified, real student testimonials before launch.
// The old site's testimonials referenced unrelated industries (marine
// conservation, hospital shadowing) and must not be reused.
export const testimonials = [
  {
    name: "[Student name — to confirm]",
    role: "AI Track, 2026",
    quote: "[Insert verified testimonial after student sign-off.]",
  },
  {
    name: "[Student name — to confirm]",
    role: "Web Development Track, 2026",
    quote: "[Insert verified testimonial after student sign-off.]",
  },
  {
    name: "[Student name — to confirm]",
    role: "Internship Program, 2026",
    quote: "[Insert verified testimonial after student sign-off.]",
  },
];

export const faqs = [
  {
    q: "Who can join Envistream EduSkill programs?",
    a: "School students, college students, graduates, postgraduates, working professionals and career changers — programs are structured by skill level.",
  },
  {
    q: "Are internships paid or unpaid?",
    a: "This depends on the specific internship track. Details are listed on each internship's page before you apply.",
  },
  {
    q: "Do I get a certificate after completing a course?",
    a: "Yes. Every completed course, internship and workshop issues a certificate with a unique ID you can verify on our site.",
  },
  {
    q: "Can my college partner with Envistream EduSkill?",
    a: "Yes — we work with colleges and universities on internship pipelines, faculty development, and placement-oriented training under MoU partnerships.",
  },
];
