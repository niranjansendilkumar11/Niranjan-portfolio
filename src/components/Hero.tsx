import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const roles = ['Software Developer','Oracle Technical Consultant', 'PL/SQL Developer', 'ERP Specialist','Oracle SQL Developer']
  const roleRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    let i = 0, j = 0, deleting = false
    const tick = () => {
      const current = roles[i % roles.length]
      if (roleRef.current) {
        roleRef.current.textContent = deleting ? current.slice(0, j--) : current.slice(0, j++)
        if (!deleting && j > current.length) { deleting = true; setTimeout(tick, 1500); return }
        if (deleting && j < 0) { deleting = false; i++; j = 0 }
      }
      setTimeout(tick, deleting ? 50 : 80)
    }
    tick()
  }, [])

  return (
    <section ref={containerRef}
      style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#07020f' }}>

      {/* Background gradients */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.2) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(88,28,235,0.1) 0%, transparent 60%)' }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Main layout */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', padding: '0 80px', gap: 80 }}>

        {/* LEFT - Text */}
        <motion.div style={{ flex: 1, y: textY, opacity: textOpacity }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'monospace', fontSize: 16, color: '#a78bfa', marginBottom: 8 }}>
            Hello, It's Me
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(42px,6vw,84px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: '#fff', letterSpacing: -2 }}>
            Niranjan<br />Sendilkumar
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontSize: 20, marginBottom: 24, fontFamily: 'monospace', minHeight: 32, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span ref={roleRef} style={{ color: '#a78bfa', fontWeight: 700 }}></span>
            <span style={{ color: '#a78bfa', animation: 'blink 1s infinite' }}>|</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 460, marginBottom: 36 }}>
            3+ years building enterprise ERP systems with Oracle E-Business Suite R12.
            Currently pursuing MSc in Artificial Intelligence at Dublin Business School, Ireland.
          </motion.p>

          {/* Social icons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: 'flex', gap: 12, marginBottom: 32 }}>

            {/* GitHub */}
            <a href="https://github.com/niranjansendilkumar11" target="_blank"
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/niranjan-sendilkumar" target="_blank"
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:niranjansendilkumar11@gmail.com"
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: 16 }}>
            <a href="#contact"
              style={{ padding: '13px 32px', background: '#7c3aed', color: '#fff', fontFamily: 'monospace', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4, transition: 'all 0.3s', boxShadow: '0 0 25px rgba(124,58,237,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(124,58,237,0.4)' }}>
              Get In Touch
            </a>
            <a href="/niranjan-portfolio/niranjan_cv.pdf" download="Niranjan_Sendilkumar_CV.pdf"
              style={{ padding: '13px 32px', background: 'transparent', color: '#a78bfa', fontFamily: 'monospace', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4, border: '1px solid #7c3aed', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT - Hexagon Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ flex: '0 0 580px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', y: photoY, marginLeft: '-80px' }}
        >
          {/* Animated glow dots moving around hexagon */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', width: 420, height: 420, zIndex: 1 }}>
            <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', width: 30, height: 30, background: '#a78bfa', borderRadius: '50%', boxShadow: '0 0 20px 10px rgba(167,139,250,0.8), 0 0 40px 20px rgba(124,58,237,0.5)', filter: 'blur(2px)' }} />
          </motion.div>

          <motion.div animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', width: 420, height: 420, zIndex: 1 }}>
            <div style={{ position: 'absolute', bottom: -15, left: '50%', transform: 'translateX(-50%)', width: 20, height: 20, background: '#7c3aed', borderRadius: '50%', boxShadow: '0 0 15px 8px rgba(124,58,237,0.8), 0 0 30px 15px rgba(88,28,235,0.4)', filter: 'blur(2px)' }} />
          </motion.div>

          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 1 }}
            style={{ position: 'absolute', width: 380, height: 380, zIndex: 1 }}>
            <div style={{ position: 'absolute', top: '50%', right: -15, transform: 'translateY(-50%)', width: 16, height: 16, background: '#c4b5fd', borderRadius: '50%', boxShadow: '0 0 12px 6px rgba(196,181,253,0.8)', filter: 'blur(1px)' }} />
          </motion.div>

          {/* Floating hexagon */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            {/* Outer glow */}
            <div style={{ position: 'absolute', inset: -30, background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)', filter: 'blur(25px)' }} />

            {/* Hexagon */}
            <div style={{ width: 440, height: 495, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', position: 'relative' }}>
              {/* Purple border */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #9333ea, #4c1d95, #7c3aed)' }} />
              {/* Photo with inner glow */}
              <div style={{
                position: 'absolute', inset: 5,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: 'url(/niranjan-portfolio/niranjan.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}>
                {/* Inner floating glow */}
                <motion.div
                  animate={{
                    background: [
                      'radial-gradient(circle at 30% 80%, rgba(124,58,237,0.6) 0%, transparent 60%)',
                      'radial-gradient(circle at 70% 80%, rgba(167,139,250,0.6) 0%, transparent 60%)',
                      'radial-gradient(circle at 50% 90%, rgba(124,58,237,0.8) 0%, transparent 60%)',
                      'radial-gradient(circle at 30% 80%, rgba(124,58,237,0.6) 0%, transparent 60%)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', inset: 0 }}
                />
                {/* Top shine */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, rgba(167,139,250,0.15), transparent)' }}
                />
              </div>
            </div>

            {/* Bottom glow */}
            <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', width: 250, height: 80, background: 'rgba(124,58,237,0.6)', filter: 'blur(30px)', borderRadius: '50%' }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 3 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, textTransform: 'uppercase' }}>Scroll</div>
        <motion.div animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, #a78bfa, transparent)', transformOrigin: 'top' }} />
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}