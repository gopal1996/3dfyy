import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesList from './components/FeaturesList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesList />
      <Footer />
    </div>
  );
}

export default App;