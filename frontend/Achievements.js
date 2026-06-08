import React from 'react';

const certifications = [
  'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
  'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
  'NPTEL - Introduction to Industry 4.0 and Industrial IoT (Topper 1%)',
  'NPTEL – Practical Cyber Security for Cyber Security Practitioners (Topper)',
  'NPTEL – Programming in Modern C++',
  'NPTEL – Competitive Programming',
  'Infosys Springboard – Java Foundations',
  'Infosys Springboard – Agile Scrum',
  'Infosys Springboard – AI',
  'Infosys Springboard – IoT Foundations',
  'IEEE English Certification for Professionals',
];

const achievements = [
  { icon: '', title: 'DXC Progressing Young Minds Scholar 2026', desc: 'Prestigious scholarship for exceptional academic and technical performance.' },
  { icon: '', title: 'NPTEL Practical Cyber Security for Cyber Security Practitioners Topper', desc: 'Achieved top 5% rank in the national-level NPTEL certification examination.' },
  {icon:'',title:'NPTEL Introduction to Industry 4.0 and Industrial IoT Topper',desc:'Achieved top 1% rank in the national-level NPTEL certification examination.'},
  { icon: '', title: 'Garrett Scholarship', desc: 'Received scholarship for academic excellence at MSEC.' },
  { icon: '', title: 'Academic Excellence Prizes', desc: 'Consistent award recipient for maintaining high CGPA each semester.' },
  { icon: '', title: 'Subject Topper – CS (Class XII)', desc: 'Topped in Computer Science in Higher Secondary examination.' },
  { icon: '', title: 'Core Subject Excellence', desc: 'Top performer in Discrete Mathematics, Queuing Theory & Statistics, Java, Microprocessors and Data Visualization.' },
];

const hackathons = [
  {
    name: 'Smart India Hackathon (SIH)',
    desc: 'Proposed a certificate-based offline authentication solution for secure traceability in the Ayurvedic herbal supply chain.',
    color: 'var(--accent)',
  },
  {
    name: 'HackFest – TCE',
    desc: 'Presented an AI-based behavioral biometrics concept for detecting and preventing digital fraud in online transactions.',
    color: 'var(--accent-2)',
  },
  {
    name: 'AI Conclave',
    desc: 'Explored the latest technology trends in artificial intelligence and future-forward applications.',
    color: 'var(--accent-3)',
  },
  {
    name: 'Workshop on Data Analytics',
    desc: 'Hands-on experience working with real-time datasets and deriving actionable insights.',
    color: '#f7c59f',
  },
  {
    name:' Infosys AI & ML Summer Internship',
    desc:'Completed structured development program in machine learning and artificial intelligence.',
    color: 'var(--accent-1)',
  },
  {
    name:'BHEL Digital SoC Design Verification Program',
    desc:'Gained foundational exposure to SoC design and verification concepts used in semiconductor systems.',
    color: 'var(--accent-2)',
  },
  {
    name:'Wipro TalentNext Program',
    desc:'Pursuing AI/ML certification and developing skills in data science, predictive analysis, and technology solutions.',
    color: 'var(--accent-3)',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-label">05. Achievements</div>
      <h2 className="section-title">
        Wins & <span className="gradient-text">Recognition</span>
      </h2>

      {/* Achievement cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {achievements.map((a, i) => (
          <div key={i} className="card">
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{a.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{a.desc}</p>
          </div>
        ))}
      </div>

      {/* Hackathons & Events */}
      <div style={{ marginBottom: '4rem' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>Hackathons & Events</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {hackathons.map((h, i) => (
            <div key={i} className="card" style={{ borderLeft: `3px solid ${h.color}` }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: h.color, letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Event
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{h.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="section-label" style={{ marginBottom: '2rem' }}>Certifications</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '1rem 1.25rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              transition: 'border-color 0.2s ease',
            }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                background: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--accent-2)' : 'var(--accent-3)',
              }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer */}
      <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--bg-2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Volunteer Experience</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {[
            'Organized inter-college technical events and led teams',
            'Developed automation tool for E-Certificate generation',
            'Promoted collaborative culture and student engagement',
          ].map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-3)', fontSize: '1rem' }}>✓</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
