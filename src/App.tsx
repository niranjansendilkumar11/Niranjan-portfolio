import { useState } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import EducationDetail from './components/EducationDetail'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </>
  )
}

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  return (
    <div onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
      {/* Purple glow follow */}
      <motion.div style={{ position: 'fixed', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 9997, filter: 'blur(10px)', transform: 'translate(-50%, -50%)' }}
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }} />
      <motion.div style={{ position: 'fixed', width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(167,139,250,0.6)', pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%, -50%)' }}
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }} />
      <motion.div style={{ position: 'fixed', width: 10, height: 10, borderRadius: '50%', background: '#7c3aed', pointerEvents: 'none', zIndex: 9999, boxShadow: '0 0 10px rgba(124,58,237,0.8)', transform: 'translate(-50%, -50%)' }}
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/education/:id" element={<EducationDetail />} />
      </Routes>
    </div>
  )
}

export default App