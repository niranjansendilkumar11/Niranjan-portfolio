export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 60px', background: '#07020f' }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
        My Journey
      </div>
      <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, marginBottom: 60 }}>Experience</h2>

      <div style={{ position: 'relative', paddingLeft: 40 }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #7c3aed, transparent)' }} />

        {/* Dot */}
        <div style={{ position: 'absolute', left: -5, top: 32, width: 12, height: 12, background: '#7c3aed', borderRadius: '50%', boxShadow: '0 0 16px #7c3aed' }} />

        <div
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', padding: 40, transition: 'all 0.3s' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = '#7c3aed'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(124,58,237,0.15)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.2)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 2, marginBottom: 8 }}>JULY 2022 — JAN 2026</div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Software Developer</div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#f59e0b', letterSpacing: 1, marginBottom: 24 }}>Sify Technologies Limited · Chennai, India</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Developed and supported Oracle EBS R12 modules like Order Management, Procurement, Inventory, AR, and AP.',
              'Built and optimized SQL & PL/SQL procedures and APIs, reducing processing time by 40% in high-volume systems.',
              'Customized Oracle Forms & Reports based on business and stakeholder requirements.',
              'Assisted functional teams during testing and validation of ERP implementations.',
              'Acted as technical consultant to vendors for complex database-related issues.',
              'Provided monthly and quarterly reports on implementation initiatives for performance monitoring.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6, paddingLeft: 20, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#7c3aed' }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}