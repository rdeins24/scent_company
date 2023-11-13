"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 bg-black ">
      <h1 className="w-full text-3xl font-bold  "><Link href='/'>GUT UI.</Link></h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link href="/">Home</Link>{" "}
        </li>
        <li className="p-4">
          <Link href="/services">Servicii</Link>{" "}
        </li>

        <li className="p-4">
          <Link href="/contact">Contact</Link>{" "}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[black] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 ">GUT UI.</h1>

        <ul className=" uppercase p4">
          <li className="p-4 border-b border-gray-600">Home </li>
          <li className="p-4 border-b border-gray-600">Company </li>
          <li className="p-4 border-b border-gray-600">Resources </li>
          <li className="p-4 border-b border-gray-600">About </li>
          <li className="p-4 border-b border-gray-600">Contact </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-md transition-all duration-500 ${nav ? 'sticky top-0' : ''}`}>
//       <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-24">
//         <h1 className="text-3xl font-bold">GUT UI.</h1>
//         <ul className="hidden md:flex space-x-4">
//           <li className="p-4">Home</li>
//           <li className="p-4">Company</li>
//           <li className="p-4">Resources</li>
//           <li className="p-4">About</li>
//           <li className="p-4">Contact</li>
//         </ul>
//         <div onClick={handleNav} className="block md:hidden">
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>
//       </div>

//       <div className={`fixed left-0 top-0 h-full bg-black transition-all duration-500 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="max-w-screen-xl mx-auto m-4">
//           <h1 className="text-3xl font-bold">GUT UI.</h1>
//           <ul className="uppercase space-y-4">
//             <li className="border-b border-gray-600">Home</li>
//             <li className="border-b border-gray-600">Company</li>
//             <li className="border-b border-gray-600">Resources</li>
//             <li className="border-b border-gray-600">About</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
