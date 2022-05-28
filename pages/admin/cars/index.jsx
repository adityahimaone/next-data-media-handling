import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Admin";
import Breadcumb from "@/components/UI/Breadcumb/Breadcumb";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import { BiPlus } from "react-icons/bi";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import CardCar from "@/components/elements/ListCars/CardCar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getCarsSuccess, getCarsError } from "@/store/cars/carsSlice";
import SkeletonLoader from "@/components/UI/Skeleton/Skeleton";

function Listcars() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const filterButton = ["All", "Small", "Medium", "Large"];

  const onLoadCars = () => {
    dispatch(getCars());
    apiFetch
      .get("/admin/car")
      .then((res) => {
        dispatch(getCarsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCarsError());
      });
  };

  useEffect(() => {
    onLoadCars();
  }, []);

  const addNewCardHandler = () => {
    router.push("/admin/cars/add");
  };

  const skeletonValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {cars.loading && (
          <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
            {skeletonValue.map((item, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        )}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {cars?.data &&
            cars?.data.length > 0 &&
            cars?.data.map((item) => (
              <CardCar key={item.id} items={item} onLocation="admin" />
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default Listcars;
