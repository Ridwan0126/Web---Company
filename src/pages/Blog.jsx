import Blogs from "../components/Blogs";

export default function Blog() {
  return (
    <>
      <main className="grid min-h-full  bg-[#FBFBFB] px-6 py-24 sm:py-32 lg:px-8">
        {/* Section 4 */}
        <div className="my-10 mx-5 text-center">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Halaman Blog
            </h1>
          </div>
        </div>
        {/* Section 4 */}

        <Blogs />
      </main>
    </>
  );
}
