import Mascot from "../assets/logo-pilahyuk 1.png";
import Visi from "../assets/Icon.png";
import Misi from "../assets/Vector.png";
const VisiMisi = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="my-10 mx-5">
        <div className="">
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            <span className="text-[#55B3A4] ">Sampah Terkelola,</span> Bumi
            Terpelihara.
          </h1>
          <div>
            <p className="text-[15px] lg:w-[40%] text-black pt-5 text-justify">
              Pilah Yuk! Hadir untuk memudahkan masyarakat dalam mengelola{" "}
              sampah daur ulang dan menignkatkan kesadaran lingkungan.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col">
          <div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="mt-2 p-5 rounded-lg lg:w-[100%] w-full flex flex-col justify items-start hover:shadow-2xl "
            >
              <img src={Visi} alt="" className="lg:w-[10%]  lg:h-[10%]" />
              <h1 className=" text-[35px] font-semibold font-Lobster leading-[65px] text-center text-black">
                <span className="text-[#55B3A4] ">Visi</span> Kami
              </h1>
              <p className="text-[15px] text-justify text-black">
                Menjadi platform terdepan dalam mendukung daur ulang dan
                pengelolaan limbah yang berkelanjutan untuk menciptakan
                lingkungan yang bersih dan hijau.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="mt-2 p-5 rounded-lg lg:w-[100%] w-full flex flex-col justify items-start hover:shadow-2xl "
            >
              <img src={Misi} alt="" className="lg:w-[10%]  lg:h-[10%]" />
              <h1 className=" text-[30px] font-semibold font-Lobster leading-[65px] text-center text-black">
                <span className="text-[#55B3A4] ">Misi</span> Kami
              </h1>
              <p className="text-[15px] text-justify text-black">
                Membantu memudahkan masyarakat dalam mengolah limbah sampah,
                sekaligus mendorong kesadaran akan pentingnya daur ulang.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="lg:w-[100%] m-10 w-full bg-tertiary lg:p-12 p-8 flex flex-col justify-center items-end gap-10 lg:h-[400px] h-fit"
          >
            <img
              src={Mascot}
              alt=""
              className="lg:w-[500px] w-full lg:h-[500px]"
            />
          </div>
        </div>
      </div>
      {/* Section 1 */}
    </>
  );
};

export default VisiMisi;
