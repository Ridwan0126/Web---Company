import Kertas from "../assets/kertas2.png";
import Plastik from "../assets/plastik2.png";
import Elektronik from "../assets/elktro.png";
import Kaca from "../assets/kaca.png";
import Aluminium from "../assets/alumunium2.png";
import Khusus from "../assets/cok.png";
const JenisSampah = () => {
  return (
    <>
      {/* Section 3 */}
      <div className="my-10 mx-5">
        <div className="">
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Jenis <span className="text-[#55B3A4] ">Sampah</span>
          </h1>
          <div>
            <p className="text-[15px] lg:w-[40%] text-black pt-5 text-justify">
              Lihat semua jenis sampah yang kami daur ulang.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col pt-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Kertas} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Kertas
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Plastik} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Plastik
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Aluminium} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Aluminium
            </h1>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Elektronik} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Elektronik
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Kaca} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Kaca
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-2 m-2 p-5 py-8 hover:bg-[#55b3a30e] lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl hover:shadow-[#55B3A4]"
          >
            <img src={Khusus} alt="" className="lg:w-[23%]  lg:h-[53%]" />
            <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black group-hover:text-white">
              Khusus
            </h1>
          </div>
        </div>
      </div>
      {/* Section 3 */}
    </>
  );
};

export default JenisSampah;
