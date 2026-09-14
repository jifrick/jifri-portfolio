import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './FullWidthProjectStage.css';

const PRIMARY_PROJECTS = PROJECTS.filter((p) => p.isPrimary);

export const FullWidthProjectStage: React.FC = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const showcaseRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef(0);
  activeRef.current = active;

  const currentProject = PRIMARY_PROJECTS[active] || PRIMARY_PROJECTS[0];

  const updateFromScroll = useCallback(() => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const scrollDistance = showcaseRef.current.offsetHeight - window.innerHeight;

    if (scrollDistance <= 0) {
      setProgress(0);
      return;
    }

    const currentProgress = Math.max(0, Math.min(0.999999, -rect.top / scrollDistance));
    setProgress(currentProgress);

    const calculatedIndex = Math.min(
      PRIMARY_PROJECTS.length - 1,
      Math.floor(currentProgress * PRIMARY_PROJECTS.length)
    );

    if (calculatedIndex !== activeRef.current) {
      setActive(calculatedIndex);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateFromScroll]);

  const goToProject = (index: number) => {
    if (!showcaseRef.current) return;
    const clampedIndex = Math.max(0, Math.min(PRIMARY_PROJECTS.length - 1, index));
    const distance = showcaseRef.current.offsetHeight - window.innerHeight;
    const targetTop =
      window.scrollY +
      showcaseRef.current.getBoundingClientRect().top +
      (clampedIndex / PRIMARY_PROJECTS.length) * distance;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
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

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToProject(activeRef.current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToProject(activeRef.current - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="work-showcase" id="work" ref={showcaseRef}>
      <div className="work-sticky">
        <div className="showcase-grid">
          {/* Top Overlays */}
          <div className="section-label">Selected Work</div>
          <div className="counter">
            {String(active + 1).padStart(2, '0')} / {String(PRIMARY_PROJECTS.length).padStart(2, '0')}
          </div>

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

          {/* Center-Right Column: Large Project Preview */}
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

          {/* Far-Right Column: Project Navigation */}
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

          {/* Bottom Overlays: Hint & Progress Track */}
          <div className="hint">Scroll to explore ↓</div>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress * 100}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
