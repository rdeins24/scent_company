import Head from "next/head";

import Skills from "../components/skills";

import Blog from "../components/Blog";

import Hero2 from "../components/Hero2";
import ThreeColumn from "../components/ThreeColumn";
import Testimonials from "../components/testimonials";
import FeatureSection from "../components/Main/FeatureSection";
import MySection from "../components/Main/MySection";
import InfoSection from "../components/InfoSection";
import logo from "../public/assets/logo/scentio.png";
import Info from "../components/Main/Info";
import Gallery from "../components/Main/Gallery";
const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Scentio Milano - Soluții de Marketing Olfactiv | Parfumuri Ambientale
          Personalizate
        </title>
        <meta
          name="description"
          content="La Scentio Milano oferim soluții de marketing olfactiv pentru a îmbunătăți experiența clienților și a crește vizibilitatea brandului tău. Descoperă cum aromele ambientale pot transforma spațiul tău comercial, showroom-urile și hotelurile. Oferim consultanță specializată și servicii de difuzare a parfumurilor personalizate pentru afacerea ta."
        />
        <meta
          name="keywords"
          content="marketing olfactiv, parfumuri ambientale, Scentio Milano, soluții olfactive, arome personalizate, difuzare parfumuri, îmbunătățirea experienței clienților, creșterea brandului, consultanță olfactivă"
        />
        {/* <link rel="icon" href="/assets/logo/scentio.png" /> */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.scentiomilano.com",
            logo: "https://www.scentiomilano.com/assets/logo/scentio.png",
          })}
        </script>
      </Head>

      <Hero2 />
      <ThreeColumn />
      <InfoSection />

      {/* <MySection /> */}
      <Gallery />
      <Skills />
      {/* <FeatureSection /> */}
      <Info />
      {/* <ThreeColumn /> */}
      <Testimonials />
      {/* <ThreeColumn /> */}

      <div className="mx-auto text-center mb-10"></div>
      {/* <ThreeColumn /> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams!!!!
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <Blog />
    </div>
  );
};

export default Home;
