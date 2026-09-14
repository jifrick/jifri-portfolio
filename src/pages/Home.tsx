import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/Hero';
import { CurrentlyBuilding } from '../sections/CurrentlyBuilding';
import { SelectedWork } from '../sections/SelectedWork';
import { AboutPreview } from '../sections/AboutPreview';
import { Capabilities } from '../sections/Capabilities';
import { YawmaticFeature } from '../sections/YawmaticFeature';
import { CreativeWork } from '../sections/CreativeWork';
import { ContactCTA } from '../sections/ContactCTA';
import { useReveal } from '../hooks/useReveal';

export const Home: React.FC = () => {
  useReveal();

  return (
    <>
      <SEO
        title="JIFRI — Full-Stack Developer"
        description="Full-Stack Development · UI/UX · Digital Products · Creative Technology. I build digital products from idea to reality."
      />
      <main id="top">
        <Hero />
        <CurrentlyBuilding />
        <SelectedWork />
        <AboutPreview />
        <Capabilities />
        <YawmaticFeature />
        <CreativeWork />
        <ContactCTA />
      </main>
    </>
  );
};
