import React from 'react';
import StatisticCard from './StatisticsComponents/StatisticCard';

const StatisticsSection = () => {
    return (
      <div className="flex flex-col md:flex-row md:justify-between items-center p-4 md:p-16 mt-8 md:mt-0">
        <StatisticCard title="8 Years" subtitle="of Success" />
        <div className="hidden md:block w-[2px] h-32 bg-gray-400"></div>
        <StatisticCard title="200+" subtitle="Members" />
        <div className="hidden md:block w-[2px] h-32 bg-gray-400"></div>
        <StatisticCard title="155+" subtitle="All Over The USA" />
        <div className="hidden md:block w-[2px] h-32 bg-gray-400"></div>
        <StatisticCard title="200k" subtitle="Satisfied Clients" />
      </div>
    );
  };

export default StatisticsSection;
