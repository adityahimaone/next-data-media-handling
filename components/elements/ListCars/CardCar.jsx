import React from "react";
import CarImg from "@/img/hero.png";
import Image from "next/image";
import Link from "next/link";
import ButtonSuccess from "@/components/UI/Button/ButtonSuccess";
import ButtonDangerOutline from "@/components/UI/Button/ButtonDangerOutline";
import Card from "@/components/UI/Card/Card";
import { BiPlus, BiKey } from "react-icons/bi";

function CardCar() {
  return (
    <Card>
      <div>
        <div className="flex flex-wrap justify-center my-4 p-4">
          <Image
            src={CarImg}
            alt="car"
            className="overflow-hidden w-full h-auto"
          />
        </div>
        <div className="space-y-1 mt-11">
          <h3>Cars</h3>
          <h2 className="text-xl lg:text-lg font-semibold">430</h2>
        </div>
        <div className="flex flex-col space-y-3 mb-2">
          <p className="flex items-center">
            <BiKey className="w-5 h-5 mr-2" />
            Start Rent
          </p>
          <p className="flex items-center">
            <BiKey className="w-5 h-5 mr-2" />
            Updated
          </p>
        </div>
        <div className="flex space-x-3">
          <ButtonDangerOutline className="w-full flex justify-center items-center">
            <BiPlus />
            Delete
          </ButtonDangerOutline>
          <ButtonSuccess className="w-full flex justify-center items-center">
            <BiPlus />
            Edit
          </ButtonSuccess>
        </div>
      </div>
    </Card>
  );
}

export default CardCar;
