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
    panelProps={{ className: "p-4" }}
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
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Mendapatkan Reward Point?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Kerja Penjemputan Sampah di Pilah Yuk?">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="Bagaimana Cara Mengatur Jadwal Penjemputan Sampah?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
