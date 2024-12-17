import { useState } from 'react';
import DefaultImage from "../assets/DefaultPhone.png"; 
import PhoneKuyPoint from "../assets/PhoneKuyPoint.png"; 
import AltImage from "../assets/PhoneKuyPoint2.png";

const KuyPointInfo = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (step) => {
    setSelectedStep(prevStep => (prevStep === step ? null : step));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-[40%] flex justify-center">
        <img 
          src={selectedStep === 1 
                ? PhoneKuyPoint  
                : selectedStep === 2 
                ? AltImage 
                : DefaultImage} 
          alt="KuyPoint interface" 
          className="w-full lg:w-3/4" 
        />
      </div>

      <div className="lg:w-[60%] lg:pl-10 mt-5 lg:mt-0 text-[#55B3A4]">
        <h2 className="text-3xl font-semibold mb-4">Cara Pakai</h2>

        {/* Tutorial 1 */}
        <div 
          className={`cursor-pointer mb-8 p-6 rounded-lg ${selectedStep === 1 ? 'bg-[#55B3A4] text-white' : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'}`} 
          onClick={() => handleStepClick(1)}
        >
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${selectedStep === 1 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'}`}>
              <span>1</span>
            </div>
            <p className="ml-5 font-bold text-xl">Redeem Kuy Point</p>
          </div>
          {selectedStep === 1 && (
            <p className="mt-5">
              1. Kamu dapat menukarkan Kuy Point dengan beragam produk dan layanan, seperti saldo Gopay, OVO, ShopeePay
            </p>
          )}
        </div>

        {/* Tutorial 2 */}
        <div 
          className={`cursor-pointer mb-8 p-6 rounded-lg ${selectedStep === 2 ? 'bg-[#55B3A4] text-white' : 'bg-[#FBFBFB] overflow-hidden border-[#55B3A4] text-black'}`} 
          onClick={() => handleStepClick(2)}
        >
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] rounded-full ${selectedStep === 2 ? 'bg-white text-[#55B3A4]' : 'bg-[#55B3A4] text-white'}`}>
              <span>2</span>
            </div>
            <p className="ml-5 font-bold text-xl">Tukar Point</p>
          </div>
          {selectedStep === 2 && (
            <p className="mt-5">
              1. Kamu juga bisa mentransfer point ke teman-teman yang menggunakan Pilah Yuk! secara gratis dan langsung.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KuyPointInfo;