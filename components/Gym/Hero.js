import Image from 'next/image';
import React from 'react';
import img from '../../public/assets/gym/fitness.jpg'

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen">
          {/* Left Text Block */}
          <div className="md:w-1/2 bg-red-500 flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold mb-4">Aroma Hotel Scent</h1>
            <p className="mb-8">
              Leverage our expertise in Guest Experience applied to olfactory sensory architecture 
              and let yourself be guided by experts in your sector.
            </p>
            <button className="px-4 py-2 border border-black hover:bg-black hover:text-white">
              Live the experience
            </button>
          </div>
    
          {/* Right Image Block */}
          <div className="md:w-1/2 relative">
            <Image
              src={img}
              alt="Hotel Image"
              layout="fill"
              objectFit="cover"
              className="md:absolute opacity-70"
            />
          </div>
        </div>
      );
    };

export default HeroSection;
