import React from "react";

function ContactDetails() {
  return (
    <section className="text-gray-600 body-font max-w-6xl mx-auto">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent ">
            Contacteaza-ne
          </h1>
          <p className="leading-relaxed text-base">
            Suntem aici pentru tine. Dacă ai întrebări, sugestii sau vrei să
            afli mai multe despre serviciile noastre, te rugăm să nu eziti să ne
            contactezi. Echipa noastră este disponibilă pentru a oferi suport și
            răspunsuri la orice nelămuriri ai avea.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12  ">
          <h2 className="title-font font-semibold text-gray-400 tracking-wider text-sm mb-3">
            CONTACTE
          </h2>
          <nav className="flex flex-wrap list-none -mb-1 gap-5">
            <li className=" ">
              <a
                href="mailto:info@gmail.com"
                class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer block w-full py-2"
              >
                Email: info@gmail.com
              </a>
            </li>
            <li className="">
              <a
                href="tel:+37368434424"
                class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer block w-full py-2"
              >
                Phone: +373 68 43 44 24
              </a>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
