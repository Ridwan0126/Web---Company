import React from 'react';
import BannerImage from '../assets/YukBuang.jpg'; // Replace with your banner image path
import PhoneImage from '../assets/Home hp.jpg'; // Replace with your phone image path
import JoinMovementImage from '../assets/Poster.jpg'; // Replace with your join movement image path

export default function YukBuang() {
  return (
    <>
      <main className="grid min-h-full bg-[#ffff] px-6 py-24 sm:py-32 lg:px-8">
        {/* Section 1: Banner */}
        
          <div className="mt-10 flex justify-center">
            <img src={BannerImage} alt="Banner" className="w-[100%] sm:w-[150%] lg:w-[90%] xl:w-[70%] max-w-full" />
          </div>
       c

        {/* Section 2: App Preview and Usage Steps */}
        <div className="my-10 mx-5 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <img src={PhoneImage} alt="App Preview" className="w-[300px] lg:w-[350px]" />
          </div>
          <div className="lg:w-2/3 mt-10 lg:mt-0 lg:pl-10">
            <h2 className= "text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#55B3A4]">Cara Pakai</h2>
            <ul className="mt-4 text-left text-base sm:text-lg lg:text-xl text-gray-800 space-y-4">
              <li><span className="font-bold text-[#55B3A4]">1.</span> Pilih Jenis Sampah</li>
              <li><span className="font-bold text-[#55B3A4]">2.</span> Unggah Foto Sampah</li>
              <li><span className="font-bold text-[#55B3A4]">3.</span> Masukkan Informasi Penjemputan</li>
              <li><span className="font-bold text-[#55B3A4]">4.</span> Metode Pembayaran</li>
              <li><span className="font-bold text-[#55B3A4]">5.</span> Pengantaran dan Pembayaran</li>
            </ul>
          </div>
        </div>

       {/* Section 3: Join Our Movement */}
<div className="my-10 mx-5 text-center">
  <div className="flex justify-center">
    <img
      src={JoinMovementImage}
      alt="Join Our Movement"
      className="w-[100%] sm:w-[150%] lg:w-[90%] xl:w-[70%] max-w-full"
    />
  </div>
</div>
      </main>
    </>
  );
}
