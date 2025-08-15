'use client';

import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
