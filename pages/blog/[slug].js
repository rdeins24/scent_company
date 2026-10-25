import Seo from "../../components/Seo";
import BlogTemplate from "../../components/BlogTemplate";
import { getPosts, getPost } from "../../lib/content";
import { articleSchema, breadcrumbSchema } from "../../lib/schema";

const BlogPost = ({ post }) => {
  const path = `/blog/${post.slug}`;

  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title={post.seoTitle}
        description={post.description}
        path={path}
        image={post.ogImage}
        imageAlt={post.imageAlt}
        type="article"
        jsonLd={[
          articleSchema({
            title: post.title,
            description: post.description,
            path,
            image: post.ogImage,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <BlogTemplate post={post} />
    </div>
  );
};

export async function getStaticPaths({ locales = ["ro"] }) {
  const paths = locales.flatMap((locale) =>
    getPosts(locale).map((post) => ({ params: { slug: post.slug }, locale }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const post = getPost(params.slug, locale);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default BlogPost;
