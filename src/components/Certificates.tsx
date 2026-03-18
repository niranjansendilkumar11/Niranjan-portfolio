export default function Certificates() {
  const certs = [
    { icon: '🏅', name: 'Oracle ERP Training', issuer: 'Oracle Corporation' },
    { icon: '☁️', name: 'Oracle Cloud & AI', issuer: 'Oracle Corporation' },
  ]

  const awards = [
    { icon: '🏀', label: 'Basketball State Player' },
    { icon: '🏃', label: 'Kho Kho Zonal Player' },
    { icon: '🎮', label: 'Professional Esports Athlete' },
  ]

  return (
    <section id="certificates" style={{ padding: '100px 60px', background: '#0a0514' }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
        Credentials
      </div>
      <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, marginBottom: 60 }}>Certificates & Awards</h2>

      {/* Certificates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
        {certs.map(({ icon, name, issuer }) => (
          <div key={name}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', padding: 28, display: 'flex', alignItems: 'center', gap: 20, transition: 'all 0.3s' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#f59e0b'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(245,158,11,0.1)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.2)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateX(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <div style={{ width: 48, height: 48, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
            <div>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{name}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#f59e0b', letterSpacing: 1 }}>{issuer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {awards.map(({ icon, label }) => (
          <div key={label}
            style={{ padding: '12px 24px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.3)', fontFamily: 'monospace', fontSize: 12, color: '#e2e8f0', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.3s', cursor: 'default' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#a78bfa'
              ;(e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.15)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)'
              ;(e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.08)'
            }}
          >
            <span style={{ fontSize: 16 }}>{icon}</span>{label}
          </div>
        ))}
      </div>
    </section>
  )
}