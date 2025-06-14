import Head from "next/head";
import Skills from "../components/skills";
import Blog from "../components/Blog";
import Hero2 from "../components/Hero2";
import Hero from "../components/Main/Hero";
import ThreeColumn from "../components/ThreeColumn";
import Testimonials from "../components/testimonials";
import FeatureSection from "../components/Main/FeatureSection";
import MySection from "../components/Main/MySection";
import InfoSection from "../components/InfoSection";
import logo from "../public/assets/logo/scentio.png";
import Info from "../components/Main/Info";
import Gallery from "../components/Main/Gallery";
import Link from "next/link";
import applications from "../data/applicationsData";
// import services from "../data/servicesData";
import Works from "../components/works";
import InfoBlock from "../components/InfoBlock";
import AnimatedComponent from "../components/AnimatedComponent";
import Services from "../components/services";
import Discover from "../components/Templates/Discover";
import SensoryArchitecture from "../components/SensoryArchitecture";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>
          Scentio Milano | Soluții Marketing Olfactiv | Aroma Marketing
          Parfumuri Ambientale Personalizate
        </title>
        <meta
          name="description"
          content="La Scentio Milano oferim soluții de marketing olfactiv,aroma marketing pentru a îmbunătăți experiența clienților și a crește vizibilitatea brandului tău. Descoperă cum aromele ambientale pot transforma spațiul tău comercial, showroom-urile și hotelurile. Oferim consultanță specializată și servicii de difuzare a parfumurilor personalizate pentru afacerea ta."
        />
        <meta
          name="keywords"
          content="marketing olfactiv, parfumuri ambientale, aroma marketing Scentio Milano, soluții olfactive, arome personalizate, difuzare parfumuri, îmbunătățirea experienței clienților, creșterea brandului, consultanță olfactivă"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.scentiomilano.com",
            logo: "https://www.scentiomilano.com/assets/logo/scentio.png",
          })}
        </script>
      </Head>
      <Hero />{" "}
      <Discover
        title="Creăm experiențe senzoriale unice"
        description="Suntem lideri în aromatizarea spațiilor. Ne remarcăm prin calitatea superioară a gamei noastre de arome și prin angajamentul nostru față de inovație și tehnologie. Dezvoltăm și patentăm propriile echipamente pentru a oferi experiențe senzoriale inedite și memorabile."
        buttonText="Descoperă"
        onButtonClick={() => alert("Button clicked!")}
      />
      <InfoBlock />
      <SensoryArchitecture />

      {/* <Services /> */}
      {/* <AnimatedComponent/> */}
      {/* <ThreeColumn /> */}
      <div className="container"></div>
      {/* <Gallery /> */}
      <InfoSection />
      {/* <InfoBlock  bgColor="bg-white"/> */}

   
      <div className="container"></div>
      <Skills />
      {/* <Works/> */}
      <div className="bg-gray-50"></div>
      {/* <InfoBlock /> */}
      {/* <Testimonials /> */}
      <Info />
      <Blog />
    </div>
  );
};

export default Home;
