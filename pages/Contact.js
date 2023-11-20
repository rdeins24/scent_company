import React from "react";
import ContactUsMap from "../components/ContactUsMap";
import ContactDetails from "../components/ContactDetails";
import Contact from '../components/contactus'
import ContactSection from "../components/ContactSection";
import Form from '../components/Form1'

const contact = () => {
  return (
    <div className="bg-[#0d0e11] ">
      <ContactDetails />
      {/* <ContactUsMap /> */}
      {/* <Contact/> */}
      <Form/>
      <ContactSection/>
    </div>
  );
};

export default contact;
