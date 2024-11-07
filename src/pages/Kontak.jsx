export default function Kontak() {
  return (
    <>
      <main className="grid min-h-full  bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
        {/* Section 4 */}
        <div className="my-10 mx-5">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Kontak Kami
            </h1>
            <p className="text-[15px] lg:w-[100%] font-semibold text-black pt-5 text-center">
              Kami senang menerima pesan dari anda
            </p>
          </div>
          <div className="sm:col-span-2 pt-14">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Tujuan
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full bg-[#D9D9D9] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 pt-5">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-[#D9D9D9] ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 pt-5">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Nama
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-[#D9D9D9] ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 pt-5">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Pesan
            </label>
            <div className="mt-2.5">
              <textarea className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-[#D9D9D9] ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-[#55B3A4] mt-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#7ED4AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Kirim
          </button>
        </div>
        {/* Section 4 */}
      </main>
    </>
  );
}
