import React from 'react';
import Image from 'next/image';

const BlogTemplate = ({ title, date, category, author, content, imageUrl }) => {
  return (
    <div className="max-w-3xl mx-auto py-24 sm:py-32">
      <div className="mb-8 relative w-full h-64">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="text-gray-600 mb-6">
        <time dateTime={date}>{date}</time> - <span>{category.title}</span>
      </div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogTemplate;
