import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer1() {
  const contactInfo = {
    title: "Scentio Milano",
    address: "Strada Studenților 9/11, Chişinău Moldova",
    phone: "+373 68 43 44 24",
    email: "info@scentiomilano.com",
  };

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/Contact" },
  ];

  const servicesLinks = [
    { name: "Instalare", href: "/services" },
    { name: "Monitorizare", href: "/services" },
    { name: "Marketing Olfactiv", href: "/services" },
    { name: "Hotele", href: "/services" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/scentio_milano/", icon: FaInstagram, label: "Instagram" },
    { href: "#", icon: FaFacebook, label: "Facebook" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaLinkedin, label: "Linkedin" },
  ];

  return (
    <footer className="text-white bg-black mx-auto">
      <div className="flex items-center justify-center">
        <div className="m-2 flex flex-row bg-black">
          <div className="relative">
            <div className="bg-red p-3 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[200px]">
              <div className="md:ml-24 md:mt-9">
                <h1 className="text-[#d0d0d0] text-xl font-medium">
                  {contactInfo.title}
                </h1>
                <p className="text-[#707070] font-medium text-base hover:text-white">
                  {contactInfo.address}
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#707070] text-base hover:text-blue-600 block py-2"
                >
                  <strong className="text-[#d0d0d0]">Phone:</strong> {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#707070] font-medium text-base hover:text-blue-600 block py-2"
                >
                  <strong className="text-[#d0d0d0]">Email:</strong> {contactInfo.email}
                </a>
              </div>

              <div className="leading-9 md:w-2/4 md:ml-24">
                <h1 className="text-[#d0d0d0]  text-transparent text-xl font-medium">
                  Useful Links
                </h1>
                <ul className="mt-2 text-[#707070] font-medium">
                  {usefulLinks.map((link) => (
                    <li key={link.name}>
                      <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                      <Link href={link.href} className="hover:text-blue-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="leading-9 md:w-3/4">
                <h1 className="text-[#d0d0d0] text-transparent text-xl font-medium">
                  Servicii
                </h1>
                <ul className="mt-2 text-[#707070] font-medium">
                  {servicesLinks.map((service) => (
                    <li key={service.name}>
                      <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                      <Link href={service.href} className="hover:text-blue-600">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-black p-3 text-center pt-5 md:flex md:justify-between">
              <div className="text-gray-600">
                <p className="text-sm">
                  © 2023 Scentio Milano.
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} className="text-gray-500" aria-label={social.label}>
                    <social.icon size={24} className="hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
