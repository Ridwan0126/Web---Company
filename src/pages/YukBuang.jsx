import YukBuangInfo from "../components/YukAngkutInfo";
import PosterTop from "../assets/YukBuang.jpg"; // Gambar poster atas
import PosterBottom from "../assets/Poster.jpg"; // Gambar poster bawah

export default function KuyPoint() {
  return (
    <>
    <main className="bg-[#ffff] px-6 py-24 sm:py-32 lg:px-8">
      {/* Banner */}
      <div className="w-full mb-8">
        <img src={PosterTop} alt="banner sampah" className="w-full object-cover" />
      </div>
        
        <div className="my-5 mb-24 mx-5 mt-14">
          <YukBuangInfo />
        </div>

        <div className="place-items-center mt-10">
          <img src={PosterBottom} alt="Join Movement Banner" />
        </div>
      </main>
    </>
  );
}