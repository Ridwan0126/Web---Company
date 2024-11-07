import Hijau from "../assets/Vector01.png";
const Layanan = () => {
  return (
    <>
      {/* Section 2 */}
      <div className="my-10 mx-5">
        <div className="">
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Layanan <span className="text-[#55B3A4] ">Pilah Yuk!</span>
          </h1>
          <div>
            <p className="text-[15px] lg:w-[40%] text-black pt-5 text-justify">
              Di Pilah Yuk! kami berkomitmen mendukung keberlanjutan lingkungan
              dengan solusi inovatif untuk pengelolaan sampah.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col pt-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify items-start shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Hijau} alt="" className="lg:w-[10%]  lg:h-[20%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Yuk{" "}
              <span className="text-[#55B3A4] hover:text-white">Angkut</span>{" "}
            </h1>
            <p className="text-[15px] text-justify text-black group-hover:text-white">
              Jadwalkan penjemputan sampah daur ulang dengan mudah. Masukkan
              lokasi dan jenis sampah, dan tim kami akan segera datang untuk
              membantu anda.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 lg:w-[100%] hover:bg-[#55b3a30e] w-full rounded-lg flex flex-col justify items-start shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4] "
          >
            <img src={Hijau} alt="" className="lg:w-[10%]  lg:h-[20%]" />
            <h1 className=" text-[30px] font-semibold font-Lobster leading-[65px] text-center text-black">
              Yuk <span className="text-[#55B3A4] ">Buang</span>
            </h1>
            <p className="text-[15px] text-justify text-black">
              Atur pengantaran sampah daur ulang ke lokasi terdekat. Pilih jenis
              sampah, dan kami akan memastikan sampah anda sampai ke tempat daur
              ulang.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 lg:w-[100%] hover:bg-[#55b3a30e] w-full rounded-lg flex flex-col justify items-start shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4] "
          >
            <img src={Hijau} alt="" className="lg:w-[10%]  lg:h-[20%]" />
            <h1 className=" text-[30px] font-semibold font-Lobster leading-[65px] text-center text-black">
              Kuy <span className="text-[#55B3A4] ">Point</span>
            </h1>
            <p className="text-[15px] text-justify text-black">
              Dapatkan point setiap kali menggunakan layanan kami dan tukarkan
              dengan hadiah menarik. Kontribusi anda untuk lingkungan juga
              memberikan manfaat bagi diri sendiri.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
    </>
  );
};

export default Layanan;
