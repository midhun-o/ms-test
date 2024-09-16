import React from 'react';

const InfoOne = () => {
    return (
        <div className="flex flex-col gap-6 p-8 lg:p-16">
            <div className="flex items-center bg-[#083040] p-4 text-white h-16">
                <img src="/assets/icons/lorem-1.png" alt="Circle Icon" className="w-8 h-8" />
                <p className="ml-4">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex items-center bg-[#083040] p-4 text-white h-16">
                <img src="/assets/icons/lorem-2.png" alt="Cross Icon" className="w-8 h-8" />
                <p className="ml-4">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex items-center bg-[#083040] p-4 text-white h-16">
                <img src="/assets/icons/lorem-3.png" alt="Triangle Icon" className="w-8 h-8" />
                <p className="ml-4">Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
};

export default InfoOne;
