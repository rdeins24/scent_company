// pages/blog/[id].js

import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogPost = ({ post }) => {
  if (!post) {
    // Handle the case when the post is not found
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1 className="text-red">{post.title}</h1>
      <p>{post.description}</p>
      <h3>hello</h3>
      <Link href="/blog">Back to all posts</Link>
    </div>
  );
};

export default BlogPost;

export async function getServerSideProps(context) {
  const { params } = context;
  const postId = params.id;

  // Replace this with your actual data fetching logic
  // For example, fetching data from an API using postId
  // const response = await fetch(`http://localhost:3000/blog/${postId}`);
  const post = await response.json();

  // If the post is not found, handle it appropriately
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
