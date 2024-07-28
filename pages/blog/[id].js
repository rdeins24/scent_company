import { useRouter } from 'next/router';
import blogs from '../../data/blogData';
import BlogTemplate from '../../components/BlogTemplate';

const BlogPost = ({ blog }) => {
  const router = useRouter();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <BlogTemplate 
      title={blog.title} 
      date={blog.date} 
      category={blog.category} 
      author={blog.author} 
      content={blog.content} 
      imageUrl={blog.imageUrl} 
    />
  );
};

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((blog) => blog.id === params.id);

  return { props: { blog } };
}

export default BlogPost;
