import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TextLink } from '../components/TextLink';
import './AboutPreview.css';

export const AboutPreview: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader label="02 — About" title="I learn by building." />

        <div className="about-grid reveal">
          <div className="about-content">
            <h3 className="about-title">
              Technology, design, creativity and entrepreneurship.
            </h3>
            <p className="about-copy">
              I'm Jifri, a full-stack developer and digital builder working across technology, design and creativity. I like turning ideas into working products, websites and experiences — from the interface people see to the systems and data behind it.
            </p>
            <p className="about-copy">
              I learn by building, experimenting and solving real problems. My work sits at the intersection of technology, design, creativity and entrepreneurship.
            </p>
            <TextLink to="/about" className="about-link">
              More About Me
            </TextLink>
          </div>

          <div className="photo-placeholder" aria-label="Profile photo placeholder">
            <span>YOUR PHOTO · 4:5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
