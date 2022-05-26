import React, { useEffect } from "react";
import Layout from "@/components/layouts/Admin";
import Breadcumb from "@/components/UI/Breadcumb/Breadcumb";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import { BiPlus, BiKey } from "react-icons/bi";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import CarImg from "@/img/hero.png";
import Image from "next/image";
import Link from "next/link";
import ButtonSuccess from "@/components/UI/Button/ButtonSuccess";
import ButtonDangerOutline from "@/components/UI/Button/ButtonDangerOutline";
import CardCar from "@/components/elements/ListCars/CardCar";
import { useRouter } from "next/router";

function Listcars() {
  const router = useRouter();

  const filterButton = ["All", "Small", "Medium", "Large"];

  const onLoadCars = () => {
    apiFetch.get("/admin/cars").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    onLoadCars();
  }, []);

  const addNewCardHandler = () => {
    router.push("/admin/cars/listcars/addcar");
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-4">
        <div>
          <Breadcumb />
          <h1 className="heading-dashboard-h1">List Car</h1>
          <div className="flex">
            {filterButton.map((item, index) => (
              <ButtonPrimaryOutline
                key={index}
                className="mr-2"
                onClick={() => console.log(item)}
              >
                {item}
              </ButtonPrimaryOutline>
            ))}
          </div>
        </div>
        <div>
          <ButtonPrimary
            className="flex items-center"
            onClick={addNewCardHandler}
          >
            <BiPlus />
            Add New Car
          </ButtonPrimary>
        </div>
      </div>
      <div className="my-4">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
        </div>
      </div>
    </Layout>
  );
}

export default Listcars;
