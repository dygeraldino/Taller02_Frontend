function HeroSection({ titleHighlight, subtitle, buttonText }) {
  return (
    <section className="top-section">
      <h1 className="top-title">
        Aprende <span>{titleHighlight}</span> desde cero
      </h1>
      <p className="top-subtitle">{subtitle}</p>
      <div className="top_button_container">
        <button className="top_button">{buttonText}</button>
      </div>
    </section>
  )
}

export default HeroSection
