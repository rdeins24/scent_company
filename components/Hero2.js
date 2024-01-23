import React, { useState, useEffect } from "react";
import Image from "next/image";

const slidesData = [
  {
    bgColor: "#00205d",
    title: "PRODUCING UNUSUAL IDEA",
    subttitle: "CREATIVE",
    description:
      "Storming plenty grounded by practicality - that is how we make sure every campaign is tailored to give your audience the best experience of your brand.",
    imgSrc: "/insta.png", // Replace with the appropriate image source for each slide
  },

  {
    bgColor: "#5e0000",
    title: "IDEAS THAT COMMUNICATE",
    subttitle: "IDEAS",
    description:
      "torming plenty of ideasy, yet is grounded by practicality - that is how we make sure every campaign is tailored to give your audience the best experience of your brand.",
    imgSrc: "/art-top-cropp.jpg",
  },
  {
    bgColor: "#1f1f1f",
    title: "TAKING BRANDS FURTHER",
    subttitle: "MARKETING",
    description:
      "torming plenty of inality, yet is grounded by practicality - that is how we make sure every campaign is tailored to give your audience the best experience of your brand.",
    imgSrc: "/app.jpg",
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
      className="hero-section"
      style={{ backgroundColor: slidesData[currentSlide].bgColor }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="flex w-full justify-between px-[350px]">
          <div className="w-1/2 pr-10 ">
            <h1 className="text-4xl">{slidesData[currentSlide].title}</h1>
            <p className="text-7xl my-8">
              {slidesData[currentSlide].subttitle}
            </p>
            <p className="text-2xl ">
              {slidesData[currentSlide].description}
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={slidesData[currentSlide].imgSrc}
              alt={slidesData[currentSlide].title}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
