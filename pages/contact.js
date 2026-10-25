import React from "react";
import Seo from "../components/Seo";
import ContactDetails from "../components/ContactDetails";
import ContactSection from "../components/ContactSection";
import DemoBlock from "../components/sections/DemoBlock";
import ContactForm from "../components/ContactForm";
import { breadcrumbSchema } from "../lib/schema";

const Contact = () => {
  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title="Contact – Consultație Gratuită | Scentio Milano"
        description="Programează o consultație gratuită de marketing olfactiv în Chișinău: str. Mihai Eminescu 72, of. 207. Tel. +373 68 818 239, luni–vineri 09–18."
        path="/contact"
        jsonLd={[breadcrumbSchema([{ name: "Acasă", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />
      <ContactDetails />
      <ContactForm />
      <DemoBlock />
      <ContactSection />
    </div>
  );
};

export default Contact;
