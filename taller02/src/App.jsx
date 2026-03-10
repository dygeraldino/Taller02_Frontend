import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    </div>
  );
}


function App() {
  return (
    <>
      <Navbar />
      <Top />
    </>
  )
}

export default App
