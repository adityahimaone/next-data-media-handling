import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import HeroImg from "@/img/hero.png";
import Layout from "@/components/layouts/User";
import ButtonSecondary from "@/components/UI/Button/ButtonSecondary";
import Container from "@/components/UI/Container/ContainerDefault";
import ServiceGirl from "@/img/service_girl.png";
import ChecklistImg from "@/img/ceklist.svg";
import CardWhyUs from "@/components/elements/LandingPage/CardWhyUs";
import Carousel from "@/components/elements/LandingPage/Carousel";
import ButtonSuccess from "@/components/UI/Button/ButtonSuccess";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BiChevronDown } from "react-icons/bi";
import AccordionFAQ from "@/components/elements/LandingPage/AccordionFAQ";

export default function Home() {
  const serviceList = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  return (
    <Layout>
      <section className="relative">
        <div className="bg-bluewhite relative">
          <div className="container mx-auto px-10 py-8 relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-6 z-10">
                <h1 className="text-2xl md:text-4xl font-bold lg:w-[568px] leading-relaxed">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="text-md md:text-lg lg:w-[500px]">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <ButtonSecondary>Mulai Sewa Mobil</ButtonSecondary>
              </div>
              <div className="flex-1 z-10 ">
                <Image src={HeroImg} alt="hero" />
              </div>
            </div>
            <div className="absolute w-[474px] sm:w-[624px] md:w-[724px] lg:w-[410px] xl:w-[654px] 2xl:w-[754px] sm:h-[243px] h-[150px] bottom-0 right-0 rounded-tl-[60px] bg-primaryDarkBlue-400"></div>
          </div>
          <div className="absolute xl:w-[504px] w-[104px] lg:w-[274px] md:w-[324px] sm:h-[243px] h-[150px] bottom-0 right-0 bg-primaryDarkBlue-400"></div>
        </div>
      </section>
      <Container>
        <section>
          <div className="flex flex-col xl:flex-row justify-around m-16">
            <div className="w-full xl:w-1/2">
              <div className="flex justify-center relative">
                <div className="absolute top-1 left-0 w-[133px] h-[133px] bg-green-500 rounded-full" />
                <div className="absolute top-14 right-36 w-[25px] h-[25px] bg-red-500 rounded-full" />
                <div className="absolute bottom-4 left-28 w-[48px] h-[48px] bg-yellow-500 rounded-full" />
                <Image
                  src={ServiceGirl}
                  alt="service"
                  width={374}
                  height={428}
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex items-center">
              <div className="space-y-4 flex flex-col ">
                <h2 className="text-2xl font-semibold">
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul className="space-y-2">
                  {serviceList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Image src={ChecklistImg} alt="checklist" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4 m-6">
          <h2 className="text-2xl font-semibold">Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <CardWhyUs />
          </div>
        </section>
      </Container>
      <section className="m-20">
        <div className="text-center space-y-5s">
          <h1 className="text-2xl font-bold">Testimonial</h1>
          <p>Berbagai review positif dari para pelanggan kami</p>
          <Carousel />
        </div>
      </section>
      <Container>
        <section className="p-16 space-y-5 bg-primaryDarkBlue-400 text-white rounded-lg text-center">
          <h1 className="text-3xl font-semibold">
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ButtonSuccess>Mulai Sewa Mobil</ButtonSuccess>
        </section>
        <section className="my-12">
          <div className="flex w-full">
            <div className="w-5/12">
              <h1 className="font-semibold text-2xl">
                Frequently Asked Question
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="w-7/12">
              <AccordionFAQ />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
