import { useState } from 'react';
import DefaultImage from "../assets/Home.png";
import Step1Image from "../assets/Halaman 1YB.png";
import Step2Image from "../assets/Halaman 2YB.png";
import Step3Image from "../assets/Halaman 3YB.png";
import Step4Image from "../assets/Halaman 4YB.png";
import Step5Image from "../assets/Halaman 5YB.png";

const YukBuangInfo = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (step) => {
    setSelectedStep((prevStep) => (prevStep === step ? null : step));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
      <div className="lg:w-[40%] flex justify-center">
      <img
      src={(
        selectedStep === 1
          ? Step1Image
          : selectedStep === 2
          ? Step2Image
          : selectedStep === 3
          ? Step3Image
          : selectedStep === 4
          ? Step4Image
          : selectedStep === 5
          ? Step5Image
          : DefaultImage
      )}
      alt="Yuk Buang interface"
      className="w-full lg:w-3/4"
    />
      </div>

      <div className="lg:w-[60%] lg:pl-10 mt-5 lg:mt-0 text-[#55B3A4]">
        <h2 className="text-3xl font-semibold mb-4">Cara Pakai</h2>

        {/* Langkah 1 */}
        <div
          className={`cursor-pointer mb-8 p-6 rounded-lg ${
            selectedStep === 1
              ? 'bg-[#55B3A4] text-white'
              : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'
          }`}
          onClick={() => handleStepClick(1)}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${
                selectedStep === 1 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'
              }`}
            >
              <span>1</span>
            </div>
            <p className="ml-5 font-bold text-xl">Pilih Jenis Sampah</p>
          </div>
          {selectedStep === 1 && (
            <p className="mt-5">
                  1. Pilih jenis sampah yang akan di antar <br />
                  2. Tentukan perkiraan berat sampah <br />
                  3. Pilih sub jenis sampah <br />
                  4. Kemudian tekan tombol selanjutnya
                </p>
          )}
        </div>

        {/* Langkah 2 */}
        <div
          className={`cursor-pointer mb-8 p-6 rounded-lg ${
            selectedStep === 2
              ? 'bg-[#55B3A4] text-white'
              : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'
          }`}
          onClick={() => handleStepClick(2)}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${
                selectedStep === 2 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'
              }`}
            >
              <span>2</span>
            </div>
            <p className="ml-5 font-bold text-xl">Unggah Foto Sampah</p>
          </div>
          {selectedStep === 2 && (
            <p className="mt-5">
                  1. Masukkan foto sampah yang akan dijual  <br />
                  2. Unggah minimal 2 foto sampah 
            </p>
          )}
        </div>

        {/* Langkah 3 */}
        <div
          className={`cursor-pointer mb-8 p-6 rounded-lg ${
            selectedStep === 3
              ? 'bg-[#55B3A4] text-white'
              : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'
          }`}
          onClick={() => handleStepClick(3)}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${
                selectedStep === 3 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'
              }`}
            >
              <span>3</span>
            </div>
            <p className="ml-5 font-bold text-xl">Masukkan Informasi Penjemputan</p>
          </div>
          {selectedStep === 3 && (
            <p className="mt-5">
                  1. Masukkan detail alamat <br />
                  2. Pilih tanggal penjemputan sampahmu <br />
                  3. Pilih waktu penjemputan
            </p>
          )}
        </div>

        {/* Langkah 4 */}
        <div
          className={`cursor-pointer mb-8 p-6 rounded-lg ${
            selectedStep === 4
              ? 'bg-[#55B3A4] text-white'
              : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'
          }`}
          onClick={() => handleStepClick(4)}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${
                selectedStep === 4 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'
              }`}
            >
              <span>4</span>
            </div>
            <p className="ml-5 font-bold text-xl">Metode Pembayaran</p>
          </div>
          {selectedStep === 4 && (
            <p className="mt-5">
                1. Pilih metode pembayaran <br />
                2. Metode pembayaran menggunakan uang tunai atau Kuy Point <br/>
                3. Sampah satuan dan dibawah 1kg akan mendapatkan 10 points <br/>
                4. Kuy Point dapat ditukar menjadi Gopay, Ovo, ShopeePay, dsb
            </p>
          )}
        </div>

        {/* Langkah 5 */}
        <div
          className={`cursor-pointer mb-8 p-6 rounded-lg ${
            selectedStep === 5
              ? 'bg-[#55B3A4] text-white'
              : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'
          }`}
          onClick={() => handleStepClick(5)}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${
                selectedStep === 5 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'
              }`}
            >
              <span>5</span>
            </div>
            <p className="ml-5 font-bold text-xl">Pengantaran dan Pembayaran</p>
          </div>
          {selectedStep === 5 && (
            <p className="mt-5">
                  1. Lihat panduan pengantaran dan lacak progress permintaan Yuk Buang di fitur “My Order” <br/>
                  2. Terdapat tombol bantuan dan opsi untuk membatalkan di fitur "My Order" <br/>
                  3. Admin atau kolektor Pilah Yuk! akan menghubungi untuk proses Yuk Buang <br/>
                  4. Kolektor Pilah Yuk! akan menimbang dan membayar di titik Yuk Buang <br/>
                  5. Nota penjualan digital dapat dilihat di fitur “History Penjualan”
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YukBuangInfo;