import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './FullWidthProjectStage.css';

const PRIMARY_PROJECTS = PROJECTS.filter((p) => p.isPrimary);

const DOMAIN_MAP: Record<string, string> = {
  'yawmatic': 'yawmatic.vercel.app',
  'rental-book': 'ck-rental-book.vercel.app',
  'webinvite': 'webinvite.in',
  'badrulhuda': 'badrulhuda.com'
};

const THEME_MAP: Record<string, string> = {
  'yawmatic': 'yawmatic',
  'rental-book': 'rental',
  'webinvite': 'invite',
  'badrulhuda': 'academy'
};

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
        <div className="work-stage">
          {/* Header */}
          <div className="work-header">
            <div className="section-label">01 — Selected Work</div>
            <div className="work-counter">
              {String(active + 1).padStart(2, '0')} / {String(PRIMARY_PROJECTS.length).padStart(2, '0')}
            </div>
          </div>

          {/* Large Real Project Visual */}
          <div className={`project-visual ${THEME_MAP[currentProject.id] || 'yawmatic'}`}>
            {currentProject.imageSrc ? (
              <img
                src={currentProject.imageSrc}
                alt={`${currentProject.name} project screenshot`}
                className="showcase-real-image"
                loading="eager"
              />
            ) : (
              <div className="browser">
                <div className="browser-top">
                  <div className="browser-dots">
                    <i></i><i></i><i></i>
                  </div>
                  <span>{DOMAIN_MAP[currentProject.id] || 'yawmatic.vercel.app'}</span>
                </div>
                <div className="mock-content">
                  <div className="mock-title"></div>
                  <div className="mock-sub"></div>
                </div>
              </div>
            )}
          </div>

          {/* Project Information */}
          <div className="project-info">
            <div>
              <h2 className="project-title">{currentProject.name}</h2>
              <div className="project-category">{currentProject.category}</div>
              <div className="project-status">{currentProject.status}</div>
            </div>

            <Link to={`/work/${currentProject.id}`} className="project-link">
              View Project ↗
            </Link>
          </div>

          {/* Project Navigation */}
          <div className="project-navigation" aria-label="Selected projects">
            {PRIMARY_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                className={`project-nav-item ${idx === active ? 'active' : ''}`}
                onClick={() => goToProject(idx)}
              >
                <span className="nav-index">{proj.number}</span>
                <span>{proj.name}</span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress * 100}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
