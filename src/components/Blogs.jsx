export default function Blogs({ blogs, banner }) {
  return (
    <main className="bg-[#ffff] px-6 py-24 sm:py-32 lg:px-8">
      {/* Banner */}
      {banner && (
        <div className="w-full mb-16"> 
          <img src={banner} alt="banner sampah" className="w-full object-cover" />
        </div>
      )}

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-[#FBFBFB] overflow-hidden lg flex flex-col h-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          <div className="p-6 flex flex-col justify-between items-start h-full">
            <h2 className="text-xl font-semibold mb-2 text-[#000000]">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <a
              href={`/blog/${post.id}`}
              className="text-white bg-[#55B3A4] py-2 px-4 rounded-md hover:bg-[#49a593]"
              style={{
                display: "inline-block",
                width: "auto",
              }}
            >
              Read more &rarr;
            </a>
          </div>
          </div>
          ))}
        </div>
      </div>
    </main>
  );
}