import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';
import './ProjectItem.css';

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <article className="project reveal">
      <div className="project-num">{project.number}</div>

      <div className="project-main">
        <div className="project-head">
          <div>
            <h3 className="project-title">{project.name}</h3>
            <div className="project-meta">{project.category}</div>
          </div>
          <div className="status-indicator">{project.status}</div>
        </div>

        <Link to={`/work/${project.id}`} aria-label={`View ${project.name} case study`}>
          {project.imageSrc ? (
            <div className="project-image-wrap">
              <img src={project.imageSrc} alt={`${project.name} preview`} className="project-card-image" />
            </div>
          ) : (
            <ProjectMockup title={project.name} category={project.category} />
          )}
        </Link>

        <p className="project-desc">{project.coreHeadline}</p>

        <Link to={`/work/${project.id}`} className="project-link">
          <span>View Project</span>
          <span className="arrow">→</span>
        </Link>
      </div>
    </article>
  );
};
