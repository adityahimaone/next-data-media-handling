/* eslint-disable @next/next/no-img-element */
import React from "react";
import CarImg from "@/img/hero.png";
import Image from "next/image";
import Link from "next/link";
import ButtonSuccess from "@/components/UI/Button/ButtonSuccess";
import ButtonDangerOutline from "@/components/UI/Button/ButtonDangerOutline";
import Card from "@/components/UI/Card/Card";
import { BiPlus, BiKey } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { convertToIDR } from "@/utils/helpers/convertCurrency.helpers";
import { convertDate } from "@/utils/helpers/convertDate.helpers";

function CardCar({ items, onLocation }) {
  const {
    id,
    name,
    category,
    price,
    status,
    start_rent_at,
    finish_rent_at,
    image,
    createdAt,
    updatedAt,
  } = items;

  const imageNotFound =
    "https://maxler.com/local/templates/maxler/assets/img/not-found.png";

  return (
    <Card>
      <div>
        <div className="flex flex-wrap justify-center my-4 p-4">
          {image !== null ? (
            <img
              src={
                image !== null || image !== undefined ? image : imageNotFound
              }
              alt="car"
              className="overflow-hidden h-[200px] w-auto"
            />
          ) : (
            <img
              src={imageNotFound}
              alt="car"
              className="overflow-hidden h-[200px] w-auto"
              layout="fill"
            />
          )}
        </div>
        <div className="space-y-1 mt-11">
          <h3>{name}</h3>
          <h2 className="text-xl lg:text-lg font-semibold">
            {price ? convertToIDR(price) : 0} / Hari
          </h2>
        </div>
        <div className="flex flex-col space-y-3 mb-2">
          <p className="flex items-center">
            <BiKey className="w-5 h-5 mr-2" />
            {start_rent_at !== null ? start_rent_at : "Not set"} {" - "}
            {finish_rent_at !== null ? start_rent_at : "Not set"}
          </p>
          <p className="flex items-center">
            <BsClock className="w-5 h-5 mr-2" />
            Updated At {updatedAt !== null ? convertDate(updatedAt) : "Not set"}
          </p>
        </div>
        <div className="flex space-x-3">
          {onLocation === "admin" ? (
            <>
              <ButtonDangerOutline className="w-full flex justify-center items-center">
                <BiPlus />
                Delete
              </ButtonDangerOutline>
              <ButtonSuccess className="w-full flex justify-center items-center">
                <BiPlus />
                Edit
              </ButtonSuccess>
            </>
          ) : (
            <ButtonSuccess className="w-full">Pilih Mobil</ButtonSuccess>
          )}
        </div>
      </div>
    </Card>
  );
}

export default CardCar;
