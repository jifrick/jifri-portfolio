import React from 'react';
import { Button } from '../components/Button';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container reveal">
        <div className="section-label" style={{ marginBottom: '20px' }}>06 — Contact</div>
        <h2>LET'S BUILD<br />SOMETHING REAL.</h2>
        <p>Have an idea worth building? Let's turn it into something real.</p>
        <Button to="/contact" variant="primary">
          Start a Conversation ↗
        </Button>
      </div>
    </section>
  );
};
