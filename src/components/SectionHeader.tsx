import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, className = '' }) => {
  return (
    <div className={`section-top reveal ${className}`.trim()}>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};
