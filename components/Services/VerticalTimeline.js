import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "Strategia",
      description:
        "Definim și elaborăm direcțiile strategice, obiectivele și planurile pentru proiect, luând în considerare analiza publicului țintă, tendințele pieței și concurența. Abordăm creativ și eficient fiecare etapă a strategiei pentru a maximiza impactul și performanța",
      color: "gray",
    },
    {
      title: "Creative",
      description:
        "Creăm și producem conținut unic, adaptat brandului și necesităților sale. De la conținut scris până la materiale multimedia, lucrăm la un conținut captivant și relevant care să rezoneze cu audiența și să consolideze identitatea brandului.",
      color: "red",
    },
    {
      title: "Implementare",
      description:
        "Aducem la viață strategiile și conținutul dezvoltat. Implementăm cu atenție planurile, lansăm campanii de marketing și optimizăm platformele digitale pentru a oferi o experiență de utilizare optimă și pentru a maximiza performanța proiectului.",
      color: "blue",
    },
    {
      title: "Performanță",
      description:
        "Monitorizăm și analizăm constant rezultatele și performanța proiectului. Folosim datele și analizele pentru a evalua succesul campaniilor și pentru a ajusta și optimiza continuu strategiile pentru a atinge obiectivele stabilite",
      color: "purple",
    },
  ];

  const getColorClass = (color) => {
    const colorClasses = {
      gray: "bg-gray-700",
      red: "bg-red-500",
      blue: "bg-blue-700",
      purple: "bg-purple-700",
    };
    return colorClasses[color] || "bg-gray-700"; // Default to gray if color not found
  };

  return (
    <section className="text-gray-600 body-font block md:hidden pb-8 mb-10">
      <div className="container px-5 md:py-24 mx-auto flex flex-wrap py-0">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {timelineData.map((item, index) => (
              <TimelineStep key={index} {...item} getColorClass={getColorClass} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineStep = ({ number, title, description, color, getColorClass }) => {
  return (
    <div className="flex relative pb-12">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full border border-dotted mr-4"></div>
      </div>
      <div className="w-[1/4] text-center relative">
        <div
          className={`w-6 h-6 rounded-full ${getColorClass(color)} flex items-center justify-center absolute`}
        />
      </div>
      <div className="flex-grow pl-12 mt-[-5px]">
        <h2 className=" title-font  text-xl font-bold text-white mb-1 tracking-wider">
          {title}
        </h2>
        <p className=" text-gray-500 pt-5 leading-8 pr-5 text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Timeline;
