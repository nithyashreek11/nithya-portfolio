import React, { useState, useEffect } from 'react';

const roles = [
  'CSE Undergrad @ MSEC',
  'Full Stack Developer',
  'AI/ML Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Glowing orb */}
      <div style={{
        position: 'absolute',
        top: '20%', right: '5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,110,245,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite',
      }} />

      {/* Terminal prefix */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'var(--accent-3)',
        marginBottom: '1.5rem',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 0.2s forwards',
      }}>
        <span style={{ color: 'var(--accent)' }}>~/portfolio</span>
        <span style={{ color: 'var(--text-muted)' }}> $ </span>
        <span>whoami</span>
      </div>

      {/* Main name */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
        fontWeight: 800,
        lineHeight: 1,
        marginBottom: '1rem',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 0.4s forwards',
        letterSpacing: '-0.02em',
      }}>
        <span style={{ display: 'block', color: 'var(--text)' }}>Nithya</span>
        <span style={{ display: 'block' }} className="gradient-text">Shree.K</span>
      </h1>

      {/* Typewriter role */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        color: 'var(--text-muted)',
        marginBottom: '2rem',
        height: '2rem',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 0.6s forwards',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ color: 'var(--accent-2)' }}>{'>'}</span>
        <span>{displayed}</span>
        <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
      </div>

      {/* Description */}
      <p style={{
        maxWidth: '600px',
        fontSize: '1rem',
        lineHeight: 1.8,
        color: 'var(--text-muted)',
        marginBottom: '2.5rem',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 0.8s forwards',
      }}>
        B.E. CSE undergrad at <strong style={{ color: 'var(--text)' }}>Mepco Schlenk Engineering College</strong>.
        Building full-stack apps, exploring AI/ML, and turning caffeine into code.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 1s forwards',
      }}>
        <button onClick={scrollToProjects} className="btn-primary">
          View My Work <span>↓</span>
        </button>
        <a href="https://www.linkedin.com/in/nithya-shree-k-38858a413/" target="_blank" rel="noreferrer" className="btn-outline">
          LinkedIn ↗
        </a>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex', gap: '3rem', marginTop: '5rem', flexWrap: 'wrap',
        opacity: 0,
        animation: 'fadeUp 0.6s ease 1.2s forwards',
      }}>
        {[
          { num: '8.82', label: 'CGPA' },
          { num: '6+', label: 'Projects Built' },
          { num: '5', label: 'Internships' },
          { num: '10+', label: 'Certifications' },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>
              {stat.num}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: 0, animation: 'fadeUp 0.6s ease 1.5s forwards',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
          SCROLL
        </div>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
