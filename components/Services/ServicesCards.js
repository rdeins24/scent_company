import React from "react";
import styles from "./ServicesCards.module.css";

const GradientCircle = () => (
  <svg
    className={styles.yourSvgClass}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF0080", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      className={styles.stroke}
      cx="60"
      cy="60"
      r="20"
      stroke="url(#grad1)"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const Card = ({ title, description }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.bar}>
      <div className={styles.emptybar}></div>
      <div className={styles.filledbar}></div>
    </div>
    <div className={styles.circle}>
      <p className="flex ml-[-85px] mx-auto justify-center align-center ">
        {description}
      </p>
      <GradientCircle />
      <div className=""></div>
    </div>
  </div>
);

const ServiceCategory = ({ category, items }) => (
  <div className=" md:max-w-[1280px] m-auto py-[50px] pb-[50px]">
    <div className="  ">
      <h3 className="md:text-5xl md:py-[50px] p-10 text-3xl font-bold m-auto">
        {category}
      </h3>
    </div>
    <div className="flex">
      <div className={styles.container}>
        {items.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  </div>
);

const YourComponent = () => {
  const categories = [
    {
      category: "Marketinng",
      items: [
        {
          title: "Pinterest",
          description:
            "e creTE BEST snexiuni, anexiuni, building and snexiuni, anexiuni, exiuni, and shaping brands tConstruim conexiuni, and shaping brands tConstruim conexiuni, and shaping brands tConstruim conexiuni, , ",
        },

        {
          title: "Tiktok",
          description:
            "e creTE BEST ui/uxWe love building and shaping braning branng and shapig branng and shaping brands tConstruim conexiuni, e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, ",
        },
        {
          title: "Tiktok",
          description:
            "e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, ",
        },
        // {
        //   title: "Tiktok",
        //   description:
        //     "e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, ",
        // },
        // {
        //   title: "Tiktok",
        //   description:
        //     "e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, e creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, ",
        // },
        // Add other items as needed
      ],
    },
    {
      category: "Creative  ",
      items: [
        {
          title: "UI/UX",
          description:
            "we creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm",
        },
        {
          title: "what",
          description:
            ".we creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm ",
        },
        {
          title: "Services",
          description:
            ".we creTE BEST rands tCon building and shaping brands tCon building and shaping brands tConstruim conexiuni, creăm ",
        },
        // {
        //   title: "Services",
        //   description:
        //     ".we creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm ",
        // },
      ],
    },
    {
      category: "Development",
      items: [
        {
          title: "Backend",
          description:
            "we creTE BEST ui/uxWe love buildingreămwe creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm",
        },
        {
          title: "Backend",
          description:
            "we creTE BEST ui/uxWe love building ane creTE BEST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm",
        },
        {
          title: "Backend",
          description:
            "we creTE BEST ui/uxWe love building ST ui/uxWe love building and shaping brands tConstruim conexiuni, creăm",
        },

        // Add other items as needed
      ],
    },
    // Add more categories as needed
  ];

  return (
    <>
      {categories.map((category, index) => (
        <ServiceCategory
          key={index}
          category={category.category}
          items={category.items}
        />
      ))}
    </>
  );
};

export default YourComponent;
