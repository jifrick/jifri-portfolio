import React from 'react';
import './ProjectMockup.css';

interface ProjectMockupProps {
  title: string;
  category: string;
  imageSrc?: string;
  aspectRatio?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  title,
  category,
  imageSrc,
  aspectRatio = '16 / 10'
}) => {
  return (
    <div className="project-image" style={{ aspectRatio }} aria-label={`${title} project preview`}>
      {imageSrc ? (
        <img src={imageSrc} alt={`${title} screenshot`} className="project-screenshot" />
      ) : (
        <div className="mock-ui">
          <div className="mock-header-bar">
            <div className="mock-dot-group">
              <span className="mock-dot"></span>
              <span className="mock-dot"></span>
              <span className="mock-dot"></span>
            </div>
            <span className="mock-title-tag">{title.toLowerCase()}.app</span>
          </div>
          <div className="mock-line big"></div>
          <div className="mock-line mid"></div>
          <div className="mock-grid">
            <div className="mock-card">
              <div className="mock-card-line"></div>
              <div className="mock-card-line short"></div>
            </div>
            <div className="mock-card">
              <div className="mock-card-line"></div>
              <div className="mock-card-line short"></div>
            </div>
            <div className="mock-card">
              <div className="mock-card-line"></div>
              <div className="mock-card-line short"></div>
            </div>
          </div>
        </div>
      )}
      <div className="project-image-badge">{title} · {category}</div>
    </div>
  );
};
