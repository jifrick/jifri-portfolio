import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import './NotFound.css';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you are looking for does not exist." />
      <main className="not-found-page page-container">
        <div className="container not-found-inner">
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">This page doesn't exist.</h1>
          <p className="not-found-sub">The link you followed may be broken or the page has moved.</p>
          <Button to="/" variant="primary">
            Back to Home →
          </Button>
        </div>
      </main>
    </>
  );
};
