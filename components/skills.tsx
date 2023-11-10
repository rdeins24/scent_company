import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
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

  return (
    <div ref={refContainer} className="bg-[#0d0e11]">
      <div className=" min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold text-gray-300 ">
        <div className="leading-[1.25]">
          <div
            className={s.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
          Construim conexiuni, creăm branduri, inspirăm succes.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_'] text-gray-300`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
         Creăm povestea ta de succes digital.
          </span>
          <span
            className={`${s.skillText} inline-block text-gray-300`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
          Conectăm brandurile la inimile și mințile consumatorilor online
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
