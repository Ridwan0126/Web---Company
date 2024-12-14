import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const formatTanggal = (tanggalISO) => {
    const date = new Date(tanggalISO);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs/published");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();

        const foundBlog = data.find((post) => post.id === parseInt(id));

        if (!foundBlog) {
          setError("Blog not found.");
        } else {
          setBlog(foundBlog);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  if (!blog) {
    return <p>Blog tidak ditemukan.</p>; 
  }

  return (
    <div className="bg-[#FBFBFB] px-8 py-24 sm:py-64 lg:px-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/blog" className="text-[#000000] font-semibold hover:underline">
          <span className="text-lg">&lt;</span> Back
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">{blog.judul}</h1>
        <p className="text-gray-600 text-lg mb-4">
          {formatTanggal(blog.tanggalPublikasi)}
        </p>
        <p className="text-gray-600 text-lg mb-8">Ditulis oleh: {blog.penulis}</p>
      </div>

      {/* Content */}
      <div className="mb-12">
        <img
          src={`http://localhost:5000${blog.banner}`}
          alt={blog.judul}
          className="w-full mb-6 rounded-lg shadow-lg"
        />
      </div>

      {/* Render blog content with HTML formatting */}
      <div
        className="text-gray-700 leading-7"
        dangerouslySetInnerHTML={{ __html: blog.isiBlog }}
        style={{
          paddingLeft: "20px",
          textAlign: "justify",
        }}
      />
    </div>
  );
}