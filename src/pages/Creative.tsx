import React from 'react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { BeholdWidget } from '../components/BeholdWidget';
import { useReveal } from '../hooks/useReveal';
import { Button } from '../components/Button';
import './Creative.css';

export const Creative: React.FC = () => {
  useReveal();

  return (
    <>
      <SEO
        title="JIFRIFLIX — Creative Work & Video Editing"
        description="JIFRIFLIX creative content, short-form video editing, and visual storytelling by Jifri."
      />
      <main className="creative-page page-container">
        <header className="page-header">
          <div className="container reveal">
            <div className="eyebrow">JIFRIFLIX</div>
            <h1 className="page-title">Beyond the browser.</h1>
            <p className="body-large" style={{ marginTop: '20px', maxWidth: '680px' }}>
              Video editing, creative content creation, and visual storytelling. Supporting proof that design and narrative extend past web applications.
            </p>
          </div>
        </header>

        <section className="creative-content-section">
          <div className="container">
            <SectionHeader
              label="01 — Selected Edits"
              title="Visual Storytelling & Video Content"
            />
            <div className="reveal">
              <BeholdWidget feedId="KADbhv9ErmUW70WpLQoy" />
            </div>
          </div>
        </section>

        <section className="creative-details-section">
          <div className="container reveal">
            <div className="creative-info-card">
              <h2 className="info-heading">Creative Positioning</h2>
              <p className="info-desc">
                Creative output under <strong>JIFRIFLIX</strong> leverages tools such as <strong>CapCut</strong> for short-form edits, social content, and visual narratives. It serves as a creative playground to explore pacing, composition, color, and visual rhythm.
              </p>
              <div className="creative-actions" style={{ marginTop: '24px' }}>
                <Button href="https://www.instagram.com/jifriflix/" target="_blank" rel="noopener noreferrer" variant="secondary">
                  Visit JIFRIFLIX on Instagram ↗
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
