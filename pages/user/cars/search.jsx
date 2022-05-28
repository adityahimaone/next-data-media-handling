import React, { useEffect } from "react";
import CardCar from "@/components/elements/ListCars/CardCar";
import SearchForm from "@/components/elements/SearchCars/SearchForm";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import Layout from "@/components/layouts/User";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getCarsSuccess, getCarsError } from "@/store/cars/carsSlice";
import SkeletonLoader from "@/components/UI/Skeleton/Skeleton";

function SearchCar() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

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

  const skeletonValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <SearchForm title={true} />
      {cars.loading && (
        <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
          {skeletonValue.map((item, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      )}
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cars?.data &&
          cars?.data.length > 0 &&
          cars?.data.map((item) => (
            <CardCar key={item.id} items={item} onLocation="search" />
          ))}
      </div>
    </Layout>
  );
}

export default SearchCar;
