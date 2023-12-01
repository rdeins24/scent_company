import React from 'react';

function ContactDetails() {
  return (
    <section className="text-gray-600 body-font max-w-6xl mx-auto">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent ">
           Contacteaza-ne
          </h1>
          <p className="leading-relaxed text-base">
          Suntem aici pentru tine. Dacă ai întrebări, sugestii sau vrei să afli mai multe despre serviciile noastre, te rugăm să nu eziti să ne contactezi. Echipa noastră este disponibilă pentru a oferi suport și răspunsuri la orice nelămuriri ai avea.
          </p>

        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-gray-400 tracking-wider text-sm mb-3">
            CONTACTE
          </h2>
          <nav className="flex flex-wrap list-none -mb-1">
          
            <li className="lg:w-1/3 mb-1 w-1/2">
            <a
                  href="mailto:info@gmail.com"
                  className="text-blue-600 hover:text-white cursor-pointer"
                >
                  <strong className="tracking-wide text-blue-600 font-normal">
                    Email:
                  </strong>{" "}
                  info@gmail.com
                </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
            <a href="tel:+37358434424" className="text-blue-600 hover:text-white">Mob +37358434424</a>

            </li>
      
 
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
