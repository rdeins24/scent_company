import Seo from "../../components/Seo";
import PageHero from "../../components/sections/PageHero";
import Blog from "../../components/Blog";
import { getPosts } from "../../lib/content";
import { breadcrumbSchema } from "../../lib/schema";

export default function BlogIndex({ posts }) {
  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title="Blog Marketing Olfactiv | Scentio Milano"
        description="Ghiduri și idei despre marketing olfactiv și aromatizarea spațiilor comerciale: hoteluri, restaurante, retail, clinici și fitness."
        path="/blog"
        jsonLd={[breadcrumbSchema([{ name: "Acasă", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <PageHero
        eyebrow="Blog"
        title="Blog despre marketing olfactiv"
        description="Idei și ghiduri practice pentru a transforma parfumul într-o parte a identității afacerii tale."
      />
      <Blog posts={posts} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { posts: getPosts(locale) } };
}
