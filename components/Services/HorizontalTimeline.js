import React from "react";
import Zoom from 'react-reveal/Zoom';

const HorizontalTimeline = () => {
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
