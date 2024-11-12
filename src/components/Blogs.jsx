export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "First Blog Post",
      description: "This is the description of the first blog post.",
      image: "https://via.placeholder.com/150", 
    },
    {
      id: 2,
      title: "Second Blog Post",
      description: "This is the description of the second blog post.",
      image: "https://via.placeholder.com/150", 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow-md rounded-md p-4">
          <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
          <p className="mt-2 text-gray-600">{blog.description}</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read More</a>
        </div>
      ))}
    </div>
  );
}