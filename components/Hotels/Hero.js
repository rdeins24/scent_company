import Image from 'next/image';
import React from 'react';
import img from '../../public/assets/Hotels/hotel.jpg'

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen">
          {/* Left Text Block */}
          <div className="md:w-1/2 bg-[#F7DC6F] flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold mb-4">Aroma Hotel Scent</h1>
            <p className="mb-8">
              Leverage our expertise in Guest Experience applied to olfactory sensory architecture 
              and let yourself be guided by experts in your sector.
            </p>
            <button className="px-2 py-2 text-sm border border-black hover:bg-black hover:text-white w-64 mx-auto md:mx-0">
              Live the experience
            </button>
          </div>
    
          {/* Right Image Block */}
          <div className="md:w-1/2 w-full h-full md:h-full relative">
            <Image
              src={img}
              alt="Hotel Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      );
    };

export default HeroSection;
