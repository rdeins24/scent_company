import React from "react";
import { FaInstagram } from "react-icons/fa";

function Cards() {
  return (
    <div className="flex justify-center ">
      <div className="flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl">
        <div className=" bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600  rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
              <ion-icon name="logo-amplify" className="text-5xl"></ion-icon>
            </div>
            <div className="text-xl font-bold mt-2">Social Media Marketing</div>
            <p className="mt-10 leading-6">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <div className="pt-10">
              <FaInstagram size={70} />
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className=" bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
              <ion-icon name="logo-amplify" className="text-5xl"></ion-icon>
            </div>
            <div className="text-xl font-bold mt-2">Social Media Marketing</div>
            <p className="mt-10 leading-6 text-white">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <div className="pt-10">
              <FaInstagram size={70} />
            </div>
          </div>
        </div>{" "}
        <div className="  bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className=" bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
              <ion-icon name="logo-amplify" className="text-5xl"></ion-icon>
            </div>
            <div className="text-xl font-bold mt-2">Social Media Marketing</div>
            <p className="mt-10 leading-6">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <div className="pt-10">
              <FaInstagram size={70} />
            </div>
          </div>
        </div>{" "}

    
      </div>
    </div>
  );
}

export default Cards;
