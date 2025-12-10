import React from 'react';
import PlatformHero from './PlatformHero';
import PlatformCapabilities from './PlatformCapabilities';
import FinalCTA from './FinalCTA';

const PlatformPage: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <>
      <PlatformHero onNavigate={onNavigate} />
      <PlatformCapabilities />
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
};

export default PlatformPage;