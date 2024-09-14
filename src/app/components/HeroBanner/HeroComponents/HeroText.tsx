import React from 'react';

const HeroText = () => {
  return (
    <div className="container md:p-10 max-w-full md:max-w-5xl">
      <div className="mb-4 md:mb-10">
        <h2 className="font-poppins text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal leading-tight text-left text-white">
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <div>
        <p className="font-normal sm:text-xs md:text-base lg:text-base text-left text-white pr-4 md:pr-13 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. 
          In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada 
          mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. 
          In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
