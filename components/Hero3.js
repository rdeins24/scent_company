import React, { Component } from "react";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <div className="text-white   w-[100%] h-[100vh]  pt-[170px] md:pt-[90px]">
        <div className=" mx-auto text-center flex flex-col justify-center font-black">
          <h1 className="  md:text-8xl  text-6xl font-black md:py-10 bg-gradient-to-t from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            CONSTRUIM
          </h1>
          <h2 className=" md:text-8xl  md:mt-[-40px] text-6xl bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            EXPERIENȚE DIGITALE
          </h2>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 "></p>

            <h3 className=" text-sm md:text-md text-gray-400 md:w-[35%] pt-10 font-semibold">
              Suntem pasionați să construim și să conturăm mărci care strălucesc
              de-a lungul timpului.
            </h3>
          </div>
          <div>
            <Link href="/services">
              <button className="bg-gradient-to-t from-pink-500 via-red-500 to-orange-500 px-[90px] py-[15px] mt-20 rounded-3xl transform transition-transform hover:scale-105 shadow-md">
                Vezi Serviciile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
