import React from 'react';
import { StorySection } from '../../data/projects';
import './ProjectScreenshot.css';

interface ProjectScreenshotProps {
  section: StorySection;
  index: number;
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({ section, index }) => {
  const layout = section.layout || 'full';
  const numLabel = String(index + 1).padStart(2, '0');

  if (layout === 'text-image') {
    return (
      <div className="cs-story-block cs-story-grid text-image reveal">
        <div className="cs-story-copy">
          {section.eyebrow ? (
            <div className="cs-eyebrow">{section.eyebrow}</div>
          ) : (
            <div className="cs-eyebrow">{numLabel} — STORY</div>
          )}
          <h3 className="cs-story-title">{section.title}</h3>
          <p className="cs-story-desc">{section.description}</p>
        </div>
        {section.imageSrc && (
          <div className="cs-story-media">
            <img
              src={section.imageSrc}
              alt={section.title}
              className="cs-screenshot-img"
              loading="lazy"
            />
            {section.caption && <figcaption className="cs-caption">{section.caption}</figcaption>}
          </div>
        )}
      </div>
    );
  }

  if (layout === 'image-text') {
    return (
      <div className="cs-story-block cs-story-grid image-text reveal">
        {section.imageSrc && (
          <div className="cs-story-media">
            <img
              src={section.imageSrc}
              alt={section.title}
              className="cs-screenshot-img"
              loading="lazy"
            />
            {section.caption && <figcaption className="cs-caption">{section.caption}</figcaption>}
          </div>
        )}
        <div className="cs-story-copy">
          {section.eyebrow ? (
            <div className="cs-eyebrow">{section.eyebrow}</div>
          ) : (
            <div className="cs-eyebrow">{numLabel} — STORY</div>
          )}
          <h3 className="cs-story-title">{section.title}</h3>
          <p className="cs-story-desc">{section.description}</p>
        </div>
      </div>
    );
  }

  // Default 'full' layout
  return (
    <div className="cs-story-block cs-story-full reveal">
      <div className="cs-story-header">
        {section.eyebrow ? (
          <div className="cs-eyebrow">{section.eyebrow}</div>
        ) : (
          <div className="cs-eyebrow">{numLabel} — PRODUCT DESIGN</div>
        )}
        <h3 className="cs-story-title">{section.title}</h3>
        <p className="cs-story-desc">{section.description}</p>
      </div>

      {section.imageSrc && (
        <figure className="cs-full-media">
          <img
            src={section.imageSrc}
            alt={section.title}
            className="cs-screenshot-img"
            loading="lazy"
          />
          {section.caption && <figcaption className="cs-caption">{section.caption}</figcaption>}
        </figure>
      )}
    </div>
  );
};
