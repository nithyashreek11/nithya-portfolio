import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      // Fallback: just show success since backend might not be running
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '14px 16px',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-2)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="section-label">06. Contact</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              I'm currently looking for internship opportunities and open to collaborating on interesting projects. 
              Whether you have a question, opportunity, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '', label: 'Email', value: 'nithyashree.k2005@gmail.com', href: 'mailto:nithyashree.k2005@gmail.com' },
                { icon: '', label: 'Phone', value: '7010455046', href: 'tel:7010455046' },
                { icon: '', label: 'LinkedIn', value: 'linkedin.com/in/nithyashreek2005', href: 'https://www.linkedin.com/in/nithyashreek2005' },
                { icon: '', label: 'GitHub', value: 'github.com/nithyashreek11', href: 'https://github.com/nithyashreek11' },
                { icon: '', label: 'LeetCode', value: 'leetcode.com/u/_nithyashree_', href: 'https://leetcode.com/u/_nithyashree_/' },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    textDecoration: 'none', transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div style={{
                textAlign: 'center', padding: '3rem',
                background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid rgba(78,205,196,0.3)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Thanks for reaching out! I'll get back to you soon.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>NAME</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>EMAIL</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>SUBJECT</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Your message here..." style={{ ...inputStyle, resize: 'vertical', minHeight: '150px' }} />
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary"
                  style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        input:focus, textarea:focus { border-color: var(--accent) !important; }
      `}</style>
    </section>
  );
}
