import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
  { id: 'pr-po-automation', num: '01', category: 'ERP Automation', title: 'PR/PO Automation', desc: 'Streamlined solution using Oracle APIs to automate Purchase Requisition and PO auto-creation, reducing processing time by 40%.', tech: ['Oracle EBS R12', 'PL/SQL', 'Oracle APIs'] },
  { id: 'material-dispatch', num: '02', category: 'Process Automation', title: 'Material Dispatch Automation', desc: 'End-to-end automation for creating Sales Orders directly from ServiceNow portal, eliminating manual data entry.', tech: ['Oracle EBS', 'ServiceNow', 'PL/SQL'] },
  { id: 'custom-reports', num: '03', category: 'Reporting', title: 'Custom Reports Suite', desc: 'Multiple customized reports for inventory tracking, PO matching, and supplier analysis with real-time insights.', tech: ['Oracle Reports', 'SQL', 'XML'] },
  { id: 'erp-interface', num: '04', category: 'Integration', title: 'ERP Interface Development', desc: 'Robust data interfaces between Oracle ERP and third-party systems for seamless real-time data exchange.', tech: ['Oracle EBS', 'Data Interfaces', 'PL/SQL'] },
  { id: 'webadi', num: '05', category: 'WebADI', title: 'Item Upload WebADI', desc: 'Custom WebADI solution for bulk item creation, enabling non-technical users to upload inventory items from Excel.', tech: ['WebADI', 'Oracle EBS', 'SQL'] },
  { id: 'ai-rice', num: '06', category: 'Deep Learning', title: 'AI Rice Crop Identification', desc: 'Deep learning image classification to identify rice crop varieties and growth stages using agricultural datasets.', tech: ['Python', 'Deep Learning', 'Image Classification'] },
]

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section id="projects" style={{ padding: '100px 60px', background: '#0a0514' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 60 }}
      >
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
          What I've Built
        </div>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, color: '#fff' }}>Projects</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        {projects.map(({ id, num, category, title, desc, tech }, i) => (
          <motion.div key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => navigate(`/project/${id}`)}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', padding: 36, transition: 'all 0.4s', cursor: 'pointer', borderRadius: 12, position: 'relative', overflow: 'hidden' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#7c3aed'
              el.style.transform = 'translateY(-8px)'
              el.style.boxShadow = '0 20px 60px rgba(124,58,237,0.25)'
              el.style.background = 'rgba(124,58,237,0.05)'
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
            <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, background: 'radial-gradient(circle at top right, rgba(124,58,237,0.15), transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#64748b', letterSpacing: 2, marginBottom: 8 }}>{num} — {category}</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 700, color: '#e2e8f0', marginBottom: 12, lineHeight: 1.2 }}>{title}</div>
            <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>{desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {tech.map(t => (
                <span key={t} style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', fontFamily: 'monospace', fontSize: 10, color: '#f59e0b', letterSpacing: 1, borderRadius: 4 }}>{t}</span>
              ))}
            </div>
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