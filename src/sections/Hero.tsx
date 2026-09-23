import React from 'react';
import { Button } from '../components/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="container reveal">
        <div className="eyebrow">FULL-STACK DEVELOPER & VIDEO EDITOR</div>
        <h1 className="hero-title">
          I build digital products <br />from idea to reality.
        </h1>
        <p className="hero-sub">
          Full-Stack Development · Video Editing · UI/UX · Digital Products
        </p>
        <div className="hero-actions">
          <Button to="/work" variant="primary">
            View Work →
          </Button>
          <Button to="/about" variant="secondary">
            About Me
          </Button>
        </div>
        <div className="availability">
          <span className="dot"></span> Based in India · Working globally
        </div>
      </div>
    </header>
  );
};
