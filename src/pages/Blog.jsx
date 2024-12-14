import BannerSampah from "../assets/BannerBlog.png"; 
import BlogImage1 from "../assets/blog1.png"; 
import BlogImage2 from "../assets/blog2.png";
import BlogImage3 from "../assets/blog3.png";
import Blogs from "../components/Blogs"; 

export default function Blog() {

  const images = [BlogImage1, BlogImage2, BlogImage3];

  const blogs = Array.from({ length: 12 }).map((_, idx) => ({
    id: idx + 1,
    title: `Kuy Point: Cara Kumpul & Tukar Hadiah`,
    description: `Daur ulang dan dapatkan hadiah! Simak cara mudah mengumpulkan Kuy Point dan menukarkannya dengan reward menarik.`,
    image: images[idx % 3], 
    link: `/blog/${idx + 1}`,
  }));

  return (
    <Blogs blogs={blogs} banner={BannerSampah} />
  );
}
