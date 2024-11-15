import KuyPointInfo from "../components/KuyPointInfo";
import BannerKuyPoint from "../assets/BannerKuyPoint.png"; 
import JoinMovement from "../assets/JoinMovementBanner.png";

export default function KuyPoint() {
  return (
    <>
    <main className="bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
      {/* Banner */}
      <div className="w-full mb-8">
        <img src={BannerKuyPoint} alt="banner sampah" className="w-full object-cover" />
      </div>
        
        <div className="my-5 mb-24 mx-5 mt-14">
          <KuyPointInfo />
        </div>

        <div className="place-items-center mt-10">
          <img src={JoinMovement} alt="Join Movement Banner" />
        </div>
      </main>
    </>
  );
}