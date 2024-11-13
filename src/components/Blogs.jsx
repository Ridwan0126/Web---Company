import React from 'react';

export default function Blogs({ blogs }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <div key={post.id} className="bg-[#FBFBFB] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#000000]">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="text-white bg-[#55B3A4] py-2 px-4 rounded-md inline-block"
              >
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}