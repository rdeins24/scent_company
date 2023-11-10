import React, { useState, useEffect } from "react";

function Hero({ main_description }) {
  const [rotation, setRotation] = useState(-45); // Start with a 45-degree rotation

  const changeRotation = () => {
    const scrollY = window.scrollY;
    const newRotation = -45 + scrollY / 7; // Adjust the factor as needed
    if (newRotation < 0) {
      setRotation(0);
    } else {
      setRotation(newRotation);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeRotation);
    }

    return () => window.removeEventListener("scroll", changeRotation);
  }, []);

  return (
    <div className="overflow-hidden ">
      <div>
        <div className="md:pt-[250px] pt-[150px] md:absolute md:w-[700px] z-10 md:pl-[150px] px-10">
          <h1 className="md:text-7xl text-6xl">Our Expertise.</h1>
          <p className="lg:text-xl pt-3">
            We help businesses navigate the complexities of today’s digital
            world through our professional expertise in digital marketing,
            industrial know-how, advice, and most importantly – good support –
            to help your business take off and grow to reach its best potential
            possible. Our comprehensive digital solutions are designed to help
            business directors with the best strategy to achieve a thriving
            outcome – one that is real, tangible and sustainable at its core.
          </p>
        </div>
      </div>
      <div
        style={{
          transform: `rotateZ(${rotation}deg)`, // Rotate on the Z-axis
          transition: "transform 0.7s ease", // Adjust the transition duration as needed
          width: "fit-content",
          margin: "auto",
        }}
      >
        <p
          className="md:text-[1500px] mt-[-650px] text-[700px] bg-gradient-to-tr from-gray-700 via-current to-blue-200 bg-clip-text text-transparent  md:mt-[-350px] font-mono "
          alt="scroll"
        >
          G
        </p>
      </div>
    </div>
  );
}

export default Hero;
