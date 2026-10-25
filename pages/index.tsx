import type { GetStaticProps } from "next";
import Seo from "../components/Seo";
import Skills from "../components/skills";
import Hero from "../components/Main/Hero";
import InfoSection from "../components/InfoSection";
import Info from "../components/Main/Info";
import Discover from "../components/Templates/Discover";
import SegmentsMarquee from "../components/home/SegmentsMarquee";
import DemoBlock from "../components/sections/DemoBlock";
import Process from "../components/sections/Process";
import BlogPreview from "../components/home/BlogPreview";
import { getHome, getPosts, getSegments } from "../lib/content";
import { site } from "../lib/site";

const Home = ({ posts, segments, home }) => {
  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title="Marketing Olfactiv Chișinău | Scentio Milano"
        description="Aromatizare profesională pentru spații comerciale în Moldova: difuzoare de parfum, compoziții create în Grasse și întreținere inclusă."
        path="/"
        imageAlt={site.defaultOgImageAlt}
      />
      <Hero />
      <SegmentsMarquee segments={segments} />
      <Discover
        title="Creăm experiențe senzoriale unice"
        description="Ca distribuitor oficial Scent Company Milano, aducem în Moldova compoziții create în laboratorul din Grasse și echipamente profesionale de difuzare. Le alegem, le instalăm și le întreținem pentru tine, ca fiecare spațiu să aibă o semnătură olfactivă inconfundabilă."
        buttonText="Consultație gratuită"
        highlights={home.highlights}
      />
      <DemoBlock />
      <Process />
      <InfoSection />
      <Skills />
      <Info />
      <BlogPreview posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    posts: getPosts(locale),
    segments: getSegments(locale).map(({ slug, navLabel }) => ({ slug, navLabel })),
    home: getHome(locale),
  },
});

export default Home;
