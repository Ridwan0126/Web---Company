import PhoneKuyPoint from "../assets/PhoneKuyPoint.png";

const KuyPointInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-[40%] flex justify-center">
        <img src={PhoneKuyPoint} alt="Phone with KuyPoint interface" className="w-3/4" />
      </div>

      <div className="lg:w-[60%] lg:pl-10 mt-10 lg:mt-0 text-black">
        <h2 className="text-3xl font-semibold mb-4">Cara Pakai</h2>
        <p className="text-lg mb-2">1. Redeem MS Point</p>
        <p className="text-lg mb-4">
          Tukarkan poin Anda dengan saldo DANA atau hadiah menarik lainnya melalui aplikasi Pilah Yuk!
        </p>
        <p className="text-lg mb-2">2. Tukar Point</p>
        <p className="text-lg">
          Kamu juga bisa mentransfer point ke teman-teman yang menggunakan Pilah Yuk! secara gratis dan langsung.
        </p>
      </div>
    </div>
  );
};

export default KuyPointInfo;