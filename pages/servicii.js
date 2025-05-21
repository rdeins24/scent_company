import React from "react";
// import OurServices from "../components/Services/Services";
import Hero from "../components/Services/Hero";

import Head from "next/head";
import Services from "../components/services";
import SensoryArchitecture from "../components/SensoryArchitecture";



const servicii = () => {
  return (
    <div className="bg-[#0d0e11] ">
<Head>
  <title>Servicii de Marketing Digital, Dezvoltare Web | GUTUI</title>
  <meta name="description" content="Descoperă serviciile de marketing digital și dezvoltare web oferite de GUTUI pentru a-ți transforma afacerea. Cu expertiza noastră în domeniu, oferim soluții personalizate, incluzând marketing digital, design UX/UI, dezvoltare web și grafică. Află cum îți putem optimiza prezența online și cum te putem ajuta să-ți crești afacerea." />
  <link rel="icon" href="/favicon.ico" />
</Head>

      <SensoryArchitecture/>
{/* <Services/> */}
      {/* <Hero /> */}
      {/* <BuildingBlock />
      <HorizontalTimeline />
      <VerticalTimeline />
      <Block />
      <div className="pb-[50px]">
      
      <ServicesCards/>
      </div> */}
      {/* <Card /> */}
      {/* <OurServices/> */}
    </div>
  );
};

export default servicii;

