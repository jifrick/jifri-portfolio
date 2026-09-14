import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { VideoPreview } from '../components/VideoPreview';

export const CreativeWork: React.FC = () => {
  return (
    <section id="creative">
      <div className="container">
        <SectionHeader label="05 — Creative" title="Beyond the browser." />

        <div className="creative-grid reveal">
          <VideoPreview label="Short-form edit" category="JIFRIFLIX" />
          <VideoPreview label="Visual storytelling" category="JIFRIFLIX" />
          <VideoPreview label="Creative content" category="JIFRIFLIX" />
        </div>

        <p className="hero-sub reveal" style={{ marginTop: '28px', fontSize: '15px' }}>
          JIFRIFLIX · Video Editing · Creative Content · Visual Storytelling
        </p>
      </div>
    </section>
  );
};
