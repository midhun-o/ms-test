import React from 'react';

interface StatisticCardProps {
  title: string;
  subtitle: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 md:mb-0">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">{title}</h2>
      <p className="text-lg md:text-xl lg:text-3xl text-black">{subtitle}</p>
    </div>
  );
};

export default StatisticCard;
