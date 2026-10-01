import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './FullWidthProjectStage.css';

const PRIMARY_PROJECTS = PROJECTS.filter((p) => p.isPrimary);

export const FullWidthProjectStage: React.FC = () => {
  const [active, setActive] = useState(0);
  const showcaseRef = useRef<HTMLElement | null>(null);

  const currentProject = PRIMARY_PROJECTS[active] || PRIMARY_PROJECTS[0];

  const goToProject = (index: number) => {
    let nextIndex = index;
    if (nextIndex < 0) nextIndex = PRIMARY_PROJECTS.length - 1;
    if (nextIndex >= PRIMARY_PROJECTS.length) nextIndex = 0;
    setActive(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        return;
      }

      if (!showcaseRef.current) return;
      const rect = showcaseRef.current.getBoundingClientRect();
      const insideShowcase = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!insideShowcase) return;

      if (e.key === 'ArrowRight') {
        goToProject(active + 1);
      } else if (e.key === 'ArrowLeft') {
        goToProject(active - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  const progressPercent = ((active + 1) / PRIMARY_PROJECTS.length) * 100;

  return (
    <section className="work-showcase" id="work" ref={showcaseRef}>
      <div className="work-sticky">
        <div className="showcase-container">
          {/* Top Bar */}
          <div className="showcase-top-bar">
            <div className="showcase-label">Selected Work</div>
            <div className="showcase-counter">
              {String(active + 1).padStart(2, '0')} / {String(PRIMARY_PROJECTS.length).padStart(2, '0')}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="showcase-grid-body">
            {/* Left Column: Project Copy Information */}
            <div className="project-copy">
              <div className="project-number">{currentProject.number}</div>
              <h2 className="project-title">{currentProject.name}</h2>
              <div className="category">{currentProject.category}</div>
              <div className="status">{currentProject.status}</div>
              <Link to={`/work/${currentProject.id}`} className="view">
                View Project ↗
              </Link>
            </div>

            {/* Center Column: Large Project Preview */}
            <div className="preview-wrap">
              <div className={`preview ${currentProject.id}`}>
                {currentProject.imageSrc && (
                  <img
                    src={currentProject.imageSrc}
                    alt={`${currentProject.name} project screenshot`}
                    className="project-image"
                    loading="eager"
                  />
                )}
              </div>
            </div>

            {/* Right Column: Project Navigation */}
            <aside className="project-navigation" aria-label="Project navigation">
              {PRIMARY_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  className={`project-nav ${idx === active ? 'active' : ''}`}
                  onClick={() => goToProject(idx)}
                >
                  <span>{proj.name}</span>
                </button>
              ))}

              <div className="arrows">
                <button
                  type="button"
                  className="arrow"
                  aria-label="Previous project"
                  onClick={() => goToProject(active - 1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="arrow"
                  aria-label="Next project"
                  onClick={() => goToProject(active + 1)}
                >
                  →
                </button>
              </div>
            </aside>
          </div>

          {/* Bottom Bar */}
          <div className="showcase-bottom-bar">
            <div className="progress">
              <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="hint">Use buttons or arrows to switch projects →</div>
          </div>
        </div>
      </div>
    </section>
  );
};
