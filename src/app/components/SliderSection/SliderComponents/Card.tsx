import React from "react";
import Image from "next/image";
import FloatingArrow from "./FloatingArrow";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col bg-white items-center rounded-xl p-2 h-full">
      <h1 className="text-xl md:text-2xl p-3 text-black mb-1 font-medium text-left w-full">Lorem Ipsum?</h1>
      <div className="relative w-full max-w-xs md:max-w-sm bg-white rounded-lg overflow-visible">
        <div className="relative w-full h-56 md:w-96 md:h-96">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-0 w-full">
            <div className="bg-gradient-to-t from-white via-transparent to-transparent p-2 text-black">
              <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
              <p className="text-sm md:text-base">{description}</p>
            </div>
          </div>
          <div className="absolute right-[-20px] md:right-[-28px] top-1/2 transform -translate-y-1/2">
            <FloatingArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
