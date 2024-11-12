// Blogs.jsx
import BannerSampah from "../assets/Banner02.png"; // Import the banner image

export default function Blogs() {
  const blogs = Array.from({ length: 12 }).map((_, idx) => ({
    id: idx + 1,
    title: `Blog Post ${idx + 1}`,
    description: `This is the description of blog post ${idx + 1}.`,
    image: "https://via.placeholder.com/150", 
    link: "#", 
  }));

  return (
    <main className="bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
      {/* Banner */}
      <div className="w-full mb-8">
        <img src={BannerSampah} alt="banner sampah" className="w-full object-cover" />
      </div>

      {/* Blogs Post*/}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-[#FBFBFB] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#000000]">{post.title}</h2>
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
    </main>
  );
}