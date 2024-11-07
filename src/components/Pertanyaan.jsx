import Akor from "../components/Akor";
const Pertanyaan = () => {
  return (
    <>
      {/* Section 4 */}
      <div className="my-10 mx-5 text-center">
        <div className="text-center">
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Pertanyaan <span className="text-[#55B3A4] ">Umum</span>
          </h1>
          <div className="">
            <p className="text-[15px] lg:w-[100%] text-black pt-5">
              Temukan jawaban atas pertanyaan umum seputar Pilah Yuk!
            </p>
            <div className="mt-10">
              <Akor />
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
    </>
  );
};

export default Pertanyaan;
