import React from 'react';

interface BlogGridItemProps {
  date: string;
  description: string;
  imageUrl: string;
}

const InsightGrid: React.FC<BlogGridItemProps> = ({ date, description, imageUrl }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden bg-cover bg-center h-[75vh]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute bottom-0 p-4 md:p-14 text-white">
        <p className="text-xs md:text-sm mb-1 md:mb-2">{date}</p>
        <p className="text-base md:text-2xl">{description}</p>
        <button className="mt-3 md:mt-5 text-xs md:text-base">Read More</button>
      </div>
    </div>
  );
};

export default InsightGrid;
