import React, { useContext, useRef, useState, useEffect } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import Link from "next/link";
import Image from "next/image";

// Import your images here
import bgImage1 from "../public/assets/slider/vivid.jpg"; 
import bgImage2 from "../public/assets/slider/vertical.jpg";
import bgImage3 from "../public/assets/slider/pikaso.jpg";
import bgImage4 from "../public/assets/slider/vertical.jpg";
import bgImage5 from "../public/assets/img/pink.jpg";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  const numOfPages = 5;

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  useEffect(() => {
    const newActiveService = Math.floor(progress);
    if (newActiveService !== activeService) {
      setActiveService(newActiveService);
    }
  }, [progress, activeService]);

  // Array of background images
  const backgroundImages = [
    bgImage1, // Hotels
    bgImage2, // Restaurants
    bgImage3, // Automotive
    bgImage4, // Showroom
    bgImage5, // Retail
  ];

  return (
    <div
      ref={refContainer}
      className="transition-colors duration-700 relative"
    >
      {/* Render the active background image */}
      <Image
        src={backgroundImages[activeService]}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-80 blur-2xl transition-opacity duration-[1500ms] ease-out"
      />
      <div className="absolute inset-0 bg-black opacity-30 z-1 transition-opacity duration-[1500ms] ease-out"></div>
      
      <div className="relative z-10 min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold text-black">
        <div className="leading-[1.25] space-y-50">
          {["Hotele", "Restaurante", "Automotive", "Showroom-uri", "Retail"].map(
            (service, index) => (
              <Link href={`/services/${service.toLowerCase()}`} key={index}>
                <div
                  className={`${s.skillText} cursor-pointer my-20 transition-all duration-700 ease-out ${
                    activeService === index ? "font-semibold underline md:text-6xl" : ""
                  }`}
                  style={{
                    opacity: opacityForBlock(progress, index),
                  }}
                >
                  {service}
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
