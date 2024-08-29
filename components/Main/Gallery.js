import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../../public/assets/img/building.jpg";
import img2 from "../../public/assets/img/dif.jpg";
import img3 from "../../public/assets/slider/blur.jpg";
import img4 from "../../public/assets/slider/close.jpg";
import img5 from "../../public/assets/slider/light.jpg";
import img6 from "../../public/assets/slider/pikaso.jpg";
import img7 from "../../public/assets/slider/sunlight.jpg";
import img8 from "../../public/assets/slider/vertical.jpg";
import img9 from "../../public/assets/slider/vivid.jpg";

const CustomSlider = () => {
  const sliderRef = useRef(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const checkButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setDisablePrev(scrollLeft === 0);
      setDisableNext(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    checkButtons();
    sliderRef.current.addEventListener("scroll", checkButtons);
    return () => sliderRef.current.removeEventListener("scroll", checkButtons);
  }, []);

  return (
    <div className="bg-black md:py-40 pb-[90px]  relative">
      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-4  z-10 absolute top-[520px] right-[100px] sm:top-14">
        <button
          onClick={handlePrev}
          className={`p-3 rounded-full transition-all ${
            disablePrev
              ? "bg-gray-400"
              : "bg-black hover:bg-white hover:text-black"
          }`}
        >
          <FaArrowLeft
            className={`${
              disablePrev ? "text-gray-700" : "text-white hover:text-black"
            }`}
          />
        </button>
        <button
          onClick={handleNext}
          className={`p-3 rounded-full transition-all ${
            disableNext
              ? "bg-gray-400"
              : "bg-black hover:bg-white hover:text-black"
          }`}
        >
          <FaArrowRight
            className={`${
              disableNext ? "text-gray-700" : "text-white hover:text-black"
            }`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Static Text Block */}
        <div className="w-full md:w-[30%] text-white bg-black px-10 p-10">
          <h2 className="text-xl font-bold">Definition of an Odotype</h2>
          <p className="md:mt-4">
            An odotype is a unique scent that identifies a brand or
            establishment. We have a unique method to create the perfect
            odotype...
          </p>
        </div>

        {/* Custom Slider */}
        <div className="w-full md:w-[70%] shadow-2xl ">
          <div
            ref={sliderRef}
            className="flex space-x-2 overflow-hidden scroll-smooth touch-pan-x"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px]">
              <Image
                src={img}
                alt="Slide 1"
                className="object-cover w-full h-60 md:h-full opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center ">
                <h2 className="text-white text-sm font-semibold  m-10 md:text-left md:bottom-0 md:mb-4 ">
                1An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...      1An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div>

            <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px] ">
              <Image
                src={img3}
                alt="Slide 3"
                className="object-cover w-full h-60 md:h-full opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-sm font-semibold  m-10 md:text-left md:bottom-0 md:mb-4 ">
                  {" "}
                  2An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                  2An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div>
            <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px] ">
              <Image
                src={img4}
                alt="Slide 4"
                className="object-cover w-full h-60 md:h-full opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-sm font-semibold  m-10 md:text-left md:bottom-0 md:mb-4 ">
                  {" "}
                  3An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...   3An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div>
            {/* <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px] ">
              <Image
                src={img7}
                alt="Slide 4"
                className="object-cover w-full h-60 md:h-full md:opacity-70"
              />
              <div className="md:absolute md:inset-0 flex items-center justify-center md:p-4">
                <h2 className="text-white text-sm font-semibold mt-[-100px] m-10 md:text-left md:bottom-0 md:mb-4 ">
                  {" "}
                  PRAn odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...     An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div> */}
            <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px]  ">
              <Image
                src={img8}
                alt="Slide 4"
                className="object-cover w-full h-60 md:h-full opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-sm font-semibold  m-10 md:text-left md:bottom-0 md:mb-4 ">
                  {" "}
                  An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...     An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div>
            <div className="relative w-full md:w-[30%] shrink-0 md:h-[600px]  ">
              <Image
                src={img9}
                alt="Slide 4"
                className="object-cover w-full h-60 md:h-full opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-sm font-semibold  m-10 md:text-left md:bottom-0 md:mb-4 ">
                  {" "}
                  An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...     An odotype is a unique scent that identifies a brand or
                  establishment. We have a unique method to create the perfect
                  odotype...
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
