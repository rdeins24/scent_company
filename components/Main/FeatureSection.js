// Import the necessary libraries from Next.js and React
import Image from 'next/image';
import React from 'react';
import img from '../../public/brand.jpg';

const FeatureSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative"> {/* Adjust height as needed */}
          {/* Next.js Image component for optimized loading */}
          <Image
            alt="feature"
            src={img}
            layout="fill" // This makes the image cover the available space
            objectFit="cover" // Keeps aspect ratio, might need adjusting
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {/* Individual feature sections */}
          <FeatureItem
            iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
            title="Shooting Stars"
            description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
            link="#"
          />
          <FeatureItem
            iconPath="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
            title="The Catalyzer"
            description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
            link="#"
          />
          <FeatureItem
            iconPath="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z"
            title="Neptune"
            description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ iconPath, title, description, link }) => {
  return (
    <div className="flex flex-col mb-10 lg:items-start items-center">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        {/* SVG icon */}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d={iconPath}></path>
        </svg>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
        <a href={link} className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          {/* SVG for the arrow */}
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FeatureSection;
