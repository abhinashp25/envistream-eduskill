"use client";

import { motion } from "framer-motion";

const aiTracks = [
  {
    title: "Generative AI & LLMs",
    desc: "Build AI applications with LangChain, Llama, OpenAI APIs, and custom vector embeddings.",
    icon: "sparkles",
    tags: ["Prompt Eng.", "RAG Pipelines", "Embeddings"],
  },
  {
    title: "Computer Vision & Deep Learning",
    desc: "Train PyTorch models for object detection, image segmentation, and edge processing.",
    icon: "eye",
    tags: ["PyTorch", "OpenCV", "YOLOv8"],
  },
  {
    title: "Applied Machine Learning",
    desc: "Predictive algorithms, regression models, classification trees, and end-to-end MLOps.",
    icon: "chip",
    tags: ["Scikit-Learn", "FastAPI", "Docker"],
  },
  {
    title: "Answer Engine Optimization (AEO)",
    desc: "Optimize content and brand authority for Perplexity, Gemini, ChatGPT, and Google AI Overviews.",
    icon: "search",
    tags: ["Semantic Search", "Schema Org", "AI Citations"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "Containerized microservices deployment, CI/CD automation, and cloud monitoring.",
    icon: "cloud",
    tags: ["AWS", "Docker", "GitHub Actions"],
  },
  {
    title: "Cybersecurity & Threat Defense",
    desc: "Network security analysis, vulnerability assessments, and OWASP top 10 auditing.",
    icon: "shield",
    tags: ["Pen-Testing", "Wireshark", "Audit Logs"],
  },
];

export default function AIEmergingTech() {
  return (
    <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-light text-xs font-semibold uppercase tracking-wider mb-3">
              Next-Gen AI &amp; Tech
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Future-Proofing Your Career in the Age of AI
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              Generic software tutorials are no longer enough. The job market rewards developers who understand how to orchestrate AI models, deploy automated workflows, and build resilient cloud systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/courses/artificial-intelligence"
                className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all shadow-lg"
              >
                Explore AI & GenAI Track
              </a>
              <a
                href="/courses"
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-all"
              >
                All Tech Programs
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiTracks.map((track, idx) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 transition-all group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {track.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
