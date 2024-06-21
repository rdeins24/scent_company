import React, { useState, useEffect } from "react";
import Image from "next/image";

const slidesData = [
  {
    bgColor: "#00205d",
  
    subttitle: "CREATIVE",
    description:
      "Storming plenty grounded by practicality - that is how we make sure every campaign is tailored to give your audience the best experience of your brand.",
    imgSrc: "/scent.jpg", // Replace with the appropriate image source for each slide
  },

  {
    bgColor: "#5e0000",
    subttitle: "",
    description:
      "",
    imgSrc: "/expert.jpg",
  },
  {
    bgColor: "#1f1f1f",
    subttitle: "",
    description:
      "",
    imgSrc: "/brand.jpg",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section relative h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: slidesData[currentSlide].bgColor }}
    >
      {/* Image container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={slidesData[currentSlide].imgSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Text content container with enhanced visibility */}
      <div className="z-10 px-[350px] text-center space-y-4">
     
        <p className="text-7xl my-8 text-white shadow-lg">
          {slidesData[currentSlide].subttitle}
        </p>
        {/* Explicitly enhancing description visibility */}
        <p className="text-2xl text-white shadow-lg">
          {slidesData[currentSlide].description}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;