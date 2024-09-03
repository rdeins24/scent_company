import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";

function ContactDetails() {
  return (
    <section className="text-gray-600 body-font max-w-6xl mx-auto pt-[50px] bg-[#0d0e11] ">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#d0d0d0] text-transparent">
            Contacteaza-ne
          </h1>
          <p className="leading-relaxed text-base">
            Suntem aici pentru tine. Dacă ai întrebări, sugestii sau vrei să afli mai multe despre serviciile noastre, te rugăm să nu eziti să ne contactezi. Echipa noastră este disponibilă pentru a oferi suport și răspunsuri la orice nelămuriri ai avea.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-[#d0d0d0] tracking-wider text-sm mb-3">
            CONTACTE
          </h2>
          <nav className="flex flex-wrap list-none -mb-1 gap-5">
            <ul>
              <li>
                <Link href="mailto:info@scentiomilano.com" legacyBehavior>
                  <a className="text-[#707070] font-medium text-base hover:text-blue-600 block w-full py-2">
                    Email: info@scentiomilano.com
                  </a>
                </Link>
              </li>
              <li>
                <Link href="tel:+37368434424" legacyBehavior>
                  <a className="text-[#707070] font-medium text-base hover:text-blue-600 block w-full py-2">
                    Phone: +373 68 43 44 24
                  </a>
                </Link>
              </li>
              <li className="flex space-x-4 mt-5 mb-10">
                <Link href="https://www.instagram.com/scentio_milano/" legacyBehavior>
                  <a className="text-[#707070] hover:text-blue-600">
                    <FaInstagram size={30} />
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="text-[#707070] hover:text-blue-600">
                    <FaFacebook size={30} />
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="text-[#707070]  hover:text-blue-600">
                    <FaLinkedinIn size={30} />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
