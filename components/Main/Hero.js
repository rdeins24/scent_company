import Image from "next/image";
import React from "react";
import img from "../../public/interior.jpg";
import img1 from "../../public/assets/main/interior1.jpg";
import img2 from "../../public/assets/main/interior2.jpg";
import img3 from "../../public/assets/main/interior3.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {/* Left Text Block */}
      <div className="md:w-1/2 bg-[#EAE0D5] flex flex-col justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">
          Transformă Experiența Senzorială cu Scentio Milano
        </h1>
        <p className="mb-8">
          Explorează arta marketingului olfactiv și creează o atmosferă unică în
          spațiul tău. Cu expertiza noastră în arhitectura senzorială, aducem
          arome care evocă emoții și îmbunătățesc experiența clienților. Lasă-te
          ghidat de specialiștii noștri pentru a transforma fiecare colț într-o
          experiență memorabilă.
        </p>
      </div>

      {/* Right Image Block */}
      <div className="md:w-1/2 w-full h-full md:h-full relative">
        <Image
          src={img3}
          alt="Hotel Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
