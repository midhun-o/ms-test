import React from "react";
import Image from "next/image";

const InsightHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-10">
      <h1 className="text-3xl sm:text-5xl text-left text-black mb-4 sm:mb-0">
        Latest Insights
      </h1>
      <div className="flex space-x-4 ml-auto mt-4 sm:mt-0">
        <Image
          src="/assets/icons/insignt-left-arrow.png"
          alt="Left Arrow"
          width={40}
          height={40}
          className="hidden sm:block"
        />
        <Image
          src="/assets/icons/insignt-right-arrow.png"
          alt="Right Arrow"
          width={40}
          height={40}
          className="hidden sm:block"
        />
      </div>
    </div>
  );
};

export default InsightHeader;
