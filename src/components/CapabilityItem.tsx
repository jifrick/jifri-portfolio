import React from 'react';
import { Capability } from '../data/capabilities';
import './CapabilityItem.css';

interface CapabilityItemProps {
  capability: Capability;
}

export const CapabilityItem: React.FC<CapabilityItemProps> = ({ capability }) => {
  return (
    <div className="cap">
      <div className="cap-num">{capability.number}</div>
      <div className="cap-name">{capability.name}</div>
      <div className="cap-desc">{capability.description}</div>
    </div>
  );
};
