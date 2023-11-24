import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <div className="text-white   w-[100%] h-[100vh]  pt-[170px] md:pt-[70px]">
        <div className=" mx-auto text-center flex flex-col justify-center font-black">
          <h1 className="  md:text-9xl  text-6xl font-black md:py-10 bg-gradient-to-t from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            WE BUILD
          </h1>
          <h2 className=" md:text-9xl   text-6xl bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            DIGITAL EXPERIENCE
          </h2>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 "></p>
   
            <h3 className=" text-sm md:text-md text-gray-400 md:w-[35%] pt-10 font-semibold">
              Construim conexiuni, creăm branduri, inspirăm succes.
            </h3>
          </div>
          <div>
            <button className="bg-gradient-to-t from-pink-500 via-red-500 to-orange-500 px-[90px] py-[15px] mt-20 rounded-3xl transform transition-transform hover:scale-105 shadow-md">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
