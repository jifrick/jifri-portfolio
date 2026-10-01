import React from 'react';
import { Project } from '../../data/projects';
import './ProjectFacts.css';

interface ProjectFactsProps {
  project: Project;
}

export const ProjectFacts: React.FC<ProjectFactsProps> = ({ project }) => {
  return (
    <section className="cs-facts-section">
      <div className="container reveal">
        <div className="cs-facts-grid">
          <div className="cs-fact-item">
            <div className="cs-fact-label">ROLE</div>
            <div className="cs-fact-val">
              {project.role.join(' · ')}
            </div>
          </div>

          <div className="cs-fact-item">
            <div className="cs-fact-label">STATUS</div>
            <div className="cs-fact-val">
              <span className="cs-status-tag">{project.status}</span>
            </div>
          </div>

          <div className="cs-fact-item">
            <div className="cs-fact-label">YEAR</div>
            <div className="cs-fact-val">{project.year || '2026'}</div>
          </div>

          <div className="cs-fact-item">
            <div className="cs-fact-label">TECH</div>
            <div className="cs-fact-val">
              {project.techStack.join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
