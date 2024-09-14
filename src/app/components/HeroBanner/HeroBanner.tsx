import React from 'react';
import Header from './HeroComponents/Header';
import HeroText from './HeroComponents/HeroText';

const HeroBanner = () => {
  return (
    <div className="flex flex-col justify-between relative w-full h-screen bg-cover" 
         style={{ backgroundImage: 'url(/assets/images/hero-banner.png)' }}>
      <Header />
      <HeroText />
    </div>
  );
};

export default HeroBanner;
