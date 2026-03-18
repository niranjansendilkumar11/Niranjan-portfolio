import { useState, useEffect } from 'react'

const sections = ['about','skills','projects','experience','education','certificates','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 60px', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(7,2,15,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: '#a78bfa', letterSpacing: 2 }}>
        NS_portfolio
      </div>
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {sections.map(s => (
          <li key={s}>
            <a href={`#${s}`} style={{
              fontFamily: 'monospace', fontSize: 11, color: '#64748b',
              textDecoration: 'none', letterSpacing: 2, textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}