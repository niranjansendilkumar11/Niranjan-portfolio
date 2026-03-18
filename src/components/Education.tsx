import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const edu = [
  {
    id: 'msc-ai',
    period: 'JAN 2026 — PRESENT',
    degree: 'MSc in Artificial Intelligence',
    school: 'Dublin Business School · Ireland 🇮🇪',
    courses: 'Machine Learning · Deep Learning · Data Analytics · Python for AI · Big Data · Research Methods',
    status: 'In Progress',
    color: '#7c3aed',
  },
  {
    id: 'btech-it',
    period: 'MAR 2018 — APR 2022',
    degree: 'B.Tech Information Technology',
    school: 'Velammal Engineering College · India · CGPA: 7.23/10',
    courses: 'Data Structures · OOP · DBMS · Operating Systems · Computer Networks · Software Engineering · AI · Web Technologies',
    status: 'Completed',
    color: '#6d28d9',
  },
]

export default function Education() {
  const navigate = useNavigate()

  return (
    <section id="education" style={{ padding: '100px 60px', background: '#07020f' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 60 }}
      >
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
          Academic Background
        </div>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, color: '#fff' }}>Education</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 24 }}>
        {edu.map(({ id, period, degree, school, courses, status, color }, i) => (
          <motion.div key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            onClick={() => navigate(`/education/${id}`)}
            style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid rgba(124,58,237,0.2)`, padding: 36, transition: 'all 0.3s', cursor: 'pointer', borderRadius: 12, position: 'relative', overflow: 'hidden' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = color
              el.style.transform = 'translateY(-6px)'
              el.style.boxShadow = `0 20px 50px ${color}25`
              el.style.background = `${color}08`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(124,58,237,0.2)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.background = 'rgba(255,255,255,0.02)'
            }}
          >
            {/* Corner glow */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${color}20, transparent 70%)`, pointerEvents: 'none' }} />

            {/* Status badge */}
            <div style={{ position: 'absolute', top: 20, right: 20, padding: '4px 12px', background: status === 'In Progress' ? 'rgba(124,58,237,0.2)' : 'rgba(5,150,105,0.2)', border: `1px solid ${status === 'In Progress' ? 'rgba(124,58,237,0.5)' : 'rgba(5,150,105,0.5)'}`, borderRadius: 20, fontFamily: 'monospace', fontSize: 10, color: status === 'In Progress' ? '#a78bfa' : '#34d399', letterSpacing: 1 }}>
              {status === 'In Progress' ? '● In Progress' : '✓ Completed'}
            </div>

            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 2, marginBottom: 12 }}>{period}</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.3, color: '#fff' }}>{degree}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#64748b', marginBottom: 20 }}>{school}</div>
            <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>{courses}</div>

            {/* Click hint */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 1 }}>
              <span>View Details</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}