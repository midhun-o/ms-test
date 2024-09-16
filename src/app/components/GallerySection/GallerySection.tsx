import React from 'react'
import GalleryContainer from './GalleryComponents/GalleryContainer'

const GallerySection = () => {
  return (
    <div className='p-20 bg-gray-100'>
      <h1 className='text-black font-normal leading-normal text-left my-16 
                     text-3xl md:text-4xl lg:text-5xl xl:text-5xl 
                     w-full lg:w-2/4' style={{lineHeight:"1.5em"}}>
        Lorem ipsum dolor sit amet, consectetur 
      </h1>
      <GalleryContainer />
    </div>
  )
}

export default GallerySection
