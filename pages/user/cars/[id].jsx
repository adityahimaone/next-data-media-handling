/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BsClock, BsGear, BsCalendar, BsPerson } from "react-icons/bs";
import { convertToIDR } from "@/utils/helpers/convertCurrency.helpers";
import SearchForm from "@/components/elements/SearchCars/SearchForm";
import HeroImg from "@/img/hero.png";
import ButtonSuccess from "@/components/UI/Button/ButtonSuccess";
import Layout from "@/components/layouts/User";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  include,
  exclude,
  refund,
  excludeWithoutDriver,
  refundWithoutDriver,
} from "@/utils/constants/packetData";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import { convertDate } from "@/utils/helpers/convertDate.helpers";

function CarsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState({});

  const onLoadCar = () => {
    apiFetch
      .get(`/admin/car/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onLoadCar();
  }, []);

  const onNavigate = () => {
    router.push("/user/payment");
  };

  return (
    <Layout>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <SearchForm title={true} />
      <div className="mx-auto max-w-screen-xl py-4 ">
        <div className="flex w-full flex-col-reverse md:flex-row lg:gap-8 px-5 xl:px-0">
          <div className="w-full lg:w-8/12 rounded-sm shadow-lg p-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Tentang Paket</h2>
            </div>
            <div>
              <h3>Include</h3>
              <ul className="list-disc mx-5">
                {include.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Exclude</h3>
              <ul className="list-disc mx-5">
                {exclude.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Refund, Resechudle, Overtime</h3>
              <ul className="list-disc mx-5">
                {refund.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-4/12 srounded-sm h-fit shadow-lg p-4">
            <div className="my-4 h-56 flex justify-center items-center">
              <Zoom zoomMargin={180} overlayBgColorEnd="rgba(18, 17, 18, 0.61)">
                <img
                  src={car.image}
                  alt="car"
                  className="max-w-sm overflow-hidden w-full h-auto"
                />
              </Zoom>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{car.name}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 mb-2 my-4">
              <p className="flex items-center">
                <BsPerson className="w-5 h-5 mr-2" />4 Orang
              </p>
              <p className="flex items-center">
                <BsGear className="w-5 h-5 mr-2" />
                {car.category}
              </p>
              <p className="flex items-center">
                <BsCalendar className="w-5 h-5 mr-2" />
                {convertDate(car.createdAt)}
              </p>
            </div>
            <div className="flex items-center justify-between text-center my-7">
              <p>Total</p>
              <p className="font-bold">{convertToIDR(99999)}</p>
            </div>
            <ButtonSuccess onClick={onNavigate} className="w-full">
              Lanjutkan Pembayaran
            </ButtonSuccess>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <ButtonSuccess onClick={onNavigate}>Lanjutkan Pembayaran</ButtonSuccess>
      </div>
    </Layout>
  );
}

export default CarsDetail;
