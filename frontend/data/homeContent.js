/**
 * Envistream EduSkill — Central Content Data
 * Source: envistream.org + Requirements Document (Sept 2026)
 *
 * Contains enriched data for courses, internships, testimonials, FAQs,
 * benefits, projects, and contact info.
 */

import { allCourses, courseCategories } from "./coursesData";

const baseCourses = [
  {
    id: "course-ai-genai",
    slug: "artificial-intelligence",
    name: "Artificial Intelligence & Generative AI",
    category: "AI & Data Science",
    level: "Beginner to Advanced",
    duration: "10 weeks",
    format: "Hybrid (Virtual & Lab)",
    badge: "Most Popular",
    rating: 4.9,
    studentsCount: "1,240+",
    shortDescription:
      "Master foundational machine learning, deep learning, PyTorch, and applied Generative AI / LLM workflows with live project deployment.",
    description:
      "A comprehensive industry-ready program covering Python for AI, neural networks, computer vision, natural language processing, and modern generative AI frameworks. Includes real-time capstone projects reviewed by MNC mentors.",
    skills: ["Python", "PyTorch", "OpenCV", "LLMs", "LangChain", "Prompt Engineering"],
    curriculum: [
      { module: "Module 1", title: "Python for Machine Learning & Numerical Computing" },
      { module: "Module 2", title: "Supervised & Unsupervised Machine Learning Algorithms" },
      { module: "Module 3", title: "Deep Learning Foundations & Neural Networks with PyTorch" },
      { module: "Module 4", title: "Applied Generative AI, Large Language Models & Prompt Engineering" },
      { module: "Module 5", title: "Capstone Project & Cloud Deployment" },
    ],
    certification: "ISO & AICTE-Aligned Course Completion & Verifiable Certificate",
    eligibility: "B.Tech, BCA, MCA, B.Sc, M.Sc, or working professionals with basic logic skills",
    fees: "₹14,999",
    discount: "20% Early Bird",
  },
  {
    id: "course-full-stack",
    slug: "web-development",
    name: "Full Stack Web Development (MERN / Next.js)",
    category: "Web Development",
    level: "Beginner to Intermediate",
    duration: "12 weeks",
    format: "Classroom / Virtual",
    badge: "High Demand",
    rating: 4.8,
    studentsCount: "1,850+",
    shortDescription:
      "Build production-grade full-stack web applications using React, Next.js, Node.js, Express, and PostgreSQL/MongoDB.",
    description:
      "From modern JavaScript syntax and responsive Tailwind CSS layouts to RESTful API architecture, JWT authentication, and database design, learn everything required to become a job-ready full stack engineer.",
    skills: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Next.js", "Node.js", "PostgreSQL"],
    curriculum: [
      { module: "Module 1", title: "Modern JavaScript & Responsive UI with Tailwind CSS" },
      { module: "Module 2", title: "React Components, State Management & Custom Hooks" },
      { module: "Module 3", title: "Server-side Node.js, Express & REST API Architecture" },
      { module: "Module 4", title: "Database Modelling with Prisma & PostgreSQL" },
      { module: "Module 5", title: "Full-Stack Deployment, CI/CD & Performance Optimization" },
    ],
    certification: "Verifiable Industry Certificate & Git Portfolio Review",
    eligibility: "Any college student or graduate interested in software engineering careers",
    fees: "₹12,999",
    discount: "15% Scholarship",
  },
  {
    id: "course-software-testing",
    slug: "software-testing-cypress",
    name: "Software Testing & Cypress Automation",
    category: "QA & Automation",
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    format: "Virtual & Lab",
    badge: "Industry Standard",
    rating: 4.8,
    studentsCount: "980+",
    shortDescription:
      "Master manual QA principles, test case design, API testing with Postman, and end-to-end web automation with Cypress & JavaScript.",
    description:
      "Software testing is an essential gateway to IT careers. This course covers test planning, bug lifecycle tracking, regression testing, and modern automated UI test suites with Cypress.",
    skills: ["Manual Testing", "Test Cases", "Cypress", "JavaScript", "Postman API", "JIRA"],
    curriculum: [
      { module: "Module 1", title: "Principles of Software QA & Agile Methodologies" },
      { module: "Module 2", title: "Test Case Design, Execution & Defect Tracking with JIRA" },
      { module: "Module 3", title: "REST API Testing with Postman & Assertions" },
      { module: "Module 4", title: "End-to-End Automation with Cypress & JavaScript" },
      { module: "Module 5", title: "Live QA Project on an Enterprise Web Platform" },
    ],
    certification: "QA Professional Certification & Live Project Report",
    eligibility: "Graduates from any stream seeking high-demand software testing roles",
    fees: "₹9,999",
    discount: "Special Student Offer",
  },
  {
    id: "course-erp-sap",
    slug: "erp-sap-training",
    name: "ERP & SAP Enterprise Training",
    category: "Enterprise Systems",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    format: "Virtual & Classroom",
    badge: "Corporate Focused",
    rating: 4.9,
    studentsCount: "740+",
    shortDescription:
      "Get hands-on training in SAP functional and technical modules with real-time enterprise implementation workflows.",
    description:
      "Gain competitive enterprise skills in ERP systems, SAP navigation, business process mapping, and real-time implementation guidance led by certified industry consultants.",
    skills: ["SAP Fundamentals", "ERP Workflows", "Business Process Mapping", "SAP Testing"],
    curriculum: [
      { module: "Module 1", title: "Introduction to Enterprise Resource Planning (ERP)" },
      { module: "Module 2", title: "SAP Architecture & Core Functional Modules Overview" },
      { module: "Module 3", title: "Business Process Integration & Master Data" },
      { module: "Module 4", title: "SAP Testing & Quality Assurance Workflows" },
      { module: "Module 5", title: "Real-world Enterprise Case Studies & Industry Practices" },
    ],
    certification: "Envistream SAP Domain Skill Certificate",
    eligibility: "B.Tech, BBA, MBA, M.Com, or Commerce/Engineering graduates",
    fees: "₹16,499",
    discount: "Corporate Sponsored Grants Available",
  },
  {
    id: "course-data-science",
    slug: "data-science-analytics",
    name: "Data Science & Business Analytics",
    category: "AI & Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    format: "Hybrid",
    badge: "High Growth",
    rating: 4.8,
    studentsCount: "1,120+",
    shortDescription:
      "Translate raw data into strategic business insights using Python, Pandas, SQL, Tableau, and predictive machine learning models.",
    description:
      "Develop end-to-end data analytics capabilities. Clean messy datasets, uncover behavioral trends, build interactive executive dashboards, and communicate findings effectively.",
    skills: ["Python", "SQL", "Pandas & NumPy", "Tableau / PowerBI", "Statistical Modeling"],
    curriculum: [
      { module: "Module 1", title: "Advanced SQL & Relational Database Queries" },
      { module: "Module 2", title: "Exploratory Data Analysis (EDA) with Python & Pandas" },
      { module: "Module 3", title: "Interactive Business Dashboards with PowerBI / Tableau" },
      { module: "Module 4", title: "Predictive Analytics & Statistical Forecasting" },
      { module: "Module 5", title: "Comprehensive Industry Analytics Capstone" },
    ],
    certification: "Data Analyst Specialization Certificate",
    eligibility: "Students and professionals with analytical mindset and basic math background",
    fees: "₹13,499",
    discount: "15% Scholarship",
  },
  {
    id: "course-digital-marketing",
    slug: "digital-marketing-ai-seo",
    name: "Digital Marketing & AI SEO / AEO",
    category: "Marketing & Growth",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    format: "Virtual & Classroom",
    badge: "Modern Growth",
    rating: 4.9,
    studentsCount: "1,450+",
    shortDescription:
      "Learn Search Engine Optimization, Answer Engine Optimization (AEO for ChatGPT & Gemini), Social Media, and Performance Ads.",
    description:
      "Move beyond outdated marketing tactics. Master modern search optimization tailored for AI overviews, Google SGE, Perplexity, organic brand authority, and paid PPC funnels.",
    skills: ["AI SEO", "AEO (Answer Engine)", "Google Ads", "Meta Ads", "Content Strategy", "Analytics"],
    curriculum: [
      { module: "Module 1", title: "Fundamentals of Digital Marketing & Brand Positioning" },
      { module: "Module 2", title: "Advanced On-Page & Technical SEO for Modern Search Engines" },
      { module: "Module 3", title: "AEO: Optimizing for ChatGPT, Perplexity & AI Search Overviews" },
      { module: "Module 4", title: "Performance Paid Ads: Google SEM & Social Media Funnels" },
      { module: "Module 5", title: "Conversion Rate Optimization (CRO) & Live Campaign Management" },
    ],
    certification: "Envistream Certified Digital Growth Strategist",
    eligibility: "BBA, MBA, Mass Comm, graduates, entrepreneurs, and marketing aspirants",
    fees: "₹8,999",
    discount: "20% Early Bird",
  },
];

const existingSlugs = new Set(baseCourses.map((c) => c.slug));

export const courses = [
  ...baseCourses,
  ...allCourses
    .filter((c) => !existingSlugs.has(c.slug))
    .map((c) => ({
      id: `course-${c.slug}`,
      slug: c.slug,
      name: c.title,
      category: c.category,
      level: c.level || "Beginner to Advanced",
      duration: c.duration,
      format: "Hybrid (Virtual & Lab)",
      badge: c.rating >= 4.9 ? "Top Rated" : "High Placement",
      rating: c.rating || 4.8,
      studentsCount: c.studentsCount || "850+",
      shortDescription: c.description,
      description: `${c.title} — ${c.description} Comprehensive curriculum aligned with top IT firms and industry hiring standards.`,
      skills: c.skills || ["Hands-on Projects", "Industry Mentorship"],
      curriculum: [
        { module: "Module 1", title: `Foundations & Core Principles of ${c.title}` },
        { module: "Module 2", title: "Hands-on Architectures & Modern Tools" },
        { module: "Module 3", title: "Real-world Practical Implementation & Labs" },
        { module: "Module 4", title: "Enterprise Best Practices & Optimization" },
        { module: "Module 5", title: "Capstone Project & Mentorship Review" },
      ],
      certification: "ISO & AICTE-Aligned Course Completion & Verifiable Certificate",
      eligibility: "Students, fresh graduates, or working professionals with basic logic skills",
      fees: c.fees || "₹12,999",
      discount: "Early Bird Available",
    })),
];

export { courseCategories };

export const internshipDomains = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Generative AI",
    icon: "brain",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Classroom",
    badge: "Mandatory AICTE Compliant",
    eligibility: "B.Tech (CSE, IT, ECE), MCA, BCA & Tech graduates",
    projects: "Customer Support LLM, Computer Vision Defect Detection, Predictive AI pipeline",
    description:
      "Gain real-time project experience on modern AI models, Python pipelines, and generative APIs under senior MNC mentors.",
  },
  {
    id: "web-dev",
    title: "Full Stack Web & Cloud Development",
    icon: "code",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Classroom",
    badge: "High Hiring Ratio",
    eligibility: "B.Tech, BCA, MCA, B.Sc Computer Science",
    projects: "Campus Management Portal, E-commerce Checkout Microservice, Realtime Dashboard",
    description:
      "Collaborate in sprint cycles building responsive web applications using React, Node.js, Express, and PostgreSQL.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    icon: "chart-bar",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Lab",
    badge: "Industry Analytics",
    eligibility: "B.Tech, BCA, MCA, BBA, B.Com, MBA students",
    projects: "Placement Trends Analytics Dashboard, Customer Churn Prediction Model",
    description:
      "Work with real enterprise datasets, generate executive visualization reports, and automate data extraction pipelines.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & SOC Defense Operations",
    icon: "shield",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Lab",
    badge: "High Demand",
    eligibility: "B.Tech, BCA, MCA & Tech graduates interested in Security",
    projects: "SOC Incident Triage, Vulnerability Assessment, Wireshark Network Audit",
    description:
      "Hands-on red/blue team exercises, security log analysis, and penetration testing on realistic CTF lab networks.",
  },
  {
    id: "cloud-devops",
    title: "Cloud DevOps & Kubernetes Infrastructure",
    icon: "cloud",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Lab",
    badge: "Cloud Certified",
    eligibility: "B.Tech, MCA, BCA & System Admin aspirants",
    projects: "Dockerized Microservice Deployment, GitHub Actions CI/CD Pipeline, AWS VPC Setup",
    description:
      "Learn modern Infrastructure as Code, container orchestration, and continuous integration workflows on AWS.",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development (Flutter & React Native)",
    icon: "mobile",
    duration: "4 to 12 Weeks",
    mode: "Virtual / Lab",
    badge: "Cross-Platform",
    eligibility: "B.Tech, BCA, MCA & creative frontend developers",
    projects: "Campus Delivery App, Real-Time Chat System, Offline-First SQLite App",
    description:
      "Build native-performance iOS & Android mobile applications with state management, REST APIs, and push notifications.",
  },
  {
    id: "java-enterprise",
    title: "Java Full Stack & Spring Boot Enterprise",
    icon: "server",
    duration: "6 to 12 Weeks",
    mode: "Virtual / Classroom",
    badge: "MNC Standard",
    eligibility: "B.Tech, MCA, BCA graduates aiming for Tier-1 IT companies",
    projects: "Banking Ledger Microservice, Spring Security JWT OAuth2, Hibernate Data Layer",
    description:
      "Industry-standard Java architecture, multithreading, REST APIs, and relational databases for corporate enterprise software.",
  },
  {
    id: "qa-testing",
    title: "Software Testing & Automation (Cypress)",
    icon: "check-circle",
    duration: "4 to 8 Weeks",
    mode: "Virtual / Lab",
    badge: "High Demand",
    eligibility: "Graduates interested in Quality Assurance & QA Automation",
    projects: "End-to-end Cypress regression test suite, REST API Postman automation",
    description:
      "Hands-on execution of test plans, bug lifecycle reports in JIRA, and writing maintainable automated test scripts.",
  },
  {
    id: "digital-growth",
    title: "Digital Marketing & AI SEO / Lead Generation",
    icon: "megaphone",
    duration: "4 to 8 Weeks",
    mode: "Virtual / Classroom",
    badge: "BBA/MBA Oriented",
    eligibility: "BBA, MBA, Mass Comm, and interested graduates",
    projects: "Live AI-Driven SEO Audit, Content Strategy for AI Search Engines (AEO)",
    description:
      "Manage real campaigns, optimize organic brand presence, and learn modern lead qualification frameworks.",
  },
  {
    id: "sap-erp",
    title: "ERP / SAP Functional & Technical Tracks",
    icon: "briefcase",
    duration: "6 to 12 Weeks",
    mode: "Virtual / Lab",
    badge: "Enterprise Track",
    eligibility: "B.Tech, MBA, M.Com, and analytical graduates",
    projects: "ERP Master Data Configuration, Business Workflow Simulation",
    description:
      "Learn how enterprise systems operate, navigate SAP interfaces, and shadow real-world business implementations.",
  },
];

export const programBenefits = [
  {
    title: "24x7 Lab Facilities",
    desc: "Dedicated high-speed development lab environments and cloud sandboxes accessible day and night.",
    icon: "computer",
  },
  {
    title: "Faculty with Top MNC Experience",
    desc: "Mentors who have delivered enterprise systems at premier IT firms, not just academic lecturers.",
    icon: "building-user",
  },
  {
    title: "Experience with Live Projects",
    desc: "Every candidate works on deployable, portfolio-worthy real projects that can be showcased to recruiters.",
    icon: "globe",
  },
  {
    title: "Mock Interviews by External Panel",
    desc: "Rigorous technical mock interviews conducted by external industry engineers with detailed feedback.",
    icon: "users",
  },
  {
    title: "Interview with Real-time HR",
    desc: "HR etiquette training, behavioral question prep, and salary negotiation guidance with active recruiters.",
    icon: "user-tie",
  },
  {
    title: "Daily Doubt Clearing Classes",
    desc: "One-on-one and small group support sessions every single day so no student gets left behind.",
    icon: "help-circle",
  },
  {
    title: "AICTE & BPUT Model Syllabus Aligned",
    desc: "Mandatory university internship credit compliance with verified completion reports and official certificates.",
    icon: "award",
  },
  {
    title: "Technical Placement Assistance",
    desc: "Direct interview referrals, campus placement drives, and verified credentials presented to hiring partners.",
    icon: "briefcase",
  },
];

export const projects = [
  {
    domain: "Artificial Intelligence",
    title: "Automated Resume Screening & Ranking Engine",
    outcome: "Built an NLP classification pipeline matching candidate skills to tech job descriptions with 91% accuracy.",
    tech: ["Python", "Transformers", "FastAPI", "Docker"],
  },
  {
    domain: "Full Stack Web",
    title: "Campus Academic & Placement Management Portal",
    outcome: "Enterprise Next.js web application supporting 2,000+ student profiles, event bookings, and real-time alerts.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    domain: "Quality Assurance",
    title: "Continuous Regression Suite for FinTech Platform",
    outcome: "Created an automated Cypress testing pipeline reducing manual release QA time from 14 hours to 22 minutes.",
    tech: ["Cypress", "JavaScript", "Postman", "GitHub Actions"],
  },
  {
    domain: "Data Analytics",
    title: "DLF Cyber City Placement Trend Analytics Dashboard",
    outcome: "Interactive PowerBI visual dashboard mapping hiring trends across 85+ regional IT companies.",
    tech: ["SQL", "Pandas", "PowerBI", "Python"],
  },
];

// Verified alumni testimonials from Envistream EduSkill
export const testimonials = [
  {
    name: "Tanmay Kumar Sahoo",
    role: "Full Stack Developer",
    course: "Full Stack Web & Node/React Track",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "My internship experience at Envistream was transformative. The mentors made us comfortable with real Git workflows, team sprints, and writing clean production code. That project in my portfolio directly landed me my developer offer.",
  },
  {
    name: "Sagar Chouhan",
    role: "Data Analyst",
    course: "Data Analytics & Python Track",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "The practical hands-on data projects and daily doubt clearing sessions bridged the gap between theory and industry requirements. I was able to explain our end-to-end data pipeline with total confidence during interviews.",
  },
  {
    name: "Ranjit Singh",
    role: "Backend Engineer",
    course: "Full Stack & Database Track",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote:
      "It is a truly practical program where you build APIs, design database schemas, and deploy actual code. The mentors have real MNC experience and teach you best practices that universities skip.",
  },
  {
    name: "Udit Chourasia",
    role: "Software Engineer",
    course: "Software Testing & Cypress Track",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    quote:
      "The guidance on modern Cypress automation and real-time mock interviews with external HR panels gave me the competitive edge I needed to clear technical rounds with ease.",
  },
  {
    name: "Ragini Singh",
    role: "Systems Engineer",
    course: "AI & Emerging Tech Track",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote:
      "The internship was exactly the structured environment I needed. Participating in live project cycles and understanding how IT teams coordinate gave me unmatched confidence for my first corporate role.",
  },
];

export const faqs = [
  {
    category: "General",
    q: "Who can join Envistream EduSkill programs?",
    a: "Our programs are open to college students (B.Tech, BCA, MCA, BBA, MBA, B.Sc), fresh graduates, and working professionals looking to upskill or transition into AI, full-stack web, data analytics, and quality assurance.",
  },
  {
    category: "Internships",
    q: "Are the internships compliant with AICTE & university guidelines?",
    a: "Yes. Envistream EduSkill internships are fully structured in accordance with AICTE and state university (such as BPUT) mandatory internship models. Students receive an official offer letter, project log report, and verifiable completion certificate.",
  },
  {
    category: "Certifications",
    q: "How does the certificate verification system work?",
    a: "Every issued certificate carries a unique identifier (e.g., EVS-2026-AI-000123). Employers or academic verification cells can enter this ID on our Certificate Verification page to instantly validate candidate credentials, course name, and completion status.",
  },
  {
    category: "Training Format",
    q: "Are classes available in virtual or classroom format?",
    a: "We offer both! Students can join in-person at our Bhubaneswar tech centers (DLF Cyber City / Unit 4 AG Colony) or attend live interactive virtual sessions with screen sharing, remote lab access, and recorded session replays.",
  },
  {
    category: "Placement",
    q: "What kind of placement support is provided?",
    a: "We provide comprehensive placement prep including technical mock interviews with external MNC panels, resume and LinkedIn profile optimization, real-time HR interview rounds, and direct referral opportunities with hiring partners.",
  },
  {
    category: "Institutions",
    q: "How can colleges and universities collaborate under an MoU?",
    a: "Colleges can sign an institutional MoU with Envistream for student batch internships, campus technical bootcamps, faculty development programs (FDPs), and campus placement pipeline setups. Contact our institutional relations team for custom proposals.",
  },
];

export const companyDetails = {
  name: "Envistream EduSkill",
  legalName: "Envistream Smartech Pvt. Ltd.",
  headquarters: "DCB-907, 9th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha, 751024",
  registeredOffice: "M3, Old AG Colony, Unit 4, Bhubaneswar, Odisha, 751001",
  phones: ["+91 90784 19012", "+91 78734 89364"],
  emails: ["training@envistream.org", "internshipenvistream@gmail.com"],
  hours: "Monday – Saturday: 09:00 AM – 08:00 PM IST",
  socials: {
    facebook: "https://www.facebook.com/EnvistreamEduskill/",
    instagram: "https://www.instagram.com/envistreameduskill/",
    linkedin: "https://www.linkedin.com/company/envistream-eduskill/",
    youtube: "https://www.youtube.com/@EnvistreamEduskill",
  },
};
