function Navbar({ brand, links }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">{brand}</h1>
        <nav>
          <ul className="navbar-list">
            {links.map((link) => (
              <li key={link} className="navbar-item">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
