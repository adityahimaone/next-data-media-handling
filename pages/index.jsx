import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import HeroImg from "@/img/hero.png";
import Layout from "@/components/layouts/User";
import ButtonSecondary from "@/components/UI/Button/ButtonSecondary";

export default function Home() {
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
    </Layout>
  );
}
