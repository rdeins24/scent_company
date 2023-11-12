import React from "react";
import Zoom from 'react-reveal/Zoom';

const HorizontalTimeline = () => {
  const timelineData = [
    {
      title: "Strategy!",
      description:
        "Using data insight and experience, we unlock your brand’s potential through social media – all by building a full marketing strategy around a specific set of KPIs or objectives. Through efficiency and professionalism, we deliver impactful results all year round.",
      color: "gray",
    },
    {
      title: "Creative",
      description:
        "Using data insight and experience,ng strategy around a specific set of KPIs or objectives. Through efficiency and professionalism, we deliver impactful results all year round.",
      color: "red",
    },
    {
      title: "Media",
      description:
        "Using data insight and experience, we unlock your brand’s potential through social media – all by building a full marketing strategy around a specific set of KPIs or objectives. Through efficiency and professionalism, we deliver impactful results all year round.",
      color: "blue",
    },
    {
      title: "Performance",
      description:
        "Using data insight andhrough social media – all by building a full marketing strategy around a specific set of KPIs or objectives. Through efficiency and professionalism, we deliver impactful results all year round.",
      color: "purple",
    },
  ];

  const getColorClass = (color) => {
    const colorClasses = {
      gray: "bg-gray-600",
      red: "bg-red-500",
      blue: "bg-blue-600",
      purple: "bg-purple-500",
    };
    return colorClasses[color] || "bg-gray-700"; // Default to gray if color not found
  };

  const TimelineItem = ({ title, description, color }) => (
    <div className="w-1/4 text-center relative hidden md:block">
      <Zoom right ssrFadeout duration={1500}  >
      <div
        className={`w-6 h-6 rounded-full ${getColorClass(color)} flex items-center justify-center absolute`}
      />
      </Zoom>
  
      <div className="border border-dotted mt-3" />
      <div className="flex flex-col flex-start text-left pt-3">
        <h3 className="text-white text-xl pt-5">{title}</h3>
        <p className="text-gray-500 pt-5 leading-6 pr-5 text-md">{description}</p>
      </div>
    </div>
  );

  return (
    <div>
      <section className="text-gray-600 body-font max-w-[1280px] mx-auto py-16 bg-[#0d0e11] ">
        <div className="flex">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HorizontalTimeline;
