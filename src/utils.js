import { HandCoins } from "lucide-react";
import { Bike } from "lucide-react";
import { Truck } from "lucide-react";

export const Menus = [
  {
    name: "Tentang Kami",
    path: "/tentang",
  },
  {
    name: "Layanan Kami",
    subMenu: [
      {
        name: "Yuk Angkut",
        path: "/yukangkut",
        desc: "",
        icon: Truck,
      },
      {
        name: "Yuk Buang",
        path: "/yukbuang",
        desc: " ",
        icon: Bike,
      },
      {
        name: "Kuy Point",
        path: "/kuypoint",
        desc: " ",
        icon: HandCoins,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export const BlogsContent = [
  {
    judul: "Content 01",
    desc: "Sampah menumpuk dan harus di bersihkan, masyarakat di himbau untuk berpartisipasi!",
    ket: "",
    foto: "https://citarumharum.jabarprov.go.id/eusina/uploads/2021/09/3231260562.jpg",
  },
  {
    judul: "Content 02",
    desc: "sadasdasdasdasda sdaskdasldaksibd asdasiodaosibdoias asodbaoisboasiba osicbdasio",
    ket: "",
    foto: "https://aliansizerowaste.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-25-at-11.33.58-1024x797.jpeg",
  },
  {
    judul: "Content 03",
    desc: "sadcascbaoicboaisbcoias coaisbcoiasocbasoc ascboasicoibcpas",
    ket: "",
    foto: "https://dinaslh.kaltimprov.go.id/wp-content/uploads/2020/08/Untitled-1.jpg",
  },
];
