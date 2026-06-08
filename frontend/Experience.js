import React, { useState } from 'react';

const internships = [
  {
    role: 'Infosys Virtual Internship 6.0',
    company: 'Infosys',
    period: '2026',
    type: 'internship',
    description: 'Built a smart legal aid matching platform connecting clients and service providers. Focused on social impact, client requirements, and scalable architecture.',
    tags: ['React.js', 'Node.js', 'Express.js','PostgreSQL', 'UI/UX Design'],
    color: 'var(--accent)',
  },
  {
    role: 'Full Stack Development Internship',
    company: 'Thiranex',
    period: '2026',
    type: 'internship',
    description: 'Built several full stack application-level solutions for the given set of tasks.',
    tags: ['React.js', 'Node.js', 'Express.js','PostgreSQL', 'UI/UX Design'],
    color: 'var(--accent)',
  },
  {
    role: 'Data Analytics Internship',
    company: 'Oasis Infobyte',
    period: '2026',
    type: 'internship',
    description: 'Analyzed datasets using Python to derive business insights. Created dashboards for data visualization and supported data-driven decision-making.',
    tags: ['Python', 'Data Analytics', 'Visualization', 'Pandas'],
    color: 'var(--accent-3)',
  },
  {
    role: 'Java Programming Internship',
    company: 'CodSoft',
    period: '2025',
    type: 'internship',
    description: 'Strengthened programming skills and built application-level solutions. Practiced debugging, syntax optimization, and code maintenance.',
    tags: ['Java', 'OOP', 'Debugging', 'JDBC'],
    color: 'var(--accent-2)',
  },
  {
    role: 'AWS Cloud Internship',
    company: 'Marcello Tech',
    period: '2025',
    type: 'internship',
    description: 'Worked on cloud infrastructure using AWS EC2 and S3. Gained experience in cloud development, deployment, and technology solutions.',
    tags: ['AWS EC2', 'AWS S3', 'Cloud', 'Deployment'],
    color: '#f7c59f',
  },
];

const typeColors = {
  internship: 'var(--accent)',
  training: 'var(--accent-2)',
  certification: 'var(--accent-3)',
};

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" style={{ background: 'var(--bg-2)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="section-label">04. Experience</div>
        <h2 className="section-title">
          Where I've <span className="gradient-text">Worked</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
          }} />

          {internships.map((item, i) => (
            <div key={i} style={{ marginBottom: '2rem', position: 'relative' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-2.5rem',
                top: '1.5rem',
                width: '14px', height: '14px',
                borderRadius: '50%',
                background: item.color,
                boxShadow: `0 0 12px ${item.color}`,
                transition: 'transform 0.2s ease',
                transform: expanded === i ? 'scale(1.3)' : 'scale(1)',
              }} />

              <div className="card" onClick={() => setExpanded(expanded === i ? -1 : i)}
                style={{ cursor: 'none', userSelect: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{item.role}</h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '2px 8px',
                        borderRadius: '20px', background: `${typeColors[item.type]}20`,
                        color: typeColors[item.type], border: `1px solid ${typeColors[item.type]}40`,
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                      }}>
                        {item.type}
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: item.color }}>
                      {item.company}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.period}</span>
                    <span style={{ color: 'var(--text-muted)', transition: 'transform 0.3s ease', display: 'inline-block', transform: expanded === i ? 'rotate(180deg)' : 'none' }}>▾</span>
                  </div>
                </div>

                {expanded === i && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {item.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                          padding: '3px 8px', borderRadius: '4px',
                          background: 'rgba(255,255,255,0.04)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
