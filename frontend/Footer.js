import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--accent)' }}>NK_</span> © {new Date().getFullYear()} Nithya Shree K
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Built with <span style={{ color: 'var(--accent-2)' }}>♥</span> using React.js + Node.js + MySQL
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/nithyashreek11' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nithyashreek2005' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/_nithyashree_/' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
