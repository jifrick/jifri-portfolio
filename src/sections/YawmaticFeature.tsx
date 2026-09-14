import React from 'react';
import { TextLink } from '../components/TextLink';
import './YawmaticFeature.css';

export const YawmaticFeature: React.FC = () => {
  return (
    <section className="dark-section" id="yawmatic">
      <div className="container dark-inner">
        <div className="section-top reveal">
          <div className="section-label">04 — Venture</div>
          <h2 className="section-title">Building something bigger.</h2>
        </div>

        <div className="yawmatic-mark reveal">
          YAWMATIC<span className="dot"></span>
        </div>

        <p className="dark-copy reveal">
          YAWMATIC is my creative technology venture exploring design, technology and digital experiences.
        </p>

        <div className="reveal" style={{ marginTop: '24px' }}>
          <TextLink href="https://yawmatic.vercel.app" target="_blank" rel="noopener noreferrer" isDark>
            Explore YAWMATIC
          </TextLink>
        </div>
      </div>
    </section>
  );
};
