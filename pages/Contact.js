import React from "react";
import ContactUsMap from "../components/ContactUsMap";
import ContactDetails from "../components/ContactDetails";
import ContactSection from "../components/ContactSection";
import Form from "../components/Form1";
import Head from "next/head";
import InfoBlock from '../components/InfoBlock'
import Discover from '../components/Templates/Discover'


const contact = () => {
  return (
    <div className="bg-[#0d0e11] ">
      <Head>
        <title>
          GUTUI - Soluții Digitale pentru Afacerea Ta | Google, Facebook, Social
          Media
        </title>
        <meta
          name="description"
          content="La GUTUI, descoperi soluții digitale personalizate pentru afacerea ta. Oferim servicii de marketing digital, dezvoltare web și consultanță specializată pentru optimizarea prezenței tale online. Află cum te putem ajuta să-ți dezvolți afacerea și să te facem remarcat în mediul online."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <Discover
       title="Creăm experiențe senzoriale unice"
       description="Suntem lideri în aromatizarea spațiilor. Ne remarcăm prin calitatea superioară a gamei noastre de arome și prin angajamentul nostru față de inovație și tehnologie. Dezvoltăm și patentăm propriile echipamente pentru a oferi experiențe senzoriale inedite și memorabile."
       buttonText="Descoperă"
       onButtonClick={() => alert('Button clicked!')}
       /> */}
       <ContactDetails />
      <InfoBlock 
  bgColor="bg-[#0d0e11]" 
  textColor="text-white" 
  buttonBgColor="bg-white" 
  buttonTextColor="text-black" 
/>
      {/* <Form /> */}
      <ContactSection />
    </div>
  );
};

export default contact;
