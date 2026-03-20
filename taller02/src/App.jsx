import './App.css'
import CoursesSection from './CoursesSection'
import EnrollmentSection from './EnrollmentSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'

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

function App() {
  return (
    <>
      <Navbar brand="ReactAcademy" links={['Inicio', 'Cursos', 'Nosotros']} />
      <HeroSection
        titleHighlight="React"
        subtitle="Domina la librería más popular del frontend con proyectos prácticos y reales."
        buttonText="Ver Cursos"
      />
      <CoursesSection
        title="Nuestros Cursos"
        subtitle="Elige el camino que mejor se adapte a ti"
        courses={courses}
      />
      <EnrollmentSection
        title="¿Cuántos estudiantes van a inscribirse?"
        subtitle="Usa los botones para ajustar el número"
        label="estudiantes inscritos"
      />
      <Footer brand="ReactAcademy" text="Taller 02 — React Fundamentos." />
    </>
  )
}

export default App
