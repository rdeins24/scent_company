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

  const slides = [
    {
      image: img,
      text: "Transformă fiecare spațiu cu soluțiile de parfumare personalizate de la Scentio Milano – Creează medii memorabile pentru retail, hoteluri și altele.",
    },
    {
      image: img3,
      text: "Îmbunătățește experiența oaspeților cu aromele unice Scentio Milano – Ideal pentru hoteluri, birouri și spații publice",
    },
    {
      image: img4,
      text: "Implica-ți clienții prin puterea mirosului – Îmbogățește spațiile comerciale și corporative cu parfumuri personalizate",
    },
    {
      image: img8,
      text: "Soluții de parfumare pentru fiecare afacere – De la showroom-uri auto până la centre de wellness.",
    },
    {
      image: img9,
      text: "Parfumuri de lux pentru orice spațiu – Îmbogățește-ți mediul cu branding olfactiv expert de la Scentio Milano",
    },
  ];

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
          <h2 className="text-xl font-bold">
            Descoperă Puterea Marketingului Olfactiv
          </h2>
          <p className="md:mt-4">
            Scentio Milano oferă soluții personalizate de aromatizare pentru
            diverse industrii, transformând fiecare spațiu într-o experiență
            senzorială unică. Creează amintiri plăcute și îmbunătățește
            percepția brandului tău prin puterea parfumurilor italiene de înaltă
            calitate.
          </p>
        </motion.div>

        {/* Custom Slider */}
        <div className="w-full md:w-[70%] shadow-2xl">
          <div
            ref={sliderRef}
            className="flex space-x-2 overflow-hidden scroll-smooth touch-pan-x"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {slides.map((slide, index) => (
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
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-60 md:h-full opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold m-10 md:text-left md:bottom-0 md:mb-4">
                    {slide.text}
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
              disablePrev
                ? "text-gray-700"
                : "text-white group-hover:text-black"
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
              disableNext
                ? "text-gray-700"
                : "text-white group-hover:text-black"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
