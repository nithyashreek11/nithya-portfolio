import React, { useState } from 'react';

const tabs = ['Education', 'About Me', 'Languages'];

export default function About() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section id="about" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left: Text */}
        <div>
          <div className="section-label">01. About</div>
          <h2 className="section-title">
            Who is <span className="gradient-text">Nithya?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Final-year Computer Science Engineering student at Mepco Schlenk Engineering College with a strong interest in Software Development, Artificial Intelligence, Machine Learning, Cloud Computing, and Full-Stack Development.
            My technical journey has been strengthened through internships in AWS Cloud, Java Development, Data Analytics, and AI/ML-focused learning programs. I hold Oracle Cloud Infrastructure Certified Foundations Associate and Oracle Cloud Infrastructure AI Foundations Associate certifications and continuously enhance my skills through projects, hackathons, technical workshops, and industry-oriented learning.
            </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '2rem' }}>
            I enjoy solving real-world problems, exploring emerging technologies, and building scalable solutions that create meaningful impact. My areas of interest include Artificial Intelligence, Machine Learning, Cloud Technologies, Full-Stack Development, Data Analytics, and Software Engineering.

            Currently seeking opportunities to apply my technical knowledge, contribute to innovative projects, and grow as a technology professional in dynamic and collaborative environments.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:nithyashree.k2005@gmail.com" className="btn-outline" style={{ fontSize: '0.8rem', padding: '10px 20px' }}>
              📧 Email Me
            </a>
            <a href="https://leetcode.com/u/_nithyashree_/" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '10px 20px' }}>
              LeetCode ↗
            </a>
          </div>
        </div>

        {/* Right: Tabs */}
        <div>
          {/* Tab buttons */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                  padding: '10px 20px',
                  color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
                  borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                  marginBottom: '-1px',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.05em',
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'Education' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  icon : '🎓',
                  degree: 'B.E. Computer Science & Engineering',
                  school: 'Mepco Schlenk Engineering College, Sivakasi',
                  year: '2023 – 2027',
                  score: 'CGPA: 8.82',
                  color: 'var(--accent)',
                },
                {
                  icon : '🎓',
                  degree: 'Higher Secondary (Class XII)',
                  school: 'Mahatma Montessori Matric. Hr. Sec. School, Madurai',
                  year: '2022 – 2023',
                  score: 'Score: 92.33%',
                  color: 'var(--accent-2)',
                },
              ].map((edu) => (
                <div key={edu.degree} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: edu.color, letterSpacing: '0.1em' }}>
                      {edu.year}
                    </div>
                    <span className="tag" style={{ fontSize: '0.65rem' }}>{edu.score}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.school}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'About Me' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '', label: 'Location', value: 'Madurai, TamilNadu, India' },
                { icon: '', label: 'Email', value: 'nithyashree.k2005@gmail.com' },
                { icon: '', label: 'Phone', value: '7010455046' },
                { icon: '', label: 'College', value: 'Mepco Schlenk Engineering College' },
                { icon: '', label: 'Focus', value: 'Full-Stack Development & AI/ML' },
                { icon: '', label: 'Status', value: 'Open to Internships & Opportunities' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Languages' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { lang: 'Tamil', level: 'Fluent', pct: 100 },
                { lang: 'English', level: 'Fluent', pct: 98 },
                { lang: 'French', level: 'Intermediate', pct: 50 },
                { lang: 'Hindi', level: 'Beginner', pct: 30 },
              ].map(l => (
                <div key={l.lang}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{l.lang}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{l.level}</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${l.pct}%`, background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', borderRadius: '2px', transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .section > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
