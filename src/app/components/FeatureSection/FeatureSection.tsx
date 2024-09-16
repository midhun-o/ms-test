import React from 'react';
import FeatureVideo from './FeatureComponents/FeatureVideo';
import FeatureMain from './FeatureComponents/FeatureMain';
import FeatureSub from './FeatureComponents/FeatureSub';

const FeatureSection = () => {
  return (
    <div className='flex flex-col p-5 md:p-20 text-black'>
      <FeatureVideo />
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 md:basis-[60%]'>
          <FeatureMain />
        </div>
        <div className='flex-1 md:basis-[40%] flex flex-col justify-center'>
          <FeatureSub />
          <hr className='my-4 border  border-gray-300' />
          <FeatureSub />
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
