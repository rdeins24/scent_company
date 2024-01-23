import Head from "next/head";

import Skills from "../components/skills";
import Works from "../components/works";

import Blog from "../components/Blog";

import HorizontalTimeline from "../components/Services/HorizontalTimeline";
import VerticalTimeline from "../components/Services/VerticalTimeline";
import BuildingBlock from "../components/BuildingBlock";
import Hero2 from "../components/Hero2";
import Hero from "../components/Hero";
import Hero3 from "../components/Hero3";
import CardMobile from "../components/CardMobile";
import CardInteractive from "../components/CardInteractive";

const Home = () => {
  return (
    <div className="bg-[#0d0e11] ">
   <Head>
    <title>GUTUI - Soluții Digitale pentru Afacerea Ta | Google, Facebook, Social Media</title>
    <meta name="description" content="Descoperă la GUTUI soluții digitale personalizate pentru afacerea ta. Oferim servicii de marketing digital, dezvoltare web și consultanță specializată pentru optimizarea prezenței online. Află cum te putem ajuta să-ți dezvolți afacerea și să te facem remarcat în mediul online." />
    {/* <link rel="icon" href="/favicon.ico" /> */}
</Head>

      {/* <Hero3 /> */}
      <Hero2/>
      <div className=" hidden md:block">
        <CardInteractive />
      </div>
      <div className="block md:hidden ">
        <CardMobile />
      </div>

      <Skills />
      <div className="mx-auto text-center mb-10"></div>
      <Works />

      <div className="md:pt-[130px] pt-[70px]">
        <BuildingBlock />
        <HorizontalTimeline />
      </div>
      <VerticalTimeline />
      <Blog />
    </div>
  );
};

export default Home;
