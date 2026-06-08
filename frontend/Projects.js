import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fallbackProjects = [
  {
    id: 1, title: 'Hospital Management System',
    description: 'A scalable software solution to manage patient records, appointments, and hospital operations efficiently.',
    tech_stack: 'Java, JDBC, MySQL, Swing',
    category: 'Java Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: true,
  },
  {
    id: 2, title: 'Expenza – Expense Tracker',
    description: 'A web-based financial tracking application to monitor and visualize personal expenses with dashboards.',
    tech_stack: 'HTML, CSS, JavaScript, Node.js, MySQL',
    category: 'Web Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: true,
  },
  {
    id: 3, title: 'Farm Trade Management System',
    description: 'Full-stack fintech-oriented app for managing farm produce transactions with payment tracking.',
    tech_stack: 'MongoDB, Express.js, React.js, Node.js',
    category: 'MERN Stack',
    github_url: 'https://github.com/nithyashreek11',
    featured: true,
  },
  {
    id: 4, title: 'BookSky Web Application',
    description: 'A responsive web app to manage book records, search titles, and track reading progress.',
    tech_stack: 'HTML, CSS, JavaScript, Bootstrap',
    category: 'Web Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: false,
  },
  {
    id: 5, title: 'Payroll System Management',
    description: 'A database-driven system for payroll processing including salary calculations and tax deductions.',
    tech_stack: 'Oracle DB, PL/SQL, Java',
    category: 'Database Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: false,
  },
  {
    id: 6, title: 'Competing Risk Aware MultiHead Neural Network for Cardiac Event Prediction from 12 Lead ECG',
    description: 'Proposed a solution for predicting various cardiac events including artrial fibrillation, sudden cardiac death, myocardial infarction, heart failure from 12 lead ECG data.',
    tech_stack: 'Python',
    category: 'Python Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: true,
  },
  {
    id: 6, title: 'Smart Legal Aid Matching Platform',
    description: 'Connects legal service clients with providers. Built at Infosys Virtual Internship with focus on social impact.',
    tech_stack: 'React.js, Node.js, Express.js, PostgreSQL',
    category: 'Web Application',
    github_url: 'https://github.com/nithyashreek11',
    featured: true,
  },
];

const categoryColors = {
  'Java Application': 'var(--accent-2)',
  'MERN Stack': 'var(--accent-3)',
  'Web Application': 'var(--accent)',
  'Database Application': '#f7c59f',
};

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => { if (res.data?.data?.length) setProjects(res.data.data); })
      .catch(() => {});
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="section-label">03. Projects</div>
      <h2 className="section-title">
        Things I've <span className="gradient-text">Built</span>
      </h2>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            style={{
              background: filter === cat ? 'var(--accent)' : 'transparent',
              border: `1px solid ${filter === cat ? 'var(--accent)' : 'var(--border)'}`,
              color: filter === cat ? '#fff' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              padding: '8px 16px', borderRadius: '20px', cursor: 'none',
              transition: 'all 0.2s ease',
              letterSpacing: '0.05em',
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {filtered.map(project => {
          const color = categoryColors[project.category] || 'var(--accent)';
          const techs = project.tech_stack ? project.tech_stack.split(',').map(t => t.trim()) : [];
          return (
            <div key={project.id} className="card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Glow effect */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color}20, transparent 70%)`,
                transition: 'opacity 0.3s ease',
                opacity: hoveredId === project.id ? 1 : 0,
              }} />

              {/* Category badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 10px',
                  borderRadius: '20px', background: `${color}20`, color: color,
                  border: `1px solid ${color}40`, letterSpacing: '0.05em',
                }}>
                  {project.category}
                </span>
                {project.featured && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent-3)', letterSpacing: '0.1em' }}>
                    ★ FEATURED
                  </span>
                )}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                {project.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                {techs.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    padding: '3px 8px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    GitHub ↗
                  </a>
                )}
                {project.demo_url && (
                  <a href={project.demo_url} target="_blank" rel="noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-3)', textDecoration: 'none' }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://github.com/nithyashreek11" target="_blank" rel="noreferrer" className="btn-outline">
          View All on GitHub ↗
        </a>
      </div>
    </section>
  );
}
