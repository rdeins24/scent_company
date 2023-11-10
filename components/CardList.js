import React from "react";
import {
  FaCode,
  FaInstagram,
  FaExpandArrowsAlt,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    name: "Web Development",
    description:
      "Echipa de dezvoltare web transformă ideile în realitate digitală, creând site-uri interactive și funcționale care vor face ca afacerea dvs. să strălucească online.",
    icon: <FaCode />,
  },
  {
    name: "Social Media",
    description:
      "Vă ajutăm să vă conectați cu audiența în mod autentic și să vă creșteți prezența online, construind comunități angajate și dezvoltând relații durabile cu clienții.",
    icon: <FaInstagram />,
  },
  {
    name: "UX/UI",
    description:
      "Experții noștri în UI/UX design creează experiențe captivante și intuitive pentru utilizator, transformând conceptele în interfețe ușor de navigat, care vor impresiona și fideliza publicul dvs.",
    icon: <FaExpandArrowsAlt />,
  },
  {
    name: "Marketing",
    description:
      "Vă ajutăm cu creșterea vizibilității afacerii dvs., folosind strategii personalizate, creativitate și analize detaliate pentru a atinge obiectivele de creștere și a obține rezultate durabile.",
    icon: <FaChartLine />,
  },
];

const Feature = ({ name, description, icon }) => (
  <div className="relative pl-6 md:pl-8 lg:pl-16 text-white mb-8">
    <div className="pl-[20px] md:pl-[5px] font-semibold leading-7 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-3xl">
      {name}
    </div>
    <div className=" pl-[20px] md:pl-[5px] mt-2 text-base leading-7 md:text-lg lg:text-xl">
      {description}
    </div>
    <div className="absolute left-0 top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-white text-black">
      {icon}
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="py-16 sm:py-10 bg-[#0d0e11]">
      <div className="mx-auto px-6 md:px-8 lg:px-16 ">
        <div className="md:text-6xl  text-3xl md:w-[60%] mx-auto text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
          <h2 className="leading-[1.2]">
            Suntem pasionati în furnizarea unui spectru complet de servicii de
            marketing digital, susținută de idei îndrăznețe și inovații.
          </h2>
        </div>
        <div className="md:w-[70%] grid grid-cols-1 gap-x-8 gap-y-10 md:max-w-xl lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mx-auto mt-16 max-w-2xl">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
