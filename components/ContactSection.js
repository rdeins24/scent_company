import React from 'react';

function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex h-screen">
        {/* <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
       
        </div> */}
      </div>
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Strada%20Studen%C8%9Bilor%209/11,%20Chi%C8%99in%C4%83u%20Moldova&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-lg font-medium">Address</h2>
          <p>Strada Studenților 9/11, Chişinău Moldova</p>
        </div> */}
      </div>
    </section>
  );
}

export default ContactSection;
