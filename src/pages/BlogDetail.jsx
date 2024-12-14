import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogImage1 from "../assets/blog1.png"; 
import BlogImage2 from "../assets/blog2.png";
import BlogImage3 from "../assets/blog3.png";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); 

  const banners = [BlogImage1, BlogImage2, BlogImage3]; // Array gambar dari assets

  const dummyBlogs = Array.from({ length: 12 }).map((_, idx) => ({
    id: idx + 1,
    judul: `Kuy Point: Cara Kumpul & Tukar Hadiah`,
    tanggalPublikasi: `2024-12-${10 + idx}`, 
    penulis: `Penulis ${idx + 1}`,
    isiBlog: `<p>Daur ulang dan dapatkan hadiah! Simak cara mudah mengumpulkan Kuy Point dan menukarkannya dengan reward menarik.</p>`,
    banner: banners[idx % banners.length], // Rotasi gambar berdasarkan indeks
  }));

  useEffect(() => {
    const foundBlog = dummyBlogs.find((blog) => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <p>Blog tidak ditemukan.</p>
    );
  }

  const formatTanggal = (tanggalISO) => {
    const date = new Date(tanggalISO);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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
        <p className="text-gray-600 text-lg mb-4">{formatTanggal(blog.tanggalPublikasi)}</p>
        <p className="text-gray-600 text-lg mb-8">Ditulis oleh: {blog.penulis}</p>
      </div>

      {/* Content */}
      <div className="mb-12">
        <img
          src={blog.banner}
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