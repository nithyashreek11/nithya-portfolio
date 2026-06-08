import React, { useState } from 'react';

const skillsData = {
  'Programming Languages': [
    { name: 'Java', level: 95 },
    { name: 'Python', level: 89 },
    { name: 'C / C++', level: 89 },
    { name: 'JavaScript', level: 90 },
    { name: 'PERL', level: 80 },
    { name: 'Julia', level: 95 },
  ],
  'Web Technologies': [
    { name: 'React.js', level: 92 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'HTML / CSS', level: 98 },
    { name: 'MongoDB', level: 95 },
  ],
  'Databases': [
    { name: 'MySQL', level: 90 },
    { name: 'Oracle DB', level: 90 },
    { name: 'MongoDB', level: 95 },
  ],
  'Cloud & Tools': [
    { name: 'AWS EC2/S3', level: 72 },
    { name: 'Oracle Cloud', level: 85 },
    { name: 'Git', level: 85 },
    { name: 'Linux', level: 75 },
  ],
  'Data & Analytics': [
    { name: 'Data Science', level: 75 },
    { name: 'Data Analytics', level: 78 },
    { name: 'Data Visualization', level: 73 },
    { name: 'Machine Learning', level: 70 },
  ],
};

const colors = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', '#f7c59f', '#a8dadc'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" style={{ background: 'var(--bg-2)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="section-label">02. Skills</div>
        <h2 className="section-title">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '3rem' }}>
          {/* Category sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {categories.map((cat, i) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'rgba(124,110,245,0.1)' : 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCategory === cat ? colors[i % colors.length] : 'transparent'}`,
                  cursor: 'none',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                  color: activeCategory === cat ? 'var(--text)' : 'var(--text-muted)',
                  padding: '12px 16px',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  borderRadius: '0 8px 8px 0',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skillsData[activeCategory].map((skill, i) => {
              const color = colors[categories.indexOf(activeCategory) % colors.length];
              return (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${color}, ${color}88)`,
                      borderRadius: '3px',
                      position: 'relative',
                      transition: 'width 0.8s ease',
                    }}>
                      <div style={{
                        position: 'absolute', right: 0, top: '-2px',
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 8px ${color}`,
                      }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Tags */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>All Technologies</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Java', 'Python', 'C', 'C++', 'JavaScript', 'PERL', 'Julia', 'React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'MySQL', 'MongoDB', 'Oracle', 'AWS', 'Git', 'Linux', 'Agile', 'SDLC', 'Data Science', 'Machine Learning', 'Algorithms', 'Data Structures'].map((tech, i) => (
              <span key={tech} className={`tag ${i % 3 === 1 ? 'pink' : i % 3 === 2 ? 'teal' : ''}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
