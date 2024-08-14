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
import Link from "next/link";
import applications from "../data/applicationsData";
import services from "../data/servicesData";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Scentio Milano | Soluții Marketing Olfactiv | Aroma Marketing Parfumuri Ambientale
          Personalizate
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

      <Hero2 />
      <ThreeColumn />
      <InfoSection />

      {/* <div className="container mx-auto py-12 px-4 space-y-12">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`} legacyBehavior>
            <a className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
              <h2 className="text-xl font-bold">{service.name}</h2>
              <p>{service.description}</p>
            </a>
          </Link>
        ))}
      </div> */}

      {/* <div className="container mx-auto py-12 px-4 space-y-12">
        {applications.map((application) => (
          <Link key={application.id} href={`/applications/${application.id}`} legacyBehavior>
            <a className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
              <h2 className="text-xl font-bold">{application.name}</h2>
              <p>{application.description}</p>
            </a>
          </Link>
        ))}
      </div> */}

      <div className="container">
        <Gallery />
        <Skills />
      </div>
      <div className="bg-gray-50">
        <Info />
      </div>
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
