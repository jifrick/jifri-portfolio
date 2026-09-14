import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { BeholdWidget } from '../components/BeholdWidget';

export const CreativeWork: React.FC = () => {
  return (
    <section id="creative">
      <div className="container">
        <SectionHeader label="05 — Creative" title="Visual Storytelling & Video Content" />

        <div className="reveal">
          <BeholdWidget feedId="KADbhv9ErmUW70WpLQoy" />
        </div>

        <p className="hero-sub reveal" style={{ marginTop: '28px', fontSize: '15px' }}>
          JIFRIFLIX · Video Editing · Creative Content · Visual Storytelling
        </p>
      </div>
    </section>
  );
};
