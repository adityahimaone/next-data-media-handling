import React from "react";
import IconPrice from "@/img/icon_price.svg";
import IconProfessional from "@/img/icon_professional.svg";
import IconComplete from "@/img/icon_complete.svg";
import IconClock from "@/img/icon_24hrs.svg";
import Card from "@/components/UI/Card/Card";
import Image from "next/image";

function CardWhyUs() {
  const cardList = [
    {
      icon: IconComplete,
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: IconPrice,
      title: "Harga Murah",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: IconClock,
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: IconProfessional,
      title: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];
  return (
    <>
      {cardList.map((card, index) => (
        <Card key={index}>
          <div className="flex lg:flex-col flex-row items-center space-y-4 space-x-2 lg:space-x-0 p-4">
            <div className="flex justify-start lg:w-full">
              <Image src={card.icon} alt="icon" className="w-8 h-8 mr-3" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default CardWhyUs;
