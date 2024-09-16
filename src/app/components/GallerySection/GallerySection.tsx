import React from 'react'
import GalleryImageContainer from './GalleryComponents/GalleryImageContainer'

const GallerySection = () => {
  return (
    <div className='p-20 bg-gray-200'>
      <h1 className='w-2/4 text-black text-5xl font-normal leading-normal text-left'>
        Lorem ipsum dolor sit amet, consectetur 
      </h1>
      <div>
        <GalleryImageContainer></GalleryImageContainer>
      </div>
    </div>
  )
}

export default GallerySection
