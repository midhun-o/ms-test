import React from 'react';

const FeatureSub = () => {
  return (
    <div className="flex items-start">
      <div className='h-full py-6'>
        <hr className="border border-black w-0 flex-shrink-0 h-full hidden md:block" />
      </div>
      <div className="p-4 md:p-8">
        <h1 className="text-xl md:text-2xl font-medium leading-7 md:leading-9 text-left">Lorem ipsum</h1>
        <p className="text-sm md:text-base font-normal leading-5 md:leading-6 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem.
        </p>
      </div>
    </div>
  );
}

export default FeatureSub;
