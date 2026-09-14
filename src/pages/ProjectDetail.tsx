import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PROJECTS, Project } from '../data/projects';
import { ProjectMockup } from '../components/ProjectMockup';
import { Button } from '../components/Button';
import { useReveal } from '../hooks/useReveal';
import './ProjectDetail.css';

export const ProjectDetail: React.FC = () => {
  useReveal();
  const { id } = useParams<{ id: string }>();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Find next project for bottom navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject: Project = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <SEO
        title={`${project.name} Case Study — JIFRI`}
        description={project.shortDescription}
      />
      <main className="project-detail-page page-container">
        {/* Project Hero */}
        <header className="project-hero">
          <div className="container reveal">
            <div className="project-hero-top">
              <Link to="/work" className="back-link">
                ← Back to Work
              </Link>
              <div className="status-indicator">{project.status}</div>
            </div>

            <div className="project-hero-num">{project.number}</div>
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-headline">{project.coreHeadline}</p>
          </div>
        </header>

        {/* Project Facts Bar */}
        <section className="facts-section">
          <div className="container reveal">
            <div className="facts-grid">
              <div className="fact-item">
                <div className="fact-label">ROLE</div>
                <div className="fact-val">
                  {project.role.map((r) => (
                    <span key={r} className="role-tag">{r}</span>
                  ))}
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-label">STATUS</div>
                <div className="fact-val">{project.status}</div>
              </div>

              <div className="fact-item">
                <div className="fact-label">TECHNOLOGY</div>
                <div className="fact-val">
                  {project.techStack.join(' · ')}
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="fact-item">
                  <div className="fact-label">LINKS</div>
                  <div className="fact-val links-val">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site ↗</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Mockup Banner */}
        <section className="banner-section">
          <div className="container reveal">
            <ProjectMockup title={project.name} category={project.category} aspectRatio="16 / 9" />
          </div>
        </section>

        {/* Overview & Context */}
        <section className="case-section">
          <div className="container">
            <div className="case-grid reveal">
              <div className="case-label">OVERVIEW</div>
              <div className="case-content">
                <h2 className="case-heading">Project Context</h2>
                <p className="case-body">{project.longDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Technical Case Study Details for Rental Book */}
        {project.id === 'rental-book' && project.deepTechnicalDetails && (
          <>
            <section className="case-section dark-case">
              <div className="container">
                <div className="case-grid reveal">
                  <div className="case-label dark-label">ARCHITECTURE</div>
                  <div className="case-content">
                    <h2 className="case-heading dark-heading">Database &amp; RLS Tenant Isolation</h2>
                    <p className="case-body dark-body">
                      {project.deepTechnicalDetails.realWorldProblem}
                    </p>

                    <div className="tech-callout-box">
                      <div className="callout-label">TECHNICAL IMPLEMENTATION</div>
                      <div className="callout-text">{project.deepTechnicalDetails.dbArchitecture}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="case-section">
              <div className="container">
                <div className="case-grid reveal">
                  <div className="case-label">WORKFLOW</div>
                  <div className="case-content">
                    <h2 className="case-heading">Core Rental Product Flow</h2>
                    <div className="workflow-steps">
                      {project.deepTechnicalDetails.coreWorkflow.map((step, idx) => (
                        <div key={step} className="workflow-step-item">
                          <span className="step-num">0{idx + 1}</span>
                          <span className="step-text">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Confirmed Sections for Badrulhuda Academy */}
        {project.confirmedSections && (
          <section className="case-section">
            <div className="container">
              <div className="case-grid reveal">
                <div className="case-label">SECTIONS</div>
                <div className="case-content">
                  <h2 className="case-heading">Information Architecture</h2>
                  <div className="sections-grid">
                    {project.confirmedSections.map((sec) => (
                      <div key={sec} className="section-pill">{sec}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* AI Assisted Disclosure */}
        {project.aiDisclosure && (
          <section className="case-section ai-disclosure-section">
            <div className="container">
              <div className="case-grid reveal">
                <div className="case-label">DEVELOPMENT</div>
                <div className="case-content">
                  <h3 className="disclosure-heading">Development Workflow &amp; AI Integration</h3>
                  <p className="disclosure-text">{project.aiDisclosure}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Links & Actions */}
        <section className="case-actions-section">
          <div className="container reveal">
            <div className="actions-flex">
              {project.liveUrl && (
                <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                  Visit Live Project ↗
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  View Source Code ↗
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Next Project Footer Nav */}
        <section className="next-project-section">
          <div className="container reveal">
            <div className="next-label">NEXT PROJECT</div>
            <Link to={`/work/${nextProject.id}`} className="next-link">
              <span className="next-title">{nextProject.name}</span>
              <span className="next-arrow">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
