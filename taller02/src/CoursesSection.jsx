import CourseCard from './CourseCard'

function CoursesSection({ title, subtitle, courses }) {
  return (
    <section className="medium-section">
      <h2 className="medium-title">{title}</h2>
      <p className="medium-subtitle">{subtitle}</p>
      <div className="cards-container">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            icon={course.icon}
            title={course.title}
            desc={course.desc}
            badge={course.badge}
          />
        ))}
      </div>
    </section>
  )
}

export default CoursesSection
