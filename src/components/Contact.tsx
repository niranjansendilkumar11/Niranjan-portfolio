export default function Contact() {
  const links = [
    { icon: '✉️', label: 'Email', value: 'niranjansendilkumar11@gmail.com', href: 'mailto:niranjansendilkumar11@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/niranjan-sendilkumar', href: 'https://linkedin.com/in/niranjan-sendilkumar' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/niranjansendilkumar11', href: 'https://github.com/niranjansendilkumar11' },
    { icon: '📍', label: 'Location', value: 'Dublin, Ireland 🇮🇪', href: '#' },
  ]

  return (
    <section id="contact" style={{ padding: '100px 60px', background: '#07020f' }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
        Let's Connect
      </div>
      <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: -1, marginBottom: 60 }}>Get In Touch</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left - Links */}
        <div>
          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8, marginBottom: 40 }}>
            Open to Oracle ERP consulting, AI/ML projects, and collaborations.
            Based in Dublin, Ireland — available for remote and on-site roles.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {links.map(({ icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', textDecoration: 'none', color: '#e2e8f0', transition: 'all 0.3s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#7c3aed'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateX(6px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.15)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.2)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateX(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ width: 36, height: 36, background: 'rgba(124,58,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#64748b', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 14 }}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - CTA */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', padding: 48 }}>
          <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Open to Opportunities</h3>
          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.8, marginBottom: 32 }}>
            Whether it's Oracle ERP consulting, AI/ML projects, or technical collaborations —
            I'd love to hear from you. Drop me an email and I'll get back to you promptly.
          </p>
          <a href="mailto:niranjansendilkumar11@gmail.com"
            style={{ display: 'inline-block', padding: '14px 32px', background: '#7c3aed', color: '#fff', fontFamily: 'monospace', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)', transition: 'all 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#6d28d9')}
            onMouseLeave={e => (e.currentTarget.style.background = '#7c3aed')}
          >Send a Message</a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(124,58,237,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#64748b', letterSpacing: 1 }}>© 2026 <span style={{ color: '#a78bfa' }}>Niranjan Sendilkumar</span>. All rights reserved.</p>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#64748b' }}>Built with <span style={{ color: '#a78bfa' }}>♥</span> · Dublin, Ireland</p>
      </div>
    </section>
  )
}