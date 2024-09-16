import React from 'react';
import Image from 'next/image';

const FloatingArrow: React.FC = () => {
  return (
    <div className="hidden md:block">
      <Image 
        src="/assets/icons/video-play-icon.png" 
        alt="Play" 
        width={50} 
        height={50} 
        className="object-contain"
      />
    </div>
  );
};

export default FloatingArrow;
