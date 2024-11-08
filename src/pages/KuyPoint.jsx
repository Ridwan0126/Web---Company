import KuyPointInfo from "../components/KuyPointInfo";
import BannerKuyPoint from "../assets/BannerKuyPoint.png"; // image for the KuyPoint banner
import JoinMovement from "../assets/JoinMovementBanner.png"; // image for the bottom banner

export default function KuyPoint() {
  return (
    <>
<main className="grid min-h-full bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
  {/* KuyPoint Banner */}
  <div className="place-items-center">
    <img src={BannerKuyPoint} alt="KuyPoint Banner" />
  </div>
  
  {/* Adjusted spacing for KuyPointInfo */}
  <div className="my-5 mb-24 mx-5 mt-14"> {/* Increase the top margin here */}
    <KuyPointInfo />
  </div>

  {/* Bottom banner: Join Movement */}
  <div className="place-items-center mt-10">
    <img src={JoinMovement} alt="Join Movement Banner" />
  </div>
</main>

    </>
  );
}