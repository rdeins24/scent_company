import Head from "next/head";

import Skills from "../components/skills";
import Works from "../components/works";

import Blog from "../components/Blog";

import Hero2 from "../components/Hero2";
import ThreeColumn from "../components/ThreeColumn";
import Testimonials from "../components/testimonials";
import Workflow from "../components/Workflow";
import FeatureSection from '../components/Main/FeatureSection'
import MySection from '../components/Main/MySection'
import HomePage  from '../components/Main/HomePage '
const Home = () => {
  return (
    <div >
      <Head>
        <title>
     
        </title>
        <meta
          name="description"
          content="Descoperă la GUTUI soluții digitale personalizate pentru afacerea ta. Oferim servicii de marketing digital, dezvoltare web și consultanță specializată pentru optimizarea prezenței online. Află cum te putem ajuta să-ți dezvolți afacerea și să te facem remarcat în mediul online."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Hero2 />
      {/* <HomePage /> */}
      <MySection/>
      
      <ThreeColumn />
      <FeatureSection/>
      <ThreeColumn />
      <Testimonials/>
      <ThreeColumn />

      {/* <Workflow/> */}

      <Skills />
      <div className="mx-auto text-center mb-10"></div>
      <ThreeColumn />
 
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
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
