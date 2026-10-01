import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PROJECTS, Project } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { CaseStudyProgress } from '../components/case-study/CaseStudyProgress';
import { ProjectFacts } from '../components/case-study/ProjectFacts';
import { ProjectScreenshot } from '../components/case-study/ProjectScreenshot';
import { NextProjectNav } from '../components/case-study/NextProjectNav';
import './ProjectDetail.css';

export const ProjectDetail: React.FC = () => {
  useReveal();
  const { id } = useParams<{ id: string }>();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject: Project = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject: Project = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const totalCount = String(PROJECTS.length).padStart(2, '0');

  return (
    <>
      <SEO
        title={`${project.name} Case Study — Jifri C.K.`}
        description={project.shortDescription}
      />
      
      {/* Top minimal reading progress line */}
      <CaseStudyProgress />

      <main className="cs-page page-container">
        {/* 01. PROJECT HERO */}
        <header className="cs-hero-section">
          <div className="container reveal">
            <div className="cs-hero-top">
              <Link to="/work" className="cs-back-link">
                ← Back to Work
              </Link>
              <div className="cs-hero-counter">
                {project.number} / {totalCount}
              </div>
            </div>

            <div className="cs-hero-main">
              <h1 className="cs-project-title">{project.name}</h1>
              <div className="cs-project-category">{project.category}</div>
              <p className="cs-project-headline">{project.coreHeadline}</p>

              <div className="cs-hero-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-action-link primary"
                  >
                    View Live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-action-link secondary"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* 02. HERO SCREENSHOT (IMMEDIATELY AFTER HERO) */}
        {project.imageSrc && (
          <section className="cs-hero-image-section">
            <div className="container reveal">
              <div className="cs-hero-image-wrap">
                <img
                  src={project.imageSrc}
                  alt={`${project.name} main interface screenshot`}
                  className="cs-hero-image"
                  loading="eager"
                />
              </div>
            </div>
          </section>
        )}

        {/* 03. PROJECT FACTS */}
        <ProjectFacts project={project} />

        {/* 04. OVERVIEW */}
        <section className="cs-section">
          <div className="container">
            <div className="cs-grid reveal">
              <div className="cs-section-label">OVERVIEW</div>
              <div className="cs-section-content">
                <p className="cs-body-large">{project.longDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 05. THE PROBLEM */}
        {project.problem && (
          <section className="cs-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">THE PROBLEM</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading">Operational &amp; Technical Challenge</h2>
                  <p className="cs-body">{project.problem}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 06. THE APPROACH */}
        {project.approachSteps && project.approachSteps.length > 0 && (
          <section className="cs-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">THE APPROACH</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading">Strategy &amp; Product Workflow</h2>
                  <div className="cs-approach-flow">
                    {project.approachSteps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <div className="cs-approach-step">
                          <span className="step-index">0{idx + 1}</span>
                          <span className="step-name">{step}</span>
                        </div>
                        {idx < project.approachSteps!.length - 1 && (
                          <div className="cs-approach-arrow" aria-hidden="true">→</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 07. PRODUCT / DESIGN STORY (REAL SCREENSHOTS) */}
        {project.storySections && project.storySections.length > 0 && (
          <section className="cs-section cs-story-sequence-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">PRODUCT STORY</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading">Product Interface &amp; Key Experiences</h2>
                  <div className="cs-story-list">
                    {project.storySections.map((storyItem, idx) => (
                      <ProjectScreenshot key={idx} section={storyItem} index={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 08. DEVELOPMENT / TECHNOLOGY */}
        <section className="cs-section">
          <div className="container">
            <div className="cs-grid reveal">
              <div className="cs-section-label">DEVELOPMENT</div>
              <div className="cs-section-content">
                <h2 className="cs-heading">Technical Implementation</h2>
                
                {project.techDetailsGrid ? (
                  <div className="cs-tech-grid">
                    {project.techDetailsGrid.map((item) => (
                      <div key={item.label} className="cs-tech-card">
                        <div className="cs-tech-label">{item.label}</div>
                        <div className="cs-tech-val">{item.value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cs-tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="cs-tech-pill">{tech}</span>
                    ))}
                  </div>
                )}

                {/* AI Disclosure if present */}
                {project.aiDisclosure && (
                  <div className="cs-ai-box">
                    <div className="cs-ai-label">DEVELOPMENT WORKFLOW &amp; AI INTEGRATION</div>
                    <p className="cs-ai-text">{project.aiDisclosure}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 09. RLS / TECHNICAL ARCHITECTURE (Rental Book & deep technical projects) */}
        {project.id === 'rental-book' && project.deepTechnicalDetails && (
          <section className="cs-section cs-dark-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label dark">ARCHITECTURE</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading dark">PostgreSQL Row Level Security (RLS) Tenant Isolation</h2>
                  <p className="cs-body dark">
                    {project.deepTechnicalDetails.realWorldProblem}
                  </p>

                  <div className="cs-arch-diagram">
                    <div className="arch-node">SHOP WORKSPACE</div>
                    <div className="arch-connector">↓</div>
                    <div className="arch-node">AUTHENTICATED USER (JWT)</div>
                    <div className="arch-connector">↓</div>
                    <div className="arch-node">POSTGRESQL RLS POLICY FILTER</div>
                    <div className="arch-connector">↓</div>
                    <div className="arch-node">ISOLATED TENANT DATA (RENTALS / TOOLS / PAYMENTS)</div>
                  </div>

                  <div className="cs-arch-callout">
                    <div className="callout-heading">DATABASE-LEVEL QUERY ISOLATION</div>
                    <p className="callout-desc">{project.deepTechnicalDetails.dbArchitecture}</p>
                  </div>

                  <div className="cs-workflow-list">
                    <div className="callout-heading" style={{ marginBottom: '16px' }}>TENANT WORKFLOW SEQUENCING</div>
                    {project.deepTechnicalDetails.coreWorkflow.map((wfStep, idx) => (
                      <div key={wfStep} className="cs-wf-item">
                        <span className="wf-num">0{idx + 1}</span>
                        <span className="wf-text">{wfStep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Confirmed Sections for Badrulhuda Academy */}
        {project.confirmedSections && (
          <section className="cs-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">STRUCTURE</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading">Information Architecture</h2>
                  <div className="cs-sections-grid">
                    {project.confirmedSections.map((sec) => (
                      <div key={sec} className="cs-section-chip">{sec}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 10. OUTCOME */}
        {project.outcome && (
          <section className="cs-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">OUTCOME</div>
                <div className="cs-section-content">
                  <h2 className="cs-heading">Project Result</h2>
                  <p className="cs-body-large">{project.outcome}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 11. PROJECT LINKS */}
        {(project.liveUrl || project.githubUrl) && (
          <section className="cs-section cs-links-section">
            <div className="container">
              <div className="cs-grid reveal">
                <div className="cs-section-label">PROJECT LINKS</div>
                <div className="cs-section-content">
                  <div className="cs-action-row">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-action-link primary"
                      >
                        Visit Live Project ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-action-link secondary"
                      >
                        View Source Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 12. NEXT PROJECT */}
        <NextProjectNav prevProject={prevProject} nextProject={nextProject} />
      </main>
    </>
  );
};
