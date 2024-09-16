import React from 'react';
import GalleryImageContainer from './GalleryImageContainer';

const GalleryContainer: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <div className='flex flex-col gap-5'>
        <GalleryImageContainer size="large" backgroundImage="/assets/images/gallery-1.png" />
        <GalleryImageContainer size="small" backgroundImage="/assets/images/gallery-3.png" />
      </div>
      <div className='flex flex-col gap-5'>
        <GalleryImageContainer size="small" backgroundImage="/assets/images/gallery-2.png" />
        <GalleryImageContainer size="large" backgroundImage="/assets/images/gallery-4.png" />
      </div>
    </div>
  );
};

export default GalleryContainer;
