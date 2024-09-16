import React from 'react';
import InformationText from './InformationComponents/InformationText';
import InformationGrid from './InformationComponents/InformationGrid';

const InformationSection = () => {
  return (
    <div className='p-16'>
      <InformationText />
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-5 mt-8'>
        <InformationGrid bgColor="bg-custom-light-blue" textColor="text-custom-dark-blue" pTextColor="text-black" hrColor="#00466D" number={1} />
        <InformationGrid bgColor="bg-custom-light-blue" textColor="text-custom-dark-blue" pTextColor="text-black" hrColor="#00466D" number={2} />
        <InformationGrid bgColor="bg-custom-dark-blue" textColor="text-white" pTextColor="text-white" hrColor="white" number={3} />
      </div>
    </div>
  );
}

export default InformationSection;
