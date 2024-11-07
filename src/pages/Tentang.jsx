import VisiMisi from "../components/VisiMisi";
import Layanan from "../components/Layanan";
import BannerSampah from "../assets/Banner02.png";
import Logo from "../assets/reuse.png";

export default function Tentang() {
  return (
    <>
      <main className="grid min-h-full  bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
        <div className="place-items-center">
          <img src={BannerSampah} alt="banner sampah" />
        </div>
        <div className="my-5 mb-24 mx-5">
          <div className="w-full flex lg:flex-row flex-col pt-5">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="lg:w-[35%] w-full rounded-lg flex flex-col justify-center items-center "
            >
              <img
                src={Logo}
                alt=""
                className="lg:w-[100%] pt-14 cursor-pointer lg:h-[100%]"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" lg:w-[70%] w-full justify-center rounded-lg flex flex-col "
            >
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                <span className="text-[#55B3A4] ">
                  Mari Daur Ulang Sampah Kalian
                </span>
              </h1>
              <div>
                <p className="text-[15px] lg:w-[90%] text-black pt-5 text-justify">
                  Setiap tahun, puluhan juta ton sampah dihasilkan, namun
                  tingkat daur ulang di Indonesia masih di bawah 10%. Sebagian
                  besar sampah ini berakhir di TPA, dibuang ilegal, atau
                  mencemari laut. Indonesia memiliki lebih dari 3 juta pengepul
                  dan pemulung dengan jaringan yang terus berkembang meski masih
                  tradisional. Mereka adalah elemen penting dalam rantai daur
                  ulang, tetapi dukungan terhadap peran mereka masih minim. Jika
                  mereka begitu vital, mengapa tidak kita optimalkan?
                </p>
              </div>
            </div>
          </div>
        </div>
        <VisiMisi />
        <Layanan />
      </main>
    </>
  );
}
