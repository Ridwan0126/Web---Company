import Logo from "../assets/2.png";

const Footer = () => {
  return (
    <div className="w-fulL bg-white text-gray-300 py-y px-2">
      <div className="my-5 mb-24 mx-5">
        <div className="w-full flex lg:flex-row flex-col pt-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="lg:w-[100%] w-full rounded-lg flex flex-col justify-center items-center "
          >
            <img
              src={Logo}
              alt=""
              className="lg:w-[60%] cursor-pointer  lg:h-[100%]"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className=" lg:w-[100%] w-full rounded-lg flex flex-col "
          >
            <h1 className=" text-[20px] font-semibold font-Lobster leading-[65px] text-left text-black group-hover:text-white">
              Pilah Yuk!
            </h1>
            <div className="text-black">
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Tentang kami
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Layanan
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">Blog</p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">FAQ</p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className=" lg:w-[100%] w-full rounded-lg flex flex-col "
          >
            <h1 className=" text-[20px] font-semibold font-Lobster leading-[65px] text-left text-black group-hover:text-white">
              Resources
            </h1>
            <div className="text-black">
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">Blog</p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Help Center
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Webinars & Events
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Case Studies
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className=" lg:w-[100%] w-full rounded-lg flex flex-col "
          >
            <h1 className=" text-[20px] font-semibold font-Lobster leading-[65px] text-left text-black group-hover:text-white">
              Informasi
            </h1>
            <div className="text-black">
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Kontak kami
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Bantuan
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Syarat dan Ketentuan
              </p>
              <p className="mt-2 cursor-pointer hover:text-[#55B3A4]">
                Community Forum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t-2 border-gray-500 flex justify-between max-w-[1240px] mx-auto text-center text-black">
        <div>
          <p className="">@2024 Agrovasi Teams - All rights reserved.</p>
        </div>
        <div className="flex justify-end sm:w-[300px]">
          <p className="px-2 cursor-pointer">Term of use</p>
          <p className="px-2 cursor-pointer">Privacy policy</p>
          <p className="px-2 cursor-pointer">Security</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
