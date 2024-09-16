import React from 'react';

interface GalleryImageContainerProps {
  size: 'large' | 'small';
  backgroundImage: string; 
}

const GalleryImageContainer: React.FC<GalleryImageContainerProps> = ({ size, backgroundImage }) => {
  const sizeClasses = size === 'large'
    ? 'sm:h-60 md:h-72 lg:h-80'
    : 'sm:h-48 md:h-56 lg:h-64';

  return (
    <div 
      className={`bg-cover bg-center p-8 rounded-xl text-white flex flex-col justify-end ${sizeClasses}`} 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 lg:mb-6">
          Consectetur adipiscing elit
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default GalleryImageContainer;
