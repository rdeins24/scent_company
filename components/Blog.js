import Link from 'next/link';
import blogs from '../data/blogData';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="py-24 sm:py-32 bg-[#eef0f5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blogul nostru</h2>
          <p className="mt-2 text-lg leading-8">Descoperă secretele pentru extinderea afacerii tale cu îndrumările specializate ale experților noștri.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <Link href={`/blog/${post.id}`} passHref>
                <div className="group relative w-full cursor-pointer">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">{post.date}</time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.category}</span>
                  </div>
                  <div className="relative mt-4 w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <Image src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{post.title}</h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">{post.author}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
