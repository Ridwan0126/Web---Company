import BannerSampah from "../assets/Banner02.png"; 
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
    link: "#", 
  }));

  return (
    <main className="bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
      {/* Banner */}
      <div className="w-full mb-16"> 
        <img src={BannerSampah} alt="banner sampah" className="w-full object-cover" />
      </div>

      {/* Blog Posts */}
      <Blogs blogs={blogs} />
    </main>
  );
}
