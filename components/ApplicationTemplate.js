// components/ApplicationTemplate.js
import React from "react";
import Image from "next/image";

const ApplicationTemplate = ({ application }) => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src={application.heroImage}
          alt={application.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-4xl font-bold my-4">{application.name}</h1>
        <p className="text-lg mb-8">{application.description}</p>
        {application.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} my-8`}
          >
            <div className="relative w-full md:w-1/2 h-64">
              <Image
                src={section.image}
                alt={section.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
         
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
              <p>{section.text}</p>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTemplate;
