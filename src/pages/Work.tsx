import React from 'react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectItem } from '../components/ProjectItem';
import { PROJECTS } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { TextLink } from '../components/TextLink';
import './Work.css';

export const Work: React.FC = () => {
  useReveal();

  const primaryProjects = PROJECTS.filter((p) => p.isPrimary);
  const additionalProjects = PROJECTS.filter((p) => !p.isPrimary);

  return (
    <>
      <SEO
        title="Selected Work — JIFRI"
        description="Curated digital products, full-stack web applications, SaaS platforms, and digital experiences by Jifri."
      />
      <main className="work-page page-container">
        <header className="page-header">
          <div className="container reveal">
            <div className="eyebrow">PORTFOLIO</div>
            <h1 className="page-title">Selected Work</h1>
            <p className="body-large" style={{ marginTop: '20px', maxWidth: '650px' }}>
              A curated collection of full-stack digital products, web applications, SaaS tools, and creative experiences.
            </p>
          </div>
        </header>

        <section className="work-section">
          <div className="container">
            <SectionHeader
              label="01 — Primary Projects"
              title="Full-Stack Products & Case Studies"
            />
            <div className="projects-list">
              {primaryProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {additionalProjects.length > 0 && (
          <section className="work-section additional-section">
            <div className="container">
              <SectionHeader
                label="02 — Additional Work"
                title="Supporting Platforms & Explorations"
              />
              <div className="projects-list">
                {additionalProjects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="creative-teaser-section">
          <div className="container reveal">
            <div className="section-label" style={{ marginBottom: '16px' }}>03 — Creative Work</div>
            <h2 className="section-title">Beyond the Browser</h2>
            <p className="body-muted" style={{ margin: '16px 0 28px', maxWidth: '600px' }}>
              Explore JIFRIFLIX video editing, short-form creative content, and visual storytelling work.
            </p>
            <TextLink to="/creative">
              Explore Creative Work
            </TextLink>
          </div>
        </section>
      </main>
    </>
  );
};
