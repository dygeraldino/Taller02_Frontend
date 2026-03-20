function Footer({ brand, text }) {
  return (
    <footer className="footer">
      <p>
        © 2026 <span className="footer-brand">{brand}</span>. {text}
      </p>
    </footer>
  )
}

export default Footer
