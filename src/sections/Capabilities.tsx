import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CapabilityItem } from '../components/CapabilityItem';
import { CAPABILITIES } from '../data/capabilities';

export const Capabilities: React.FC = () => {
  return (
    <section>
      <div className="container">
        <SectionHeader
          label="03 — Capabilities"
          title="I work across the product, not just one layer."
        />

        <div className="cap-list reveal">
          {CAPABILITIES.map((cap) => (
            <CapabilityItem key={cap.number} capability={cap} />
          ))}
        </div>
      </div>
    </section>
  );
};
