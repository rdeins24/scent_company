




import React from "react";
import { FaInstagram, FaGoogle, FaReact,FaShopify} from "react-icons/fa";
import {BiBookContent,BiCart } from "react-icons/bi";
import {TbSeo} from 'react-icons/tb';
import { IoLogoPinterest } from "react-icons/io5";
import { IoLogoNextjs, IoLogoShopify } from "react-icons/io";
import {SiNextdotjs,SiSemanticweb,SiBrandfolder,SiGoogleads} from 'react-icons/si'
import {BsDatabaseGear} from 'react-icons/bs'

const Card = ({ title, description, Icon }) => (
  <div className="bg-[#17141d] border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-2lg hover:transform hover:scale-105 duration-500 ease-in-out">
    <div className="flex flex-col justify-center items-center text-white p-2">
      <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
        {Icon && <Icon className="text-5xl" />}
      </div>
      <div className="text-xl font-bold mt-2">{title}</div>
      <p className="mt-10 leading-6">{description}</p>
      <div className="pt-10">
      {Icon && <Icon className="text-5xl" />}
      </div>
    </div>
  </div>
);

const Category = ({ title, cards }) => (
  <div className="my-10">
    <div className="md:text-6xl mb-[24px] md:ml-4">{title}</div>
    <div className="flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

const Cards = () => {
  const marketingCards = [
    {
      title: "Social Media Marketing",
      description:
        "Locavore cardigan small batch roof party blue bottle blog megh roof party blue bottle blog megh roof party blue bottle blog megh roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: FaInstagram,
    },
    {
      title: "SEM",
      description:
        "Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: SiSemanticweb,
    },
    {
      title: "Content Management",
      description:
        "Locavore cardigan small batch roof ial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: BiBookContent,
    },
    {
      title: "Pinterest",
      description: "Description for Pinterest card.",
      Icon: IoLogoPinterest,
    },
    {
      title: "SEO",
      description: "Description for SEO card.",
      Icon: TbSeo,
    },
    {
      title: "Google adds",
      description: "Description for SEO card.",
      Icon: SiGoogleads,
    },
  ];

  const creativeCards = [
    {
      title: "UX/UI Design",
      description:
        "Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: FaReact,
    },
    {
      title: "Branding",
      description:
        "Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: SiBrandfolder,
    },
  ];

  const developmentCards = [
    {
      title: "Backend",
      description:
        "Locavore cardigan small batch roof party blue bottlr migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: BsDatabaseGear,
    },
    {
      title: "Frontend",
      description:
        "Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: FaReact,
    },
    {
      title: "Ecommerce",
      description:
        "Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.",
      Icon: BiCart,
    },
    {
      title: "Next.js",
      description: "Description for Next.js card.",
      Icon: SiNextdotjs,
    },
    {
      title: "Shopify",
      description: "Description for Shopify card.",
      Icon: FaShopify,
    },
  ];

  return (
    <div className="flex flex-col md:items-start md:max-w-[1280px] mx-auto md:px-[90px] items-center px-10">
      <Category title="Marketing" cards={marketingCards} />
      <Category title="Creative" cards={creativeCards} />
      <Category title="Development" cards={developmentCards} />
    </div>
  );
};

export default Cards;
