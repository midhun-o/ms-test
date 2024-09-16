import React from 'react';

interface SocialIconProps {
  imgSrc: string;
  href: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ imgSrc, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#0f2a3f] p-2 rounded-full">
      <img src={imgSrc} alt="social icon" className="w-10 h-10" />
    </a>
  );
};
