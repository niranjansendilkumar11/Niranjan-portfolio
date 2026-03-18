import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 80px', background: '#0a0514', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>

        {/* Orbit animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, position: 'relative' }}
        >
          {/* Center orb */}
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, #4c1d95)', boxShadow: '0 0 40px rgba(124,58,237,0.6)', position: 'absolute', zIndex: 2 }} />

          {/* Orbit rings */}
          {[120, 180, 240].map((size, i) => (
            <motion.div key={size}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
              style={{ width: size * 2, height: size * 2, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.3)', position: 'absolute' }}
            >
              {/* Dot on orbit */}
              <div style={{
                width: i === 0 ? 12 : i === 1 ? 10 : 8,
                height: i === 0 ? 12 : i === 1 ? 10 : 8,
                borderRadius: '50%',
                background: i === 0 ? '#a78bfa' : i === 1 ? '#60a5fa' : '#34d399',
                boxShadow: `0 0 10px ${i === 0 ? '#a78bfa' : i === 1 ? '#60a5fa' : '#34d399'}`,
                position: 'absolute',
                top: -6, left: '50%', marginLeft: -6
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>ABOUT ME</div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 24, color: '#fff' }}>
            Building intelligent systems that feel alive.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 16 }}>
            I'm Niranjan an Oracle Technical Consultant with 3+ years of experience in Oracle E-Business Suite R12, specializing in PL/SQL development and ERP integrations.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 16 }}>
            I specialize in building and optimizing SQL & PL/SQL procedures, ERP interfaces, and automation solutions that reduced processing time by <span style={{ color: '#a78bfa', fontWeight: 600 }}>40%</span>.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 32 }}>
            Currently pursuing an MSc in <span style={{ color: '#a78bfa', fontWeight: 600 }}>Artificial Intelligence</span> at Dublin Business School, Ireland.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['📍 Dublin, Ireland', '🎓 MSc Artificial Intelligence Student', '💼 Open for opportunity'].map(tag => (
              <span key={tag} style={{ padding: '8px 16px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 20, fontFamily: 'monospace', fontSize: 12, color: '#a78bfa' }}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}