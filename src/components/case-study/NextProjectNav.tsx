import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projects';
import './NextProjectNav.css';

interface NextProjectNavProps {
  prevProject: Project;
  nextProject: Project;
}

export const NextProjectNav: React.FC<NextProjectNavProps> = ({ prevProject, nextProject }) => {
  return (
    <nav className="cs-next-nav-section" aria-label="Case study navigation">
      <div className="container reveal">
        <div className="cs-next-grid">
          <div className="cs-prev-col">
            <Link to={`/work/${prevProject.id}`} className="cs-prev-link">
              <span className="cs-nav-label">← PREVIOUS PROJECT</span>
              <span className="cs-prev-title">{prevProject.name}</span>
            </Link>
          </div>

          <div className="cs-next-col">
            <div className="cs-nav-label">NEXT PROJECT</div>
            <Link to={`/work/${nextProject.id}`} className="cs-next-link">
              <div className="cs-next-info">
                <h3 className="cs-next-title">{nextProject.name}</h3>
                <span className="cs-next-cat">{nextProject.category}</span>
              </div>
              <span className="cs-next-arrow">View Project →</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
