import React, { useEffect, useState } from "react";
import BannerSampah from "../assets/BannerBlog.png"; 
import Blogs from "../components/Blogs";

export default function Blog() {
  const [blogs, setBlogs] = useState([]); 
  const [error, setError] = useState(null);
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  
  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs/published");
      const data = await response.json();
  
      const formattedBlogs = data.map((blog) => ({
        id: blog.id,
        title: blog.judul, 
        description: stripHtmlTags(blog.isiBlog).split(".")[0] + ".", 
        image: `http://localhost:5000${blog.banner}`,
        link: `/blog/${blog.id}`,
      }));
  
      setBlogs(formattedBlogs);
    } catch (error) {
      setError("Error fetching blogs: " + error.message);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, []);
  
  return (
    <div>
      {error && <p>{error}</p>} {/* Display error message */}
      <Blogs blogs={blogs} banner={BannerSampah} />
    </div>
  );
}