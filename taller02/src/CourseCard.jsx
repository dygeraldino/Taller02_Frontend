function CourseCard({ icon, title, desc, badge }) {
  return (
    <article className="card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>{badge}</button>
    </article>
  )
}

export default CourseCard
