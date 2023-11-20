import React, { useState, useCallback } from "react";
import Image from "next/image";
import Button from "./Button";

const ContactUs: React.FC = () => {
  return (
    <div className=" text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10"></div>
        <h2 className="text-4xl font-bold">Scrie-ne</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[900px] " action="https://formsubmit.co/rdenis24@yahoo.com " method="POST" name="email">
          <input
            type="text"
            name="companyName"
            id="companyName"
            maxLength={128}
            required
            placeholder="Company name"
            className="bg-[#0f0d25] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            maxLength={128}
            required
            placeholder="Your E-mail"
            className="bg-[#0f0d25] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            maxLength={128} // Adjust maxLength as needed
            required
            placeholder="Your Phone Number"
            className="bg-[#0f0d25] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            id="message"
            name="message"
            maxLength={1048576}
            required
            placeholder="Additional information"
            className="bg-[#0f0d25] text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10 mb-10">
            <Button content="Trimite" href="#" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
