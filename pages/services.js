import React from "react";
import OurServices from "../components/Services/Services";
import Hero from "../components/Services/Hero";
import Block from "../components/Services/Block";
import HorizontalTimeline from "../components/Services/HorizontalTimeline";
import VerticalTimeline from "../components/Services/VerticalTimeline";
import Card from "../components/Cards";
import BuildingBlock from "../components/BuildingBlock";
import ServicesCards from '../components/Services/ServicesCards'
import Head from "next/head";

const Services = () => {
  return (
    <div className="bg-[#0d0e11] ">
<Head>
  <title>Servicii de Marketing Digital, Dezvoltare Web | GUTUI</title>
  <meta name="description" content="Descoperă serviciile de marketing digital și dezvoltare web oferite de GUTUI pentru a-ți transforma afacerea. Cu expertiza noastră în domeniu, oferim soluții personalizate, incluzând marketing digital, design UX/UI, dezvoltare web și grafică. Află cum îți putem optimiza prezența online și cum te putem ajuta să-ți crești afacerea." />
  <link rel="icon" href="/favicon.ico" />
</Head>


      <Hero />
      <BuildingBlock />
      <HorizontalTimeline />
      <VerticalTimeline />
      <Block />
      <div className="pb-[50px]">

      <ServicesCards/>
      </div>
      {/* <Card /> */}
      {/* <OurServices/> */}
    </div>
  );
};

export default Services;
