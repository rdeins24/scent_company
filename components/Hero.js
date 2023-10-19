// "use client";

// import React, { Component } from "react";
// import { render } from "react-dom";
// import Typed from "react-typed";
// import Image from "next/image";
// // import img from "../public/Lines.svg";

// const Hero = () => {
//   return (
//     <div className="text-white ">
//       {/* <div>
//            <Image src={img} width={420} height={420}/>
//         </div> */}
//       <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
//         {/* <p className='text-[#c89356] font-bold p-2'>
//           GROWING WITH DATA ANALYTICS
//         </p> */}
//         <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
//           GROW :
//         </h1>
//         <div className="flex justify-center items-center">
//           <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>

//           <Typed
//             className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white  bg-clip-text "
//             strings={["SMM", "WEBSITE", "MARKETING", "SEO"]}
//             typeSpeed={120}
//             backSpeed={140}
//             loop
//           />
//         </div>
//         {/* <p className="md:text-2xl text-xl font-bold text-gray-500">
//           Monitor your data analytics to increase revenue for BTB, BTC, & SASS
//           platforms.
//         </p> */}
//         <button className="bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
//           Get Started
//         </button>
        
//       </div>
      
//     </div>
//   );
// };

// export default Hero;

"use client";

import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="">

    <div className="text-white bg-[url('/planet.jpg')] bg-no-repeat bg-cover  bg-center  w-[100%] h-[90vh]  pt-[170px] ">
    
      <div className="     mx-auto text-center flex flex-col justify-center ">
   
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-10 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        WE BUILD DIGITAL EXPERIENCES 
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>

          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white  bg-clip-text "
            strings={["SMM", "WEBSITE", "MARKETING", "SEO"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
  
        
      </div>
      
    </div>
        </div>
  );
};

export default Hero;
