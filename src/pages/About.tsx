import React from 'react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export const About: React.FC = () => {
  useReveal();

  const technologies = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'] },
    { category: 'Backend / Data', items: ['Supabase', 'PostgreSQL', 'Supabase Auth', 'REST APIs', 'Row Level Security'] },
    { category: 'Dev & Deployment', items: ['Git', 'GitHub', 'Vercel'] },
    { category: 'Design & Creative', items: ['UI/UX Design', 'Product Design', 'Branding', 'CapCut Video Editing'] }
  ];

  return (
    <>
      <SEO
        title="About Jifri — Full-Stack Developer"
        description="Learn about Jifri's background across full-stack development, UI/UX design, creative technology, and entrepreneurship."
      />
      <main className="about-page page-container">
        <header className="page-header">
          <div className="container reveal">
            <div className="eyebrow">ABOUT JIFRI</div>
            <h1 className="page-title">I learn by building.</h1>
            <p className="body-large" style={{ marginTop: '24px', maxWidth: '720px' }}>
              I'm Jifri, a full-stack developer and digital builder working across technology, design and creativity. I like turning ideas into working products, websites and experiences.
            </p>
          </div>
        </header>

        <section className="about-section">
          <div className="container">
            <div className="about-story-grid reveal">
              <div className="story-main">
                <h2 className="story-heading">Technology × Design × Creativity × Entrepreneurship</h2>
                <p className="story-paragraph">
                  My work sits at the intersection of product engineering and visual design. Rather than specializing strictly in one narrow front-end or back-end silo, I operate across the full application lifecycle — from concept and interface architecture down to database schemas, authentication flow, and production deployment.
                </p>
                <p className="story-paragraph">
                  My core philosophy is straightforward: <strong>I learn by building</strong>. Every product I undertake — whether it's a rental management platform designed for real-world business workflows, a digital event invitation engine, or institutional websites — is approached as an opportunity to solve genuine problems cleanly and sustainably.
                </p>
              </div>

              <div className="photo-placeholder story-photo">
                <span>YOUR PHOTO · 4:5</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section tech-section">
          <div className="container">
            <SectionHeader
              label="01 — Technology Overview"
              title="Verified Tools & Technical Stack"
            />
            <div className="tech-grid reveal">
              {technologies.map((tech) => (
                <div key={tech.category} className="tech-card">
                  <h3 className="tech-category">{tech.category}</h3>
                  <ul className="tech-list">
                    {tech.items.map((item) => (
                      <li key={item} className="tech-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section edu-section">
          <div className="container">
            <SectionHeader
              label="02 — Education"
              title="Academic Foundations"
            />
            <div className="edu-card reveal">
              <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
              <div className="edu-institution">Manipal University Jaipur</div>
              <div className="edu-type">Online Degree</div>
            </div>
          </div>
        </section>

        <section className="contact-prompt-section">
          <div className="container text-center reveal">
            <h2 className="section-title" style={{ margin: '0 auto 20px' }}>Let's build something real together.</h2>
            <Button to="/contact" variant="primary">
              Start a Conversation ↗
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};
