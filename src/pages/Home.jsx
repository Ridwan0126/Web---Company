import BannerSampah from "../assets/Banner.png";
import JenisSampah from "../components/JenisSampah";
import Layanan from "../components/Layanan";
import Pertanyaan from "../components/Pertanyaan";
import VisiMisi from "../components/VisiMisi";

const Home = () => {
  return (
    <>
      <main className="grid min-h-full  bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
        <div className="place-items-center">
          <img src={BannerSampah} alt="banner sampah" />
        </div>
        <VisiMisi />
        <Layanan />
        <JenisSampah />
        <Pertanyaan />
      </main>
    </>
  );
};

export default Home;
