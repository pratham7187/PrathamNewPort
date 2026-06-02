import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Smooth scroll offset fix
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="relative min-h-screen bg-[#020409] noise-overlay">
      {/* Global animated background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 70%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 50% 50%, rgba(236, 72, 153, 0.02) 0%, transparent 60%)
          `,
          zIndex: 0,
        }}
      />

      {/* Particle system */}
      <ParticleBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />

        <main>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Projects />
              <Skills />
              <Timeline />
              <Certifications />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  )
}
