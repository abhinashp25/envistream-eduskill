import { courses } from "@/data/homeContent";

export default function PopularCourses() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt border-y border-line">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
              Popular courses
            </h2>
            <p className="text-ink/70 leading-relaxed">
              Structured, project-based tracks across the technology domains
              employers are hiring for right now.
            </p>
          </div>
          <a href="/courses" className="text-primary font-medium text-sm hover:underline">
            View all courses
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.slug} className="bg-surface border border-line rounded-xl p-6 flex flex-col">
              <p className="text-xs font-medium text-primary mb-2">{course.level}</p>
              <h3 className="text-lg font-semibold text-ink mb-2">{course.name}</h3>
              <p className="text-sm text-ink/65 leading-relaxed mb-4 flex-1">
                {course.description}
              </p>
              <div className="flex items-center justify-between text-xs text-ink/50 mb-4">
                <span>{course.duration}</span>
                <span>{course.format}</span>
              </div>
              <a
                href={`/courses/${course.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Explore course
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
