import Image from 'next/image';
import React from 'react';

const HeroSection = ({ backgroundColor, imageSrc, title, description, buttonText }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen">
          {/* Left Text Block */}
          <div className={`md:w-1/2 ${backgroundColor} flex flex-col justify-center p-10`}>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="mb-8">
              {description}
            </p>
            <button className="px-3 py-1 text-lg border border-black hover:bg-black hover:text-white w-64 mx-auto md:mx-0">
              {buttonText}
            </button>
          </div>
    
          {/* Right Image Block */}
          <div className="md:w-1/2 w-full h-full md:h-full relative">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
    );
};

export default HeroSection;
