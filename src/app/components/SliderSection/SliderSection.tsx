import React from 'react';
import ContentSection from './SliderComponents/ContentSection';
import Card from './SliderComponents/Card';

const SliderSection: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-[url('/assets/images/slider-bg.png')] bg-cover bg-center py-6 px-4 md:py-36 md:px-6 lg:px-12 xl:px-16">
      <div className="flex-1 flex items-center justify-center md:w-1/2">
        <ContentSection />
      </div>
      <div className="flex-1 flex items-center justify-center md:w-1/2">
        <Card 
          imageUrl="/assets/images/slider-image.png" 
          title="Lorem Ipsum" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default SliderSection;
