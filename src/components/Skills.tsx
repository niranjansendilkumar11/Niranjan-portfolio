import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Databases',
    icon: '🗄️',
    color: '#7c3aed',
    skills: [
      { name: 'Oracle SQL', level: 95 },
      { name: 'PL/SQL', level: 95 },
      { name: 'Performance Tuning', level: 85 },
      { name: 'MongoDB', level: 50 },
    ]
  },
  {
    title: 'ERP Systems',
    icon: '⚙️',
    color: '#6d28d9',
    skills: [
      { name: 'Oracle EBS R12', level: 95 },
      { name: 'Oracle APIs', level: 90 },
      { name: 'AR / AP Modules', level: 88 },
      { name: 'INV / PO Modules', level: 85 },
      { name: 'Order Management', level: 85 },
    ]
  },
  {
    title: 'Programming',
    icon: '💻',
    color: '#5b21b6',
    skills: [
      { name: 'PL/SQL', level: 95 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 40 },
      { name: 'HTML / XML', level: 70 },
    ]
  },
  {
    title: 'AI & Data',
    icon: '🤖',
    color: '#4c1d95',
    skills: [
      { name: 'Machine Learning', level: 60 },
      { name: 'Deep Learning', level: 55 },
      { name: 'Data Analytics', level: 65 },
      { name: 'Python for AI', level: 60 },
    ]
  },
]

const marqueeRow1 = ['Oracle SQL', 'PL/SQL', 'Oracle EBS R12', 'Python', 'Machine Learning', 'WebADI', 'Oracle Forms', 'Linux', 'GitHub', 'Toad', 'Oracle APIs', 'Data Interfaces']
const marqueeRow2 = ['Deep Learning', 'SQL Developer', 'ERP Integration', 'Java', 'Automation', 'Reporting', 'XML', 'VS Code', 'Big Data', 'Performance Tuning', 'AR/AP', 'Order Management']

function SkillBar({ name, level }: { name: string, level: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#e2e8f0' }}>{name}</span>
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#a78bfa' }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(124,58,237,0.15)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          style={{
            height: '100%',
            background: 'linear-gradient(to right, #7c3aed, #a78bfa)',
            borderRadius: 2,
            boxShadow: '0 0 8px rgba(167,139,250,0.8)',
            position: 'relative',
          }}
        >
          {/* Glowing tip */}
          <div style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            width: 8, height: 8, borderRadius: '50%',
            background: '#c4b5fd',
            boxShadow: '0 0 6px 3px rgba(196,181,253,0.8)',
          }} />
        </motion.div>
      </div>
    </div>
  )
}

function Card3D({ category, index }: { category: typeof skillCategories[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / width
    const y = (e.clientY - top - height / 2) / height
    card.style.transform = `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(10px)`
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(124,58,237,0.3), 0 0 40px rgba(124,58,237,0.1)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.boxShadow = '0 0 0 rgba(124,58,237,0)'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(124,58,237,0.25)',
        borderRadius: 12,
        padding: 32,
        transition: 'transform 0.1s ease, box-shadow 0.1s ease, border-color 0.3s',
        cursor: 'default',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)')}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 100, height: 100,
        background: `radial-gradient(circle at top right, ${category.color}30, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{
          width: 44, height: 44,
          background: `${category.color}20`,
          border: `1px solid ${category.color}40`,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
        }}>{category.icon}</div>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#a78bfa', letterSpacing: 2, textTransform: 'uppercase' }}>
          {category.title}
        </div>
      </div>

      {/* Skill bars */}
      {category.skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#07020f', overflow: 'hidden' }}>

      {/* Section header */}
      <div style={{ padding: '0 80px', marginBottom: 60 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
            What I Know
          </div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, color: '#fff' }}>
            Technical Skills
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div style={{ marginBottom: 16, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          display: 'flex', gap: 16,
          animation: 'marquee1 25s linear infinite',
          width: 'max-content',
        }}>
          {[...marqueeRow1, ...marqueeRow1].map((tag, i) => (
            <span key={i} style={{
              padding: '8px 20px',
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: 20,
              fontFamily: 'monospace', fontSize: 12,
              color: '#a78bfa', letterSpacing: 1,
              whiteSpace: 'nowrap',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div style={{ marginBottom: 60, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          display: 'flex', gap: 16,
          animation: 'marquee2 30s linear infinite',
          width: 'max-content',
        }}>
          {[...marqueeRow2, ...marqueeRow2].map((tag, i) => (
            <span key={i} style={{
              padding: '8px 20px',
              background: 'rgba(167,139,250,0.06)',
              border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: 20,
              fontFamily: 'monospace', fontSize: 12,
              color: '#c4b5fd', letterSpacing: 1,
              whiteSpace: 'nowrap',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* 3D Cards grid */}
      <div style={{ padding: '0 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {skillCategories.map((cat, i) => (
          <Card3D key={cat.title} category={cat} index={i} />
        ))}
      </div>

      <style>{`
        @keyframes marquee1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}