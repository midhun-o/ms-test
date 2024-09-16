import React from 'react';

interface InformationGridProps {
  bgColor: string;
  textColor?: string;
  pTextColor?: string;
  hrColor?: string;
  number: number;
}

const formatNumber = (num: number) => {
  return num.toString().padStart(2, '0');
}

const InformationGrid: React.FC<InformationGridProps> = ({ bgColor, textColor = 'text-gray-700', pTextColor = 'text-gray-700', hrColor = '#00466D', number }) => {
  return (
    <div
      className={`p-8 py-14 rounded-lg ${bgColor}`}
    >
      <h2 className={`text-3xl font-semibold mb-3 ${textColor}`}>{formatNumber(number)}</h2>
      <hr className={`border-${hrColor} mb-4 border-1`} />
      <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>
        Lorem ipsum dolor sit amet, consectetur
      </h3>
      <p className={`text-base ${pTextColor} pr-2`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
      </p>
    </div>
  );
}

export default InformationGrid;
