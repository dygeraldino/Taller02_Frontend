import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courses = [
  {
    icon: "⚛️",
    title: "React Básico",
    desc: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    badge: "Principiante",
  },
  {
    icon: "🔁",
    title: "React Hooks",
    desc: "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    badge: "Intermedio",
  },
  {
    icon: "📁",
    title: "Estado Global",
    desc: "Gestiona el estado con Context API y aprende cuándo usarlo.",
    badge: "Intermedio",
  },
  {
    icon: "🚀",
    title: "React Avanzado",
    desc: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    badge: "Avanzado",
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">ReactAcademy</h1>
        <nav>
          <ul className="navbar-list">
            <li className="navbar-item">Inicio</li>
            <li className="navbar-item">Cursos</li>
            <li className="navbar-item">Nosotros</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Top(){
  return (
    <div className="top-section">
      <h1 className="top-title">Aprende <span>React</span> desde cero</h1>
      <p className="top-subtitle">Domina la librería más popular del frontend con proyectos <br />prácticos y reales</p>
      <div className="top_button_container">
        <button className="top_button">Ver Cursos</button>
      </div>
    </div>
  );
}

function Medium(){
  return (
    <div className="medium-section">
      <h2 className="medium-title">Nuestros Cursos</h2>
      <p className="medium-subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="cards-container">
        <div className="card">
          <span>{courses[0].icon}</span>
          <h3>{courses[0].title}</h3>
          <p>{courses[0].desc}</p>
          <button>Principiante</button>
        </div>
        <div className="card">
          <span>{courses[1].icon}</span>
          <h3>{courses[1].title}</h3>
          <p>{courses[1].desc}</p>
          <button>Intermedio</button>
        </div>
        <div className="card">
          <span>{courses[2].icon}</span>
          <h3>{courses[2].title}</h3>
          <p>{courses[2].desc}</p>
          <button>Intermedio</button>
        </div>
        <div className="card">
          <span>{courses[3].icon}</span>
          <h3>{courses[3].title}</h3>
          <p>{courses[3].desc}</p>
          <button>Avanzado</button>
        </div>
      </div>
    </div>
  );
}

function Down(){
  const [count, setCount] = useState(0);
  return (
    <div className="down-section">
      <h2 className="down-title">¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="down-subtitle">Usa los botones para ajustar el número</p>
      <div className="counter-box">
        <button className="counter-btn" onClick={() => setCount(count > 0 ? count - 1 : 0)}>−</button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p className="counter-label">estudiantes inscritos</p>
    </div>
  );
}


function Footer(){
  return (
    <footer className="footer">
      <p>© 2026 <span className="footer-brand">ReactAcademy</span>. Taller 02 — React Fundamentos.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Top />
      <Medium />
      <Down />
      <Footer />
    </>
  )
}

export default App
