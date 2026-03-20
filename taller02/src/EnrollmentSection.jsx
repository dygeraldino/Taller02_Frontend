import { useState } from 'react'

function EnrollmentSection({ title, subtitle, label }) {
  const [count, setCount] = useState(0)

  return (
    <section className="down-section">
      <h2 className="down-title">{title}</h2>
      <p className="down-subtitle">{subtitle}</p>
      <div className="counter-box">
        <button
          className="counter-btn"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          −
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <p className="counter-label">{label}</p>
    </section>
  )
}

export default EnrollmentSection
