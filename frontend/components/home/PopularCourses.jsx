"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { courses as fallbackCourses } from "@/data/homeContent";
import api from "@/lib/axios";
import EnquiryModal from "@/components/common/EnquiryModal";

export default function PopularCourses() {
  const [coursesList, setCoursesList] = useState(fallbackCourses);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    // Attempt backend fetch; if unavailable, fallback is already in place
    let isMounted = true;
    api.get("/courses")
      .then((res) => {
        if (isMounted && res?.data && Array.isArray(res.data) && res.data.length > 0) {
          // Merge or supplement with backend courses
          setCoursesList((prev) => {
            const backendCourses = res.data.map((c) => ({
              slug: c.slug || c.id,
              name: c.title,
              category: c.category || "Technology",
              level: c.level || "All Levels",
              duration: `${c.duration || 8} weeks`,
              format: "Hybrid / Lab",
              badge: "Active Batch",
              rating: 4.8,
              shortDescription: c.description,
              certification: "Verifiable Certificate",
              fees: c.price ? `₹${c.price}` : "Affordable",
            }));
            return [...backendCourses, ...fallbackCourses.filter(f => !backendCourses.some(b => b.slug === f.slug))];
          });
        }
      })
      .catch(() => {
        // Backend not running or empty; silent fallback
      });
    return () => { isMounted = false; };
  }, []);

  const categories = ["All", "AI & Data Science", "Web Development", "QA & Automation", "Enterprise Systems"];

  const filteredCourses = selectedCategory === "All"
    ? coursesList
    : coursesList.filter((c) => c.category === selectedCategory);

  const handleEnquire = (course) => {
    setActiveCourse(course);
    setModalOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-surface-alt border-y border-line relative">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Featured Programs
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
              Industry-Aligned Programs with Guaranteed Project Mentorship
            </h2>
            <p className="text-base text-ink/70 leading-relaxed">
              Curated training modules built around what high-growth IT firms and MNCs hire for right now in Bhubaneswar and across India.
            </p>
          </div>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <span>View All Courses & Syllabus</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-ink/70 hover:bg-surface border border-line hover:border-ink/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.slice(0, 6).map((course, idx) => (
            <motion.div
              key={course.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-primary/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {course.level}
                  </span>
                  {course.badge && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-accent/15 text-accent-dark">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-6 line-clamp-3">
                  {course.shortDescription || course.description}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-line text-xs text-ink/70 mb-5">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`/courses/${course.slug}`}
                    className="text-xs font-semibold text-ink/80 hover:text-primary underline underline-offset-4"
                  >
                    View Curriculum →
                  </a>
                  <button
                    onClick={() => handleEnquire(course)}
                    className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-medium transition-colors shadow-sm cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack={activeCourse?.name || "General Course Enquiry"}
        title={activeCourse ? `Enquire about ${activeCourse.name}` : "Course Enquiry"}
      />
    </section>
  );
}
