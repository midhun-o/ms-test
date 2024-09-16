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
      <h1 className="text-2xl p-5 text-black mb-1 font-medium text-left w-full">Lorem Ipsum?</h1>
      <div className="relative w-full max-w-sm bg-white rounded-lg overflow-visible">
        <div className="relative w-96 h-96">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-0 w-full">
            <div className="bg-gradient-to-t from-white via-transparent to-transparent p-4 text-black">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="absolute right-[-28px] top-1/2 transform -translate-y-1/2">
            <FloatingArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
