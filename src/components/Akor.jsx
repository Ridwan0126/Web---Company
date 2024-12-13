import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ChevronDown } from "lucide-react";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <ChevronDown
          className={`lg:w-[3%]  lg:h-[5%] ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
        />
      </>
    )}
    className="mt-5 shadow-xl rounded-2xl"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex text-lg font-semibold w-full p-4 text-left rounded-2xl justify hover:bg-[#55B3A4] hover:text-white ${
          isEnter && "bg-[#55B3A4] text-white"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{  className: "p-4 bg-[#55B3A4] text-white rounded-2xl" }}
  />
);

export default function Akor() {
  return (
    <div className="mx-2 my-4 text-black text-justify">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200}>
        <div className="  rounded-2xl">
          <AccordionItem header="Apa Itu Pilah Yuk?" initialEntered>
            <p className="">
              Pilah Yuk adalah platform yang memfasilitasi pengelolaan daur
              ulang limbah dan sampah. Kami menyediakan layanan penjemputan dan
              pengantaran sampah daur ulang, serta menawarkan sistem reward
              point sebagai penghargaan bagi pengguna yang berpartisipasi dalam
              program daur ulang kami.
            </p>
          </AccordionItem>
        </div>

        <AccordionItem header="Apakah Pilah Yuk Menerima Semua Jenis Sampah?">
        Tentu saja! PilahYuk dirancang untuk mempermudah masyarakat dalam mengelola berbagai jenis sampah daur ulang. 
        Kami menerima berbagai jenis material seperti kertas, plastik, kaca, aluminium, hingga logam lainnya. 
        Setiap jenis sampah ini akan dipilah dan dikelola dengan baik untuk memastikan dapat diolah 
        kembali menjadi produk yang bermanfaat, mengurangi limbah yang berakhir di tempat pembuangan akhir,
         serta membantu menjaga kelestarian lingkungan. Dengan PilahYuk, Anda bisa berkontribusi langsung dalam upaya 
         daur ulang sambil mendapatkan manfaat tambahan melalui Kuy Point. Jadi, mulai sekarang, jangan ragu untuk 
         memilah dan mengelola sampah Anda bersama PilahYuk!
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Mendapatkan Reward Point?">
        Mendapatkan reward point di PilahYuk sangat mudah! Setiap kali Anda menggunakan fitur seperti Yuk Angkut
        untuk penjemputan sampah dari rumah atau Yuk Buang untuk mengantar sampah ke pusat pengumpulan terdekat,
        Anda akan otomatis mendapatkan Kuy Point sebagai apresiasi atas aksi daur ulang Anda.
        Kuy Point ini terus terakumulasi dan dapat ditukar dengan berbagai hadiah menarik yang tersedia di platform PilahYuk. 
        Dengan cara ini, tidak hanya Anda berkontribusi dalam menjaga lingkungan, tetapi juga mendapatkan manfaat tambahan yang membuat 
        pengalaman daur ulang menjadi lebih seru dan menyenangkan!
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Kerja Penjemputan Sampah di Pilah Yuk?">
        Penjemputan sampah melalui PilahYuk sangat praktis dan mudah! Anda hanya perlu menggunakan fitur Yuk Angkut di aplikasi PilahYuk. Setelah itu, 
        sistem kami akan mencocokkan lokasi Anda dengan pengumpul sampah terdekat. Pengumpul akan datang langsung ke rumah Anda untuk mengambil sampah yang telah Anda pilah.
        Dengan cara ini, Anda tidak perlu repot mengantar sampah sendiri, dan proses daur ulang menjadi lebih efisien.
        Selain itu, setiap aksi penjemputan juga akan memberikan Kuy Point sebagai apresiasi atas kontribusi Anda dalam menjaga lingkungan.
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Mengatur Jadwal Penjemputan Sampah?">
        Mengatur jadwal penjemputan sampah di PilahYuk sangat mudah! Cukup gunakan fitur Yuk Angkut dan pilih waktu yang paling sesuai untuk Anda.
        Setelah jadwal dikonfirmasi, pengumpul sampah terdekat akan segera dijadwalkan untuk datang ke lokasi Anda.
        Anda juga dapat memantau lokasi pengumpul secara real-time melalui aplikasi untuk mengetahui posisi mereka dan estimasi waktu kedatangan. 
        Dengan cara ini, Anda hanya perlu menunggu di rumah dengan tenang, tanpa repot. Praktis, efisien, dan ramah lingkungan!
        </AccordionItem>
      </Accordion>
    </div>
  );
}
