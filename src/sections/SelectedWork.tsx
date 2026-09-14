import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectItem } from '../components/ProjectItem';
import { PROJECTS } from '../data/projects';

export const SelectedWork: React.FC = () => {
  const primaryProjects = PROJECTS.filter((p) => p.isPrimary);

  return (
    <section id="work">
      <div className="container">
        <SectionHeader
          label="01 — Selected Work"
          title="Real products, websites and digital experiences."
        />

        <div className="projects-list">
          {primaryProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
