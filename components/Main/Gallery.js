import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../public/assets/img/building.jpg";
import img3 from "../../public/assets/slider/blur.jpg";
import img4 from "../../public/assets/slider/close.jpg";
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
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkButtons);
    }
  
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkButtons);
      }
    };
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black md:py-40 pb-[90px] relative">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Static Text Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideVariants}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%]  bg-black px-10 p-10"
        >
          <h2 className="text-xl font-bold">Definition of an Odotype</h2>
          <p className="md:mt-4">
            An odotype is a unique scent that identifies a brand or
            establishment. We have a unique method to create the perfect
            odotype...
          </p>
        </motion.div>

        {/* Custom Slider */}
        <div className="w-full md:w-[70%] shadow-2xl">
          <div
            ref={sliderRef}
            className="flex space-x-2 overflow-hidden scroll-smooth touch-pan-x"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {[img, img3, img4, img8, img9].map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[30%] shrink-0 md:h-[600px]"
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-60 md:h-full opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold m-10 md:text-left md:bottom-0 md:mb-4">
                    {index + 1}An odotype is a unique scent that identifies a brand or
                    establishment. We have a unique method to create the perfect
                    odotype...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 md:mt-0 space-x-4 z-10 md:absolute md:top-[50px] md:right-[150px]">
        <button
          onClick={handlePrev}
          className={`p-3 rounded-full transition-all ${
            disablePrev
              ? "bg-gray-400"
              : "bg-black hover:bg-white hover:text-black group"
          }`}
        >
          <FaArrowLeft
            className={`${
              disablePrev ? "text-gray-700" : "text-white group-hover:text-black"
            }`}
          />
        </button>
        <button
          onClick={handleNext}
          className={`p-3 rounded-full transition-all ${
            disableNext
              ? "bg-gray-400"
              : "bg-black hover:bg-white hover:text-black group"
          }`}
        >
          <FaArrowRight
            className={`${
              disableNext ? "text-gray-700" : "text-white group-hover:text-black"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
