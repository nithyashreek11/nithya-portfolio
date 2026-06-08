import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,110,245,0.15)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent)', cursor: 'none', fontWeight: 700 }}>
        NK<span style={{ color: 'var(--text-muted)' }}>_</span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        className="desktop-nav">
        {navLinks.map(link => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              background: 'none', border: 'none', cursor: 'none',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: active === link.href ? 'var(--accent)' : 'var(--text-muted)',
              letterSpacing: '0.05em',
              transition: 'color 0.2s ease',
              padding: '4px 0',
              position: 'relative',
            }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '4px', opacity: 0.5 }}>{'>'}</span>
            {link.label}
          </button>
        ))}
        <a href="https://github.com/nithyashreek11" target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '8px 16px', border: '1px solid var(--border)', color: 'var(--accent)', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.2s ease' }}>
          GitHub ↗
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: 'var(--accent)', fontSize: '1.5rem', cursor: 'pointer' }}
        className="mobile-menu-btn">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(8,8,16,0.98)', backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          borderBottom: '1px solid var(--border)',
        }}>
          {navLinks.map(link => (
            <button key={link.href} onClick={() => handleNav(link.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'left', padding: '8px 0' }}>
              <span style={{ color: 'var(--accent)' }}>{'> '}</span>{link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
