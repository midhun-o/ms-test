import React from 'react';
import Image from 'next/image';

const FeatureVideo = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden mb-24">
      <Image
        src="/assets/images/feature-video-image.png"
        alt="Background Image"
        layout="responsive"
        width={1920}
        height={1080}
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-10">
        <div className="pl-4 md:pl-20">
          <Image
            src="/assets/icons/video-play-icon.png"
            alt="Icon"
            width={100}
            height={100}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-8 lg:h-8 xl:w-20 xl:h-20 mb-4 md:mb-5 mt-6 md:mt-10"
          />
        </div>

        <div className="text-white mt-4 pl-4 md:pl-20">
          <p className="text-xs sm:text-sm md:text-2xl lg:text-xs xl:text-3xl mb-2 sm:mb-4 md:mb-6 lg:mb-2 xl:mb-8">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-xs sm:text-sm md:text-xl lg:text-xs xl:text-2xl mb-1 sm:mb-2 md:mb-3 lg:mb-1 xl:mb-5">
            Sanchez Alexis
          </p>
          <p className="text-xs sm:text-xs md:text-lg lg:text-xs xl:text-xl">
            CEO & Founder of Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureVideo;
