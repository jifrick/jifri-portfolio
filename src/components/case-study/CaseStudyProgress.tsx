import React, { useState, useEffect } from 'react';
import './CaseStudyProgress.css';

export const CaseStudyProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="case-study-progress-track" aria-hidden="true">
      <div
        className="case-study-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
