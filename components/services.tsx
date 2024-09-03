import React, { useContext, useRef, useState, useEffect } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import Link from "next/link";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  const numOfPages = 6;

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
    progress = Math.min(numOfPages - 0.6, Math.max(0.6, percentY * numOfPages));
  }

  useEffect(() => {
    const newActiveService = Math.floor(progress);
    if (newActiveService !== activeService) {
      setActiveService(newActiveService);
    }
  }, [progress, activeService]);

  const backgroundColors = [
    "bg-gradient-to-bl from-black via-gray-200 to-orange-500",
    "bg-gradient-to-tr from-black via-blue-500 via-5% to-orange-500",
    "bg-gradient-to-r from-red-200 to-yellow-200",
    "bg-red-200",
    "bg-blue-400",
    "bg-gray-500",
    "bg-gradient-to-r from-teal-400 to-gray-800"
  ];

  return (
    <div
      ref={refContainer}
      className={`transition-colors duration-300 ${backgroundColors[activeService]}`}
    >
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold text-black">
        <div className="leading-[1.25] space-y-20">
          <Link href="/hotele">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 0 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 0),
              }}
            >
              Hotels
            </div>
          </Link>

          <Link href="/restaurante">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 1 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 1),
              }}
            >
              Restaurante
            </div>
          </Link>

          <Link href="/automotive">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 2 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 2),
              }}
            >
              Automotive
            </div>
          </Link>

          <Link href="/showroom">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 3 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 3),
              }}
            >
              Showroom
            </div>
          </Link>

          <Link href="/retail">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 4 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 4),
              }}
            >
              Retail
            </div>
          </Link>
          <Link href="/gym">
            <div
              className={`${s.skillText} cursor-pointer my-10 transition-all duration-300 ${
                activeService === 5 ? "font-bold " : ""
              }`}
              style={{
                opacity: opacityForBlock(progress, 5),
              }}
            >
           Sala Fitnes
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
