import React, { useEffect, useState } from "react";
import CardCar from "@/components/elements/ListCars/CardCar";
import SearchForm from "@/components/elements/SearchCars/SearchForm";
import Skeleton from "@mui/material/Skeleton";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import Layout from "@/components/layouts/User";

function SearchCar() {
  const [listCars, setListCars] = useState([]);

  const onLoadCars = () => {
    apiFetch.get("/admin/car").then((res) => {
      // console.log(res);
      setListCars(res.data);
    });
  };

  useEffect(() => {
    onLoadCars();
  }, []);
  return (
    <Layout>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <SearchForm title={true} />
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {listCars &&
          listCars.length > 0 &&
          listCars.map((item) => (
            <CardCar key={item.id} items={item} onLocation="search" />
          ))}
      </div>
    </Layout>
  );
}

export default SearchCar;
