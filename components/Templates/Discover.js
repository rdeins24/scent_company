import React from 'react';

const DiscoverSection = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-[#0d0e11] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/4 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
          <p className="mt-4 text-md md:text-lg">{description}</p>
        </div>
        <div className="md:w-1/4 flex justify-center md:justify-end">
          <button
            onClick={onButtonClick}
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
