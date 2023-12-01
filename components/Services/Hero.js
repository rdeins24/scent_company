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
          <h1 className="md:text-7xl text-6xl">Expertiza Noastră</h1>
          <p className="lg:text-xl pt-3">
            Ne focusăm pe ghidarea afacerilor în peisajul digital contemporan,
            aducând expertiză în marketingul digital și înțelegere profundă a
            diverselor industrii. Furnizăm consultanță adaptată și suport de
            calitate, accelerând potențialul și dezvoltarea afacerii tale.
            Abordăm strategiile digitale cu inovație, transformând viziunea ta
            într-un succes solid și durabil.
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
          className="md:text-[1500px] mt-[-580px] text-[700px] bg-gradient-to-tr from-gray-700 via-current to-blue-200 bg-clip-text text-transparent  md:mt-[-350px] font-mono mr-7"
          alt="scroll"
        >
          G
        </p>
      </div>
    </div>
  );
}

export default Hero;
